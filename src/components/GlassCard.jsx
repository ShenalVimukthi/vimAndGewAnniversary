import React from 'react';

const GlassCard = ({ children, className = '', glowOnHover = true, onClick, style = {} }) => {
  return (
    <div
      onClick={onClick}
      style={style}
      className={`glass-panel p-6 relative backdrop-blur-xl border border-pink-300/30 rounded-3xl transition-all duration-400 ${
        glowOnHover ? 'hover:shadow-[0_12px_40px_rgba(255,45,85,0.3)] hover:-translate-y-1 hover:border-pink-400/60' : ''
      } ${className}`}
    >
      {/* Decorative inner glass highlight */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent pointer-events-none rounded-3xl" />
      {children}
    </div>
  );
};

export default GlassCard;
