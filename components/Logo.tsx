
import React, { useMemo, useState } from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-8", showText = true }) => {
  const [isHovered, setIsHovered] = useState(false);
  // Avoid regenerating random particle positions on every render (can cause jank).
  const particles = useMemo(
    () =>
      [...Array(6)].map((_, i) => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${i * 0.4}s`,
        animationDuration: `${3 + i * 0.5}s`,
      })),
    []
  );

  return (
    <div 
      className={`flex items-center gap-3 cursor-pointer group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Animated Background Glows */}
        <div className={`absolute -inset-2 bg-sky-500/20 blur-xl rounded-full transition-opacity duration-700 ease-out ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
        <div className={`absolute -inset-6 bg-sky-400/5 blur-3xl rounded-full transition-opacity duration-1000 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
        
        {/* Soft Particle Effect */}
        <div className={`absolute inset-0 z-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          {particles.map((p, i) => (
            <div 
              key={i}
              className={`absolute w-1 h-1 bg-sky-300/60 rounded-full animate-float-particle`}
              style={{
                top: p.top,
                left: p.left,
                animationDelay: p.animationDelay,
                animationDuration: p.animationDuration
              }}
            />
          ))}
        </div>

        {/* The Logo Icon */}
        <svg 
          viewBox="0 0 100 100" 
          className={`h-full w-auto relative z-10 transition-all duration-700 cubic-bezier(0.23, 1, 0.32, 1) ${isHovered ? 'scale-110 drop-shadow-[0_0_12px_rgba(56,189,248,0.4)]' : 'scale-100'}`}
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main T-Stem */}
          <rect x="46" y="30" width="8" height="50" rx="4" fill="white" className="transition-all" />
          {/* Horizontal Bar */}
          <rect x="25" y="30" width="50" height="6" rx="3" fill="white" />
          {/* Vertical Scales */}
          <rect x="25" y="36" width="4" height="15" rx="2" fill="white" />
          <rect x="71" y="36" width="4" height="15" rx="2" fill="white" />
          {/* Scale Bowls (Cyan Gradient) */}
          <path d="M15 51C15 51 15 62 27 62C39 62 39 51 39 51H15Z" fill="url(#bowl-grad)" />
          <path d="M61 51C61 51 61 62 73 62C85 62 85 51 85 51H61Z" fill="url(#bowl-grad)" />
          {/* Top Circles */}
          <circle cx="50" cy="18" r="8" fill="white" />
          <circle cx="38" cy="22" r="4" fill="#38bdf8" className={isHovered ? 'animate-pulse' : ''} />
          <circle cx="62" cy="22" r="4" fill="#38bdf8" className={isHovered ? 'animate-pulse' : ''} />
          
          <defs>
            <linearGradient id="bowl-grad" x1="15" y1="51" x2="15" y2="62" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38bdf8" />
              <stop offset="1" stopColor="#0ea5e9" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col leading-none ml-1">
          <span className={`text-xl font-bold tracking-tight transition-all duration-500 ${isHovered ? 'text-sky-400' : 'text-white'}`}>REVENA</span>
          <span className={`text-[10px] tracking-[0.2em] font-medium transition-all duration-500 ${isHovered ? 'text-slate-200' : 'text-slate-400'}`}>INTELLIGENCE</span>
        </div>
      )}

      <style>{`
        @keyframes float-particle {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0; }
          50% { transform: translate(var(--tw-translate-x, -8px), var(--tw-translate-y, -8px)) scale(1.5); opacity: 0.8; }
        }
        .animate-float-particle {
          animation: float-particle ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Logo;
