import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Calendar, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';
import GlassCard from './GlassCard';

const HeroSection = ({ onOpenLetter }) => {
  const [timeTogether, setTimeTogether] = useState({
    days: 730,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const startDate = new Date("2024-08-04T00:00:00").getTime();

    const updateCounter = () => {
      const now = new Date().getTime();
      const difference = Math.max(0, now - startDate);

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeTogether({ days, hours, minutes, seconds });
    };

    updateCounter();
    const interval = setInterval(updateCounter, 1000);
    return () => clearInterval(interval);
  }, []);

  const triggerHeartExplosion = () => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      colors: ['#FF2D55', '#FF69B4', '#E60023', '#FFB6C1', '#FFD700']
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
  };

  return (
    <section className="relative pt-6 md:pt-12 pb-12 md:pb-16 px-3 sm:px-6 max-w-5xl mx-auto text-center z-10">
      {/* Top Glass Pill Badge */}
      <div className="flex justify-center mb-4 md:mb-6">
        <div className="glass-pill cursor-default hover:scale-105 transition-transform duration-300 text-xs sm:text-sm">
          <Sparkles className="w-3.5 h-3.5 text-pink-300 animate-spin" style={{ animationDuration: '4s' }} />
          <span>August 4, 2024 — August 4, 2026</span>
          <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" />
        </div>
      </div>

      {/* Main Glass Title Banner */}
      <GlassCard className="p-5 sm:p-8 md:p-12 mb-6 md:mb-8 bg-gradient-to-b from-pink-500/15 via-red-500/5 to-transparent border-pink-400/40 rounded-3xl">
        <div className="flex justify-center mb-3">
          <div className="heart-badge">
            <Heart className="w-6 h-6 text-white fill-white" />
          </div>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-3 leading-tight">
          Happy <span className="text-gradient-pink-red text-romantic text-4xl sm:text-6xl md:text-7xl block my-1">2nd Anniversary</span> My Gew Patiyoo! ❤️
        </h1>

        <p className="text-pink-200 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-light mb-6 md:mb-8 leading-relaxed">
          Two beautiful years of endless laughs, warm hugs, sweet moments, and a love that grows stronger every single second.
        </p>

        {/* Real-time Love Counter */}
        <div className="mb-6 md:mb-8">
          <p className="text-[11px] sm:text-xs uppercase tracking-widest text-pink-300/90 mb-3 font-semibold flex items-center justify-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-red-400" /> Time Vimu & Gew Have Been In Love
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 max-w-2xl mx-auto">
            <div className="glass-panel p-3 sm:p-4 bg-red-950/25 border-pink-400/30 rounded-2xl flex flex-col items-center">
              <span className="text-2xl sm:text-4xl font-extrabold text-gradient-pink-red">{timeTogether.days}</span>
              <span className="text-[10px] sm:text-xs uppercase tracking-wider text-pink-300/80 mt-0.5 font-medium">Days</span>
            </div>
            <div className="glass-panel p-3 sm:p-4 bg-red-950/25 border-pink-400/30 rounded-2xl flex flex-col items-center">
              <span className="text-2xl sm:text-4xl font-extrabold text-gradient-pink-red">{timeTogether.hours}</span>
              <span className="text-[10px] sm:text-xs uppercase tracking-wider text-pink-300/80 mt-0.5 font-medium">Hours</span>
            </div>
            <div className="glass-panel p-3 sm:p-4 bg-red-950/25 border-pink-400/30 rounded-2xl flex flex-col items-center">
              <span className="text-2xl sm:text-4xl font-extrabold text-gradient-pink-red">{timeTogether.minutes}</span>
              <span className="text-[10px] sm:text-xs uppercase tracking-wider text-pink-300/80 mt-0.5 font-medium">Minutes</span>
            </div>
            <div className="glass-panel p-3 sm:p-4 bg-red-950/25 border-pink-400/30 rounded-2xl flex flex-col items-center">
              <span className="text-2xl sm:text-4xl font-extrabold text-gradient-pink-red">{timeTogether.seconds}</span>
              <span className="text-[10px] sm:text-xs uppercase tracking-wider text-pink-300/80 mt-0.5 font-medium">Seconds</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <button
            onClick={triggerHeartExplosion}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-red-600 via-pink-600 to-red-500 text-white font-semibold text-sm sm:text-base shadow-[0_0_25px_rgba(255,45,85,0.6)] hover:shadow-[0_0_35px_rgba(255,45,85,0.9)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <Heart className="w-5 h-5 fill-white text-white animate-bounce" />
            <span>Send Love & Hearts!</span>
          </button>

          <button
            onClick={onOpenLetter}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full glass-panel bg-white/10 hover:bg-white/20 text-pink-100 font-semibold text-sm sm:text-base border border-pink-300/50 hover:border-pink-300 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <Mail className="w-5 h-5 text-pink-300" />
            <span>Open Love Letter</span>
          </button>
        </div>
      </GlassCard>
    </section>
  );
};

export default HeroSection;
