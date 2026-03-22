import Logo from "./Logo";

export const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="py-32 px-6 md:px-12 lg:px-24 bg-navy text-cream relative overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-5 pointer-events-none" />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-16 md:space-y-0 relative z-10">
        <div className="space-y-6">
          <Logo className="scale-110 origin-left" onClick={scrollToTop} light />
          <p className="text-[11px] font-sans font-bold uppercase tracking-[0.4em] text-cream/30 max-w-xs leading-relaxed">
            Strategic Revenue Recovery for UK Service Businesses.
          </p>
          <div className="flex items-center space-x-3 pt-4">
            <div className="px-3 py-1 flex items-center space-x-2 rounded-full border border-cream/10 bg-cream/5 backdrop-blur-sm">
               <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse" />
               <span className="text-[8px] font-mono tracking-widest uppercase text-cream/60">Systems Active</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-20 text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-cream/50">
          <div className="flex flex-col space-y-4">
            <span className="text-cream/20 mb-2">Navigation</span>
            <a href="#problem" className="hover:text-copper transition-colors">The Problem</a>
            <a href="#framework" className="hover:text-copper transition-colors">Framework</a>
            <a href="#impact" className="hover:text-copper transition-colors">Impact</a>
            <a href="#audit" className="hover:text-copper transition-colors">Audit</a>
            <a href="#faq" className="hover:text-copper transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-copper transition-colors">Contact</a>
          </div>
          <div className="flex flex-col space-y-4">
            <span className="text-cream/20 mb-2">Legal</span>
            <a href="#privacy" className="hover:text-copper transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-copper transition-colors">Terms of Service</a>
            <a href="#confidentiality" className="hover:text-copper transition-colors">Confidentiality</a>
          </div>
          <div className="flex flex-col space-y-4">
            <span className="text-cream/20 mb-2">Contact</span>
            <span className="text-cream/60">London, UK</span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-24 mt-24 border-t border-cream-light/5 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 relative z-10">
        <p className="text-[9px] font-sans font-bold uppercase tracking-[0.5em] text-cream/20">© 2026 RVNA Intelligence. All Rights Reserved.</p>
        <div className="flex items-center space-x-8 text-[9px] font-sans font-bold uppercase tracking-[0.5em] text-cream/20">
          <span>Strategic Advisory</span>
          <div className="w-1 h-1 bg-cream-light/10 rounded-full" />
          <span>Operational Excellence</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
