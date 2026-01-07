
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import HowWeHelp from './components/HowWeHelp';
import Contact from './components/Contact';
import RobotFeature from './components/RobotFeature';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';

export type View = 'home' | 'dashboard' | 'settings';

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentView, setCurrentView] = useState<View>('home');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  return (
    <div className="relative min-h-screen selection:bg-sky-500/30">
      {/* Background Dotted Grid */}
      <div className="fixed inset-0 grid-pattern pointer-events-none z-0 opacity-40" />
      
      {/* Dynamic Background Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-sky-900/20 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-900/20 blur-[120px] rounded-full pointer-events-none z-0" />

      <Header scrolled={scrollY > 50} currentView={currentView} setView={setCurrentView} />

      <main className="relative z-10">
        {currentView === 'home' && (
          <div className="animate-fade-in">
            <Hero />
            <Services />
            <Features />
            <HowWeHelp />
            <Contact />
          </div>
        )}

        {currentView === 'dashboard' && (
          <div className="animate-fade-in">
            <Dashboard onBack={() => setCurrentView('home')} />
          </div>
        )}

        {currentView === 'settings' && (
          <div className="animate-fade-in">
            <Settings onBack={() => setCurrentView('home')} />
          </div>
        )}
      </main>

      <Footer />
      
      {/* Interactive Elements */}
      <RobotFeature />
      <FloatingWhatsApp />

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;
