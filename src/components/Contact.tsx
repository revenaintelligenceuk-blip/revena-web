"use client";

import React, { useState } from 'react';
import { Send, ShieldCheck, Lock } from 'lucide-react';
import { supabase } from '../lib/supabase';
import Section from './Section';
import Button from './Button';

export const Contact = () => {
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
         setSubmitError("The 'contacts' table doesn't exist in Supabase yet. Please create it.");
      } else {
         setSubmitError(err?.message || 'Something went wrong. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" className="border-t border-navy/10 dark:border-cream/10 py-48">
      <div className="grid lg:grid-cols-2 gap-32 max-w-7xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-6">
            <div className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-navy/50 dark:text-cream/50">Get in Touch</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight leading-tight text-navy dark:text-cream">
              Book Your <br /> <span className="italic font-normal text-gold">Discovery Call.</span>
            </h2>
          </div>
          <p className="text-xl text-navy/80 dark:text-cream/80 leading-relaxed font-sans font-normal">
            Secure a confidential consultation to discuss your operational infrastructure and revenue recovery potential.
          </p>
          
          {/* Trust Signals */}
          <div className="pt-8 border-t border-navy/10 dark:border-cream/10 space-y-6">
            <div className="flex items-center space-x-4 text-navy/60 dark:text-cream/60">
              <ShieldCheck className="w-6 h-6 text-gold" />
              <div>
                <p className="text-sm font-bold font-sans text-navy dark:text-cream">100% Confidential</p>
                <p className="text-xs font-normal text-navy/60 dark:text-cream/60">Your operational data is strictly protected.</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-navy/60 dark:text-cream/60">
              <Lock className="w-6 h-6 text-navy dark:text-cream" />
              <div>
                <p className="text-sm font-bold font-sans text-navy dark:text-cream">Secure Infrastructure</p>
                <p className="text-xs font-normal text-navy/60 dark:text-cream/60">Enterprise-grade encryption and GDPR compliance.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-cream dark:bg-navy/30 p-12 md:p-16 border border-navy/10 dark:border-cream/10 shadow-xl relative group">
          <form className="space-y-8 relative z-10" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-navy/50 dark:text-cream/50">Full Name</label>
                <input 
                  name="name"
                  type="text" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  className="w-full bg-cream dark:bg-navy border border-navy/10 dark:border-cream/10 px-6 py-4 focus:border-gold outline-none transition-all duration-500 font-sans text-base text-navy dark:text-cream" 
                  placeholder="Your full name" 
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-navy/50 dark:text-cream/50">Business Email</label>
                <input 
                  name="email"
                  type="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  className="w-full bg-cream dark:bg-navy border border-navy/10 dark:border-cream/10 px-6 py-4 focus:border-gold outline-none transition-all duration-500 font-sans text-base text-navy dark:text-cream" 
                  placeholder="your@email.com" 
                />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-navy/50 dark:text-cream/50">Company Name</label>
              <input 
                name="company"
                type="text" 
                value={formData.company}
                onChange={handleChange}
                required 
                className="w-full bg-cream dark:bg-navy border border-navy/10 dark:border-cream/10 px-6 py-4 focus:border-gold outline-none transition-all duration-500 font-sans text-base text-navy dark:text-cream" 
                placeholder="Your business name" 
              />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-navy/50 dark:text-cream/50">Message (Optional)</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-cream dark:bg-navy border border-navy/10 dark:border-cream/10 px-6 py-4 focus:border-gold outline-none transition-all duration-500 font-sans text-base resize-none text-navy dark:text-cream" 
                placeholder="Tell us about your current operations..." 
              />
            </div>

            {submitError && (
              <div className="text-red-700 text-sm font-medium bg-red-50 border border-red-200 p-4 font-sans rounded-none">
                {submitError}
              </div>
            )}

            <Button type="submit" variant="primary" className="w-full py-6 text-base" disabled={isSubmitting}>
               {isSubmitting ? 'Processing...' : isSuccess ? 'Request Received ✓' : 'Request Discovery Call'}
            </Button>
            
            <p className="text-[9px] text-center text-navy/40 dark:text-cream/40 uppercase tracking-[0.4em] font-bold">
              Strict confidentiality guaranteed.
            </p>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
