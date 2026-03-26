'use client';

import React from 'react';
import { motion } from 'motion/react';
import { AlertCircle, Clock, Zap, ShieldAlert } from 'lucide-react';
import Section from '@/components/Section';

const Problem = () => {
  const problems = [
    {
      title: "Silent Attrition",
      desc: "28% of inbound leads are lost to missed calls and delayed responses.",
      icon: Clock
    },
    {
      title: "Broken Follow-up",
      desc: "80% of sales require 5 follow-ups; 44% of businesses give up after 1.",
      icon: AlertCircle
    },
    {
      title: "Human Bottlenecks",
      desc: "Response times average 42 hours; lead conversion drops 8x after 5 minutes.",
      icon: Zap
    }
  ];

  return (
    <Section id="problem" muted>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-12">
          <div className="space-y-6">
            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-navy/30">The Current Reality</span>
            <h2 className="text-6xl md:text-7xl font-serif font-bold text-navy leading-tight">
              The High Cost of <br />
              <span className="italic font-normal text-gradient">Operational Friction.</span>
            </h2>
            <p className="text-xl text-grey-body/80 leading-relaxed font-sans font-light max-w-xl">
              Most premium service businesses operate with invisible revenue leaks. Slow systems and manual processes are costing you more than just time—they're costing you market share.
            </p>
          </div>

          <div className="space-y-8">
            {problems.map((problem, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-6 group"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-navy/5 text-navy group-hover:bg-navy group-hover:text-cream transition-all duration-500 flex-shrink-0">
                  <problem.icon className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xs font-sans font-bold uppercase tracking-widest text-navy">{problem.title}</h3>
                  <p className="text-sm text-grey-body/60 leading-relaxed">{problem.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-navy/5 rotate-2 translate-x-4 translate-y-4" />
          <div className="relative bg-white p-12 lg:p-16 space-y-12 border border-navy/5 shadow-premium">
            <div className="flex items-center space-x-4 text-red-500/80">
              <ShieldAlert className="w-6 h-6" />
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em]">Leakage Alert</span>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-2">
                <div className="flex justify-between text-[9px] font-sans font-bold uppercase tracking-widest text-navy/40">
                  <span>Lead Abandonment Rate</span>
                  <span>High Risk</span>
                </div>
                <div className="h-1.5 bg-navy/5 w-full">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "74%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-red-500/40" 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-[9px] font-sans font-bold uppercase tracking-widest text-navy/40">
                  <span>Information Decay</span>
                  <span>Critical</span>
                </div>
                <div className="h-1.5 bg-navy/5 w-full">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "91%" }}
                    transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                    className="h-full bg-red-500/60" 
                  />
                </div>
              </div>
            </div>

            <p className="text-[10px] text-navy/40 uppercase font-sans font-bold tracking-[0.2em] leading-relaxed italic border-l-2 border-copper/30 pl-6">
              "Every minute a lead waits is a minute they spend researching your competitor."
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Problem;
