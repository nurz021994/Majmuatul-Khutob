import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3000;

// Middleware to parse JSON body
app.use(express.json());

// Initialize Gemini SDK with telemetry header
const getGeminiClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.warn("⚠️ GEMINI_API_KEY is not defined. The app will use high-quality local fallback templates.");
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });
};

// API Endpoint to generate Friday Sermon dynamically on demand
app.post("/api/generate-khutbah", async (req, res) => {
  const { title, category, subTitle, outlines } = req.body;

  if (!title || !outlines || !Array.isArray(outlines)) {
    return res.status(400).json({ error: "Judul dan outline khutbah harus disertakan." });
  }

  const ai = getGeminiClient();

  if (!ai) {
    return res.json({ 
      isFallback: true, 
      message: "Menggunakan fallback lokal karena kunci API tidak ditemukan. Konfigurasikan API Key Anda di panel Secrets untuk mengaktifkan kecerdasan buatan penuh."
    });
  }

  try {
    const prompt = `Buatkan naskah Khutbah Jum'at lengkap dan utuh yang sangat menyentuh hati (tasnim/relevan), berbobot ilmiah, berdasarkan judul dan outline berikut:
Judul: "${title}"
Kategori: "${category}"
Deskripsi Singkat: "${subTitle}"
Outline Pembahasan:
${outlines.map((o, i) => `${i + 1}. ${o}`).join("\n")}

Naskah khutbah HARUS memiliki struktur lengkap Friday Sermon tradisional Islam:

1. KHUTBAH PERTAMA:
   - Mukaddimah pembuka dalam tulisan Arab yang fasih dan lengkap (mengandung Hamdalah, Syahadatain, Shalawat nabi, dan Wasiat Taqwa/Ittaqullah). Tulis teks Arabnya dengan jelas!
   - Pembahasan detail yang mendalam untuk setiap poin outline dalam bahasa Indonesia yang elegan, hikmat, dan santun. GAYA PENYAMPAIAN HARUS MENGALIR DAN NATURAL: Hindari menyebutkan judul khutbah secara eksplisit (seperti "Tema khutbah hari ini adalah...") atau menggunakan transisi kaku (seperti "Poin pertama...", "Poin kedua...", "Selanjutnya..."). Setiap gagasan harus saling bertransisi secara halus, mengalir alami, penuh emosi keagamaan, dan langsung menyentuh relung jiwa jamaah seakan diucapkan langsung dari lisan seorang khatib kharismatik yang fasih.
   - Untuk setiap poin pembahasan, perkaya naskah dengan mencantumkan kutipan ayat Al-Qur'an yang sangat relevan (tulis teks Arab berharakat dengan jelas beserta terjemahan Indonesianya), kutipan hadits-hadits shahih pilihan dari kitab-kitab perawi muktabar (seperti Bukhari, Muslim, Abu Dawud, dll), serta maqolah (perkataan bijak, nasihat emas, atau kutipan hikmah) dari para ulama klasik dan kontemporer terkemuka (seperti Imam Al-Ghazali, Hasan al-Basri, Sufyan ats-Tsauri, Imam Syafi'i, Ibnu Qayyim, dll). Pastikan kutipan dalil-dalil dan perkataan ulama ini terjalin secara halus dan memperkuat muatan spiritual isi khutbah secara mendalam.
   - Penutup khutbah pertama dalam bahasa Arab (standard).

2. KHUTBAH KEDUA:
   - Mukaddimah singkat pembuka khutbah kedua dalam bahasa Arab (Hamdalah, Shalawat, Wasiat Taqwa).
   - Nasihat singkat penutup dalam bahasa Indonesia.
   - Doa penutup khutbah kedua yang lengkap dan indah dalam bahasa Arab (Doa ampunan kaum mukminin/mukminat, keselamatan, kelapangan hati, kedamaian umat). Tulis teks Arabnya!

Sajikan teks Arab di dalam tag html khusus agar mudah dibaca dan didesain secara visual, misalnya membungkus teks Arab dengan <span class="arabic-text">...</span> atau mengelompokkannya secara estetik. Gunakan spasi paragraf yang lega agar nyaman dibaca oleh khatib di atas mimbar.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        systemInstruction: "Anda adalah seorang ulama kharismatik, pakar sastra Arab, dan ahli retorika dakwah Islam yang menyusun khutbah Jum'at yang indah, moderat (wasathiyah), menyentuh perasaan, kokoh aqidahnya, dan membangkitkan cinta kepada Allah dan Rasul-Nya serta tanggung jawab sosial kemasyarakatan.",
        temperature: 0.7,
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error("Generasi teks dari Gemini mengembalikan hasil kosong.");
    }

    res.json({ text, isFallback: false });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ 
      error: "Gagal menghasilkan khutbah menggunakan AI. Silakan coba lagi atau gunakan mode sinkronisasi offline.",
      details: error.message 
    });
  }
});

// Configure Vite or serve static assets
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Starting server in DEVELOPMENT mode with Vite Middleware...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Starting server in PRODUCTION mode...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
