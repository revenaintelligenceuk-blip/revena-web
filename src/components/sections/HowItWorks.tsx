'use client';

import { motion } from 'framer-motion';
import { Search, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Audit & Strategy",
    description: "We analyze your current Data & AI maturity, identify bottlenecks, and build a customized roadmap for revenue-generating AI solutions.",
    icon: <Search className="w-8 h-8 text-accent-blue" />
  },
  {
    number: "02",
    title: "Build & Integrate",
    description: "Our engineering team develops reliable models, custom pipelines, and automated agents seamlessly integrated into your existing tech stack.",
    icon: <Code2 className="w-8 h-8 text-accent-blue" />
  },
  {
    number: "03",
    title: "Scale & Optimize",
    description: "We don't just deploy and leave. We monitor, train, and optimize the systems to ensure long-term ROI and scalable growth.",
    icon: <Rocket className="w-8 h-8 text-accent-blue" />
  }
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-dark-blue mb-6 tracking-tight">How It Works</h2>
          <p className="text-lg text-dark-blue/70">
            A proven, frictionless process from initial discovery to deployed intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 relative">
          
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-[4.5rem] left-24 right-24 h-[2px] bg-gradient-to-r from-accent-blue/0 via-accent-blue/30 to-accent-blue/0 z-0" />

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-cream border-4 border-white shadow-xl flex items-center justify-center mb-8 relative">
                <div className="absolute inset-2 border border-dashed border-accent-blue/30 rounded-full animate-spin-slow"></div>
                {step.icon}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-dark-blue text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                  {step.number}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-dark-blue mb-4">{step.title}</h3>
              <p className="text-dark-blue/70 leading-relaxed px-4 text-sm md:text-base">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
