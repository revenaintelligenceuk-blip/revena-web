
import React from 'react';
import { ArrowLeft, Zap, Search, Video, Monitor, Cpu, Network, ShieldCheck } from 'lucide-react';

interface DashboardProps {
  onBack: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onBack }) => {
  const offerings = [
    {
      title: "AI Automation",
      desc: "End-to-end workflow orchestration designed to eliminate manual bottlenecks and operational drag.",
      icon: Cpu,
      tag: "Autonomous"
    },
    {
      title: "AI Integrations",
      desc: "Seamlessly connecting the world's most powerful LLMs directly into your business DNA and existing stack.",
      icon: Network,
      tag: "Connected"
    },
    {
      title: "AI Audits",
      desc: "A deep-dive technical analysis of your current business infrastructure to identify automation high-ground.",
      icon: Search,
      tag: "Analytical"
    },
    {
      title: "AI Advertisements",
      desc: "Strategic, high-impact short-form advertisements for businesses, crafted using state-of-the-art generative media.",
      icon: Video,
      tag: "Creative"
    },
    {
      title: "AI-Powered Websites",
      desc: "High-performance digital experiences that serve as the intelligent interface for your brand and operations.",
      icon: Monitor,
      tag: "Interface"
    },
    {
      title: "Custom AI Systems",
      desc: "Proprietary intelligence layers built on private data with security-first architecture for enterprise scaling.",
      icon: ShieldCheck,
      tag: "Bespoke"
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
        <div>
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-4 group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-mono uppercase tracking-widest">Return Home</span>
          </button>
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">Our <span className="text-gradient">Services</span></h1>
          <p className="mt-4 text-slate-400 text-lg max-w-xl">
            We architect the infrastructure of modern intelligence.
          </p>
        </div>
        
        <div className="flex items-center gap-3 px-4 py-2 bg-sky-500/10 border border-sky-500/20 rounded-full">
          <div className="w-2 h-2 bg-sky-500 rounded-full animate-pulse" />
          <span className="text-sky-400 text-[10px] font-mono font-bold uppercase tracking-widest">Protocol v4.2 Online</span>
        </div>
      </div>

      <div className="space-y-6">
        {offerings.map((service, i) => (
          <div 
            key={i} 
            className="group relative glass p-8 md:p-10 rounded-[2rem] border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden"
          >
            {/* Subtle background glow on hover */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-sky-400 group-hover:scale-110 group-hover:bg-sky-500/10 transition-all duration-500">
                <service.icon className="w-8 h-8" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  <span className="text-[10px] font-mono text-slate-600 border border-white/10 px-2 py-0.5 rounded uppercase tracking-widest">
                    {service.tag}
                  </span>
                </div>
                <p className="text-slate-400 leading-relaxed max-w-2xl italic">
                  "{service.desc}"
                </p>
              </div>

              <div className="flex items-center gap-2 text-sky-500 font-mono text-xs uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">
                <Zap className="w-3 h-3 fill-current" />
                Active Offering
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 pt-12 border-t border-white/5 text-center">
        <p className="text-slate-500 font-mono text-xs uppercase tracking-[0.3em]">
          Revena Intelligence — Built for the future.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
