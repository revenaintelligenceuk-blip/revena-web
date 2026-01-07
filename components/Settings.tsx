
import React from 'react';
import { ArrowLeft, Mail, MessageSquare, Phone, ExternalLink } from 'lucide-react';

interface SettingsProps {
  onBack: () => void;
}

const Settings: React.FC<SettingsProps> = ({ onBack }) => {
  const whatsappNumber = "+44 7398 269 730";
  const email = "revenaintelligence.uk@gmail.com";
  const whatsappLink = "https://wa.me/447398269730?text=Hi%20Revena%20Intelligence%20👋%20I’m%20interested%20in%20AI%20automation%20/%20website%20services%20and%20would%20like%20to%20learn%20more.";

  return (
    <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
      <div className="mb-16">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6 group cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-mono uppercase tracking-widest">Return Home</span>
        </button>
        <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
          Customer <span className="text-gradient">Service</span>
        </h1>
        <p className="mt-4 text-slate-400 text-lg max-w-xl">
          Direct lines to our specialist team. No bots, just intelligent solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* WhatsApp Card */}
        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative glass p-10 rounded-[2.5rem] border-white/5 hover:border-emerald-500/30 transition-all duration-500 flex flex-col items-center text-center cursor-pointer overflow-hidden"
        >
          <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10 w-20 h-20 rounded-3xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-emerald-500/10">
            <MessageSquare className="w-10 h-10 fill-current" />
          </div>
          <h2 className="relative z-10 text-2xl font-bold text-white mb-2">WhatsApp Direct</h2>
          <p className="relative z-10 text-slate-400 mb-8 font-mono text-sm uppercase tracking-widest">{whatsappNumber}</p>
          <div className="relative z-10 flex items-center gap-2 px-8 py-4 bg-emerald-500 text-white rounded-2xl font-bold uppercase tracking-widest text-xs group-hover:bg-emerald-400 transition-colors shadow-xl shadow-emerald-500/20">
            Start Conversation <ExternalLink className="w-3.5 h-3.5" />
          </div>
        </a>

        {/* Email Card */}
        <a 
          href={`mailto:${email}`}
          className="group relative glass p-10 rounded-[2.5rem] border-white/5 hover:border-sky-500/30 transition-all duration-500 flex flex-col items-center text-center cursor-pointer overflow-hidden"
        >
          <div className="absolute inset-0 bg-sky-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10 w-20 h-20 rounded-3xl bg-sky-500/10 flex items-center justify-center text-sky-400 mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-sky-500/10">
            <Mail className="w-10 h-10" />
          </div>
          <h2 className="relative z-10 text-2xl font-bold text-white mb-2">Email Nexus</h2>
          <p className="relative z-10 text-slate-400 mb-8 font-mono text-xs lowercase">{email}</p>
          <div className="relative z-10 flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl font-bold uppercase tracking-widest text-xs transition-colors">
            Send Message
          </div>
        </a>
      </div>

      <div className="mt-12 glass p-8 rounded-[2rem] border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-6">
          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-slate-400">
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-0.5">Direct Voice Support</p>
            <p className="text-xl font-bold text-white">{whatsappNumber}</p>
          </div>
        </div>
        <div className="h-px md:h-8 w-12 md:w-px bg-white/10" />
        <div className="text-center md:text-right">
          <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-0.5">Service Hours</p>
          <p className="text-white font-medium">Global Support (GMT+0)</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
