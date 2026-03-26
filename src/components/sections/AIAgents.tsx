'use client';

import { motion } from 'framer-motion';
import { Bot, MessageSquare, LineChart, Zap } from 'lucide-react';

const agents = [
  {
    name: "AI Receptionist",
    role: "Customer Support",
    icon: <MessageSquare className="w-5 h-5 text-white" />,
    color: "bg-blue-500",
    features: ["24/7 Availability", "Natural Language Q&A", "Appointment Booking"]
  },
  {
    name: "Lead Qualifier",
    role: "Sales Automation",
    icon: <Zap className="w-5 h-5 text-white" />,
    color: "bg-orange-500",
    features: ["Instant Lead Scoring", "CRM Integration", "Follow-up Cadences"]
  },
  {
    name: "Data Analyst",
    role: "Business Intelligence",
    icon: <LineChart className="w-5 h-5 text-white" />,
    color: "bg-indigo-500",
    features: ["Automated Reporting", "Anomaly Detection", "Predictive Insights"]
  }
];

export function AIAgents() {
  return (
    <section id="agents" className="py-24 bg-dark-blue relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,_#3A78F2_0%,_transparent_40%)] opacity-20" />
      <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_100%,_#F5F1E8_0%,_transparent_30%)] opacity-5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-8">
              <Bot className="w-4 h-4 text-accent-blue" />
              <span className="text-sm font-medium text-cream">Next-Gen Automation</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              Hire <span className="text-accent-blue">Digital Workers</span> That Never Sleep.
            </h2>
            <p className="text-lg text-cream/70 mb-10 leading-relaxed">
              Deploy specialized AI agents designed to handle your most time-consuming operations. Highly configurable, deeply integrated, and unbeatably efficient.
            </p>
            
            <div className="space-y-6">
              {agents.map((agent, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="flex items-start space-x-4 bg-white/5 p-4 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className={`mt-1 flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg ${agent.color}`}>
                    {agent.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">{agent.name}</h4>
                    <p className="text-sm text-accent-blue font-medium mb-3 uppercase tracking-wide">{agent.role}</p>
                    <div className="flex flex-wrap gap-2">
                      {agent.features.map((feature, i) => (
                        <span key={i} className="text-xs bg-dark-blue/50 text-cream/80 px-2.5 py-1 rounded-md border border-white/10">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative h-[500px] lg:h-[600px] flex items-center justify-center">
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-md aspect-square rounded-full border border-white/10 flex items-center justify-center p-8 bg-gradient-to-tr from-white/5 to-transparent"
            >
              <div className="absolute inset-0 rounded-full border border-accent-blue/20 animate-spin-slow" />
              <div className="absolute inset-8 rounded-full border border-white/5 animate-spin-slow-reverse" />
              
              <div className="w-32 h-32 rounded-full bg-accent-blue blur-2xl opacity-40 absolute"></div>
              <div className="relative bg-dark-blue/90 border border-white/20 p-8 rounded-3xl backdrop-blur-xl shadow-2xl z-10 text-center">
                <Bot className="w-16 h-16 text-accent-blue mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Revena Core</h3>
                <p className="text-sm text-cream/60">System Online</p>
                <div className="mt-6 flex justify-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" style={{ animationDelay: '200ms' }}></span>
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" style={{ animationDelay: '400ms' }}></span>
                </div>
              </div>

              {/* Orbital elements */}
              <div className="absolute top-0 right-1/4 w-14 h-14 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 flex items-center justify-center shadow-lg transform -rotate-12">
                <MessageSquare className="w-6 h-6 text-accent-blue" />
              </div>
              <div className="absolute bottom-1/4 left-0 w-16 h-16 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 flex items-center justify-center shadow-lg transform rotate-12">
                <LineChart className="w-7 h-7 text-accent-blue" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
