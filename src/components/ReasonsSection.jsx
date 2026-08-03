import React, { useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import GlassCard from './GlassCard';
import { REASONS_WHY } from '../data/photos';

const ReasonsSection = () => {
  const [activeReason, setActiveReason] = useState(null);

  return (
    <section className="relative py-16 px-4 max-w-6xl mx-auto z-10" id="reasons">
      {/* Title Header */}
      <div className="text-center mb-12">
        <div className="glass-pill cursor-default mb-3">
          <Sparkles className="w-4 h-4 text-pink-300" />
          <span>Infinite Reasons</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
          Why I Fall In Love With You <span className="text-gradient-pink-red text-romantic text-4xl md:text-6xl block sm:inline">Every Single Day</span>
        </h2>
        <p className="text-pink-200 text-sm md:text-base max-w-xl mx-auto font-light">
          There are millions of reasons, but here are just a few special ones that make my heart belong to you forever.
        </p>
      </div>

      {/* Grid of Reason Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {REASONS_WHY.map((reason) => {
          const isSelected = activeReason === reason.id;

          return (
            <GlassCard
              key={reason.id}
              onClick={() => setActiveReason(isSelected ? null : reason.id)}
              className={`p-6 bg-pink-950/20 hover:bg-pink-900/30 border-pink-400/30 cursor-pointer transition-all duration-300 ${
                isSelected ? 'scale-105 border-red-500/80 shadow-[0_0_30px_rgba(255,45,85,0.4)] bg-pink-900/40' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-red-600 to-pink-500 flex items-center justify-center shadow-md">
                  <Heart className="w-5 h-5 text-white fill-white" />
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-pink-200 transition-colors">
                {reason.title}
              </h3>

              <p className="text-pink-100/85 text-xs leading-relaxed font-light">
                {reason.text}
              </p>

              <div className="mt-4 pt-3 border-t border-pink-300/15 flex items-center justify-between text-[11px] text-pink-300/70 font-medium">
                <span>Touch to highlight</span>
                <Heart className={`w-3.5 h-3.5 transition-colors ${isSelected ? 'text-red-500 fill-red-500 animate-pulse' : 'text-pink-400/50'}`} />
              </div>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
};

export default ReasonsSection;
