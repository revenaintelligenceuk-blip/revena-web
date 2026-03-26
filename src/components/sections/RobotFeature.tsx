'use client';

import React from 'react';
import { motion } from 'framer-motion';

const RobotFeature = () => {
  return (
    <section id="framework" className="py-24 bg-cream overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="bg-white border border-navy/5 p-12 md:p-24 relative overflow-hidden flex flex-col items-center text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-navy/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-copper/5 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2" />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10 max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-8 italic">Autonomous Intelligence.</h2>
            <p className="text-navy/60 mb-12 leading-relaxed">
              Our Digital Workers handle the repetitive, high-volume tasks that burn out your team. Lead qualification, scheduling, and data enrichment—handled with human-like precision at scale.
            </p>
            
            <div className="flex justify-center">
              <div className="w-32 h-32 relative">
                <div className="absolute inset-0 border-2 border-dashed border-navy/10 rounded-full animate-spin-slow" />
                <div className="absolute inset-4 border border-copper/20 rounded-full animate-spin-slow-reverse" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-navy rounded-full shadow-xl flex items-center justify-center">
                    <div className="w-2 h-2 bg-copper rounded-full animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RobotFeature;
