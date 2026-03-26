"use client";

import React, { useState } from 'react';
import { ShieldCheck, Lock, Send, Bot } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/Button';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      const { error } = await supabase
        .from('contacts')
        .insert([
          { 
            name: formData.name, 
            email: formData.email, 
            company: formData.company, 
            message: formData.message 
          }
        ]);

      if (error) throw error;

      setIsSuccess(true);
      setFormData({ name: '', email: '', company: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err: any) {
      console.error('Error submitting form:', err);
      if (err?.code === '42P01') {
         setSubmitError("Database table error. Our team has been notified.");
      } else {
         setSubmitError(err?.message || 'Something went wrong. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-cream rounded-[2rem] p-8 md:p-16 border border-dark-blue/5 shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-dark-blue/10 rounded-full blur-[80px]" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div>
              <div className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-sm border border-dark-blue/10 rounded-full px-4 py-1.5 mb-8">
                <Bot className="w-4 h-4 text-accent-blue" />
                <span className="text-sm font-medium text-dark-blue">Ready to Scale?</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-dark-blue mb-6 tracking-tight leading-tight">
                Book Your <br/>
                <span className="text-accent-blue">Free AI Audit.</span>
              </h2>
              <p className="text-lg text-dark-blue/70 mb-8 max-w-md leading-relaxed">
                Find out exactly how much revenue you're leaving on the table and how our intelligent systems can capture it. No commitment required.
              </p>
              
              <div className="space-y-6 pt-6 border-t border-dark-blue/10">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-accent-blue/10 rounded-lg"><ShieldCheck className="w-6 h-6 text-accent-blue" /></div>
                  <div>
                    <p className="text-sm font-bold text-dark-blue uppercase tracking-wider">Confidential</p>
                    <p className="text-xs text-dark-blue/60">Strict data protection and NDA-tier privacy.</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-dark-blue/5 rounded-lg"><Lock className="w-6 h-6 text-dark-blue/40" /></div>
                  <div>
                    <p className="text-sm font-bold text-dark-blue uppercase tracking-wider">Secure</p>
                    <p className="text-xs text-dark-blue/60">Enterprise-grade encryption for all inquiries.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-dark-blue/5">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-dark-blue/50 uppercase tracking-widest">Full Name</label>
                  <input 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required 
                    type="text" 
                    className="w-full bg-cream/50 border border-dark-blue/10 rounded-lg px-4 py-3 text-dark-blue focus:outline-none focus:ring-2 focus:ring-accent-blue transition-all" 
                    placeholder="John Doe" 
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold text-dark-blue/50 uppercase tracking-widest">Work Email</label>
                  <input 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    type="email" 
                    className="w-full bg-cream/50 border border-dark-blue/10 rounded-lg px-4 py-3 text-dark-blue focus:outline-none focus:ring-2 focus:ring-accent-blue transition-all" 
                    placeholder="john@company.com" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-dark-blue/50 uppercase tracking-widest">Company</label>
                  <input 
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required 
                    type="text" 
                    className="w-full bg-cream/50 border border-dark-blue/10 rounded-lg px-4 py-3 text-dark-blue focus:outline-none focus:ring-2 focus:ring-accent-blue transition-all" 
                    placeholder="Acme Corp" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-dark-blue/50 uppercase tracking-widest">Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full bg-cream/50 border border-dark-blue/10 rounded-lg px-4 py-3 text-dark-blue focus:outline-none focus:ring-2 focus:ring-accent-blue transition-all resize-none" 
                    placeholder="Current operational bottlenecks..." 
                  />
                </div>

                {submitError && (
                  <div className="text-red-500 text-xs font-medium bg-red-50 p-3 rounded-lg border border-red-100">
                    {submitError}
                  </div>
                )}

                <Button type="submit" size="lg" className="w-full mt-4" disabled={isSubmitting}>
                  {isSubmitting ? 'Architecting...' : isSuccess ? 'Audit Requested ✓' : 'Get Free AI Audit'}
                </Button>
                <p className="text-[10px] text-center text-dark-blue/40 mt-4 font-medium uppercase tracking-[0.2em]">
                  Guaranteed confidential processing.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
