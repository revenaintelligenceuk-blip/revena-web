
import React from 'react';
import { MessageSquare } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
  const whatsappNumber = "+447398269730";
  const whatsappMessage = encodeURIComponent("Hi Revena Intelligence 👋 I’m interested in AI automation / website services and would like to learn more.");
  const whatsappLink = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${whatsappMessage}`;

  return (
    <div className="fixed bottom-8 right-8 z-50 group">
      {/* Dynamic Glow */}
      <div className="absolute -inset-2 bg-emerald-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <a 
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-16 h-16 bg-emerald-500 text-white rounded-full shadow-2xl shadow-emerald-500/30 hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <MessageSquare className="w-8 h-8 fill-current" />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-4 px-4 py-2 bg-slate-900 border border-white/10 rounded-xl text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all pointer-events-none">
          Message us on WhatsApp
        </div>
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
