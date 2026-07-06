import React, { useState, useEffect, useRef } from "react";
import { 
  FileText, Play, RotateCcw, ZoomIn, ZoomOut, Eye, Sun, Moon, 
  Download, Printer, AlertCircle, Check, BookOpen, Clock, Type 
} from "lucide-react";
import { SermonMetadata } from "../data/sermons";
import { generateOfflineSermon, LANGUAGES, translateTitle, MUKADDIMAH_VARIATIONS } from "../utils/sermonGenerator";
import NotesEditor from "./NotesEditor";

interface SermonReaderProps {
  sermon: SermonMetadata;
  globalTheme: 'light' | 'dark';
}

export default function SermonReader({ sermon, globalTheme }: SermonReaderProps) {
  const [activeTab, setActiveTab] = useState<'summary' | 'full'>('summary');
  const [selectedLang, setSelectedLang] = useState<string>('id');
  const [selectedVariation, setSelectedVariation] = useState<string>('standar');

  // Teleprompter States
  const [teleprompterOpen, setTeleprompterOpen] = useState<boolean>(false);
  const [tpIsPlaying, setTpIsPlaying] = useState<boolean>(false);
  const [tpSpeed, setTpSpeed] = useState<number>(3); // 1 to 10
  const [tpFontSize, setTpFontSize] = useState<number>(36); // in px
  const [tpTheme, setTpTheme] = useState<'dark' | 'light'>('dark');

  // Reader sizing & Font choice
  const [readerFontSize, setReaderFontSize] = useState<'sm' | 'md' | 'lg' | 'xl'>('md');
  const [readerFont, setReaderFont] = useState<'serif' | 'sans' | 'arabic' | 'mono'>('serif');

  // Refs
  const teleprompterScrollRef = useRef<HTMLDivElement | null>(null);
  const scrollAnimRef = useRef<number | null>(null);

  // Keyboard event listeners for teleprompter convenience
  useEffect(() => {
    if (!teleprompterOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Spacebar toggles Play/Pause
      if (e.code === "Space") {
        e.preventDefault();
        setTpIsPlaying(prev => !prev);
      }
      // Escape closes teleprompter
      else if (e.code === "Escape") {
        e.preventDefault();
        setTeleprompterOpen(false);
        setTpIsPlaying(false);
      }
      // ArrowUp increases speed
      else if (e.code === "ArrowUp") {
        e.preventDefault();
        setTpSpeed(prev => Math.min(10, prev + 1));
      }
      // ArrowDown decreases speed
      else if (e.code === "ArrowDown") {
        e.preventDefault();
        setTpSpeed(prev => Math.max(1, prev - 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [teleprompterOpen]);

  // Auto scroll logic for Teleprompter
  useEffect(() => {
    if (teleprompterOpen && tpIsPlaying) {
      const scrollPane = teleprompterScrollRef.current;
      if (!scrollPane) return;

      let lastTime = performance.now();
      let accumulatedScroll = scrollPane.scrollTop;
      
      const scrollStep = (timestamp: number) => {
        if (!tpIsPlaying) return;
        
        const delta = timestamp - lastTime;
        lastTime = timestamp;
        
        // Sync accumulator if user scrolled manually (safer threshold to prevent subpixel layout rounding conflicts)
        const currentScroll = scrollPane.scrollTop;
        if (Math.abs(currentScroll - accumulatedScroll) > 12) {
          accumulatedScroll = currentScroll;
        }
        
        // Improved Speed formula: pixel scroll per second
        // Speed 1 = ~25px/s (smooth visible scroll), Speed 10 = ~250px/s
        const pxPerMs = (tpSpeed * 25) / 1000;
        
        accumulatedScroll += pxPerMs * delta;
        scrollPane.scrollTop = Math.round(accumulatedScroll);
        
        // Stop if reached the end
        if (scrollPane.scrollTop + scrollPane.clientHeight >= scrollPane.scrollHeight - 5) {
          setTpIsPlaying(false);
        } else {
          scrollAnimRef.current = requestAnimationFrame(scrollStep);
        }
      };

      scrollAnimRef.current = requestAnimationFrame(scrollStep);
    }

    return () => {
      if (scrollAnimRef.current) {
        cancelAnimationFrame(scrollAnimRef.current);
      }
    };
  }, [teleprompterOpen, tpIsPlaying, tpSpeed]);

  // Compute full text on render
  const fullText = generateOfflineSermon(sermon, selectedLang, selectedVariation);

  const getFontSizeClass = () => {
    switch (readerFontSize) {
      case 'sm': return 'text-sm md:text-base leading-relaxed md:leading-relaxed';
      case 'lg': return 'text-lg md:text-xl leading-relaxed md:leading-loose';
      case 'xl': return 'text-xl md:text-2xl leading-loose md:leading-[2.2]';
      case 'md':
      default:
        return 'text-base md:text-lg leading-relaxed md:leading-loose';
    }
  };

  const getFontSizeValues = () => {
    switch (readerFontSize) {
      case 'sm':
        return {
          baseMobile: '14px',
          baseDesktop: '16px',
          lineHeight: '1.625',
          arabicMobile: '20px',
          arabicDesktop: '22px'
        };
      case 'lg':
        return {
          baseMobile: '19px',
          baseDesktop: '21px',
          lineHeight: '2.0',
          arabicMobile: '28px',
          arabicDesktop: '32px'
        };
      case 'xl':
        return {
          baseMobile: '24px',
          baseDesktop: '27px',
          lineHeight: '2.2',
          arabicMobile: '36px',
          arabicDesktop: '40px'
        };
      case 'md':
      default:
        return {
          baseMobile: '16px',
          baseDesktop: '18px',
          lineHeight: '1.8',
          arabicMobile: '24px',
          arabicDesktop: '26px'
        };
    }
  };

  const getFontFamilyValue = () => {
    switch (readerFont) {
      case 'sans': return 'var(--font-sans), sans-serif';
      case 'arabic': return 'var(--font-arabic), "Traditional Arabic", serif';
      case 'mono': return 'var(--font-mono), monospace';
      case 'serif':
      default:
        return 'var(--font-serif), Georgia, serif';
    }
  };

  const fontSizes = getFontSizeValues();
  const fontFamilyValue = getFontFamilyValue();

  // Export to Microsoft Word (.doc format)
  const handleDownloadWord = () => {
    // Generate clean document content
    const documentContent = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head>
        <title>${translateTitle(sermon.title, selectedLang)}</title>
        <style>
          body { font-family: 'Times New Roman', serif; line-height: 1.6; padding: 20px; }
          .arabic { font-family: 'Traditional Arabic', serif; font-size: 20pt; text-align: right; direction: rtl; line-height: 2; margin: 15px 0; }
          .rukun-badge { font-family: Arial, sans-serif; font-size: 9pt; color: #b7791f; font-weight: bold; }
          h2 { font-size: 18pt; text-align: center; color: #064E3B; margin-bottom: 5px; }
          h3 { font-size: 14pt; color: #064E3B; border-bottom: 1px solid #ddd; padding-bottom: 3px; margin-top: 30px; }
          p { margin: 10px 0; }
          .outline { background-color: #f7fafc; padding: 10px; border-left: 3px solid #319795; margin: 10px 0; }
        </style>
      </head>
      <body>
        ${fullText}
      </body>
      </html>
    `;

    const blob = new Blob(['\ufeff' + documentContent], {
      type: 'application/msword'
    });
    
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Khutbah - ${translateTitle(sermon.title, selectedLang)}.doc`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Standard Print View / PDF Export Trigger
  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    printWindow.document.write(`
      <html>
        <head>
          <title>Cetak Khutbah - ${translateTitle(sermon.title, selectedLang)}</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Inter:wght@400;600;700&display=swap');
            body { font-family: 'Inter', sans-serif; color: #1a202c; padding: 40px; max-width: 800px; margin: 0 auto; }
            .arabic-block { font-family: 'Amiri', serif; font-size: 24px; text-align: right; direction: rtl; line-height: 2; background: #f7fafc; padding: 20px; border-radius: 8px; margin: 20px 0; page-break-inside: avoid; }
            h2 { font-family: 'Amiri', serif; font-size: 32px; text-align: center; color: #064e3b; margin-bottom: 5px; }
            h3 { font-size: 18px; color: #064e3b; border-bottom: 2px solid #064e3b; padding-bottom: 5px; margin-top: 40px; }
            p { font-size: 15px; line-height: 1.8; margin: 15px 0; text-align: justify; }
            .outline-section { background-color: #f7fafc; padding: 15px; border-radius: 8px; margin: 15px 0; page-break-inside: avoid; }
            .outline-section h4 { color: #0f766e; margin-top: 0; margin-bottom: 5px; font-size: 16px; }
            .inline-flex { display: none !important; } /* Hide rukun badges in standard print if desired, or keep */
            @media print {
              body { padding: 20px; }
              button { display: none; }
            }
          </style>
        </head>
        <body>
          ${fullText}
          <script>
            window.onload = function() {
              window.print();
              setTimeout(function() { window.close(); }, 500);
            }
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <div className="space-y-6">
      
      {/* Top Controls Action Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 bg-white dark:bg-slate-950 border border-[#e8e4d8] dark:border-slate-800/40 rounded-3xl shadow-sm">
        
        {/* Navigation tabs between Summary & Full Text */}
        <div className="flex bg-slate-100 dark:bg-slate-900 p-1 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 w-full sm:w-auto">
          <button
            id="tab-summary"
            onClick={() => setActiveTab('summary')}
            className={`flex-1 sm:flex-none px-3 sm:px-5 py-2.5 rounded-xl text-[11px] sm:text-xs font-bold tracking-wide transition-all cursor-pointer flex items-center justify-center gap-1.5 ${activeTab === 'summary' ? 'bg-[#064E3B] text-white dark:bg-amber-400 dark:text-emerald-950 shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
          >
            <BookOpen className="w-4 h-4 shrink-0" />
            Rangkuman
          </button>
          <button
            id="tab-full"
            onClick={() => setActiveTab('full')}
            className={`flex-1 sm:flex-none px-3 sm:px-5 py-2.5 rounded-xl text-[11px] sm:text-xs font-bold tracking-wide transition-all cursor-pointer flex items-center justify-center gap-1.5 ${activeTab === 'full' ? 'bg-[#064E3B] text-white dark:bg-amber-400 dark:text-emerald-950 shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
          >
            <FileText className="w-4 h-4 shrink-0" />
            Naskah Lengkap
          </button>
        </div>

        {/* Action utility buttons: Teleprompter, Download, Print */}
        <div className="flex items-center justify-between sm:justify-start gap-2 w-full sm:w-auto">
          
          {/* Main Pulpit Teleprompter Trigger */}
          <button
            id="btn-teleprompter"
            onClick={() => {
              setTeleprompterOpen(true);
              setTpIsPlaying(false);
            }}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 text-xs font-extrabold text-white dark:text-emerald-950 bg-[#064E3B] hover:bg-emerald-900 dark:bg-amber-400 dark:hover:bg-amber-300 border border-transparent rounded-2xl shadow-md cursor-pointer hover:shadow-lg transition-all"
            title="Buka asisten layar teleprompter mimbar"
          >
            <Play className="w-3.5 h-3.5 fill-current shrink-0" />
            Teleprompter
          </button>

          {/* Export MS Word Doc button */}
          <button
            id="btn-download-word"
            onClick={handleDownloadWord}
            className="p-2.5 bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 rounded-xl cursor-pointer transition-all shrink-0"
            title="Download Naskah Word (.doc)"
          >
            <Download className="w-4 h-4" />
          </button>

          {/* Export PDF / Print button */}
          <button
            id="btn-print"
            onClick={handlePrint}
            className="p-2.5 bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 rounded-xl cursor-pointer transition-all shrink-0"
            title="Cetak atau Simpan PDF"
          >
            <Printer className="w-4 h-4" />
          </button>

        </div>
      </div>

      {/* Active Sermon Card Details */}
      <div className="bg-white dark:bg-slate-950 border border-[#e8e4d8] dark:border-[#1e3d34]/60 rounded-3xl p-4 sm:p-6 md:p-8 shadow-md">
        
        {/* Sermon Title Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800/60">
          <div>
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-2">
              <span className="px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-xl text-[10px] sm:text-xs font-extrabold bg-brand-emerald dark:bg-amber-400 text-white dark:text-emerald-950 tracking-wider shadow-sm uppercase shrink-0">
                {sermon.category.replace('_', ' ')}
              </span>
              <span className="px-2 py-1 rounded-xl text-[9px] sm:text-[10px] font-bold bg-[#064E3B]/10 dark:bg-emerald-950/60 text-brand-emerald dark:text-emerald-400 flex items-center gap-1 border border-brand-emerald/20 dark:border-emerald-900 shrink-0">
                <Check className="w-3 h-3 shrink-0" /> Rukun Terverifikasi (Sah)
              </span>
              <span className="px-2 py-1 rounded-xl text-[9px] sm:text-[10px] font-bold bg-amber-500/10 text-amber-700 dark:text-amber-400 flex items-center gap-1 border border-amber-500/20 shrink-0">
                <Clock className="w-3.5 h-3.5 shrink-0" /> Durasi: 10 - 15 Menit
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-serif font-black text-slate-800 dark:text-slate-100 leading-tight">
              {translateTitle(sermon.title, selectedLang)}
            </h2>
            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-1.5 font-medium">
              {sermon.subTitle}
            </p>
          </div>
        </div>

        {/* Language Selector Bar */}
        <div className="py-4 border-b border-slate-100 dark:border-slate-800/40">
          <div className="space-y-2">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-amber-400 animate-pulse"></span>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
                Bahasa Pengantar Naskah Khutbah:
              </label>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-2">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setSelectedLang(lang.code)}
                  className={`px-3 py-1.5 text-xs font-bold rounded-xl border transition-all cursor-pointer text-center flex flex-col justify-center items-center h-12 leading-none ${selectedLang === lang.code ? 'bg-[#064E3B] text-white border-[#064E3B] dark:bg-amber-400 dark:text-emerald-950 dark:border-amber-400 font-bold shadow-sm' : 'bg-[#FAF9F5] dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800/60 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
                >
                  <span className="truncate max-w-full text-[11px] sm:text-xs font-black">{lang.nativeName}</span>
                  <span className="text-[9px] opacity-60 font-normal mt-1">{lang.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Muqoddimah Variation Selector Bar */}
        <div className="py-4 border-b border-slate-100 dark:border-slate-800/40">
          <div className="space-y-3">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-amber-400 animate-pulse"></span>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
                Variasi Muqoddimah Khutbah Pertama (Sesuai Rukun & Ahlussunnah wal Jama'ah):
              </label>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {MUKADDIMAH_VARIATIONS.map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => setSelectedVariation(variant.id)}
                  className={`p-3 text-left rounded-2xl border transition-all cursor-pointer flex flex-col justify-between h-20 relative overflow-hidden group ${selectedVariation === variant.id ? 'bg-[#064E3B] text-white border-[#064E3B] dark:bg-amber-400 dark:text-emerald-950 dark:border-amber-400 shadow-md font-bold' : 'bg-[#FAF9F5] dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800/60 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
                >
                  <div className="space-y-0.5">
                    <span className="text-xs font-black block leading-snug">{variant.name}</span>
                    <span className={`text-[10px] block opacity-80 ${selectedVariation === variant.id ? 'text-amber-200 dark:text-emerald-900' : 'text-[#064E3B] dark:text-amber-400'}`}>
                      {variant.source}
                    </span>
                  </div>
                  {selectedVariation === variant.id && (
                    <div className="absolute right-2 bottom-2 bg-white/20 dark:bg-emerald-950/20 p-1 rounded-full">
                      <Check className="w-3.5 h-3.5 stroke-[3px]" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab-driven Inner Area */}
        <div className="pt-6">
          {activeTab === 'summary' ? (
            
            // --- TAB 1: SUMMARY & OUTLINES VIEW ---
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Left Column: Outlines list & explanation */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">
                    Garis Besar & Alur Pembahasan Khutbah:
                  </h3>
                  
                  <div className="space-y-3">
                    {sermon.outlines.map((outline, idx) => (
                      <div key={idx} className="flex gap-3 items-start p-4 bg-[#FAF9F5] dark:bg-slate-900/60 rounded-2xl border border-[#e8e4d8]/70 dark:border-slate-800/40 shadow-sm hover:shadow-md transition-all">
                        <div className="w-7 h-7 rounded-full bg-[#064E3B] dark:bg-amber-400 flex items-center justify-center font-extrabold text-xs text-white dark:text-emerald-950 shrink-0 shadow-sm">
                          {idx + 1}
                        </div>
                        <div className="space-y-1">
                          <p className="font-bold text-slate-800 dark:text-slate-200 text-sm">
                            {outline}
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            Fokus narasi pada pendalaman dalil Al-Qur'an & penyadaran jamaah.
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* PREMIUM SYAFI'I RUKUN CHECKLIST */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-[#064E3B]/5 to-[#042F24]/5 dark:from-amber-400/5 dark:to-amber-300/5 border border-amber-400/30 dark:border-amber-400/20 text-slate-600 dark:text-slate-300 space-y-4 shadow-sm">
                  <h4 className="text-sm font-extrabold text-[#064E3B] dark:text-amber-300 flex items-center gap-2 uppercase tracking-wider">
                    <Check className="w-4 h-4 text-emerald-600 dark:text-amber-400" /> Keabsahan Rukun Khutbah (Mazhab Syafi'i)
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    Aplikasi ini menjamin keabsahan khutbah Anda. Berikut adalah checklist rukun khutbah yang secara otomatis telah terpenuhi lengkap dalam teks naskah khutbah ini:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {[
                      { num: "1", title: "Memuji Allah (Hamdalah)", desc: "Tercantum lengkap di kedua Khutbah" },
                      { num: "2", title: "Shalawat Nabi SAW", desc: "Tercantum lengkap di kedua Khutbah" },
                      { num: "3", title: "Wasiat Taqwa (Ittaqullah)", desc: "Tercantum lengkap di kedua Khutbah" },
                      { num: "4", title: "Membaca Ayat Al-Qur'an", desc: "Tercantum lengkap di Khutbah Pertama" },
                      { num: "5", title: "Mendoakan Kaum Muslimin", desc: "Tercantum lengkap di Khutbah Kedua" }
                    ].map((rukun) => (
                      <div key={rukun.num} className="flex gap-2 items-start p-2.5 bg-white/50 dark:bg-slate-900/40 rounded-xl border border-slate-200/50 dark:border-slate-800/40">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-amber-400/20 flex items-center justify-center shrink-0 border border-emerald-200 dark:border-amber-400/30">
                          <Check className="w-3 h-3 text-emerald-700 dark:text-amber-400 font-bold" />
                        </div>
                        <div className="space-y-0.5">
                          <p className="text-xs font-bold text-slate-800 dark:text-slate-200 leading-none">
                            {rukun.title}
                          </p>
                          <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-none">
                            {rukun.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="pt-2 border-t border-slate-200/50 dark:border-slate-800/50 flex items-center gap-2 text-[10px] font-bold text-emerald-800 dark:text-amber-400 uppercase tracking-widest">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-amber-400 animate-pulse"></span>
                    Status Teks: SAH & SIAP DIBACAKAN DI ATAS MIMBAR
                  </div>
                </div>
              </div>

              {/* Khatib Personal Notes Column */}
              <div>
                <NotesEditor sermonId={sermon.id} sermonTitle={sermon.title} />
              </div>

            </div>

          ) : (
            
            // --- TAB 2: NASKAH LENGKAP ---
            <div className="space-y-6">
              
              {/* Context bar / Reader Preferences */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200/40 dark:border-slate-800/60 shadow-sm">
                {/* Font Size Selector */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    <Eye className="w-4 h-4 text-emerald-600 dark:text-amber-400" />
                    <span>Ukuran Teks:</span>
                  </div>
                  <div className="flex items-center gap-1 flex-wrap">
                    {[
                      { code: 'sm', label: 'Kecil' },
                      { code: 'md', label: 'Sedang' },
                      { code: 'lg', label: 'Besar' },
                      { code: 'xl', label: 'Sangat Besar' }
                    ].map(({ code, label }) => (
                      <button
                        key={code}
                        onClick={() => setReaderFontSize(code as any)}
                        className={`px-3 py-1.5 text-xs font-black rounded-xl transition-all cursor-pointer ${readerFontSize === code ? 'bg-[#064E3B] text-white dark:bg-amber-400 dark:text-emerald-950 font-bold shadow-sm' : 'bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-50'}`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Font Family Selector */}
                <div className="flex items-center justify-between gap-2 border-t md:border-t-0 pt-3 md:pt-0 border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    <Type className="w-4 h-4 text-emerald-600 dark:text-amber-400" />
                    <span>Gaya Tulisan (Font):</span>
                  </div>
                  <div className="flex items-center gap-1 flex-wrap">
                    {[
                      { code: 'serif', label: 'Buku Klasik (Serif)' },
                      { code: 'sans', label: 'Modern Bersih (Sans)' },
                      { code: 'arabic', label: 'Mushaf (Amiri)' },
                      { code: 'mono', label: 'Mesin Tik (Mono)' }
                    ].map((font) => (
                      <button
                        key={font.code}
                        onClick={() => setReaderFont(font.code)}
                        className={`px-2.5 py-1.5 text-xs font-black rounded-xl transition-all cursor-pointer ${readerFont === font.code ? 'bg-[#064E3B] text-white dark:bg-amber-400 dark:text-emerald-950 font-bold shadow-sm' : 'bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-50'}`}
                      >
                        {font.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* ACTUAL FULL SERMON TEXT DISPLAY */}
              <div 
                className="bg-[#FAF9F5] dark:bg-slate-950/60 p-4 sm:p-6 md:p-8 rounded-2xl border border-[#e8e4d8] dark:border-[#1e3d34]/40 shadow-inner select-text"
              >
                {/* Dynamically Inject CSS Overrides to ignore nested default styling */}
                <style dangerouslySetInnerHTML={{ __html: `
                  #sermon-html-viewport {
                    --sermon-font-size: ${fontSizes.baseMobile};
                    --sermon-font-family: ${fontFamilyValue};
                    --sermon-line-height: ${fontSizes.lineHeight};
                    --sermon-arabic-font-size: ${fontSizes.arabicMobile};
                  }
                  @media (min-width: 768px) {
                    #sermon-html-viewport {
                      --sermon-font-size: ${fontSizes.baseDesktop};
                      --sermon-arabic-font-size: ${fontSizes.arabicDesktop};
                    }
                  }

                  #sermon-html-viewport {
                    font-family: var(--sermon-font-family) !important;
                  }

                  #sermon-html-viewport p,
                  #sermon-html-viewport span:not(.w-6):not(.w-1.5):not(.inline-flex),
                  #sermon-html-viewport .prose,
                  #sermon-html-viewport .prose p,
                  #sermon-html-viewport .outline-section p,
                  #sermon-html-viewport .text-slate-600,
                  #sermon-html-viewport .text-slate-700 {
                    font-size: var(--sermon-font-size) !important;
                    font-family: var(--sermon-font-family) !important;
                    line-height: var(--sermon-line-height) !important;
                  }

                  #sermon-html-viewport .arabic-block,
                  #sermon-html-viewport .arabic-block * {
                    font-family: var(--font-arabic), "Traditional Arabic", serif !important;
                    font-size: var(--sermon-arabic-font-size) !important;
                    line-height: 2.2 !important;
                  }

                  #sermon-html-viewport h3 {
                    font-family: var(--sermon-font-family) !important;
                  }
                `}} />
                
                <div 
                  id="sermon-html-viewport"
                  className="space-y-6 md:leading-loose text-slate-800 dark:text-slate-200 break-words"
                  dangerouslySetInnerHTML={{ __html: fullText }}
                />
              </div>

            </div>

          )}
        </div>

      </div>

      {/* =======================================================
          FULLSCREEN TELEPROMPTER OVERLAY
          ======================================================= */}
      {teleprompterOpen && (
        <div className={`fixed inset-0 z-50 flex flex-col ${tpTheme === 'dark' ? 'bg-slate-950 text-emerald-400' : 'bg-white text-slate-900'} transition-colors duration-300`}>
          
          {/* Teleprompter Top bar */}
          <div className={`flex flex-wrap items-center justify-between gap-3 px-4 md:px-6 py-3 md:py-4 border-b ${tpTheme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-slate-100 border-slate-200'}`}>
            <div className="flex items-center gap-2.5">
              <span className={`w-3.5 h-3.5 rounded-full shrink-0 ${tpIsPlaying ? 'bg-rose-500 animate-pulse' : 'bg-slate-400'}`} />
              <div>
                <h3 className="font-bold text-xs sm:text-sm leading-tight text-white dark:text-white">
                  Teleprompter Mimbar
                </h3>
                <p className="text-[10px] text-slate-400 dark:text-slate-400 truncate max-w-[150px] sm:max-w-xs">
                  {translateTitle(sermon.title, selectedLang)}
                </p>
              </div>
            </div>

            {/* Top Toolbar Controls */}
            <div className="flex items-center gap-2 sm:gap-3">
              
              {/* Language Selection inside Teleprompter */}
              <select
                value={selectedLang}
                onChange={(e) => setSelectedLang(e.target.value)}
                className="px-2.5 py-1.5 text-xs font-bold rounded-xl bg-slate-800/80 dark:bg-slate-950/80 border border-slate-700/50 text-slate-200 focus:outline-none cursor-pointer focus:ring-1 focus:ring-emerald-500"
              >
                {LANGUAGES.map((lang) => (
                  <option key={lang.code} value={lang.code} className="bg-slate-900 text-slate-100">
                    {lang.nativeName}
                  </option>
                ))}
              </select>

              {/* Font Family Selection inside Teleprompter */}
              <select
                value={readerFont}
                onChange={(e) => setReaderFont(e.target.value as any)}
                className="px-2 py-1.5 text-xs font-bold rounded-xl bg-slate-800/80 dark:bg-slate-950/80 border border-slate-700/50 text-slate-200 focus:outline-none cursor-pointer focus:ring-1 focus:ring-emerald-500"
              >
                <option value="serif" className="bg-slate-900 text-slate-100">Font: Serif</option>
                <option value="sans" className="bg-slate-900 text-slate-100">Font: Sans</option>
                <option value="arabic" className="bg-slate-900 text-slate-100">Font: Klasik</option>
                <option value="mono" className="bg-slate-900 text-slate-100">Font: Mono</option>
              </select>
              
              {/* Font Size Controllers */}
              <div className="flex items-center gap-1 bg-slate-800/50 dark:bg-slate-950/60 p-1 rounded-xl">
                <button
                  id="tp-zoom-out"
                  onClick={() => setTpFontSize(prev => Math.max(20, prev - 4))}
                  className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-lg cursor-pointer transition-all"
                  title="Kecilkan Teks"
                >
                  <ZoomOut className="w-3.5 h-3.5" />
                </button>
                <span className="text-[10px] sm:text-xs font-bold font-mono px-0.5 text-slate-200">
                  {tpFontSize}px
                </span>
                <button
                  id="tp-zoom-in"
                  onClick={() => setTpFontSize(prev => Math.min(80, prev + 4))}
                  className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-lg cursor-pointer transition-all"
                  title="Besarkan Teks"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Teleprompter theme switcher */}
              <button
                id="tp-toggle-theme"
                onClick={() => setTpTheme(prev => prev === 'dark' ? 'light' : 'dark')}
                className="p-2 bg-slate-800/50 hover:bg-slate-700/50 rounded-xl text-slate-300 cursor-pointer"
                title="Ganti Tema Teleprompter"
              >
                {tpTheme === 'dark' ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5 text-slate-950" />}
              </button>

              {/* Close / Exit Button */}
              <button
                id="tp-btn-close"
                onClick={() => {
                  setTeleprompterOpen(false);
                  setTpIsPlaying(false);
                }}
                className="px-3 py-1.5 sm:px-4 sm:py-2 bg-rose-600 hover:bg-rose-500 text-white text-[11px] sm:text-xs font-bold rounded-xl transition-all cursor-pointer shadow-md shadow-rose-500/10"
              >
                Keluar
              </button>

            </div>
          </div>

          {/* Teleprompter Scroll Pane */}
          <div 
            ref={teleprompterScrollRef}
            className="flex-1 overflow-y-auto px-6 md:px-16 lg:px-24 py-16 select-none leading-relaxed"
            style={{ 
              fontSize: `${tpFontSize}px`,
              lineHeight: '1.8',
              fontFamily: fontFamilyValue
            }}
          >
            {/* Dynamically Inject CSS Overrides for Teleprompter layout elements to perfectly respond to the selected size */}
            <style dangerouslySetInnerHTML={{ __html: `
              .teleprompter-content,
              .teleprompter-content p,
              .teleprompter-content .prose p,
              .teleprompter-content .text-sm,
              .teleprompter-content .text-base,
              .teleprompter-content .text-slate-600,
              .teleprompter-content .text-slate-700,
              .teleprompter-content div {
                font-size: ${tpFontSize}px !important;
                font-family: ${fontFamilyValue} !important;
                line-height: 1.8 !important;
              }
              .teleprompter-content .arabic-block,
              .teleprompter-content .arabic-text {
                font-family: var(--font-arabic), "Traditional Arabic", serif !important;
                font-size: ${tpFontSize * 1.3}px !important;
                line-height: 2.2 !important;
              }
            `}} />

            <div className="max-w-4xl mx-auto space-y-16 pb-64 text-center">
              
              {/* Intuitve Reading Line Alignment Mark */}
              <div className="text-center font-bold pb-4 border-b border-dashed border-emerald-500/20 opacity-30 text-xs tracking-widest uppercase">
                * Mulai Membaca Di Sini *
              </div>

              {/* Render the full HTML nicely inside the teleprompter */}
              <div 
                className="teleprompter-content text-left leading-loose space-y-8"
                dangerouslySetInnerHTML={{ __html: fullText }}
              />

              <div className="text-center pt-8 border-t border-dashed border-emerald-500/20 text-xs tracking-widest uppercase text-slate-400">
                * Akhir Naskah Khutbah *
              </div>

            </div>
          </div>

          {/* Teleprompter Floating Navigation Controls (Bottom Panel) */}
          <div className={`p-5 border-t flex flex-col xl:flex-row items-center justify-between gap-4 ${tpTheme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-slate-100 border-slate-200'}`}>
            
            {/* Controls (Speed & Font Size) */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full xl:w-auto">
              {/* Speed slider indicator */}
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <span className="text-xs font-bold text-slate-400 w-24">Kecepatan Gulir:</span>
                <input
                  id="tp-speed-slider"
                  type="range"
                  min="1"
                  max="10"
                  step="1"
                  value={tpSpeed}
                  onChange={(e) => setTpSpeed(Number(e.target.value))}
                  className="flex-1 sm:w-32 md:w-40 h-1.5 bg-emerald-950/60 accent-emerald-500 rounded-lg appearance-none cursor-pointer"
                />
                <span className="text-xs font-mono font-bold text-emerald-500 w-6 text-center">
                  {tpSpeed}x
                </span>
              </div>

              {/* Font Size slider indicator */}
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <span className="text-xs font-bold text-slate-400 w-24">Ukuran Teks:</span>
                <input
                  id="tp-font-size-slider"
                  type="range"
                  min="20"
                  max="80"
                  step="2"
                  value={tpFontSize}
                  onChange={(e) => setTpFontSize(Number(e.target.value))}
                  className="flex-1 sm:w-32 md:w-40 h-1.5 bg-emerald-950/60 accent-emerald-500 rounded-lg appearance-none cursor-pointer"
                />
                <span className="text-xs font-mono font-bold text-emerald-500 w-10 text-center">
                  {tpFontSize}px
                </span>
              </div>
            </div>

            {/* Core Play/Pause controls */}
            <div className="flex items-center gap-3">
              
              {/* Reset Scroll position */}
              <button
                id="tp-btn-reset"
                onClick={() => {
                  if (teleprompterScrollRef.current) {
                    teleprompterScrollRef.current.scrollTop = 0;
                    setTpIsPlaying(false);
                  }
                }}
                className={`p-3.5 hover:opacity-80 rounded-2xl transition-all cursor-pointer ${tpTheme === 'dark' ? 'bg-slate-800 text-slate-300' : 'bg-white border border-slate-200 text-slate-700'}`}
                title="Mulai Ulang dari Atas"
              >
                <RotateCcw className="w-5 h-5" />
              </button>

              {/* Main Play / Pause Button */}
              <button
                id="tp-btn-play-pause"
                onClick={() => setTpIsPlaying(prev => !prev)}
                className={`flex items-center gap-2.5 px-8 py-4 ${tpIsPlaying ? 'bg-amber-600 hover:bg-amber-500' : 'bg-emerald-600 hover:bg-emerald-500'} text-slate-950 text-base font-bold rounded-2xl shadow-lg transition-all transform active:scale-95 cursor-pointer`}
              >
                {tpIsPlaying ? (
                  <>
                    <span className="w-3.5 h-3.5 flex items-center justify-center bg-slate-950 rounded-sm">
                      <span className="w-1.5 h-3.5 border-l-2 border-r-2 border-emerald-500" />
                    </span>
                    <span className="text-white font-black">PAUSE</span>
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5 text-white fill-white" />
                    <span className="text-white font-black">PLAY AUTOSCROLL</span>
                  </>
                )}
              </button>

            </div>

            {/* Reading instruction reminder */}
            <div className="hidden lg:block text-xs text-slate-400">
              Tips: Atur ukuran teks dan kecepatan agar pas dengan tempo membaca Anda.
            </div>

          </div>

          {/* Guidelines Line helper */}
          {tpIsPlaying && (
            <div className="absolute top-1/2 left-0 right-0 h-10 border-y-2 border-emerald-500/20 bg-emerald-500/5 pointer-events-none" />
          )}

        </div>
      )}

    </div>
  );
}
