
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { 
  Cpu, Globe, Zap, Network, Bot, Layers, Database, 
  MonitorSmartphone, CheckCircle2, Mail, MessageSquare,
  ArrowLeft, Activity, Server, Users, ShieldCheck, Sliders, Bell, Shield, Monitor, Save, Settings as SettingsIcon,
  LayoutDashboard
} from 'lucide-react';

/**
 * LOGO COMPONENT
 */
const Logo = ({ className = "h-8", showText = true }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className={`flex items-center gap-3 cursor-pointer group ${className}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="relative pointer-events-none">
        <div className={`absolute -inset-2 bg-sky-500/20 blur-xl rounded-full transition-opacity duration-700 ease-out ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
        <svg viewBox="0 0 100 100" className={`h-full w-auto relative z-10 transition-all duration-700 ${isHovered ? 'scale-110 drop-shadow-[0_0_12px_rgba(56,189,248,0.4)]' : 'scale-100'}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="46" y="30" width="8" height="50" rx="4" fill="white" />
          <rect x="25" y="30" width="50" height="6" rx="3" fill="white" />
          <rect x="25" y="36" width="4" height="15" rx="2" fill="white" />
          <rect x="71" y="36" width="4" height="15" rx="2" fill="white" />
          <path d="M15 51C15 51 15 62 27 62C39 62 39 51 39 51H15Z" fill="url(#bowl-grad)" />
          <path d="M61 51C61 51 61 62 73 62C85 62 85 51 85 51H61Z" fill="url(#bowl-grad)" />
          <circle cx="50" cy="18" r="8" fill="white" />
          <circle cx="38" cy="22" r="4" fill="#38bdf8" />
          <circle cx="62" cy="22" r="4" fill="#38bdf8" />
          <defs>
            <linearGradient id="bowl-grad" x1="15" y1="51" x2="15" y2="62" gradientUnits="userSpaceOnUse"><stop stopColor="#38bdf8" /><stop offset="1" stopColor="#0ea5e9" /></linearGradient>
          </defs>
        </svg>
      </div>
      {showText && (
        <div className="flex flex-col leading-none ml-1">
          <span className={`text-xl font-bold tracking-tight transition-all duration-500 ${isHovered ? 'text-sky-400' : 'text-white'}`}>REVENA</span>
          <span className={`text-[10px] tracking-[0.2em] font-medium transition-all duration-500 ${isHovered ? 'text-slate-200' : 'text-slate-400'}`}>INTELLIGENCE</span>
        </div>
      )}
    </div>
  );
};

/**
 * HEADER COMPONENT
 */
const Header = ({ scrolled, currentView, setView }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Globe },
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'settings', label: 'Settings', icon: SettingsIcon },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-black/50 backdrop-blur-md border-b border-white/10' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button onClick={() => setView('home')} className="cursor-pointer">
          <Logo className="h-10" />
        </button>
        
        <nav className="flex items-center gap-2 md:gap-4 bg-white/5 border border-white/10 p-1.5 rounded-full backdrop-blur-md">
          {navItems.map(item => (
            <button 
              key={item.id} 
              onClick={() => setView(item.id)} 
              className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-widest rounded-full transition-all cursor-pointer ${
                currentView === item.id 
                ? 'text-white bg-sky-500/80 shadow-[0_0_15px_rgba(56,189,248,0.3)]' 
                : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <item.icon className="w-3.5 h-3.5 pointer-events-none" />
              <span className="hidden sm:inline">{item.label}</span>
            </button>
          ))}
        </nav>

        <button 
          onClick={() => setView('dashboard')} 
          className="hidden lg:flex items-center gap-2 px-6 py-2 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full transition-all hover:bg-sky-500 hover:text-white cursor-pointer active:scale-95"
        >
          <Zap className="w-4 h-4" />
          Connect Hub
        </button>
      </div>
    </header>
  );
};

/**
 * HOME VIEW (HERO + SERVICES)
 */
const HomeView = () => (
  <div className="animate-fade-in-up">
    {/* Hero Section */}
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center pt-20 px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
        <div className="mb-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sky-400 text-[10px] font-mono tracking-[0.2em] uppercase">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
          </span>
          Intelligence as a Service
        </div>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white leading-[0.95] mb-8">
          Revena <br /><span className="text-gradient">Intelligence</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 font-medium tracking-tight max-w-2xl mb-12">
          We architect the digital nervous systems for modern enterprises.
        </p>
        <Logo className="h-40 md:h-56 opacity-20 pointer-events-none absolute -z-10 blur-sm" showText={false} />
      </div>
    </section>

    {/* Features Mini Section */}
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {[
          { t: "Autonomous Flow", d: "Zero-touch operations powered by custom AI agents.", i: Bot },
          { t: "Neural Integration", d: "Deep API synchronization with your existing stack.", i: Network },
          { t: "Predictive Scaling", d: "Systems that anticipate demand and adapt in real-time.", i: Zap }
        ].map((f, i) => (
          <div key={i} className="glass p-8 rounded-3xl border-white/5">
            <f.i className="w-10 h-10 text-sky-400 mb-6" />
            <h4 className="text-xl font-bold text-white mb-3">{f.t}</h4>
            <p className="text-slate-400 text-sm leading-relaxed">{f.d}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

/**
 * DASHBOARD VIEW
 */
const DashboardView = ({ onBack }) => {
  const metrics = [
    { l: "Compute Load", v: "42%", i: Activity, c: "text-sky-400" },
    { l: "Agent Status", v: "Active", i: Bot, c: "text-emerald-400" },
    { l: "Network Sync", v: "99.9%", i: Globe, c: "text-indigo-400" },
    { l: "System Health", v: "Optimal", i: ShieldCheck, c: "text-sky-300" }
  ];

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto animate-fade-in-up">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <button onClick={onBack} className="flex items-center gap-2 text-slate-400 hover:text-white mb-4 group cursor-pointer">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-mono uppercase tracking-widest">Return to Nexus</span>
          </button>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">System <span className="text-gradient">Dashboard</span></h1>
        </div>
        <div className="px-6 py-2 glass rounded-full flex items-center gap-3">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-xs font-mono text-slate-300 uppercase tracking-tighter">Live Connection Verified</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {metrics.map((m, i) => (
          <div key={i} className="glass p-8 rounded-3xl border-white/10 hover:border-sky-500/20 transition-all">
            <m.i className={`w-6 h-6 ${m.c} mb-6`} />
            <p className="text-3xl font-bold text-white mb-1">{m.v}</p>
            <p className="text-xs text-slate-500 font-mono uppercase tracking-widest">{m.l}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 glass p-8 rounded-[2.5rem] border-white/5">
          <h2 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
            <Activity className="w-5 h-5 text-sky-400" /> System Activity Log
          </h2>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map(n => (
              <div key={n} className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 bg-sky-500 rounded-full" />
                  <span className="text-sm text-slate-300">Neural Node #{n * 1024} Handshake Complete</span>
                </div>
                <span className="text-[10px] font-mono text-slate-600">0.00{n}ms Latency</span>
              </div>
            ))}
          </div>
        </div>
        <div className="glass p-8 rounded-[2.5rem] bg-sky-500/5 border-sky-500/10">
          <h2 className="text-xl font-bold text-white mb-6">Nexus Uplink</h2>
          <p className="text-slate-400 text-sm mb-8 italic">"Total system autonomy achieved. No manual interventions required in the last 24 cycles."</p>
          <button className="w-full py-4 bg-sky-500 text-white rounded-2xl text-xs font-bold uppercase tracking-widest cursor-pointer hover:bg-sky-400 transition-all">Re-Sync Node</button>
        </div>
      </div>
    </div>
  );
};

/**
 * SETTINGS VIEW
 */
const SettingsView = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('Security');
  const tabs = ["General", "Security", "Neural Net", "Interface"];

  return (
    <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto animate-fade-in-up">
      <button onClick={onBack} className="flex items-center gap-2 text-slate-400 hover:text-white mb-6 group cursor-pointer">
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Back Home</span>
      </button>
      <h1 className="text-5xl font-bold text-white mb-12">Configuration</h1>
      
      <div className="flex flex-col md:flex-row gap-12">
        <aside className="md:w-48 space-y-4">
          {tabs.map(tab => (
            <button 
              key={tab} 
              onClick={() => setActiveTab(tab)}
              className={`w-full text-left px-4 py-2 text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === tab ? 'text-sky-400 bg-sky-500/10 shadow-inner' : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </aside>
        
        <div className="flex-1 glass p-10 rounded-[2.5rem] border-white/10 space-y-12">
          <div className="flex justify-between items-center pb-8 border-b border-white/5">
            <h3 className="text-2xl font-bold text-white">{activeTab} Protocol</h3>
            <button className="p-3 bg-sky-500 rounded-xl cursor-pointer hover:bg-sky-400 transition-all"><Save className="w-5 h-5 text-white" /></button>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-medium mb-1">Encrypted Neural Bridge</p>
                <p className="text-xs text-slate-500">Secure all inter-node communications with AES-256.</p>
              </div>
              <div className="w-12 h-6 bg-sky-500/20 rounded-full p-1 cursor-pointer">
                <div className="w-4 h-4 bg-sky-500 rounded-full translate-x-6" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Master API Key</label>
              <input type="password" value="••••••••••••••••••••••••" readOnly className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white font-mono text-sm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * MAIN APP COMPONENT
 */
const App = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentView, setCurrentView] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  return (
    <div className="relative min-h-screen selection:bg-sky-500/30">
      <div className="fixed inset-0 grid-pattern pointer-events-none z-0 opacity-40" />
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-sky-900/20 blur-[120px] rounded-full pointer-events-none z-0" />
      
      <Header scrolled={scrollY > 50} currentView={currentView} setView={setCurrentView} />
      
      <main className="relative z-10">
        {currentView === 'home' && <HomeView />}
        {currentView === 'dashboard' && <DashboardView onBack={() => setCurrentView('home')} />}
        {currentView === 'settings' && <SettingsView onBack={() => setCurrentView('home')} />}
      </main>

      <footer className="py-12 px-6 border-t border-white/5 relative z-10 text-center">
        <Logo className="h-8 mx-auto mb-6 opacity-40 grayscale" showText={false} />
        <p className="text-[10px] text-slate-600 font-mono tracking-widest uppercase">&copy; {new Date().getFullYear()} Revena Intelligence Nexus. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

// Mount the application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
