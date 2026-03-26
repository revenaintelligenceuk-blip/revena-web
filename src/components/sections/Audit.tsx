'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import Section from '@/components/Section';
import Button from '@/components/Button';

const Audit = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([
          {
            full_name: formData.name,
            email: formData.email,
            company: formData.company,
            message: formData.message,
            source: 'Premium Operational Audit'
          }
        ]);

      if (error) throw error;
      setSubmitted(true);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Something went wrong. Please try again or email advisory@revena.ai directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section id="audit" dark className="overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(166,124,82,0.05),transparent_50%)]" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-12">
          <div className="space-y-6">
            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-cream/30">The First Step</span>
            <h2 className="text-6xl md:text-7xl font-serif font-bold text-cream leading-tight">
              Operational <br />
              <span className="italic font-normal text-gradient-copper">Infrastructure Audit.</span>
            </h2>
            <p className="text-xl text-cream/60 leading-relaxed font-sans font-light max-w-xl">
              We'll analyze your current inbound systems, response times, and data flow to identify exactly where revenue is leaking. No pitch, just data and a roadmap.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 pt-4">
            {[
              "Inbound Lead Capture Assessment",
              "Response Time & Follow-up Matrix",
              "System Integration Efficiency Audit",
              "Revenue Leakage Financial Projection"
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-4">
                <div className="w-1.5 h-1.5 bg-copper rounded-full" />
                <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-cream/40">{item}</span>
              </div>
            ))}
          </div>

          <div className="p-8 border border-cream/5 bg-white/[0.02] space-y-4 max-w-lg">
            <div className="flex items-center space-x-3 text-copper">
              <CheckCircle2 className="w-5 h-5" />
              <span className="text-xs font-sans font-bold uppercase tracking-widest">Confidential Strategic Assessment</span>
            </div>
            <p className="text-[10px] text-cream/30 font-sans tracking-wider leading-relaxed">
              Your data is protected by our strict confidentiality protocols. We only work with businesses where we can prove a minimum 3x implementation ROI.
            </p>
          </div>
        </div>

        <div className="relative">
          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-cream/5 border border-cream/10 p-16 text-center space-y-8"
            >
              <div className="w-20 h-20 bg-copper/20 rounded-full flex items-center justify-center mx-auto border border-copper/30">
                <CheckCircle2 className="w-10 h-10 text-copper" />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-serif text-cream">Audit Requested.</h3>
                <p className="text-cream/50 font-sans text-sm">A strategic advisor will review your request and be in touch within 24 hours.</p>
              </div>
            </motion.div>
          ) : (
            <div className="bg-cream/5 border border-cream/10 p-12 lg:p-16 relative">
              <div className="absolute -top-[1px] -left-[1px] w-12 h-[1px] bg-copper" />
              <div className="absolute -top-[1px] -left-[1px] w-[1px] h-12 bg-copper" />
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <label className="text-[9px] font-sans font-bold uppercase tracking-[0.3em] text-cream/20 ml-2">Full Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-white/[0.03] border border-white/5 px-8 py-6 text-cream text-[11px] font-sans font-bold uppercase tracking-[0.2em] focus:outline-none focus:border-copper/50 transition-colors"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-sans font-bold uppercase tracking-[0.3em] text-cream/20 ml-2">Corporate Email</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-white/[0.03] border border-white/5 px-8 py-6 text-cream text-[11px] font-sans font-bold uppercase tracking-[0.2em] focus:outline-none focus:border-copper/50 transition-colors"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-sans font-bold uppercase tracking-[0.3em] text-cream/20 ml-2">Company / Industry</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-white/[0.03] border border-white/5 px-8 py-6 text-cream text-[11px] font-sans font-bold uppercase tracking-[0.2em] focus:outline-none focus:border-copper/50 transition-colors"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-sans font-bold uppercase tracking-[0.3em] text-cream/20 ml-2">Operational Bottlenecks (Optional)</label>
                  <textarea 
                    className="w-full bg-white/[0.03] border border-white/5 px-8 py-6 text-cream text-[11px] font-sans font-bold uppercase tracking-[0.2em] focus:outline-none focus:border-copper/50 transition-colors min-h-[140px]"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                {error && (
                  <p className="text-red-400 text-[10px] font-sans tracking-wider leading-relaxed border border-red-400/20 bg-red-400/5 px-6 py-4">
                    {error}
                  </p>
                )}
                <Button
                  type="submit"
                  variant="light"
                  className="w-full mt-4"
                >
                  {loading ? "Processing..." : "Secure Strategic Audit"}
                </Button>
              </form>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};

export default Audit;
