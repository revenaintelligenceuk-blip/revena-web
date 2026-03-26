'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Search, Cpu, Workflow, BarChart2 } from 'lucide-react';
import Section from '@/components/Section';

const Process = () => {
  const steps = [
    {
      title: "Diagnostic Audit",
      desc: "Mapping every leak in your client acquisition pipeline.",
      icon: Search
    },
    {
      title: "Custom Logic",
      desc: "Building the AI infrastructure to bridge those gaps.",
      icon: Cpu
    },
    {
      title: "Flow Deployment",
      desc: "Infinite scalability with autonomous follow-up.",
      icon: Workflow
    },
    {
      title: "Yield Optimisation",
      desc: "Continuous refinement of system performance.",
      icon: BarChart2
    }
  ];

  return (
    <Section id="process" dark>
      <div className="text-center max-w-4xl mx-auto space-y-12 mb-32">
        <div className="space-y-6">
          <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-cream/30">Operational Evolution</span>
          <h2 className="text-6xl md:text-8xl font-serif font-bold text-cream leading-tight">
            From Audit to <br />
            <span className="italic font-normal text-gradient-copper">Excellence.</span>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="p-10 border border-cream/5 bg-white/[0.02] space-y-8 relative group hover:border-copper/20 transition-all duration-700"
          >
            <div className="w-12 h-12 border border-cream/10 flex items-center justify-center text-cream/20 group-hover:text-copper group-hover:border-copper/30 transition-all duration-700">
              <step.icon className="w-5 h-5" />
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-serif font-bold text-cream">{step.title}</h3>
              <p className="text-xs text-cream/40 leading-relaxed font-sans tracking-wide">
                {step.desc}
              </p>
            </div>
            <div className="absolute top-0 right-0 p-8 text-[9px] font-sans font-bold text-cream/10">
              0{i + 1}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Process;
