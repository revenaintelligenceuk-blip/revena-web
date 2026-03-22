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
      if (err.code === '42P01') {
         setSubmitError("The 'contacts' table doesn't exist in Supabase yet. Please create it.");
      } else {
         setSubmitError(err.message || 'Something went wrong. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" muted className="border-t border-premium">
      <div className="grid lg:grid-cols-2 gap-32">
        <div className="space-y-12">
          <div className="space-y-6">
            <div className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-navy/30">Get in Touch</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight leading-tight">
              Book Your <br /> <span className="italic font-normal text-gradient">Discovery Call.</span>
            </h2>
          </div>
          <p className="text-xl text-grey-body leading-relaxed font-sans font-light">
            Secure a confidential consultation to discuss your operational infrastructure and revenue recovery potential.
          </p>
          
          {/* Trust Signals */}
          <div className="pt-8 border-t border-navy/10 space-y-6">
            <div className="flex items-center space-x-4 text-navy/60">
              <ShieldCheck className="w-6 h-6 text-copper" />
              <div>
                <p className="text-sm font-bold font-sans">100% Confidential</p>
                <p className="text-xs font-light">Your operational data is strictly protected.</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-navy/60">
              <Lock className="w-6 h-6 text-emerald-600" />
              <div>
                <p className="text-sm font-bold font-sans">Secure Infrastructure</p>
                <p className="text-xs font-light">Enterprise-grade encryption and GDPR compliance.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-cream p-12 md:p-16 border border-premium shadow-premium relative overflow-hidden group">
          <div className="absolute inset-0 bg-grain opacity-5 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-br from-copper/0 to-copper/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
          <form className="space-y-8 relative z-10" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-navy/30">Full Name</label>
                <input 
                  name="name"
                  type="text" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  className="w-full bg-cream-light/50 border border-navy/10 px-6 py-4 focus:border-copper/40 outline-none transition-all duration-500 font-sans text-base" 
                  placeholder="Your full name" 
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-navy/30">Business Email</label>
                <input 
                  name="email"
                  type="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  className="w-full bg-cream-light/50 border border-navy/10 px-6 py-4 focus:border-copper/40 outline-none transition-all duration-500 font-sans text-base" 
                  placeholder="your@email.com" 
                />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-navy/30">Company Name</label>
              <input 
                name="company"
                type="text" 
                value={formData.company}
                onChange={handleChange}
                required 
                className="w-full bg-cream-light/50 border border-navy/10 px-6 py-4 focus:border-copper/40 outline-none transition-all duration-500 font-sans text-base" 
                placeholder="Your business name" 
              />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-navy/30">Message (Optional)</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-cream-light/50 border border-navy/10 px-6 py-4 focus:border-copper/40 outline-none transition-all duration-500 font-sans text-base resize-none" 
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
            
            <p className="text-[9px] text-center text-navy/20 uppercase tracking-[0.4em] font-bold">
              Strict confidentiality guaranteed.
            </p>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
