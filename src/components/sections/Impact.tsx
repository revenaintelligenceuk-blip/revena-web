'use client';

import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Users, Zap, CheckCircle2 } from 'lucide-react';
import Section from '@/components/Section';

const Impact = () => {
  const metrics = [
    {
      label: "Revenue Recovery",
      value: "20-45%",
      desc: "Average increase in captured inbound revenue within 90 days of implementation.",
      icon: TrendingUp
    },
    {
      label: "System Efficiency",
      value: "98%",
      desc: "Reduction in manual administrative overhead through autonomous lead processing.",
      icon: Zap
    },
    {
      label: "Lead Capture",
      value: "24/7",
      desc: "Infinite scalability of inbound processing without increasing headcount.",
      icon: Users
    }
  ];

  return (
    <Section id="impact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-12">
          <div className="space-y-6">
            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-navy/30">Quantifying the Opportunity</span>
            <h2 className="text-6xl md:text-7xl font-serif font-bold text-navy leading-tight">
              Measurable <br />
              <span className="italic font-normal text-gradient">Bottom-Line Growth.</span>
            </h2>
            <p className="text-xl text-grey-body/80 leading-relaxed font-sans font-light max-w-xl">
              We don't just build systems; we deliver measurable financial outcomes. Our implementations are designed to pay for themselves within the first 60 days.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {metrics.map((metric, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-8 group"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-navy/5 text-navy group-hover:bg-navy group-hover:text-cream transition-all duration-500 flex-shrink-0">
                  <metric.icon className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-baseline space-x-4">
                    <span className="text-4xl font-serif font-bold text-navy">{metric.value}</span>
                    <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-navy/40">{metric.label}</span>
                  </div>
                  <p className="text-sm text-grey-body/60 leading-relaxed">{metric.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-4 bg-navy/5 -rotate-1 group-hover:rotate-0 transition-transform duration-700 pointer-events-none" />
          <div className="relative bg-navy p-12 lg:p-16 space-y-12 shadow-premium border border-navy shadow-2xl">
            <div className="absolute top-0 right-0 p-8">
              <div className="w-16 h-16 border border-cream/10 flex items-center justify-center">
                <div className="w-2 h-2 bg-copper animate-ping rounded-full" />
              </div>
            </div>
            
            <div className="space-y-4">
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-cream/40">Client Result: London Aesthetics Clinic</span>
              <h3 className="text-3xl font-serif text-cream leading-tight">£440,000 Annual <br />Revenue Recovery.</h3>
            </div>

            <div className="space-y-8">
              <div className="p-8 bg-cream/[0.03] border border-cream/5 space-y-4">
                <div className="flex justify-between items-center text-[10px] font-sans font-bold uppercase tracking-widest">
                  <span className="text-cream/40">Before RVNA Implementation</span>
                  <span className="text-red-400">28% Leakage</span>
                </div>
                <div className="h-1 bg-cream/10 w-full relative overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "28%" }}
                    transition={{ duration: 1.5 }}
                    className="absolute top-0 left-0 h-full bg-red-400" 
                  />
                </div>
              </div>

              <div className="p-8 bg-copper/[0.05] border border-copper/10 space-y-4">
                <div className="flex justify-between items-center text-[10px] font-sans font-bold uppercase tracking-widest">
                  <span className="text-copper/60">After RVNA Implementation</span>
                  <span className="text-emerald-400">98% Captured</span>
                </div>
                <div className="h-1 bg-cream/10 w-full relative overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "98%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="absolute top-0 left-0 h-full bg-emerald-400" 
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4 border-t border-cream/5 pt-10">
              <div className="flex items-center space-x-3 text-cream/60">
                <CheckCircle2 className="w-4 h-4 text-copper" />
                <span className="text-xs font-sans">Eliminated missed-call lead drop-off</span>
              </div>
              <div className="flex items-center space-x-3 text-cream/60 text-xs font-sans">
                <CheckCircle2 className="w-4 h-4 text-copper" />
                <span>Instant automated response & booking</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Impact;
