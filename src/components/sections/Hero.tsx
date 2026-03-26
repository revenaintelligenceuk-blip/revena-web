'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Section from '@/components/Section';
import Button from '@/components/Button';

const Hero = () => {
  return (
    <>
      <Section className="pt-64 pb-56 relative overflow-hidden bg-cream" noAnimation>
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-navy/[0.02] -skew-x-12 translate-x-1/4 pointer-events-none" />
        
        <div className="max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="space-y-12"
          >
            <div className="flex items-center space-x-6">
              <div className="h-[1px] w-16 bg-copper/30" />
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-navy/40">UK-Wide Strategic Revenue Advisory</span>
              <div className="flex items-center space-x-2 px-4 py-1.5 bg-cream-light/50 backdrop-blur-sm rounded-full border border-navy/5 shadow-sm">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                <span className="text-[9px] font-sans font-bold uppercase tracking-widest text-navy/60">Active Implementation</span>
              </div>
            </div>
            
            <h1 className="text-5xl sm:text-7xl md:text-9xl font-serif font-bold tracking-tight leading-[0.9] text-navy relative">
              Eliminate <br />
              <span className="italic font-normal text-gradient">Revenue Leakage.</span>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100px" }}
                transition={{ delay: 1, duration: 1.5 }}
                className="absolute -left-20 top-12 h-[1px] bg-navy/10 hidden lg:block" 
              />
            </h1>
            
            <p className="text-2xl md:text-3xl text-grey-body max-w-3xl leading-relaxed font-sans font-light tracking-tight">
              Most service businesses lose 20–45% of inbound revenue due to missed calls, slow response times, and broken follow-up systems. <span className="text-navy font-semibold border-b border-copper/30">RVNA</span> builds intelligent systems that recover it.
            </p>
            
            <div className="flex items-center space-x-12 pt-6">
              <div className="flex flex-col space-y-2">
                <span className="text-4xl font-serif font-bold text-navy tracking-tighter">24/7</span>
                <span className="text-[9px] font-sans font-bold uppercase tracking-[0.3em] text-navy/30">Lead Capture</span>
              </div>
              <div className="w-[1px] h-12 bg-navy/10" />
              <div className="flex flex-col space-y-2">
                <span className="text-4xl font-serif font-bold text-navy tracking-tighter">98%</span>
                <span className="text-[9px] font-sans font-bold uppercase tracking-[0.3em] text-navy/30">System Efficiency</span>
              </div>
              <div className="w-[1px] h-12 bg-navy/10" />
              <div className="flex flex-col space-y-2">
                <span className="text-4xl font-serif font-bold text-navy tracking-tighter">20-45%</span>
                <span className="text-[9px] font-sans font-bold uppercase tracking-[0.3em] text-navy/30">Revenue Recovery</span>
              </div>
            </div>

            <div className="text-[9px] font-sans text-navy/20 tracking-wider pt-2">
              Based on average results across active client implementations.
            </div>

            <div className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-navy/30 border-t border-navy/5 pt-8">
              Trusted by clinics and service businesses across London, Manchester, Birmingham & Edinburgh.
            </div>
            
            <div className="pt-10 flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-8">
              <a href="#audit" className="w-full sm:w-auto">
                <Button 
                  className="flex items-center group w-full justify-center"
                >
                  Book Discovery Call
                  <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
                </Button>
              </a>
              <a href="#framework" className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-navy/40 hover:text-navy transition-colors flex items-center group">
                Explore Methodology
                <div className="ml-3 w-8 h-[1px] bg-navy/10 group-hover:w-12 group-hover:bg-navy/30 transition-all duration-500" />
              </a>
            </div>
          </motion.div>
        </div>
      </Section>

    </>
  );
};

export default Hero;
