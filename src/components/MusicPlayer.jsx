import React, { useState, useEffect, useRef } from 'react';
import { Music, Volume2, VolumeX, Heart } from 'lucide-react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio('/music/bgm.mp3');
    audio.loop = true;
    audio.volume = 0.8;
    audio.muted = false; // Ensure unmuted by default
    audioRef.current = audio;

    const playMusic = () => {
      if (audioRef.current) {
        audioRef.current.muted = false;
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            console.log("Browser policy blocked instant unmuted autoplay:", err);
          });
      }
    };

    // Attempt instant unmuted play immediately on load
    playMusic();

    // Aggressive listeners for first touch/click to un-pause instantly on first user gesture
    const handleGesture = () => {
      if (audioRef.current && audioRef.current.paused) {
        playMusic();
      }
      // Clean up after first successful interaction
      ['pointerdown', 'touchstart', 'click', 'scroll', 'keydown'].forEach(evt => {
        window.removeEventListener(evt, handleGesture);
      });
    };

    ['pointerdown', 'touchstart', 'click', 'scroll', 'keydown'].forEach(evt => {
      window.addEventListener(evt, handleGesture, { once: true });
    });

    return () => {
      ['pointerdown', 'touchstart', 'click', 'scroll', 'keydown'].forEach(evt => {
        window.removeEventListener(evt, handleGesture);
      });
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.muted = false;
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(err => console.error("Playback error:", err));
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-40">
      <button
        onClick={togglePlay}
        className={`glass-panel px-3.5 py-2.5 sm:px-4 sm:py-3 bg-pink-950/50 hover:bg-pink-900/70 border-pink-400/50 rounded-full flex items-center gap-2.5 sm:gap-3 cursor-pointer shadow-[0_0_25px_rgba(255,45,85,0.5)] transition-all duration-300 ${
          isPlaying ? 'scale-105 border-red-500 shadow-[0_0_35px_rgba(255,45,85,0.8)]' : ''
        }`}
      >
        <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-red-600 to-pink-500 flex items-center justify-center text-white shrink-0 ${
          isPlaying ? 'animate-spin' : ''
        }`} style={{ animationDuration: '4s' }}>
          <Music className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </div>

        <div className="text-left hidden sm:block">
          <div className="text-xs font-bold text-white flex items-center gap-1">
            <span>{isPlaying ? 'Playing BGM Music' : 'Play Background Music'}</span>
            {isPlaying && <Heart className="w-3 h-3 text-red-500 fill-red-500 animate-pulse" />}
          </div>
          <div className="text-[10px] text-pink-300/80 font-medium">
            {isPlaying ? 'Tap to pause / mute' : 'Tap to play music'}
          </div>
        </div>

        {isPlaying ? (
          <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-pink-300 animate-pulse shrink-0" />
        ) : (
          <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400/60 shrink-0" />
        )}
      </button>
    </div>
  );
};

export default MusicPlayer;
