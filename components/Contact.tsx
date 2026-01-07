
import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const whatsappNumber = "+447398269730";
  const email = "revenaintelligence.uk@gmail.com";
  const whatsappMessage = encodeURIComponent("Hi Revena Intelligence 👋 I’m interested in AI automation / website services and would like to learn more.");
  const whatsappLink = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${whatsappMessage}`;

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="glass border-white/10 rounded-[2.5rem] p-8 md:p-16 flex flex-col lg:flex-row gap-16 overflow-hidden relative shadow-2xl">
          {/* Subtle light leak effect */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 blur-[100px] pointer-events-none" />

          <div className="flex-1 space-y-8">
            <div>
              <h2 className="text-sm font-mono tracking-widest text-sky-400 uppercase mb-4">Contact Us</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
                Ready to evolve?
              </h3>
              <p className="text-xl text-slate-400 leading-relaxed max-w-lg">
                Let's discuss how AI can transform your business. Reach out via WhatsApp for the fastest response.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 rounded-2xl glass hover:bg-sky-500/10 border-white/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-mono uppercase tracking-widest mb-1">WhatsApp (Preferred)</p>
                  <p className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors">+44 7398 269 730</p>
                </div>
              </a>

              <a
                href={`mailto:${email}`}
                className="group flex items-center gap-4 p-4 md:p-5 rounded-2xl glass hover:bg-sky-500/10 border-white/5 transition-all duration-300"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform flex-shrink-0">
                  <Mail className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-500 font-mono uppercase tracking-widest mb-1">Email</p>
                  <p className="text-sm md:text-lg font-semibold text-white group-hover:text-sky-400 transition-colors break-all">{email}</p>
                </div>
              </a>
            </div>
          </div>

          <div className="flex-1 glass bg-white/[0.02] border-white/5 rounded-3xl p-8 flex flex-col justify-between">
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-white">The Future is Intelligent</h4>
              <p className="text-slate-400">
                Businesses that embrace AI today set the pace for their industry tomorrow. We help you lead that charge.
              </p>
            </div>

            <div className="mt-12 space-y-4">
              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                <span>Custom AI Strategy</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                <span>Zero Downtime Integration</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                <span>Security First Architecture</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
