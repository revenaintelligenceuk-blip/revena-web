'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Cpu, CheckCircle2 } from 'lucide-react';

const HowWeHelp = () => {
  const steps = [
    {
      title: "Discovery",
      desc: "We analyze your existing lead flow to identify where revenue is leaking.",
      icon: Shield
    },
    {
      title: "Strategy",
      desc: "Custom AI deployment strategy tailored to your specific service mechanics.",
      icon: Target
    },
    {
      title: "Execution",
      desc: "Real-time systems that capture, qualify, and book leads 24/7.",
      icon: Cpu
    }
  ];

  return (
    <section id="problem" className="py-32 bg-cream border-y border-navy/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-24 items-center">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-navy mb-8 leading-tight">
              A Strategic <br />
              <span className="italic font-normal">Revenue Framework.</span>
            </h2>
            <div className="space-y-12">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-white border border-navy/5 shadow-sm group-hover:border-navy/20 transition-all">
                    <step.icon className="w-6 h-6 text-navy/60 group-hover:text-navy" />
                  </div>
                  <div>
                    <h5 className="text-xs font-sans font-bold text-navy uppercase tracking-[0.3em] mb-2">{step.title}</h5>
                    <p className="text-navy/60 text-sm leading-relaxed max-w-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2 bg-navy p-12 md:p-24 relative overflow-hidden group">
            <div className="absolute inset-0 bg-dot-grid opacity-10" />
            <div className="relative z-10">
              <h3 className="text-3xl font-serif font-bold text-white mb-6">Built for scale.</h3>
              <p className="text-white/60 mb-12 leading-relaxed">
                We don't just add tools; we architect systems that grow with your business. Our focus is pure ROI and operational excellence.
              </p>
              <div className="inline-flex items-center space-x-4 px-6 py-3 border border-white/20 text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-white hover:bg-white hover:text-navy transition-all cursor-pointer">
                <span>View Framework</span>
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeHelp;
