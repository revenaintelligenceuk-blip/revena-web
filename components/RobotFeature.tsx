
import React, { useState } from 'react';

const RobotFeature: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const runRobot = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    // Animation duration is 5 seconds
    setTimeout(() => setIsAnimating(false), 5000);
  };

  return (
    <div className="fixed left-6 bottom-6 z-40 hidden lg:block group">
      {/* Robot Station / Home Base */}
      <div className="relative p-6 glass border-white/10 rounded-[2rem] bg-black/40 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-sky-500/30">
        <div className="absolute -top-3 left-6 px-2 py-0.5 bg-sky-600 rounded text-[9px] font-bold text-white uppercase tracking-tighter shadow-lg shadow-sky-500/20">
          Unit 01 Core
        </div>
        
        {/* Interaction Area */}
        <div className="relative w-[120px] h-[100px] flex items-end justify-center">
          
          {/* Desk Visual */}
          <div className="absolute bottom-2 w-full h-1.5 bg-gradient-to-r from-slate-700 via-slate-500 to-slate-700 rounded-full border border-white/10 shadow-inner" />
          
          {/* Laptop Visual */}
          <div className="absolute bottom-3 right-2 w-10 h-7 group-hover:brightness-125 transition-all">
            {/* Screen */}
            <div className="absolute top-0 left-0 w-8 h-5 bg-slate-900 border border-slate-600 rounded-sm origin-bottom -rotate-12 flex flex-col items-center justify-center overflow-hidden shadow-[0_0_15px_rgba(56,189,248,0.1)]">
              {/* Abstract Screen Animation (Code Lines) */}
              <div className={`w-full h-full p-0.5 space-y-[1px] transition-all duration-1000 ${!isAnimating ? 'animate-screen-active' : ''}`}>
                <div className="h-[1px] w-[60%] bg-sky-400/60 rounded-full" />
                <div className="h-[1px] w-[80%] bg-emerald-400/40 rounded-full" />
                <div className="h-[1px] w-[40%] bg-sky-400/60 rounded-full" />
                <div className="h-[1px] w-[70%] bg-sky-300/50 rounded-full" />
                <div className="h-[1px] w-[50%] bg-emerald-400/40 rounded-full" />
              </div>
              <div className={`absolute inset-0 bg-sky-500/10 transition-opacity duration-1000 ${!isAnimating ? 'animate-pulse' : 'opacity-0'}`} />
            </div>
            {/* Base */}
            <div className="absolute bottom-0 left-0 w-8 h-1 bg-slate-600 rounded-full" />
          </div>

          {/* The Robot */}
          <div 
            className={`relative cursor-pointer transition-all z-20 ${isAnimating ? 'robot-run-wild' : 'hover:scale-110 active:scale-95 animate-robot-work'}`}
            onClick={runRobot}
            title="Wake up Unit 01"
          >
            {/* Energy Aura */}
            <div className={`absolute inset-0 bg-sky-400/20 blur-2xl rounded-full transition-opacity duration-300 ${isAnimating ? 'opacity-100' : 'opacity-0'}`} />
            
            <svg width="55" height="55" viewBox="0 0 60 60" className="relative z-10 filter drop-shadow-xl">
              {/* Head */}
              <rect x="18" y="10" width="24" height="20" rx="6" fill="#f8fafc" />
              {/* Face */}
              <rect x="21" y="13" width="18" height="12" rx="3" fill="#0f172a" />
              {/* Glowing Eyes */}
              <g className={!isAnimating ? 'animate-eye-focus' : ''}>
                <circle cx="26" cy="19" r="1.5" fill="#38bdf8" className="animate-pulse" />
                <circle cx="34" cy="19" r="1.5" fill="#38bdf8" className="animate-pulse" />
              </g>
              {/* Body */}
              <rect x="22" y="31" width="16" height="18" rx="4" fill="#f8fafc" />
              {/* Arms */}
              <rect x="16" y="32" width="4" height="10" rx="2" fill="#e2e8f0" />
              <rect x="40" y="32" width="4" height="10" rx="2" fill="#e2e8f0" />
              
              {/* Typing/Thinking Hands */}
              {!isAnimating && (
                <g className="animate-typing">
                  <circle cx="28" cy="46" r="1.2" fill="#38bdf8" className="animate-bounce" style={{ animationDelay: '0.1s' }} />
                  <circle cx="38" cy="46" r="1.2" fill="#38bdf8" className="animate-bounce" style={{ animationDelay: '0.3s' }} />
                </g>
              )}
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes screen-active {
          0%, 100% { transform: translateY(0); opacity: 0.6; }
          50% { transform: translateY(-3px); opacity: 1; filter: brightness(1.2); }
        }
        @keyframes robot-work {
          0%, 45%, 55%, 100% { transform: rotate(0deg) translateX(0); }
          50% { transform: rotate(4deg) translateX(4px); } /* Robot turns toward the laptop on the right */
        }
        @keyframes eye-focus {
          0%, 45%, 55%, 100% { transform: translateX(0); }
          50% { transform: translateX(2px); } /* Eyes look toward the screen */
        }
        @keyframes typing {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(3px); }
        }
        @keyframes runWild {
          0% { transform: translate(0, 0) scale(1) rotate(0deg); }
          15% { transform: translate(30vw, -40vh) scale(1.2) rotate(10deg); }
          30% { transform: translate(70vw, -20vh) scale(0.8) rotate(-20deg); }
          45% { transform: translate(85vw, -80vh) scale(1.1) rotate(5deg); }
          60% { transform: translate(40vw, -60vh) scale(1.3) rotate(15deg); }
          75% { transform: translate(10vw, -85vh) scale(0.9) rotate(-10deg); }
          85% { transform: translate(50vw, -10vh) scale(1.2) rotate(20deg); }
          100% { transform: translate(0, 0) scale(1) rotate(0deg); }
        }
        .animate-screen-active {
          animation: screen-active 3s infinite ease-in-out;
        }
        .animate-robot-work {
          animation: robot-work 6s infinite ease-in-out;
        }
        .animate-eye-focus {
          animation: eye-focus 6s infinite ease-in-out;
        }
        .animate-typing {
          animation: typing 6s infinite ease-in-out;
        }
        .robot-run-wild {
          animation: runWild 5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default RobotFeature;
