
import React from 'react';

const HowWeHelp: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-black/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-sky-500/10 blur-3xl rounded-full" />
            <div className="relative glass border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden">
               <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-sky-400" />
                    <p className="text-sky-400 font-mono text-xs uppercase tracking-widest">Growth Strategy</p>
                  </div>
                  <h4 className="text-3xl font-bold text-white leading-tight">
                    Saving Time. <br />
                    Increasing Revenue.
                  </h4>
                  <p className="text-slate-400 leading-relaxed">
                    Growth is driven by focusing on what matters. We streamline operations through strategic AI integration, ensuring your team spends time on high-value initiatives.
                  </p>
                  
                  <div className="pt-6 grid grid-cols-2 gap-8 border-t border-white/5">
                    <div>
                      <p className="text-3xl font-bold text-white mb-1">Impact</p>
                      <p className="text-xs text-slate-500 font-mono uppercase">Measurable results</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-white mb-1">Scale</p>
                      <p className="text-xs text-slate-500 font-mono uppercase">Built for expansion</p>
                    </div>
                  </div>
               </div>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-sm font-mono tracking-widest text-sky-400 uppercase mb-4">Our Approach</h2>
              <h3 className="text-4xl font-bold text-white tracking-tight mb-6">
                Custom solutions, <br />
                not templates.
              </h3>
              <p className="text-lg text-slate-400">
                Every business is unique. We dive deep into your specific needs and architect systems that solve real challenges permanently.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { step: "01", title: "Discovery", desc: "Understanding the unique mechanics of your operation." },
                { step: "02", title: "Architecture", desc: "Mapping out the AI logic and points of integration." },
                { step: "03", title: "Integration", desc: "Strategic implementation with a focus on seamless transitions." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <span className="text-2xl font-bold text-sky-500/50 font-mono">{item.step}</span>
                  <div>
                    <h5 className="text-xl font-bold text-white mb-2">{item.title}</h5>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeHelp;
