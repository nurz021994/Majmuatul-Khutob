import React, { useState, useEffect } from "react";
import { Moon, Sun, ShieldCheck, Heart, Sparkles, Scroll, BookOpen, ArrowLeft } from "lucide-react";
import { getSermons, SermonMetadata } from "./data/sermons";
import SplashScreen from "./components/SplashScreen";
import Sidebar from "./components/Sidebar";
import SermonReader from "./components/SermonReader";

export default function App() {
  const [showSplash, setShowSplash] = useState<boolean>(true);
  const [selectedSermon, setSelectedSermon] = useState<SermonMetadata | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("app-theme") as 'light' | 'dark';
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Sync theme
  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem("app-theme", nextTheme);
  };

  const sermonsList = getSermons();

  // If splash screen is active, show it first
  if (showSplash) {
    return <SplashScreen onStart={() => setShowSplash(false)} />;
  }

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-brand-cream dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans transition-colors duration-300">
        
        {/* =======================================================
            GLOBAL APP HEADER
            ======================================================= */}
        <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-[#e8e4d8] dark:border-slate-900 px-4 md:px-8 py-3.5 flex items-center justify-between select-none shadow-sm">
          
          {/* Logo & Branding Title */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#064E3B] to-[#03291F] border-2 border-amber-400/40 flex items-center justify-center text-amber-300 shadow-md relative overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-400/15 via-transparent to-transparent"></div>
              <BookOpen className="w-5.5 h-5.5 text-amber-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="hidden md:inline arabic-text text-lg font-bold text-amber-600 dark:text-amber-400 tracking-wide font-serif">مَجْمُوعَةُ الْخُطَبِ</span>
                <span className="hidden md:inline text-xs text-emerald-800/30 dark:text-emerald-300/20">|</span>
                <h1 className="font-serif font-black text-sm md:text-base tracking-widest text-[#064E3B] dark:text-white uppercase">
                  MAJMUATUL KHUTOB
                </h1>
                
                {/* Offline synchronized badge */}
                <span className="hidden md:flex items-center gap-1 text-[9px] font-bold bg-amber-400/10 text-amber-700 dark:text-amber-400 border border-amber-400/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  <ShieldCheck className="w-3 h-3 text-amber-600 dark:text-amber-400" />
                  Rukun Sah • 200 Judul
                </span>
              </div>
              <p className="text-[10px] text-slate-400 dark:text-slate-500 font-sans leading-none mt-0.5">
                Kumpulan Khutbah Jum'at Lengkap Setahun Hijriyah & Tematik Pilihan
              </p>
            </div>
          </div>

          {/* Quick Header Actions */}
          <div className="flex items-center gap-2">
            
            {/* Offline tag for mobile */}
            <span className="md:hidden flex items-center gap-1 text-[9px] font-bold bg-[#064E3B]/10 dark:bg-emerald-950/50 text-[#064E3B] dark:text-[#F9F8F4] border border-[#064E3B]/20 px-2 py-0.5 rounded-full">
              <ShieldCheck className="w-3 h-3" />
              Rukun Sah
            </span>

            {/* Dark/Light theme toggle switcher */}
            <button
              id="btn-global-theme-toggle"
              onClick={toggleTheme}
              className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-500 dark:text-slate-400 hover:text-slate-850 dark:hover:text-slate-200 transition-all cursor-pointer border border-transparent hover:border-slate-200/60 dark:hover:border-slate-800"
              title={theme === 'light' ? "Aktifkan Mode Gelap" : "Aktifkan Mode Terang"}
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-slate-700" />
              ) : (
                <Sun className="w-5 h-5 text-amber-400" />
              )}
            </button>

          </div>
        </header>

        {/* =======================================================
            MAIN APPLICATION SPACE (DEDICATED FULL VIEW)
            ======================================================= */}
        <main className="max-w-7xl mx-auto px-4 md:px-6 py-6 min-h-[calc(100vh-220px)]">
          {!selectedSermon ? (
            <div className="space-y-6 animate-in fade-in duration-300">
              
              {/* Full Width Theme & Search Directory */}
              <div className="w-full">
                <Sidebar 
                  sermons={sermonsList}
                  selectedSermon={selectedSermon}
                  onSelectSermon={(s) => setSelectedSermon(s)}
                />
              </div>
            </div>
          ) : (
            <div className="space-y-4 animate-in fade-in duration-300">
              
              {/* Premium Dedicated Action Bar with Return Button */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-slate-950 border border-[#e8e4d8] dark:border-slate-800/40 px-5 py-4 rounded-3xl shadow-sm">
                <button
                  id="btn-back-to-list"
                  onClick={() => setSelectedSermon(null)}
                  className="inline-flex items-center justify-center gap-2 px-4.5 py-2.5 text-xs font-bold text-[#064E3B] hover:text-emerald-800 dark:text-amber-400 dark:hover:text-amber-300 bg-[#064E3B]/5 dark:bg-slate-900 hover:bg-[#064E3B]/10 border border-[#064E3B]/10 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow transition-all cursor-pointer group"
                >
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
                  Kembali ke Daftar Pilihan Tema Khutbah
                </button>
                
                <div className="flex items-center gap-2 text-xs text-slate-400 dark:text-slate-500 font-medium">
                  <span className="hidden md:inline">Sedang Dibuka:</span>
                  <span className="text-emerald-800 dark:text-amber-300 font-bold bg-emerald-50 dark:bg-slate-900 px-3 py-1.5 rounded-xl border border-emerald-950/5 dark:border-slate-800 truncate max-w-[250px] sm:max-w-xs md:max-w-md block">
                    {selectedSermon.title}
                  </span>
                </div>
              </div>

              {/* Sermon content Reader takes full width */}
              <div className="w-full">
                <SermonReader 
                  sermon={selectedSermon}
                  globalTheme={theme}
                />
              </div>
            </div>
          )}
        </main>

        {/* =======================================================
            APP FOOTER INFO
            ======================================================= */}
        <footer className="bg-[#FAF9F5] dark:bg-slate-950 border-t border-[#e8e4d8] dark:border-slate-900 mt-16 py-6 text-center select-none text-xs text-slate-400 dark:text-slate-500 space-y-2 font-sans">
          <p className="font-bold text-[#064E3B] dark:text-slate-400">
            © 2026 MAJMUATUL KHUTOB - Aplikasi Asisten & Koleksi Khutbah Digital Terlengkap
          </p>
          <div className="flex items-center justify-center gap-1">
            <span>Didedikasikan untuk mempermudah tugas mulia para khatib Islam</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500" />
          </div>
        </footer>

      </div>
    </div>
  );
}
