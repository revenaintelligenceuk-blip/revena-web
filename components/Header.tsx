
import React, { useState } from 'react';
import Logo from './Logo';
import { View } from '../App';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  scrolled: boolean;
  currentView: View;
  setView: (view: View) => void;
}

const Header: React.FC<HeaderProps> = ({ scrolled, currentView, setView }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; view: View }[] = [
    { label: 'Home', view: 'home' },
    { label: 'Services', view: 'dashboard' },
    { label: 'Customer Service', view: 'settings' },
  ];

  const handleNavClick = (view: View) => {
    setView(view);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-black/50 backdrop-blur-md border-b border-white/10' : 'py-4 md:py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        <button onClick={() => handleNavClick('home')} className="flex items-center hover:opacity-80 transition-opacity cursor-pointer">
          <Logo className="h-8 md:h-10" />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.view}
              onClick={() => setView(item.view)}
              className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-full cursor-pointer ${currentView === item.view
                  ? 'text-sky-400 bg-sky-500/10'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
            >
              {item.label}
              {currentView === item.view && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-sky-400 rounded-full shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
              )}
            </button>
          ))}
        </nav>

        <div className="hidden lg:block">
          <button
            onClick={() => setView('dashboard')}
            className="px-6 py-2 bg-sky-500 hover:bg-sky-400 text-white text-xs font-bold uppercase tracking-widest rounded-full transition-all shadow-lg shadow-sky-500/20 active:scale-95 cursor-pointer"
          >
            Explore Services
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-white/10 animate-slide-down">
          <nav className="flex flex-col p-4 gap-2">
            {navItems.map((item) => (
              <button
                key={item.view}
                onClick={() => handleNavClick(item.view)}
                className={`w-full text-left px-4 py-3 text-base font-medium rounded-xl transition-all ${currentView === item.view
                    ? 'text-sky-400 bg-sky-500/10'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('dashboard')}
              className="mt-2 w-full px-6 py-3 bg-sky-500 hover:bg-sky-400 text-white text-sm font-bold uppercase tracking-widest rounded-xl transition-all"
            >
              Explore Services
            </button>
          </nav>
        </div>
      )}

      <style>{`
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-down {
          animation: slide-down 0.2s ease-out forwards;
        }
      `}</style>
    </header>
  );
};

export default Header;
