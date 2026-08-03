import React, { useState } from 'react';
import { Heart, Sparkles, Calendar, MapPin, X, Maximize2, Home } from 'lucide-react';
import GlassCard from './GlassCard';
import { TIMELINE_EVENTS } from '../data/photos';

const TimelineSection = () => {
  const [activeZoomPhoto, setActiveZoomPhoto] = useState(null);

  return (
    <section className="relative py-12 md:py-20 px-3 md:px-6 max-w-5xl mx-auto z-10" id="timeline">
      {/* Section Header */}
      <div className="text-center mb-10 md:mb-16">
        <div className="glass-pill cursor-default mb-3 text-xs md:text-sm">
          <Heart className="w-4 h-4 text-red-500 fill-red-500" />
          <span>August 4, 2024 ➔ August 4, 2026</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-3 tracking-tight">
          Our Love Story <span className="text-gradient-pink-red text-romantic text-4xl md:text-6xl block sm:inline">Timeline</span>
        </h2>
        <p className="text-pink-200/90 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
          Every moment with you is a cherished chapter. Here is how our love blossomed over 730 magical days.
        </p>
      </div>

      {/* Timeline Outer Container */}
      <div className="relative">
        {/* Central Vertical Glowing Line */}
        <div className="absolute top-0 bottom-0 left-5 md:left-1/2 w-0.5 bg-gradient-to-b from-pink-500 via-red-500 to-pink-600 shadow-[0_0_12px_rgba(255,45,85,0.7)] -translate-x-1/2" />

        {/* Timeline Events Stack */}
        <div className="space-y-8 md:space-y-14">
          {TIMELINE_EVENTS.map((event, index) => {
            const isEven = index % 2 === 0;
            const currentImgSrc = event.defaultSrc;
            const isHomeVisit = event.id === 6; // June 6, 2026 Parents Meeting

            return (
              <div
                key={event.id}
                className="relative flex flex-col md:flex-row items-center group"
              >
                {/* Glowing Heart/Home Node */}
                <div className="absolute left-5 md:left-1/2 -translate-x-1/2 top-4 md:top-6 z-20 flex items-center justify-center">
                  <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-tr ${
                    isHomeVisit ? 'from-amber-500 via-red-500 to-pink-500 border-amber-300 ring-4 ring-amber-500/30' : 'from-red-600 via-pink-600 to-red-500 border-pink-200'
                  } border-2 shadow-[0_0_20px_rgba(255,45,85,0.9)] flex items-center justify-center group-hover:scale-125 transition-transform duration-300`}>
                    {isHomeVisit ? (
                      <Home className="w-4 h-4 text-white animate-bounce" />
                    ) : (
                      <Heart className="w-4 h-4 text-white fill-white animate-pulse" />
                    )}
                  </div>
                </div>

                {/* Event Glass Card */}
                <div className={`w-full pl-12 md:pl-0 md:w-1/2 ${
                  isEven ? 'md:pr-10 md:mr-auto' : 'md:pl-10 md:ml-auto'
                }`}>
                  <GlassCard className={`p-4 sm:p-6 rounded-2xl md:rounded-3xl shadow-xl ${
                    isHomeVisit ? 'bg-gradient-to-b from-pink-900/40 via-red-950/40 to-pink-950/30 border-amber-400/50 shadow-[0_0_30px_rgba(255,215,0,0.25)]' : 'bg-pink-950/25 hover:bg-pink-900/35 border-pink-400/35'
                  }`}>
                    {/* Event Badge & Date */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                      <span className={`px-3 py-1 rounded-full text-[11px] md:text-xs font-semibold flex items-center gap-1.5 shadow-sm ${
                        isHomeVisit ? 'bg-amber-500/30 text-amber-200 border border-amber-400/50' : 'bg-red-500/25 text-red-200 border border-red-500/40'
                      }`}>
                        <Calendar className="w-3.5 h-3.5 text-pink-300" /> {event.date}
                      </span>
                      <span className="text-[11px] md:text-xs text-pink-300/90 font-medium flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-pink-400" /> {event.location}
                      </span>
                    </div>

                    {/* Milestone Title & Story Text */}
                    <h3 className="text-lg md:text-xl font-bold text-white mb-1.5 flex items-center gap-2">
                      {event.title}
                      {isHomeVisit && <Sparkles className="w-4 h-4 text-amber-300 animate-spin" style={{ animationDuration: '6s' }} />}
                    </h3>
                    <p className="text-pink-100/90 text-xs md:text-sm leading-relaxed mb-3.5 font-light">
                      {event.description}
                    </p>

                    {/* Photo Display Frame */}
                    <div className="pt-3 border-t border-pink-300/20">
                      <div
                        onClick={() => setActiveZoomPhoto({ src: currentImgSrc, title: event.title, date: event.date })}
                        className="relative rounded-xl md:rounded-2xl overflow-hidden border border-pink-400/40 group/img bg-black/50 aspect-[4/3] sm:aspect-video flex flex-col items-center justify-center text-center cursor-pointer shadow-inner"
                      >
                        <img
                          src={currentImgSrc}
                          alt={event.title}
                          className="w-full h-full object-cover object-[center_30%] transition-transform duration-500 group-hover/img:scale-105"
                        />

                        {/* Top Right Zoom Badge */}
                        <div className="absolute top-2.5 right-2.5 bg-black/60 backdrop-blur-md p-2 rounded-full text-pink-200 border border-pink-400/40 shadow-md group-hover/img:bg-pink-600 transition-colors">
                          <Maximize2 className="w-4 h-4" />
                        </div>

                        {/* Clean Zoom Hint Overlay */}
                        <div className="absolute inset-0 bg-black/50 backdrop-blur-xs opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3 text-center">
                          <span className="px-4 py-2 rounded-full bg-gradient-to-r from-red-600 to-pink-600 text-white text-xs font-semibold shadow-lg flex items-center gap-2">
                            <Maximize2 className="w-3.5 h-3.5" /> Tap to View Full Screen
                          </span>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Zoom Modal */}
      {activeZoomPhoto && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 md:p-6">
          <div className="relative max-w-4xl w-full glass-panel p-3 md:p-6 bg-pink-950/50 border-pink-400/50">
            <button
              onClick={() => setActiveZoomPhoto(null)}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-pink-500/30 hover:bg-pink-500/60 text-white transition-colors cursor-pointer z-20"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="rounded-2xl overflow-hidden max-h-[75vh] mb-3 bg-black/60 flex items-center justify-center">
              <img
                src={activeZoomPhoto.src}
                alt={activeZoomPhoto.title}
                className="w-full h-full object-contain max-h-[75vh]"
              />
            </div>

            <div className="text-center px-2">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{activeZoomPhoto.title}</h3>
              <p className="text-pink-300 text-xs md:text-sm">{activeZoomPhoto.date}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TimelineSection;
