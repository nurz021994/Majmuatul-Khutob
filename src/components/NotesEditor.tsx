import React, { useState, useEffect, useRef } from "react";
import { Edit3, CheckCircle, Trash2, Calendar } from "lucide-react";

interface NotesEditorProps {
  sermonId: string;
  sermonTitle: string;
}

export default function NotesEditor({ sermonId, sermonTitle }: NotesEditorProps) {
  const [noteText, setNoteText] = useState<string>("");
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved">("idle");
  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Load existing note when sermonId changes
  useEffect(() => {
    const savedNotes = localStorage.getItem(`note-${sermonId}`);
    setNoteText(savedNotes || "");
    setSaveStatus("idle");
  }, [sermonId]);

  // Handle note edits with auto-save debounce
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setNoteText(value);
    setSaveStatus("saving");

    // Clear previous timeout if any
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }

    // Set new debounce timeout (700ms)
    saveTimeoutRef.current = setTimeout(() => {
      localStorage.setItem(`note-${sermonId}`, value);
      setSaveStatus("saved");
      
      // Reset save status to idle after 2 seconds
      setTimeout(() => {
        setSaveStatus((prev) => (prev === "saved" ? "idle" : prev));
      }, 2000);
    }, 700);
  };

  // Manual save trigger
  const handleSaveNow = () => {
    localStorage.setItem(`note-${sermonId}`, noteText);
    setSaveStatus("saved");
    setTimeout(() => setSaveStatus("idle"), 2000);
  };

  // Clear current note
  const handleClearNote = () => {
    if (window.confirm("Apakah Anda yakin ingin menghapus seluruh catatan untuk khutbah ini?")) {
      setNoteText("");
      localStorage.removeItem(`note-${sermonId}`);
      setSaveStatus("saved");
      setTimeout(() => setSaveStatus("idle"), 2000);
    }
  };

  return (
    <div className="bg-[#FAF9F5] dark:bg-slate-950 border border-[#e8e4d8] dark:border-emerald-950/40 rounded-2xl p-5 shadow-sm space-y-4">
      
      {/* Header of Note Editor */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-brand-emerald dark:bg-amber-400 flex items-center justify-center text-white dark:text-emerald-950">
            <Edit3 className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100">
              Catatan Pribadi Khatib
            </h4>
            <p className="text-xs text-slate-400 dark:text-slate-500">
              Tersimpan otomatis per judul khutbah
            </p>
          </div>
        </div>

        {/* Status Indicator */}
        <div className="text-xs font-sans">
          {saveStatus === "saving" && (
            <span className="text-amber-600 dark:text-amber-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-amber-600 dark:bg-amber-400 rounded-full animate-ping" />
              Menyimpan...
            </span>
          )}
          {saveStatus === "saved" && (
            <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-medium">
              <CheckCircle className="w-3.5 h-3.5" />
              Tersimpan
            </span>
          )}
        </div>
      </div>

      {/* Editor Textarea */}
      <div className="relative">
        <textarea
          id={`textarea-notes-${sermonId}`}
          className="w-full min-h-[160px] max-h-[300px] p-4 text-sm font-sans bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-850 text-slate-700 dark:text-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-brand-emerald placeholder-slate-400 dark:placeholder-slate-600 transition-all leading-relaxed"
          placeholder="Tulis poin-poin penting, dalil tambahan, atau pengingat yang ingin Anda bacakan di atas mimbar..."
          value={noteText}
          onChange={handleTextChange}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between text-xs border-t border-slate-150 dark:border-slate-800/60 pt-3">
        <div className="text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5" />
          <span>Edit terakhir: Hari ini</span>
        </div>
        
        <div className="flex items-center gap-2">
          {noteText.trim() && (
            <button
              id={`btn-clear-note-${sermonId}`}
              onClick={handleClearNote}
              className="text-rose-600 hover:text-rose-700 dark:text-rose-400 dark:hover:text-rose-300 px-2 py-1.5 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-950/20 transition-all cursor-pointer flex items-center gap-1"
              title="Hapus Catatan"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Hapus</span>
            </button>
          )}
          <button
            id={`btn-save-note-${sermonId}`}
            onClick={handleSaveNow}
            className="px-3.5 py-1.5 bg-brand-emerald hover:bg-emerald-900 dark:bg-amber-400 dark:hover:bg-amber-300 dark:text-emerald-950 text-white font-bold rounded-lg shadow-sm hover:shadow transition-all cursor-pointer"
          >
            Simpan Sekarang
          </button>
        </div>
      </div>

    </div>
  );
}
