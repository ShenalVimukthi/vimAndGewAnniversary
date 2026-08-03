import React from 'react';
import { Heart, Camera, Calendar, Mail, Sparkles } from 'lucide-react';

const Navbar = ({ onOpenLetter }) => {
  return (
    <nav className="sticky top-4 z-40 max-w-4xl mx-auto px-4 mb-6">
      <div className="glass-panel px-4 py-3 bg-pink-950/30 backdrop-blur-xl border-pink-400/40 rounded-full flex items-center justify-between shadow-[0_4px_30px_rgba(255,45,85,0.25)]">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 text-white font-bold text-base hover:opacity-90 transition-opacity">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-red-600 to-pink-500 flex items-center justify-center shadow-md">
            <Heart className="w-4 h-4 text-white fill-white animate-pulse" />
          </div>
          <span className="text-romantic text-lg sm:text-xl text-gradient-pink-red hidden sm:inline">Vimu & Gew's 2nd Anniversary</span>
          <span className="text-romantic text-lg text-gradient-pink-red sm:hidden">Vimu & Gew</span>
        </a>

        {/* Nav Links */}
        <div className="flex items-center gap-1 sm:gap-3 text-xs font-semibold text-pink-200">
          <a
            href="#timeline"
            className="px-3 py-1.5 rounded-full hover:bg-pink-500/20 hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Calendar className="w-3.5 h-3.5 text-red-400" />
            <span className="hidden md:inline">Timeline</span>
          </a>

          <a
            href="#gallery"
            className="px-3 py-1.5 rounded-full hover:bg-pink-500/20 hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Camera className="w-3.5 h-3.5 text-pink-400" />
            <span className="hidden md:inline">Gallery</span>
          </a>

          <a
            href="#reasons"
            className="px-3 py-1.5 rounded-full hover:bg-pink-500/20 hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-pink-300" />
            <span className="hidden md:inline">Reasons</span>
          </a>

          <button
            onClick={onOpenLetter}
            className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-red-600 to-pink-600 text-white font-bold shadow-md hover:scale-105 transition-transform flex items-center gap-1.5 cursor-pointer ml-1"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Love Letter</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
