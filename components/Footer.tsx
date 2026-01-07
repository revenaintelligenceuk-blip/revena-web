
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <Logo className="h-8" />
        
        <div className="flex gap-8 text-sm text-slate-500">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>
        
        <p className="text-sm text-slate-600 font-mono">
          &copy; {new Date().getFullYear()} Revena Intelligence. Built for the future.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
