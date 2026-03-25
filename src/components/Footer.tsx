"use client";

import Logo from "./Logo";
import Link from "next/link";

export const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="py-32 px-6 md:px-12 lg:px-24 bg-navy dark:bg-cream text-cream dark:text-navy relative overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-16 md:space-y-0 relative z-10">
        <div className="space-y-6">
          <Logo className="scale-110 origin-left" onClick={scrollToTop} light />
          <p className="text-[11px] font-sans font-bold uppercase tracking-[0.4em] text-cream/30 dark:text-navy/30 max-w-xs leading-relaxed">
            Strategic Revenue Recovery for UK Service Businesses.
          </p>
        </div>
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-20 text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-cream/50 dark:text-navy/50">
          <div className="flex flex-col space-y-4">
            <span className="text-cream/20 dark:text-navy/20 mb-2">Navigation</span>
            <Link href="/#problem" className="hover:text-gold transition-colors">The Problem</Link>
            <Link href="/#framework" className="hover:text-gold transition-colors">Framework</Link>
            <Link href="/#impact" className="hover:text-gold transition-colors">Impact</Link>
            <Link href="/#audit" className="hover:text-gold transition-colors">Audit</Link>
          </div>
          <div className="flex flex-col space-y-4">
            <span className="text-cream/20 dark:text-navy/20 mb-2">Legal</span>
            <Link href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
          </div>
          <div className="flex flex-col space-y-4">
            <span className="text-cream/20 dark:text-navy/20 mb-2">Contact</span>
            <span className="text-cream/60 dark:text-navy/60">London, UK</span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-24 mt-24 border-t border-cream/5 dark:border-navy/5 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 relative z-10">
        <p className="text-[9px] font-sans font-bold uppercase tracking-[0.5em] text-cream/20 dark:text-navy/20">© 2026 RVNA Intelligence. All Rights Reserved.</p>
        <div className="flex items-center space-x-8 text-[9px] font-sans font-bold uppercase tracking-[0.5em] text-cream/20 dark:text-navy/20">
          <span>Strategic Advisory</span>
          <div className="w-1 h-1 bg-cream/10 dark:bg-navy/10 rounded-full" />
          <span>Operational Excellence</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
