"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sun, Moon } from "lucide-react";
import Logo from "./Logo";
import Button from "./Button";
import { useTheme } from "./ThemeProvider";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const navLinks = [
    { label: 'The Problem', href: '#problem' },
    { label: 'Framework', href: '#framework' },
    { label: 'Impact', href: '#impact' },
    { label: 'Audit', href: '#audit' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 bg-cream dark:bg-navy ${isScrolled ? 'border-b border-navy/5 dark:border-cream/5 py-4' : 'py-10'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-12 xl:px-8 flex items-center justify-between">
          <Logo onClick={scrollToTop} />
          
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((item) => (
              <a 
                key={item.label}
                href={item.href} 
                className="group relative text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-navy/50 dark:text-cream/50 hover:text-navy dark:hover:text-cream transition-all duration-300"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-navy/50 dark:text-cream/50 hover:text-navy dark:hover:text-cream hover:bg-navy/5 dark:hover:bg-cream/5 transition-all duration-300 cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <a href="#contact">
              <Button variant="primary" className="py-3 px-8">
                Book Discovery Call
              </Button>
            </a>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 text-navy/50 dark:text-cream/50 hover:text-navy dark:hover:text-cream transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button 
              className="text-navy dark:text-cream p-2 hover:bg-navy/5 dark:hover:bg-cream/5 rounded-full transition-colors cursor-pointer"
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
              className="md:hidden bg-cream dark:bg-navy border-b border-navy/5 dark:border-cream/5 overflow-hidden"
            >
              <div className="px-6 py-12 flex flex-col space-y-8">
                {[...navLinks, { label: 'Contact', href: '#contact' }].map((item) => (
                  <a 
                    key={item.label}
                    href={item.href} 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-sm font-sans font-bold uppercase tracking-[0.3em] text-navy/60 dark:text-cream/60 hover:text-navy dark:hover:text-cream transition-colors border-b border-navy/5 dark:border-cream/5 pb-4"
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
