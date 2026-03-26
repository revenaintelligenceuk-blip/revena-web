"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { supabase } from '@/lib/supabase';

export function CTA() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
            name: `${formData.firstName} ${formData.lastName}`, 
            email: formData.email, 
            company: formData.company,
            message: 'Injected from AI Audit Form'
          }
        ]);

      if (error) throw error;

      setIsSuccess(true);
      setFormData({ firstName: '', lastName: '', email: '', company: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err: any) {
      console.error('Error submitting form:', err);
      setSubmitError(err?.message || 'Something went wrong. Please try again.');
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
              <h2 className="text-4xl md:text-5xl font-bold text-dark-blue mb-6 tracking-tight text-left">
                Ready to Scale? <br/>
                <span className="text-accent-blue">Book Your Free AI Audit.</span>
              </h2>
              <p className="text-lg text-dark-blue/70 mb-8 max-w-md leading-relaxed text-left">
                Find out exactly how much revenue you're leaving on the table and how our intelligent systems can capture it. No commitment required.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-left">
                  <div className="w-8 h-8 rounded-full bg-accent-blue/10 flex items-center justify-center text-accent-blue font-bold text-sm shrink-0">1</div>
                  <p className="text-dark-blue font-medium">Deep-dive into your data architecture</p>
                </div>
                <div className="flex items-center space-x-3 text-left">
                  <div className="w-8 h-8 rounded-full bg-accent-blue/10 flex items-center justify-center text-accent-blue font-bold text-sm shrink-0">2</div>
                  <p className="text-dark-blue font-medium">Identify automation opportunities</p>
                </div>
                <div className="flex items-center space-x-3 text-left">
                  <div className="w-8 h-8 rounded-full bg-accent-blue/10 flex items-center justify-center text-accent-blue font-bold text-sm shrink-0">3</div>
                  <p className="text-dark-blue font-medium">Receive a custom ROI roadmap</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-dark-blue/5">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2 text-left">
                    <label className="text-sm font-medium text-dark-blue">First Name</label>
                    <input name="firstName" value={formData.firstName} onChange={handleChange} required type="text" className="w-full bg-cream/50 border border-dark-blue/10 rounded-lg px-4 py-3 text-dark-blue focus:outline-none focus:ring-2 focus:ring-accent-blue transition-shadow transition-colors" placeholder="John" />
                  </div>
                  <div className="space-y-2 text-left">
                    <label className="text-sm font-medium text-dark-blue">Last Name</label>
                    <input name="lastName" value={formData.lastName} onChange={handleChange} required type="text" className="w-full bg-cream/50 border border-dark-blue/10 rounded-lg px-4 py-3 text-dark-blue focus:outline-none focus:ring-2 focus:ring-accent-blue transition-shadow transition-colors" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2 text-left">
                  <label className="text-sm font-medium text-dark-blue">Work Email</label>
                  <input name="email" value={formData.email} onChange={handleChange} required type="email" className="w-full bg-cream/50 border border-dark-blue/10 rounded-lg px-4 py-3 text-dark-blue focus:outline-none focus:ring-2 focus:ring-accent-blue transition-shadow transition-colors" placeholder="john@company.com" />
                </div>

                <div className="space-y-2 text-left">
                  <label className="text-sm font-medium text-dark-blue">Company Name</label>
                  <input name="company" value={formData.company} onChange={handleChange} required type="text" className="w-full bg-cream/50 border border-dark-blue/10 rounded-lg px-4 py-3 text-dark-blue focus:outline-none focus:ring-2 focus:ring-accent-blue transition-shadow transition-colors" placeholder="Acme Corp" />
                </div>

                {submitError && (
                  <div className="text-red-600 text-xs bg-red-50 p-2 rounded border border-red-100 italic">
                    {submitError}
                  </div>
                )}

                <Button type="submit" size="lg" className="w-full mt-4" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : isSuccess ? 'Growth Plan Requested ✓' : 'Get My Growth Plan'}
                </Button>
                <p className="text-xs text-center text-dark-blue/50 mt-4">We respect your privacy. Unsubscribe at any time.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
