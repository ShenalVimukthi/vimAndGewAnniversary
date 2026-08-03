import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TimelineSection from './components/TimelineSection';
import PhotoGallery from './components/PhotoGallery';
import ReasonsSection from './components/ReasonsSection';
import LoveLetterModal from './components/LoveLetterModal';
import FloatingHearts from './components/FloatingHearts';
import MusicPlayer from './components/MusicPlayer';
import Footer from './components/Footer';

function App() {
  const [isLetterOpen, setIsLetterOpen] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden text-white font-sans selection:bg-pink-500 selection:text-white">
      {/* Background Orbs */}
      <div className="bg-glow-orb-1" />
      <div className="bg-glow-orb-2" />
      <div className="bg-glow-orb-3" />

      {/* Floating Red and Pink Hearts */}
      <FloatingHearts />

      {/* Main App Content Container */}
      <div className="relative z-10">
        <Navbar onOpenLetter={() => setIsLetterOpen(true)} />
        <HeroSection onOpenLetter={() => setIsLetterOpen(true)} />
        <TimelineSection />
        <PhotoGallery />
        <ReasonsSection />
        <Footer />
      </div>

      {/* Floating Interactive Controls */}
      <MusicPlayer />

      {/* Love Letter Modal */}
      <LoveLetterModal
        isOpen={isLetterOpen}
        onClose={() => setIsLetterOpen(false)}
      />
    </div>
  );
}

export default App;
