"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Moon, Sun } from "lucide-react";
import Logo from "./Logo";
import Button from "./Button";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark") || 
                   localStorage.getItem("theme") === "dark";
    if (isDark) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled ? 'bg-cream/95 backdrop-blur-xl border-b border-navy/5 py-4 shadow-[0_10px_40px_-10px_rgba(10,26,47,0.05)]' : 'bg-transparent py-10'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-12 xl:px-8 flex items-center justify-between">
          <Logo onClick={scrollToTop} />
          
          <div className="hidden md:flex items-center space-x-12">
            {[
              { label: 'The Problem', href: '#problem' },
              { label: 'Framework', href: '#framework' },
              { label: 'Impact', href: '#impact' },
              { label: 'Audit', href: '#audit' },
              { label: 'FAQ', href: '#faq' },
            ].map((item) => (
              <a 
                key={item.label}
                href={item.href} 
                className="group relative text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-navy/50 hover:text-navy transition-all duration-300"
              >
                {item.label}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-copper transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
            <button
              onClick={toggleDarkMode}
              className="p-2 text-navy hover:bg-navy/5 rounded-full transition-colors flex items-center justify-center cursor-pointer"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <a href="#contact">
              <Button variant={isScrolled ? "primary" : "outline"} className={`py-3 px-8 ${!isScrolled ? 'border-navy/20' : ''}`}>
                Book Discovery Call
              </Button>
            </a>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 text-navy hover:bg-navy/5 rounded-full transition-colors cursor-pointer"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button 
              className="text-navy p-2 hover:bg-navy/5 rounded-full transition-colors cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-cream border-b border-navy/5 overflow-hidden"
            >
              <div className="px-6 py-12 flex flex-col space-y-8">
                {[
                  { label: 'The Problem', href: '#problem' },
                  { label: 'Framework', href: '#framework' },
                  { label: 'Impact', href: '#impact' },
                  { label: 'Audit', href: '#audit' },
                  { label: 'FAQ', href: '#faq' },
                  { label: 'Contact', href: '#contact' }
                ].map((item) => (
                  <a 
                    key={item.label}
                    href={item.href} 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-sm font-sans font-bold uppercase tracking-[0.3em] text-navy/60 hover:text-navy transition-colors border-b border-navy/5 pb-4"
                  >
                    {item.label}
                  </a>
                ))}
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="primary" className="w-full">Book Discovery Call</Button>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Header;
