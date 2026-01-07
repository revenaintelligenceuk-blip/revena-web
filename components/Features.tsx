
import React from 'react';
import { Bot, Layers, Database, MonitorSmartphone, CheckCircle2 } from 'lucide-react';

const featureDetails = [
  {
    category: "AI Automation",
    icon: Bot,
    description: "End-to-end workflow orchestration designed to eliminate manual bottlenecks.",
    points: [
      "Autonomous Agent Swarms",
      "Dynamic Process Logic",
      "Self-Correcting Workflows",
      "Legacy System Automation"
    ],
    color: "text-sky-400"
  },
  {
    category: "AI Integrations",
    icon: Layers,
    description: "Connect the world's most powerful LLMs directly into your business DNA.",
    points: [
      "Gemini & Claude Ecosystems",
      "Seamless CRM Syncing",
      "Real-time Data Streams",
      "Custom API Bridges"
    ],
    color: "text-indigo-400"
  },
  {
    category: "Custom AI Systems",
    icon: Database,
    description: "Proprietary intelligence layers built on your private data with security as priority.",
    points: [
      "Fine-tuned LLM Instances",
      "Vector Database Architecture",
      "Private On-Prem Deployment",
      "Custom NLP Engines"
    ],
    color: "text-emerald-400"
  },
  {
    category: "Modern Web Systems",
    icon: MonitorSmartphone,
    description: "High-performance digital experiences that serve as the interface for your AI.",
    points: [
      "Next.js Speed Optimization",
      "AI-Generated Personalization",
      "Interactive Dashboarding",
      "Responsive Fluid Design"
    ],
    color: "text-cyan-400"
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-mono tracking-widest text-sky-400 uppercase mb-4">The Infrastructure of Intelligence</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1]">
              Engineered for <br />
              <span className="text-gradient">Unrivaled Performance.</span>
            </h3>
          </div>
          <p className="text-slate-400 max-w-sm text-lg font-light border-l border-white/10 pl-6 hidden lg:block">
            Our systems don't just work; they evolve. We build technical foundations that scale with your ambitions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {featureDetails.map((f, i) => (
            <div 
              key={i} 
              className="group glass border-white/5 p-8 md:p-12 rounded-[2.5rem] hover:bg-white/[0.03] transition-all duration-700 relative overflow-hidden"
            >
              {/* Subtle accent glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-8">
                  <div className={`p-4 rounded-2xl bg-white/5 ${f.color} border border-white/5`}>
                    <f.icon className="w-8 h-8" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mt-2">v4.0 Protocol</span>
                </div>

                <h4 className="text-2xl font-bold text-white mb-4">{f.category}</h4>
                <p className="text-slate-400 mb-8 leading-relaxed font-light italic">
                  "{f.description}"
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 mt-auto">
                  {f.points.map((point, pi) => (
                    <div key={pi} className="flex items-center gap-3 group/item">
                      <CheckCircle2 className={`w-4 h-4 ${f.color} opacity-40 group-hover/item:opacity-100 transition-opacity`} />
                      <span className="text-sm text-slate-300 font-medium">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
