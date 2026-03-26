'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

const cases = [
  {
    client: "National Removal Company",
    metric: "+37%",
    metricLabel: "Bookings",
    title: "AI Lead System",
    description: "Implemented an automated lead qualification bot that engages instantly, saving hours of manual follow-up and capturing leads 24/7.",
    stats: ["Revenue ↑ 22%", "Missed calls ↓ 89%", "Conversion rate ↑ 37%"]
  },
  {
    client: "E-Commerce Brand",
    metric: "3.2x",
    metricLabel: "ROAS",
    title: "Predictive Analytics",
    description: "Built a custom machine learning model to predict customer churn and optimize ad spend allocation in real-time.",
    stats: ["CPA ↓ 41%", "LTV ↑ 18%", "ROAS ↑ 3.2x"]
  }
];

export function CaseStudies() {
  return (
    <section id="results" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-dark-blue mb-6 tracking-tight">Proven Results</h2>
            <p className="text-lg text-dark-blue/70">
              Don't just take our word for it. See how our data-driven systems have transformed operations and accelerated growth for our clients.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((study, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="group relative bg-white rounded-[2rem] p-8 md:p-10 border border-dark-blue/5 overflow-hidden shadow-xl shadow-dark-blue/5"
            >
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0">
                <ArrowUpRight className="w-12 h-12 text-accent-blue/20" />
              </div>
              
              <div className="inline-flex items-center space-x-2 text-sm font-bold text-accent-blue mb-6 uppercase tracking-wider">
                <span>{study.client}</span>
              </div>
              
              <div className="flex items-baseline space-x-2 mb-6">
                <span className="text-6xl font-extrabold text-dark-blue tracking-tighter">{study.metric}</span>
                <span className="text-xl font-medium text-dark-blue/50">{study.metricLabel}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-dark-blue mb-4">{study.title}</h3>
              <p className="text-dark-blue/70 mb-8 leading-relaxed">
                {study.description}
              </p>
              
              <div className="space-y-3 pt-6 border-t border-dark-blue/10">
                {study.stats.map((stat, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-accent-blue" />
                    <span className="text-dark-blue font-medium">{stat}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
