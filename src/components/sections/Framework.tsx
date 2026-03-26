'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Search, PenTool, Cpu, BarChart3, Binary, Workflow } from 'lucide-react';
import Section from '@/components/Section';

const Framework = () => {
  const pillars = [
    {
      title: "Audit & Mapping",
      subtitle: "RECONNAISSANCE",
      desc: "Comprehensive diagnostic of every customer touchpoint and technical bottleneck.",
      icon: Search
    },
    {
      title: "Bespoke Logic",
      subtitle: "ARCHITECTURE",
      desc: "Custom-coding rational AI ecosystems tailored to your unique operational DNA.",
      icon: Binary
    },
    {
      title: "Autonomous Flow",
      subtitle: "IMPLEMENTATION",
      desc: "Deploying self-correcting systems that process leads, schedule, and sync data 24/7.",
      icon: Workflow
    }
  ];

  return (
    <Section id="framework">
      <div className="text-center max-w-4xl mx-auto space-y-12 mb-32">
        <div className="space-y-6">
          <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-navy/30">The Strategy Methodology</span>
          <h2 className="text-6xl md:text-8xl font-serif font-bold text-navy leading-tight">
            The RVNA <br />
            <span className="italic font-normal text-gradient">Framework.</span>
          </h2>
          <p className="text-xl text-grey-body/80 leading-relaxed font-sans font-light max-w-2xl mx-auto">
            Our proprietary methodology transforms fragmented operations into a unified, high-performance revenue engine.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
        {pillars.map((pillar, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center space-y-8 group"
          >
            <div className="relative">
              <div className="w-24 h-24 border border-navy/5 flex items-center justify-center group-hover:bg-navy group-hover:text-cream transition-all duration-700">
                <pillar.icon className="w-8 h-8" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-cream/80 backdrop-blur-sm border border-navy/5 flex items-center justify-center text-[10px] font-sans font-bold text-navy/40">
                0{i + 1}
              </div>
            </div>
            
            <div className="space-y-4">
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-copper/60">{pillar.subtitle}</span>
              <h3 className="text-2xl font-serif font-bold text-navy">{pillar.title}</h3>
              <p className="text-sm text-grey-body/60 leading-relaxed font-sans max-w-[280px]">
                {pillar.desc}
              </p>
            </div>
            
            <div className="w-[1px] h-12 bg-gradient-to-b from-copper/40 to-transparent scale-y-0 group-hover:scale-y-100 transition-transform duration-700" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Framework;
