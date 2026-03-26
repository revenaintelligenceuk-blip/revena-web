'use client';

import { motion } from 'framer-motion';
import { BarChart3, Brain, Workflow, LineChart, Network } from 'lucide-react';

const services = [
  {
    title: "Data Analysis & Dashboards",
    description: "Transform raw data into beautiful, actionable insights. We build custom dashboards that tell your business's story.",
    icon: <BarChart3 className="h-6 w-6 text-accent-blue" />,
  },
  {
    title: "Predictive Modeling",
    description: "Forecast trends, customer behavior, and revenue. Stay ahead of the market with advanced machine learning models.",
    icon: <LineChart className="h-6 w-6 text-accent-blue" />,
  },
  {
    title: "AI Automation",
    description: "Replace manual, repetitive tasks with intelligent workflows. Save thousands of hours with custom AI agents.",
    icon: <Workflow className="h-6 w-6 text-accent-blue" />,
  },
  {
    title: "Business Intelligence Systems",
    description: "Centralize your disparate data sources into a single source of truth for reliable decision-making.",
    icon: <Brain className="h-6 w-6 text-accent-blue" />,
  },
  {
    title: "Custom Data Pipelines",
    description: "Robust, scalable, and secure ETL pipelines designed to handle millions of rows without breaking a sweat.",
    icon: <Network className="h-6 w-6 text-accent-blue" />,
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-dark-blue mb-6 tracking-tight">Services That Scale</h2>
          <p className="text-lg text-dark-blue/70">
            We don't just build models; we build revenue engines. Our suite of data science services is tailored for high-growth companies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-cream/50 border border-dark-blue/5 rounded-2xl p-8 hover:shadow-xl hover:shadow-dark-blue/5 hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
            >
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-3">{service.title}</h3>
              <p className="text-dark-blue/70 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
