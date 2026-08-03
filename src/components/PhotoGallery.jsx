import React, { useState } from 'react';
import { Camera, X, Heart, Sparkles, Maximize2 } from 'lucide-react';
import GlassCard from './GlassCard';
import { GALLERY_PHOTOS } from '../data/photos';

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section className="relative py-12 md:py-20 px-3 md:px-6 max-w-6xl mx-auto z-10" id="gallery">
      {/* Section Title */}
      <div className="text-center mb-10 md:mb-14">
        <div className="glass-pill cursor-default mb-3 text-xs md:text-sm">
          <Camera className="w-4 h-4 text-pink-400" />
          <span>Our Memory Wall</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
          Captured <span className="text-gradient-pink-red text-romantic text-4xl md:text-6xl block sm:inline">Moments of Joy</span>
        </h2>
        <p className="text-pink-200/90 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
          Every photo tells a piece of our beautiful story. Tap any photo to view it in full screen!
        </p>
      </div>

      {/* Gallery Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {GALLERY_PHOTOS.map((item) => (
          <GlassCard
            key={item.id}
            onClick={() => setSelectedPhoto(item)}
            className="p-4 bg-pink-950/20 hover:bg-pink-900/30 border-pink-400/30 group flex flex-col justify-between rounded-2xl md:rounded-3xl cursor-pointer"
          >
            {/* Image Container */}
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden aspect-[4/3] bg-black/40 border border-pink-300/20 mb-3.5">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover object-[center_20%] transition-transform duration-500 group-hover:scale-105"
              />

              {/* Top Right Zoom Badge */}
              <div className="absolute top-2.5 right-2.5 bg-black/60 backdrop-blur-md p-2 rounded-full text-pink-200 border border-pink-400/40 shadow-md group-hover:bg-pink-600 transition-colors">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>

              {/* Hover Zoom Overlay */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3.5">
                <span className="px-4 py-2 rounded-full bg-gradient-to-r from-red-600 to-pink-600 text-white text-xs font-semibold shadow-lg flex items-center gap-1.5">
                  <Maximize2 className="w-3.5 h-3.5 text-pink-200" /> Tap to View Full Screen
                </span>
              </div>
            </div>

            {/* Title & Caption */}
            <div className="px-1">
              <h3 className="text-base md:text-lg font-bold text-white mb-1 flex items-center justify-between">
                <span>{item.title}</span>
                <Heart className="w-4 h-4 text-red-500 fill-red-500 shrink-0" />
              </h3>
              <p className="text-pink-200/85 text-xs leading-relaxed font-light">
                {item.caption}
              </p>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 md:p-6">
          <div className="relative max-w-3xl w-full glass-panel p-4 md:p-6 bg-pink-950/40 border-pink-400/50">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-pink-500/30 hover:bg-pink-500/60 text-white transition-colors cursor-pointer z-20"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="rounded-2xl overflow-hidden max-h-[70vh] mb-4 bg-black/60 flex items-center justify-center">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="w-full h-full object-contain max-h-[70vh]"
              />
            </div>

            <div className="text-center px-2">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-1.5">{selectedPhoto.title}</h3>
              <p className="text-pink-200 text-xs md:text-sm max-w-lg mx-auto">{selectedPhoto.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;
