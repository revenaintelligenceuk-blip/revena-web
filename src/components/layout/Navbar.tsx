'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Logo from '@/components/Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'The Problem', href: '#problem' },
    { label: 'Framework', href: '#framework' },
    { label: 'Impact', href: '#impact' },
    { label: 'Contact', href: '#audit' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
      isScrolled ? "bg-cream/80 backdrop-blur-xl border-b border-navy/5 py-4 shadow-premium" : "bg-transparent py-10"
    )}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
        <Logo onClick={scrollToTop} />
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-16">
          {navLinks.map((item) => (
            <a 
              key={item.label}
              href={item.href} 
              className="group relative text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-navy/50 hover:text-navy transition-all duration-300"
            >
              {item.label}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-copper transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
          <a href="#audit">
            <motion.button
              whileHover={{ y: -2, boxShadow: "0 20px 40px -10px rgba(10, 26, 47, 0.15)" }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-3 font-sans font-bold text-[10px] uppercase tracking-[0.2em] transition-all duration-500 bg-transparent border border-navy/20 text-navy hover:bg-navy hover:text-cream hover:border-navy cursor-pointer relative overflow-hidden group shadow-premium"
            >
              <span className="relative z-10">Book Discovery Call</span>
            </motion.button>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-navy p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cream border-b border-navy/5 overflow-hidden"
          >
            <div className="px-6 py-12 flex flex-col space-y-8">
              {navLinks.map((item) => (
                <a 
                  key={item.label}
                  href={item.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm font-sans font-bold uppercase tracking-[0.3em] text-navy/60 hover:text-navy transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a href="#audit" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full py-4 bg-navy text-cream font-sans font-bold text-[10px] uppercase tracking-[0.2em]">
                  Book Discovery Call
                </button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
