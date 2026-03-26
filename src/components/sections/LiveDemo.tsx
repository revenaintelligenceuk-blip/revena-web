'use client';

import { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign } from 'lucide-react';

const dataPreAi = [
  { month: 'Jan', revenue: 4000, leads: 240 },
  { month: 'Feb', revenue: 3000, leads: 139 },
  { month: 'Mar', revenue: 2000, leads: 980 },
  { month: 'Apr', revenue: 2780, leads: 390 },
  { month: 'May', revenue: 1890, leads: 480 },
  { month: 'Jun', revenue: 2390, leads: 380 },
];

const dataPostAi = [
  { month: 'Jan', revenue: 4000, leads: 240 },
  { month: 'Feb', revenue: 5000, leads: 439 },
  { month: 'Mar', revenue: 7000, leads: 1280 },
  { month: 'Apr', revenue: 9580, leads: 1690 },
  { month: 'May', revenue: 12890, leads: 2480 },
  { month: 'Jun', revenue: 15390, leads: 3380 },
];

export function LiveDemo() {
  const [isAiEnabled, setIsAiEnabled] = useState(false);
  const data = isAiEnabled ? dataPostAi : dataPreAi;

  return (
    <section id="demo" className="py-24 bg-dark-blue overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      
      {/* Glow effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-blue/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-blue/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Real Results. Real Time.</h2>
            <p className="text-lg text-cream/70">
              Transform your trajectory. See the projected difference our AI lead systems and automated pipelines can make for operations.
            </p>
          </div>
          <div className="mt-8 md:mt-0 flex flex-col items-center">
            <p className="text-sm text-cream/50 mb-3 font-semibold tracking-wider">INTERACTIVE DEMO</p>
            <button 
              onClick={() => setIsAiEnabled(!isAiEnabled)}
              className={`relative inline-flex h-12 w-56 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-blue focus:ring-accent-blue ${isAiEnabled ? 'bg-accent-blue' : 'bg-white/10 border border-white/20'}`}
            >
              <span className={`absolute px-5 text-sm font-bold transition-opacity duration-300 ${isAiEnabled ? 'opacity-100 text-white left-2' : 'opacity-0'}`}>AI ENABLED</span>
              <span className={`absolute px-5 text-sm font-bold transition-opacity duration-300 ${!isAiEnabled ? 'opacity-100 text-white right-2' : 'opacity-0'}`}>AI DISABLED</span>
              <span className={`inline-block h-10 w-10 transform rounded-full bg-white shadow-md transition-transform duration-300 ease-in-out ${isAiEnabled ? 'translate-x-[7.2rem]' : 'translate-x-1'}`} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <motion.div layout className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:bg-white/10 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-accent-blue/20 rounded-xl"><DollarSign className="h-6 w-6 text-accent-blue" /></div>
              <span className={`text-sm font-bold px-2 py-1 rounded-full ${isAiEnabled ? 'bg-green-400/20 text-green-400' : 'bg-white/10 text-cream/50'}`}>{isAiEnabled ? '+284%' : '+12%'}</span>
            </div>
            <h4 className="text-cream/70 font-medium mb-1">Monthly Revenue</h4>
            <p className="text-4xl font-bold text-white tracking-tight">${isAiEnabled ? '15,390' : '2,390'}</p>
          </motion.div>
          
          <motion.div layout className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:bg-white/10 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-accent-blue/20 rounded-xl"><Users className="h-6 w-6 text-accent-blue" /></div>
              <span className={`text-sm font-bold px-2 py-1 rounded-full ${isAiEnabled ? 'bg-green-400/20 text-green-400' : 'bg-white/10 text-cream/50'}`}>{isAiEnabled ? '+315%' : '-5%'}</span>
            </div>
            <h4 className="text-cream/70 font-medium mb-1">Lead Volume</h4>
            <p className="text-4xl font-bold text-white tracking-tight">{isAiEnabled ? '3,380' : '380'}</p>
          </motion.div>
          
          <motion.div layout className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:bg-white/10 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-accent-blue/20 rounded-xl"><TrendingUp className="h-6 w-6 text-accent-blue" /></div>
              <span className={`text-sm font-bold px-2 py-1 rounded-full ${isAiEnabled ? 'bg-green-400/20 text-green-400' : 'bg-white/10 text-cream/50'}`}>{isAiEnabled ? '+42%' : '+2%'}</span>
            </div>
            <h4 className="text-cream/70 font-medium mb-1">Conversion Rate</h4>
            <p className="text-4xl font-bold text-white tracking-tight">{isAiEnabled ? '24.8%' : '3.2%'}</p>
          </motion.div>
        </div>

        <motion.div layout className="h-[450px] w-full bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3A78F2" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3A78F2" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
              <XAxis dataKey="month" stroke="rgba(255,255,255,0.5)" tickLine={false} axisLine={false} dy={10} />
              <YAxis stroke="rgba(255,255,255,0.5)" tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} dx={-10} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0E1F3D', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5)' }}
                itemStyle={{ color: '#fff', fontWeight: 'bold' }}
                labelStyle={{ color: 'rgba(255,255,255,0.7)', marginBottom: '4px' }}
              />
              <Area 
                type="monotone" 
                dataKey="revenue" 
                stroke="#3A78F2" 
                strokeWidth={4} 
                fillOpacity={1} 
                fill="url(#colorRevenue)" 
                animationDuration={1500}
                animationEasing="ease-out"
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

      </div>
    </section>
  );
}
