
import React, { useState } from 'react';
import { Mail, MessageSquare, Send, User, Building, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const whatsappNumber = "+447398269730";
  const email = "revenaintelligence.uk@gmail.com";
  const whatsappMessage = encodeURIComponent("Hi Revena Intelligence 👋 I’m interested in AI automation / website services and would like to learn more.");
  const whatsappLink = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${whatsappMessage}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate Supabase submission delay until the user gives us their keys!
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="glass border-white/10 rounded-[2.5rem] p-8 md:p-16 flex flex-col lg:flex-row gap-16 overflow-hidden relative shadow-2xl">
          {/* Subtle light leak effect */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 blur-[100px] pointer-events-none" />

          {/* Left Side: Contact Information */}
          <div className="flex-1 space-y-8">
            <div>
              <h2 className="text-sm font-mono tracking-widest text-sky-400 uppercase mb-4">Contact Us</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
                Ready to evolve?
              </h3>
              <p className="text-xl text-slate-400 leading-relaxed max-w-lg mb-8">
                Let's discuss how AI can transform your business. Send us a message below, or reach out directly for the fastest response.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 rounded-2xl glass bg-white/[0.02] hover:bg-sky-500/10 border border-white/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-mono uppercase tracking-widest mb-1">WhatsApp (Preferred)</p>
                  <p className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors">+44 7398 269 730</p>
                </div>
              </a>

              <a
                href={`mailto:${email}`}
                className="group flex items-center gap-4 p-5 rounded-2xl glass bg-white/[0.02] hover:bg-sky-500/10 border border-white/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-500 font-mono uppercase tracking-widest mb-1">Email</p>
                  <p className="text-lg font-semibold text-white group-hover:text-sky-400 transition-colors break-all">{email}</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Side: The Contact Form */}
          <div className="flex-[1.2] glass bg-[#0a0f1c]/80 border-white/5 rounded-3xl p-8 relative flex flex-col justify-between">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl pointer-events-none" />
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs text-slate-400 font-mono tracking-wider ml-1">YOUR NAME</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50 transition-all font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-slate-400 font-mono tracking-wider ml-1">EMAIL ADDRESS</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50 transition-all font-medium"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs text-slate-400 font-mono tracking-wider ml-1">PHONE (OPTIONAL)</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+44 7000 000000"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50 transition-all font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-slate-400 font-mono tracking-wider ml-1">COMPANY</label>
                  <div className="relative">
                    <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <input 
                      type="text" 
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50 transition-all font-medium"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs text-slate-400 font-mono tracking-wider ml-1">PROJECT DETAILS</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="How can we help automate your workflow?"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50 transition-all font-medium resize-none"
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full group relative flex items-center justify-center gap-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-xl py-4 font-bold shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 border border-sky-400/20 hover:scale-[1.02] transition-all disabled:opacity-70 disabled:hover:scale-100 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : isSuccess ? (
                  <>Message Sent Successfully ✓</>
                ) : (
                  <>
                    Send Inquiry <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
