import React from "react";
import { motion } from "motion/react";
import { Sparkles, Heart, BookOpen } from "lucide-react";
import logoUrl from "../assets/logo.png";

interface SplashScreenProps {
  onStart: () => void;
}

export default function SplashScreen({ onStart }: SplashScreenProps) {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#022118] via-[#043325] to-[#01140F] overflow-hidden text-white select-none py-12 md:py-0">
      
      {/* Decorative Islamic Geometric Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.07] bg-cover bg-center mix-blend-overlay pointer-events-none"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?q=80&w=1200&auto=format&fit=crop')`,
        }}
      />

      {/* Floating Gold/Emerald Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-xl px-6 text-center flex flex-col items-center">
        
        {/* Animated Medallion Logo (Expensive Gold-Emerald Aesthetics) */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 15 }}
          className="relative w-24 h-24 md:w-32 md:h-32 mb-6 md:mb-8 flex items-center justify-center bg-gradient-to-br from-[#064E3B] to-[#011F16] rounded-2xl md:rounded-[2rem] shadow-2xl shadow-emerald-950/50 border-2 border-amber-400/40 relative group overflow-hidden"
        >
          {/* Inner luxury background lighting */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-400/20 via-transparent to-transparent opacity-60"></div>
          
          {/* Star-like Outer Symmetrical Rotating Ring */}
          <div className="absolute inset-2 border border-dashed border-amber-400/30 rounded-xl md:rounded-[1.7rem] animate-spin" style={{ animationDuration: '40s' }} />
          
          {/* Symmetrical Corner Accents */}
          <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-amber-400/60" />
          <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-amber-400/60" />
          <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-amber-400/60" />
          <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-amber-400/60" />

          {/* Central Logo Symbol */}
          <div className="absolute inset-4 rounded-xl md:rounded-2xl overflow-hidden border border-amber-400/40">
            <img 
              src={logoUrl} 
              alt="Majmu'atul Khutob App Logo" 
              className="w-full h-full object-cover" 
              referrerPolicy="no-referrer" 
            />
          </div>
        </motion.div>

        {/* Welcome Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/25 text-xs font-bold tracking-widest text-amber-300 uppercase mb-3 md:mb-4"
        >
          <Sparkles className="w-3.5 h-3.5 animate-pulse text-amber-500" />
          Koleksi Khutbah Jum'at Setahun
        </motion.div>

        {/* Arabic Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-4xl md:text-6xl font-serif font-bold text-amber-400 mb-2 select-text tracking-wide drop-shadow-[0_2px_10px_rgba(245,158,11,0.2)]"
        >
          مَجْمُوعَةُ الْخُطَبِ
        </motion.div>

        {/* App Title in English */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-xl md:text-3xl font-serif font-black tracking-[0.25em] text-emerald-100 uppercase mb-4 md:mb-6"
        >
          MAJMUATUL KHUTOB
        </motion.h1>

        {/* App Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-slate-300/90 text-sm md:text-base max-w-md leading-relaxed mb-6 md:mb-10 font-sans border-t border-emerald-800/40 pt-4"
        >
          Arsip lengkap <span className="text-amber-300 font-bold">200 materi Khutbah Jum'at</span> berkualitas tinggi, rukun khutbah terverifikasi sah, ramah pembacaan mimbar dengan <span className="text-amber-300 font-semibold">Mode Teleprompter</span>.
        </motion.p>

        {/* Action Button: Bismillah */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, type: "spring" }}
          className="w-full flex justify-center"
        >
          <button
            id="btn-mulai-bismillah"
            onClick={onStart}
            className="group relative inline-flex items-center gap-3 px-8 md:px-10 py-3.5 md:py-4.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-sm md:text-base font-black rounded-2xl shadow-2xl shadow-amber-500/20 border border-amber-300/40 transition-all duration-300 transform active:scale-95 cursor-pointer uppercase tracking-wider"
          >
            {/* Pulsing Backlight */}
            <span className="absolute inset-0 w-full h-full rounded-2xl bg-amber-400/30 blur-md group-hover:blur-xl transition-all opacity-0 group-hover:opacity-100" />
            
            <span className="relative flex items-center gap-2">
              Mulai dengan Bismillah
              <span className="text-sm font-serif font-semibold opacity-90">(بِسْمِ اللَّهِ)</span>
            </span>
          </button>
        </motion.div>

        {/* Footer info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-10 md:mt-16 text-[10px] text-emerald-500/60 font-sans tracking-widest uppercase flex items-center gap-1"
        >
          <span>Aplikasi Premium Khatib</span>
          <Heart className="w-2.5 h-2.5 text-amber-500 fill-amber-500" />
          <span>Rukun Khutbah Terjamin Sah</span>
        </motion.div>

      </div>

      {/* Decorative corners */}
      <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-amber-400/10 rounded-tr-3xl m-6 pointer-events-none hidden md:block" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-amber-400/10 rounded-bl-3xl m-6 pointer-events-none hidden md:block" />

    </div>
  );
}
