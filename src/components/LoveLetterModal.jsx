import React from 'react';
import { Mail, X, Heart, Sparkles, Feather } from 'lucide-react';
import confetti from 'canvas-confetti';
import { LOVE_LETTER } from '../data/photos';

const LoveLetterModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const triggerLetterHearts = () => {
    confetti({
      particleCount: 60,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#FF2D55', '#FF69B4', '#E60023', '#FFD700']
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-lg flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      {/* Modal Glass Container */}
      <div className="relative max-w-2xl w-full glass-panel p-5 sm:p-10 bg-gradient-to-b from-pink-950/60 via-red-950/40 to-black/60 border-pink-400/50 my-6 sm:my-8 shadow-[0_0_50px_rgba(255,45,85,0.4)] animate-in fade-in zoom-in duration-300 rounded-3xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2.5 rounded-full bg-pink-500/20 hover:bg-pink-500/40 text-pink-200 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Envelope Header Icon */}
        <div className="flex justify-center mb-3 sm:mb-4">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-red-600 to-pink-600 border-2 border-pink-300/60 flex items-center justify-center shadow-[0_0_25px_rgba(255,45,85,0.7)] animate-bounce">
            <Feather className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-5 sm:mb-6">
          <span className="text-[11px] sm:text-xs uppercase tracking-widest text-pink-300/80 font-semibold flex items-center justify-center gap-1.5 mb-1">
            <Sparkles className="w-3.5 h-3.5 text-pink-300" /> A Sealed Message From My Heart
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white text-romantic">
            To My Gew Patiyaa
          </h2>
        </div>

        {/* Letter Parchment / Glass Body */}
        <div className="glass-panel p-5 sm:p-8 bg-pink-900/15 border-pink-300/30 rounded-2xl relative mb-6">
          <div className="text-pink-200 text-lg sm:text-2xl font-bold text-romantic mb-4">
            {LOVE_LETTER.recipient}
          </div>

          <div className="text-pink-100/90 text-xs sm:text-base leading-relaxed whitespace-pre-line font-light mb-6 space-y-4">
            {LOVE_LETTER.body}
          </div>

          {/* Letter Signature Section */}
          <div className="border-t border-pink-300/20 pt-4 flex flex-col items-end text-right space-y-1">
            <span className="text-pink-300 text-xs sm:text-sm italic">{LOVE_LETTER.closing}</span>
            <span className="text-pink-200 text-xs sm:text-sm font-medium">{LOVE_LETTER.loveLine}</span>
            <div className="text-pink-100 font-bold text-sm sm:text-lg text-romantic flex items-center justify-end gap-1.5 mt-1">
              <span className="text-pink-200 bg-gradient-to-r from-red-600/40 via-pink-600/40 to-red-500/40 px-2.5 py-0.5 rounded-full border border-pink-400/50 text-[11px] sm:text-xs font-sans uppercase tracking-widest font-semibold shadow-xs">
                From
              </span>
              <span>{LOVE_LETTER.sender}</span>
            </div>
          </div>
        </div>

        {/* Interactive Button inside Modal */}
        <div className="flex justify-center">
          <button
            onClick={() => {
              triggerLetterHearts();
            }}
            className="px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-red-600 via-pink-600 to-red-500 text-white font-semibold text-xs sm:text-sm hover:scale-105 active:scale-95 transition-transform flex items-center gap-2 cursor-pointer shadow-lg"
          >
            <Heart className="w-4 h-4 fill-white animate-pulse" />
            <span>Send A Hug Back</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoveLetterModal;
