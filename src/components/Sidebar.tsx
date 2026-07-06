import React, { useState, useMemo } from "react";
import { Search, ChevronRight, BookOpen, Clock, CalendarDays, Filter, FolderKanban, Check } from "lucide-react";
import { SermonMetadata, CATEGORIES } from "../data/sermons";

interface SidebarProps {
  sermons: SermonMetadata[];
  selectedSermon: SermonMetadata | null;
  onSelectSermon: (sermon: SermonMetadata) => void;
}

export default function Sidebar({ sermons, selectedSermon, onSelectSermon }: SidebarProps) {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedType, setSelectedType] = useState<'semua' | 'hijri' | 'umum'>('semua');
  const [activeCategoryId, setActiveCategoryId] = useState<string>('semua');

  // Filter categories depending on selected type
  const filteredCategories = useMemo(() => {
    if (selectedType === 'semua') return CATEGORIES;
    return CATEGORIES.filter(c => c.type === selectedType);
  }, [selectedType]);

  // Compute count of sermons per category to render badges
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    sermons.forEach(s => {
      counts[s.category] = (counts[s.category] || 0) + 1;
    });
    return counts;
  }, [sermons]);

  // Handle sermons filtering
  const filteredSermons = useMemo(() => {
    return sermons.filter(s => {
      // 1. Search Query check
      const matchesSearch = 
        s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.subTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.outlines.some(o => o.toLowerCase().includes(searchQuery.toLowerCase()));

      if (!matchesSearch) return false;

      // 2. Type tab check (Hijri or Umum)
      if (selectedType !== 'semua') {
        const catObj = CATEGORIES.find(c => c.id === s.category);
        if (!catObj || catObj.type !== selectedType) return false;
      }

      // 3. Category drilldown check
      if (activeCategoryId !== 'semua' && s.category !== activeCategoryId) {
        return false;
      }

      return true;
    });
  }, [sermons, searchQuery, selectedType, activeCategoryId]);

  return (
    <div className="bg-brand-emerald dark:bg-brand-emerald-dark text-white border border-emerald-900 dark:border-emerald-950 rounded-3xl p-5 shadow-2xl h-[calc(100vh-140px)] flex flex-col min-w-0">
      
      {/* 1. SEARCH BAR */}
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-emerald-300">
          <Search className="w-4.5 h-4.5" />
        </span>
        <input
          id="sidebar-search-input"
          type="text"
          className="w-full pl-10 pr-4 py-3 bg-emerald-950/40 border border-emerald-800/60 text-white placeholder-emerald-300/70 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all font-sans"
          placeholder="Cari judul khutbah, tema, atau hadits..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* 2. CORE TYPE SELECTION TABS (Semua / Hijriyah / Umum) */}
      <div className="grid grid-cols-3 gap-1 mt-4 p-1 bg-emerald-950/60 rounded-xl text-xs font-bold">
        <button
          id="btn-filter-semua"
          onClick={() => {
            setSelectedType('semua');
            setActiveCategoryId('semua');
          }}
          className={`py-2 rounded-lg text-center transition-all cursor-pointer ${selectedType === 'semua' ? 'bg-amber-400 text-emerald-950 shadow-sm' : 'text-emerald-300 hover:text-white'}`}
        >
          Semua ({sermons.length})
        </button>
        <button
          id="btn-filter-hijri"
          onClick={() => {
            setSelectedType('hijri');
            setActiveCategoryId('semua');
          }}
          className={`py-2 rounded-lg text-center transition-all cursor-pointer ${selectedType === 'hijri' ? 'bg-amber-400 text-emerald-950 shadow-sm' : 'text-emerald-300 hover:text-white'}`}
        >
          Hijriyah
        </button>
        <button
          id="btn-filter-umum"
          onClick={() => {
            setSelectedType('umum');
            setActiveCategoryId('semua');
          }}
          className={`py-2 rounded-lg text-center transition-all cursor-pointer ${selectedType === 'umum' ? 'bg-amber-400 text-emerald-950 shadow-sm' : 'text-emerald-300 hover:text-white'}`}
        >
          Tematik
        </button>
      </div>

      {/* 3. DRILLDOWN CATEGORY CHIPS */}
      <div className="flex flex-col mt-4">
        <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-300/80 mb-2 uppercase tracking-wider">
          <Filter className="w-3.5 h-3.5" />
          <span>Saring Kategori Khusus</span>
        </div>
        
        {/* Horizontal scroll of categories */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none snap-x select-none">
          
          {/* Default category: Semua */}
          <button
            id={`chip-cat-semua`}
            onClick={() => setActiveCategoryId('semua')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold snap-start cursor-pointer shrink-0 transition-all ${activeCategoryId === 'semua' ? 'bg-amber-400 text-emerald-950 shadow-sm' : 'bg-emerald-900/50 text-emerald-100 hover:bg-emerald-800/50'}`}
          >
            Semua Topik
          </button>

          {/* Map categories */}
          {filteredCategories.map(cat => {
            const count = categoryCounts[cat.id] || 0;
            return (
              <button
                key={cat.id}
                id={`chip-cat-${cat.id}`}
                onClick={() => setActiveCategoryId(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold snap-start cursor-pointer shrink-0 transition-all flex items-center gap-1.5 ${activeCategoryId === cat.id ? 'bg-amber-400 text-emerald-950 shadow-sm' : 'bg-emerald-900/50 text-emerald-100 hover:bg-emerald-800/50'}`}
              >
                <span>{cat.name}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${activeCategoryId === cat.id ? 'bg-amber-500 text-emerald-950' : 'bg-emerald-950/60 text-emerald-300'}`}>
                  {count}
                </span>
              </button>
            );
          })}

        </div>
      </div>

      {/* 4. SCROLLABLE SERMONS LIST */}
      <div className="flex-1 overflow-y-auto mt-4 pr-1 space-y-2.5 scroll-smooth">
        <div className="flex items-center justify-between text-[11px] font-bold text-emerald-300/60 mb-1 tracking-wider uppercase">
          <span>MENAMPILKAN {filteredSermons.length} MATERI</span>
          <span>SINKRON</span>
        </div>

        {filteredSermons.length > 0 ? (
          filteredSermons.map((sermon) => {
            const isSelected = selectedSermon?.id === sermon.id;
            return (
              <div
                key={sermon.id}
                id={`sermon-item-${sermon.id}`}
                onClick={() => onSelectSermon(sermon)}
                className={`group p-4 border rounded-2xl cursor-pointer transition-all flex items-center justify-between gap-3 ${isSelected ? 'bg-emerald-800/80 border-emerald-700 border-l-4 border-l-amber-400 shadow-md' : 'bg-emerald-900/20 border-emerald-900/40 hover:bg-emerald-900/40 hover:border-emerald-800/60'}`}
              >
                <div className="space-y-1 min-w-0 flex-1">
                  {/* Category name */}
                  <span className={`text-[10px] font-bold uppercase tracking-wider block ${isSelected ? 'text-amber-300' : 'text-emerald-400'}`}>
                    {sermon.category.replace('_', ' ')}
                  </span>
                  
                  {/* Title */}
                  <h4 className={`text-sm font-bold transition-colors leading-snug truncate ${isSelected ? 'text-white' : 'text-emerald-50 group-hover:text-amber-200'}`}>
                    {sermon.title}
                  </h4>
                  
                  {/* Subtitle description */}
                  <p className={`text-xs truncate leading-relaxed ${isSelected ? 'text-emerald-200' : 'text-emerald-300/70'}`}>
                    {sermon.subTitle}
                  </p>

                  {/* Metadata Row */}
                  <div className="flex items-center gap-2 mt-1.5 text-[10px] font-medium font-sans">
                    <span className={`inline-flex items-center gap-1 ${isSelected ? 'text-amber-300' : 'text-amber-400'}`}>
                      <Clock className="w-3 h-3" /> 10-15 min
                    </span>
                    <span className="w-1 h-1 rounded-full bg-emerald-500"></span>
                    <span className={`inline-flex items-center gap-0.5 ${isSelected ? 'text-emerald-200' : 'text-emerald-400'}`}>
                      <Check className="w-3 h-3" /> Rukun Sah
                    </span>
                  </div>
                </div>

                {/* Right Arrow indicator */}
                <div className={`shrink-0 p-1 rounded-lg transition-all ${isSelected ? 'bg-amber-400/20 text-amber-300' : 'text-emerald-500 group-hover:text-emerald-300 group-hover:translate-x-0.5'}`}>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            );
          })
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center text-emerald-300/60 space-y-2">
            <BookOpen className="w-8 h-8 opacity-40 animate-pulse" />
            <p className="text-xs font-semibold">Tidak ada materi khutbah ditemukan</p>
            <p className="text-[10px]">Coba ganti kata kunci pencarian atau kategori Anda.</p>
          </div>
        )}
      </div>

    </div>
  );
}
