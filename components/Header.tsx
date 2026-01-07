
import React from 'react';
import Logo from './Logo';
import { View } from '../App';

interface HeaderProps {
  scrolled: boolean;
  currentView: View;
  setView: (view: View) => void;
}

const Header: React.FC<HeaderProps> = ({ scrolled, currentView, setView }) => {
  const navItems: { label: string; view: View }[] = [
    { label: 'Home', view: 'home' },
    { label: 'Services', view: 'dashboard' },
    { label: 'Customer Service', view: 'settings' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-black/50 backdrop-blur-md border-b border-white/10' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button onClick={() => setView('home')} className="flex items-center hover:opacity-80 transition-opacity cursor-pointer">
          <Logo className="h-10" />
        </button>
        
        <nav className="flex items-center gap-1 md:gap-8">
          {navItems.map((item) => (
            <button
              key={item.view}
              onClick={() => setView(item.view)}
              className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-full cursor-pointer ${
                currentView === item.view 
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
      </div>
    </header>
  );
};

export default Header;
