import React from 'react';
import { Heart, ChevronUp, Sparkles } from 'lucide-react';
import GlassCard from './GlassCard';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-4 max-w-5xl mx-auto text-center z-10 border-t border-pink-500/20 mt-16">
      <GlassCard className="p-8 bg-gradient-to-b from-pink-950/20 to-black/40 border-pink-400/30">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-600 to-pink-600 border border-pink-300 flex items-center justify-center shadow-[0_0_20px_rgba(255,45,85,0.7)] animate-pulse">
            <Heart className="w-6 h-6 text-white fill-white" />
          </div>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 text-romantic">
          2 Years of Us & Eternity To Go
        </h3>

        <p className="text-pink-200 text-sm max-w-md mx-auto mb-6 font-light">
          August 4, 2024 — August 4, 2026. Made with endless love, red hearts & rose-tinted memories.
        </p>

        <div className="flex justify-center">
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-pink-500/20 hover:bg-pink-500/40 text-pink-200 hover:text-white border border-pink-400/30 transition-all cursor-pointer flex items-center gap-2 text-xs font-semibold"
          >
            <ChevronUp className="w-4 h-4" />
            <span>Back To Top</span>
          </button>
        </div>
      </GlassCard>
    </footer>
  );
};

export default Footer;
