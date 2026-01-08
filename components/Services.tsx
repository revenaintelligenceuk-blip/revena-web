
import React from 'react';
import { Cpu, Globe, Zap, Network, Workflow } from 'lucide-react';

const services = [
  {
    title: "AI Automation",
    desc: "Deploy autonomous agents that handle repetitive tasks, freeing your team for higher-order thinking.",
    icon: Cpu,
    color: "from-sky-500 to-blue-600"
  },
  {
    title: "AI Integrations",
    desc: "Seamlessly connect Gemini, Claude, or GPT models into your existing CRM and software stack.",
    icon: Network,
    color: "from-indigo-500 to-purple-600"
  },
  {
    title: "Custom AI Systems",
    desc: "Proprietary AI architectures designed specifically for your business logic and data security.",
    icon: Zap,
    color: "from-blue-400 to-emerald-400"
  },
  {
    title: "Modern Web Systems",
    desc: "High-performance, AI-driven web experiences designed for conversions and premium brand positioning.",
    icon: Globe,
    color: "from-cyan-400 to-sky-500"
  },
  {
    title: "AI Workflows",
    desc: "Streamline operations with intelligent, automated decision paths that optimize efficiency and reduce manual oversight.",
    icon: Workflow,
    color: "from-violet-600 to-indigo-600"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm font-mono tracking-widest text-sky-400 uppercase mb-4">Core Capabilities</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            We build the future of <br />
            <span className="text-slate-500">autonomous operations.</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="group glass p-8 rounded-2xl hover:bg-white/[0.05] transition-all duration-500 hover:-translate-y-2 border-white/5"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-6 shadow-lg shadow-sky-500/10`}>
                <s.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors">
                {s.title}
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
