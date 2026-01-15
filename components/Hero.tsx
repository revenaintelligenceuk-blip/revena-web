
import React, { useState } from 'react';
import Logo from './Logo';

const Hero: React.FC = () => {
  const [isJumping, setIsJumping] = useState(false);

  const handleLogoClick = () => {
    if (isJumping) return;
    setIsJumping(true);
    setTimeout(() => setIsJumping(false), 600);
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-14 px-6 overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl pointer-events-none">
        <div className="absolute inset-0 bg-sky-500/5 blur-[160px] rounded-full animate-pulse" style={{ animationDuration: '8s' }} />
      </div>

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
        {/* Top Badge */}
        <div className="mb-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sky-400 text-[10px] font-mono tracking-[0.2em] uppercase animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
          </span>
          Next-Gen Automation
        </div>

        {/* Main Brand Header */}
        <div className="space-y-4 mb-4 md:mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[0.95]">
            Revena <br />
            <span className="text-gradient">Intelligence</span>
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-slate-300 font-medium tracking-tight max-w-2xl mx-auto px-2">
            We are intelligence that helps businesses grow with AI.
          </p>
        </div>

        {/* Central Hero Visual (The Logo) */}
        <div
          onClick={handleLogoClick}
          className={`relative mb-6 md:mb-8 cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] select-none animate-fade-in-up ${isJumping ? 'animate-logo-jump' : 'hover:scale-105 active:scale-95'}`}
          style={{ animationDelay: '0.2s' }}
        >
          {/* Internal Glow */}
          <div className="absolute inset-0 bg-sky-400/10 blur-3xl rounded-full scale-150 opacity-50 group-hover:opacity-100 transition-opacity" />
          <Logo className="h-28 sm:h-36 md:h-48 lg:h-56" showText={false} />
        </div>

        {/* Mission Statement Callout */}
        <div className="max-w-2xl mx-auto space-y-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="h-px w-12 bg-sky-500/50 mx-auto" />
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light italic">
            Revena Intelligence is an advanced automation and integration partner. We architect bespoke AI ecosystems that replace manual complexity with autonomous efficiency, empowering businesses to scale at unprecedented speeds.
          </p>
        </div>
      </div>



      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        @keyframes logo-jump {
          0% { transform: translateY(0) scale(1); }
          30% { transform: translateY(-40px) scale(1.1) rotate(8deg); }
          60% { transform: translateY(15px) scale(0.9) rotate(-4deg); }
          100% { transform: translateY(0) scale(1) rotate(0); }
        }
        .animate-logo-jump {
          animation: logo-jump 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
