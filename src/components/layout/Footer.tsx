'use client';

import React from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-32 px-6 md:px-12 lg:px-24 bg-navy text-cream relative overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-5 pointer-events-none" />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-16 md:space-y-0 relative z-10">
        <div className="space-y-6">
          <Logo className="scale-110 origin-left" onClick={scrollToTop} light />
          <p className="text-[11px] font-sans font-bold uppercase tracking-[0.4em] text-cream/20 max-w-xs leading-relaxed">
            Strategic Revenue Recovery for UK Service Businesses.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-20 text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-cream/30">
          <div className="flex flex-col space-y-4">
            <span className="text-cream/10 mb-2">Navigation</span>
            <a href="#problem" className="hover:text-copper transition-colors">The Problem</a>
            <a href="#framework" className="hover:text-copper transition-colors">Framework</a>
            <a href="#impact" className="hover:text-copper transition-colors">Impact</a>
            <a href="#audit" className="hover:text-copper transition-colors">Audit</a>
            <a href="#contact" className="hover:text-copper transition-colors">Contact</a>
          </div>
          
          <div className="flex flex-col space-y-4">
            <span className="text-cream/10 mb-2">Legal</span>
            <Link href="/privacy" className="hover:text-copper transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-copper transition-colors">Terms of Service</Link>
            <Link href="/confidentiality" className="hover:text-copper transition-colors">Confidentiality</Link>
          </div>
          
          <div className="flex flex-col space-y-4">
            <span className="text-cream/10 mb-2">Contact</span>
            <span className="text-cream/60">London, UK</span>
            <span className="text-cream/60 lowercase">advisory@revena.ai</span>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-24 mt-24 border-t border-cream-light/5 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 relative z-10">
        <p className="text-[9px] font-sans font-bold uppercase tracking-[0.5em] text-cream/10">
          © {new Date().getFullYear()} RVNA Intelligence. All Rights Reserved.
        </p>
        <div className="flex items-center space-x-8 text-[9px] font-sans font-bold uppercase tracking-[0.5em] text-cream/10">
          <span>Strategic Advisory</span>
          <div className="w-1 h-1 bg-cream-light/5 rounded-full" />
          <span>Operational Excellence</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
