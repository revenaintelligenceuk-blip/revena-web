import { motion } from "motion/react";
import { 
  ArrowRight, 
  TrendingUp,
  ShieldCheck,
  Target,
  Clock,
  PhoneMissed,
  ArrowDownRight,
  Search,
} from "lucide-react";

import Logo from "./components/Logo";
import Button from "./components/Button";
import Section from "./components/Section";
import Header from "./components/Header";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";
import Confidentiality from "./components/Confidentiality";
import { useState, useEffect } from "react";

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash);

  useEffect(() => {
    const onHashChange = () => setCurrentPath(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  if (currentPath === "#terms") return <Terms />;
  if (currentPath === "#privacy") return <Privacy />;
  if (currentPath === "#confidentiality") return <Confidentiality />;

  return (
    <div className="min-h-screen selection:bg-navy selection:text-cream">
      <Header />

      <main>
        {/* Hero Section */}
        <Section className="pt-64 pb-56 relative overflow-hidden bg-cream">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-navy/[0.02] -skew-x-12 translate-x-1/4 pointer-events-none" />
          
          <div className="max-w-5xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="space-y-12"
            >
              <div className="flex items-center space-x-6">
                <div className="h-[1px] w-16 bg-copper/30" />
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-navy/40">UK-Wide Strategic Revenue Advisory</span>
                <div className="flex items-center space-x-2 px-4 py-1.5 bg-cream-light/50 backdrop-blur-sm rounded-full border border-navy/5 shadow-sm">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                  <span className="text-[9px] font-sans font-bold uppercase tracking-widest text-navy/60">Active Implementation</span>
                </div>
              </div>
              
              <h1 className="text-5xl sm:text-7xl lg:text-9xl font-serif font-bold tracking-tight leading-[0.9] text-navy relative">
                Eliminate <br />
                <span className="italic font-normal text-gradient">Revenue Leakage.</span>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100px" }}
                  transition={{ delay: 1, duration: 1.5 }}
                  className="absolute -left-20 top-12 h-[1px] bg-navy/10 hidden lg:block" 
                />
              </h1>
              
              <p className="text-lg md:text-2xl lg:text-3xl text-grey-body max-w-3xl leading-relaxed font-sans font-light tracking-tight">
                Most service businesses lose 20ÔÇô45% of inbound revenue due to missed calls, slow response times, and broken follow-up systems. <span className="text-navy font-semibold border-b border-copper/30">RVNA</span> builds intelligent systems that recover it.
              </p>
              
              <div className="flex items-center space-x-12 pt-6">
                <div className="flex flex-col space-y-2">
                  <span className="text-4xl font-serif font-bold text-navy tracking-tighter">24/7</span>
                  <span className="text-[9px] font-sans font-bold uppercase tracking-[0.3em] text-navy/30">Lead Capture</span>
                </div>
                <div className="w-[1px] h-12 bg-navy/10" />
                <div className="flex flex-col space-y-2">
                  <span className="text-4xl font-serif font-bold text-navy tracking-tighter">98%</span>
                  <span className="text-[9px] font-sans font-bold uppercase tracking-[0.3em] text-navy/30">System Efficiency</span>
                </div>
                <div className="w-[1px] h-12 bg-navy/10" />
                <div className="flex flex-col space-y-2">
                  <span className="text-4xl font-serif font-bold text-navy tracking-tighter">20-45%</span>
                  <span className="text-[9px] font-sans font-bold uppercase tracking-[0.3em] text-navy/30">Revenue Recovery</span>
                </div>
              </div>

              <div className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-navy/30 border-t border-navy/5 pt-8">
                Trusted by clinics and service businesses across London, Manchester, Birmingham & Edinburgh.
              </div>
              
              <div className="pt-10 flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-8">
                <a href="#contact" className="w-full sm:w-auto">
                  <Button 
                    className="flex items-center group w-full justify-center"
                  >
                    Book Discovery Call
                    <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
                  </Button>
                </a>
                <a href="#framework" className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-navy/40 hover:text-navy transition-colors flex items-center group">
                  Explore Methodology
                  <div className="ml-3 w-8 h-[1px] bg-navy/10 group-hover:w-12 group-hover:bg-navy/30 transition-all duration-500" />
                </a>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* The Problem Section */}
        <Section id="problem" muted className="border-y border-premium">
          <div className="grid lg:grid-cols-2 gap-32 items-start">
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-navy/30">The Challenge</div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight leading-tight relative">
                  The Cost of <br /> Operational Friction.
                  <div className="absolute -left-12 top-6 w-1 h-1 bg-copper/40 rounded-full hidden lg:block" />
                </h2>
              </div>
              <p className="text-xl text-grey-body leading-relaxed font-sans font-light">
                In high-ticket service sectors, the first response is often the only response. Revenue leakage isn't a marketing problemÔÇöit's an infrastructure failure.
              </p>
              <div className="pt-8 space-y-16">
                {[
                  { metric: "27%", label: "Average missed call rate in UK dental and aesthetic clinics.", icon: PhoneMissed },
                  { metric: "40%", label: "Enquiries that never receive a second follow-up attempt.", icon: Target },
                  { metric: "3ÔÇô8h", label: "Average delay between enquiry and first human contact.", icon: Clock }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-8 group">
                    <div className="p-4 bg-navy/5 rounded-sm group-hover:bg-navy/10 transition-colors duration-500">
                      <item.icon className="w-6 h-6 text-navy/40" />
                    </div>
                    <div>
                      <div className="text-4xl font-serif font-bold text-navy mb-2 tracking-tighter">{item.metric}</div>
                      <p className="text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-navy/40 leading-relaxed max-w-xs">{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-navy p-16 text-cream space-y-12 shadow-premium relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cream-light/5 -rotate-45 translate-x-16 -translate-y-16" />
              <h3 className="text-3xl font-serif font-bold italic tracking-tight">Financial Impact Analysis</h3>
              <p className="text-cream/70 text-lg leading-relaxed font-sans font-light">
                Conservative modelling suggests that for a high-growth clinic, a typical 20-45% leakage rate represents a significant six-figure sum in preventable annual loss. This is capital that has already been paid for through marketing spend but never captured.
              </p>
              <div className="pt-10 border-t border-cream/10 space-y-6">
                <div className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-cream/30">Strategic Objective</div>
                <p className="text-2xl font-serif italic leading-relaxed text-cream/90">"Move from reactive lead handling to an automated, 24/7 revenue capture infrastructure."</p>
              </div>
            </div>
          </div>
        </Section>

        {/* The RVNA Framework */}
        <Section id="framework">
          <div className="text-center max-w-3xl mx-auto mb-32 space-y-8">
            <div className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-navy/30">Strategic Methodology</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight relative inline-block">
              The <span className="italic font-normal text-gradient">RVNA Framework.</span>
              <motion.div 
                animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -right-8 top-4 w-2 h-2 bg-copper rounded-full" 
              />
            </h2>
            <div className="h-[1px] w-32 bg-navy/10 mx-auto" />
            <p className="text-xl text-grey-body font-sans font-light">A structured methodology for operational revenue recovery and sustainable growth.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Capture",
                desc: "Implementation of 24/7 intelligent reception layers. We ensure no enquiry goes unanswered, regardless of time or channel.",
                features: ["AI Voice Reception", "Instant SMS Response", "Multi-channel Sync"]
              },
              {
                step: "02",
                title: "Convert",
                desc: "Automated qualification and scheduling workflows. We move prospects from enquiry to booked appointment without manual friction.",
                features: ["Lead Qualification", "Direct Calendar Sync", "Deposit Integration"]
              },
              {
                step: "03",
                title: "Retain",
                desc: "Structured follow-up and re-engagement systems. We maximise the lifetime value of every lead through persistent, automated touchpoints.",
                features: ["No-show Recovery", "Re-booking Workflows", "LTV Optimisation"]
              }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -12, scale: 1.02 }}
                className="space-y-10 p-12 border border-premium bg-cream-light/40 hover:bg-white hover:border-copper/30 hover:shadow-[0_20px_50px_-12px_rgba(166,124,82,0.15)] transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-copper/0 via-copper/0 to-copper/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="text-5xl font-serif italic text-navy/5 group-hover:text-copper/10 transition-colors absolute top-8 right-12 z-10">{item.step}</div>
                <h3 className="text-3xl font-serif font-bold tracking-tight">{item.title}</h3>
                <p className="text-base text-grey-body leading-relaxed font-sans font-light">{item.desc}</p>
                <ul className="space-y-4 pt-6 border-t border-navy/5">
                  {item.features.map((f, j) => (
                    <li key={j} className="flex items-center text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-navy/40 group-hover:text-navy/60 transition-colors">
                      <div className="w-1 h-1 bg-copper/40 mr-4 rounded-full" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* The Process Section */}
        <Section className="bg-navy text-cream overflow-hidden py-48">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div className="space-y-16">
              <div className="space-y-8">
                <div className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-cream/30">Implementation Journey</div>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight leading-tight">
                  From Audit to <br /> <span className="italic font-normal text-cream/80">Operational Excellence.</span>
                </h2>
              </div>
              
              <div className="space-y-16">
                {[
                  { step: "01 Audit", title: "Operational Audit", desc: "A deep-dive analysis of your current lead handling and conversion infrastructure." },
                  { step: "02 Diagnose", title: "System Design", desc: "We architect a custom recovery framework tailored to your specific business model." },
                  { step: "03 Implement", title: "Deployment", desc: "Seamless integration of automated capture and conversion systems with your existing workflow." },
                  { step: "04 Optimise", title: "Continuous Refinement", desc: "Ongoing optimization based on real-world performance data and ROI metrics." }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.8 }}
                    className="flex items-start space-x-10 group"
                  >
                    <span className="text-2xl font-serif font-bold text-cream/10 group-hover:text-copper transition-colors duration-500">{item.step}</span>
                    <div className="space-y-3">
                      <h4 className="text-2xl font-serif font-bold tracking-tight">{item.title}</h4>
                      <p className="text-base text-cream/50 leading-relaxed max-w-md font-sans font-light">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="aspect-[4/5] bg-cream-light/5 border border-cream-muted/20 rounded-3xl relative overflow-hidden flex items-center justify-center p-16 shadow-2xl backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-grain opacity-10" />
                <div className="text-center space-y-10 relative z-10">
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-28 h-28 rounded-full border border-cream-muted/20 flex items-center justify-center mx-auto bg-cream-light/5"
                  >
                    <ShieldCheck className="w-12 h-12 text-copper/60" />
                  </motion.div>
                  <div className="space-y-6">
                    <h3 className="text-4xl font-serif font-bold tracking-tight text-cream leading-tight">
                      The <span className="italic font-normal text-gradient-copper">RVNA Standard</span>
                    </h3>
                    <p className="text-base text-cream/40 max-w-xs mx-auto font-sans font-light leading-relaxed">We don't just build systems; we build the infrastructure for your next phase of growth.</p>
                  </div>
                  <a href="#contact">
                    <Button 
                      variant="light" 
                    >
                      Book Discovery Call
                    </Button>
                  </a>
                </div>
                
                {/* Decorative lines */}
                <div className="absolute inset-0 pointer-events-none opacity-20">
                  <div className="absolute top-1/4 left-0 w-full h-[1px] bg-cream-light/10" />
                  <div className="absolute top-2/4 left-0 w-full h-[1px] bg-cream-light/10" />
                  <div className="absolute top-3/4 left-0 w-full h-[1px] bg-cream-light/10" />
                  <div className="absolute left-1/4 top-0 w-[1px] h-full bg-cream-light/10" />
                  <div className="absolute left-2/4 top-0 w-[1px] h-full bg-cream-light/10" />
                  <div className="absolute left-3/4 top-0 w-[1px] h-full bg-cream-light/10" />
                </div>
              </motion.div>
            </div>
          </div>
        </Section>
        {/* Financial Impact Model */}
        <Section id="impact" className="relative overflow-hidden bg-cream text-navy border-y border-premium">
          <div className="absolute inset-0 bg-grain pointer-events-none opacity-100" />
          
          <div className="grid lg:grid-cols-2 gap-32 items-start relative z-10">
            <div className="space-y-16">
              <div className="space-y-8">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-[1px] bg-navy/10" />
                  <span className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-navy/40">Revenue Analysis</span>
                </div>
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight leading-[1] text-navy">
                  Quantifying <br />
                  <span className="italic font-normal text-gradient">the Opportunity.</span>
                </h2>
              </div>
              
              <p className="text-2xl text-navy/60 leading-relaxed font-sans font-light max-w-xl tracking-tight">
                Our analysis focuses on the "Preventable Loss"ÔÇörevenue that is currently entering your ecosystem but exiting before conversion due to systemic friction.
              </p>
              
              <div className="pt-12 space-y-10">
                <div className="p-10 border-l-2 border-copper/30 bg-navy/[0.01] backdrop-blur-sm">
                  <p className="text-lg text-navy/70 leading-relaxed italic font-serif">
                    "For a practice generating ┬ú850k, a 30% leakage represents a ┬ú255k gross deficit. Recovering even a fraction of this loss delivers an immediate and substantial ROI on system implementation."
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-20 py-12">
              <div className="grid grid-cols-1 gap-16">
                <div className="space-y-6 pb-12 border-b border-navy/5">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-navy/30">Weekly Enquiries</span>
                  <div className="text-7xl font-serif font-bold text-navy tracking-tighter">120+</div>
                </div>
                
                <div className="space-y-6 pb-12 border-b border-navy/5">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-navy/30">Estimated Leakage</span>
                  <div className="text-7xl font-serif font-bold text-navy italic tracking-tighter">42%</div>
                </div>
 
                <div className="space-y-8 p-12 bg-navy text-cream shadow-premium relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cream-light/5 -rotate-45 translate-x-16 -translate-y-16" />
                  <span className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-cream/30 relative z-10">System Recovery Potential</span>
                  <div className="space-y-4 relative z-10">
                    <div className="text-8xl md:text-9xl font-serif font-bold text-cream tracking-tighter">
                      96%
                    </div>
                    <p className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-cream/30 italic">
                      Based on high-fidelity operational modelling.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Case Scenario */}
        <Section className="bg-cream py-48">
          <div className="max-w-5xl mx-auto space-y-24">
            <div className="space-y-6">
              <div className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-navy/30">Case Scenario: Anonymous Implementation</div>
              <h2 className="text-5xl font-serif font-bold tracking-tight">Private Aesthetic Clinic <span className="italic font-normal text-copper/60">(London)</span></h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-24">
              <div className="space-y-10 p-12 border border-premium bg-cream-light/20 backdrop-blur-sm">
                <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-navy/30 border-b border-navy/5 pb-4">Pre-Implementation</h4>
                <ul className="space-y-6">
                  {[
                    "Manual booking via Instagram DM.",
                    "34% missed call rate during peak hours.",
                    "No structured follow-up for non-converters."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start space-x-4 text-base text-grey-body font-sans font-light">
                      <ArrowDownRight className="w-5 h-5 text-navy/20 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-10 p-12 border border-navy/10 bg-navy text-cream shadow-premium">
                <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-cream/30 border-b border-cream-light/5 pb-4">Post-Implementation</h4>
                <ul className="space-y-6">
                  {[
                    "98% Lead Capture Rate (24/7).",
                    "42% increase in booked consultations.",
                    "12 hours/week reclaimed in admin time."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start space-x-4 text-base text-cream/90 font-sans font-light">
                      <TrendingUp className="w-5 h-5 text-copper mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* UK Presence & Trust */}
        <Section className="bg-cream-muted py-16 border-y border-navy/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 opacity-60">
            <div className="text-xs font-sans font-bold uppercase tracking-[0.3em]">Operational Excellence Across the UK</div>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-[10px] font-sans font-bold uppercase tracking-widest">
              <span>London</span>
              <span>Manchester</span>
              <span>Birmingham</span>
              <span>Edinburgh</span>
              <span>Leeds</span>
              <span>Bristol</span>
            </div>
          </div>
        </Section>

        {/* Why Traditional Agencies Fail */}
        <Section className="bg-cream border-t border-premium">
          <div className="grid lg:grid-cols-2 gap-32">
            <div className="space-y-8">
              <div className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-navy/30">The Industry Standard</div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight leading-tight">
                Why Traditional <br /> <span className="italic font-normal text-navy/60">Agencies Fail.</span>
              </h2>
            </div>
            <div className="space-y-16">
              {[
                { title: "Surface-Level Focus", desc: "Most agencies build websites but ignore the conversion systems behind them. A beautiful site that loses leads is a liability." },
                { title: "Operational Blindness", desc: "Running ads without fixing internal operations is inefficient. We focus on the infrastructure that handles the traffic." },
                { title: "Lack of Infrastructure", desc: "Traditional models rely on human receptionists who sleep. Our systems provide 24/7 capture without increasing headcount." },
                { title: "No Structured Follow-up", desc: "Most leads are lost in the 'maybe' pile. We implement automated, persistent follow-up that recovers lost revenue." }
              ].map((item, i) => (
                <div key={i} className="space-y-4 group">
                  <h4 className="text-2xl font-serif font-bold text-navy group-hover:text-copper transition-colors duration-500">{item.title}</h4>
                  <p className="text-base text-grey-body leading-relaxed font-sans font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Operational Audit Section */}
        <Section id="audit" className="bg-cream relative overflow-hidden py-48">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div className="space-y-12">
              <div className="space-y-8">
                <div className="inline-block px-5 py-1.5 rounded-full border border-navy/10 text-[9px] font-sans font-bold uppercase tracking-[0.3em] text-navy/50 bg-cream-light/50 backdrop-blur-sm">
                  Complimentary Strategic Service
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight leading-tight">
                  The <span className="italic font-normal text-gradient">Operational</span> <br /> Infrastructure Audit.
                </h2>
              </div>
              <p className="text-xl text-grey-body leading-relaxed max-w-xl font-sans font-light tracking-tight">
                We provide a comprehensive review of your current lead handling, booking systems, and follow-up protocols. Having worked with businesses all around the UK, we identify the exact points where your revenue is leaking.
              </p>
              <div className="space-y-6 pt-4">
                {[
                  "Full analysis of missed call & lead response times",
                  "Stress-test of current booking infrastructure",
                  "Identification of manual bottlenecks in your workflow",
                  "Confidential revenue leakage report"
                ].map((point, i) => (
                  <div key={i} className="flex items-center space-x-4 text-base text-navy/70 font-sans font-light">
                    <div className="w-1.5 h-1.5 rounded-full bg-copper/40" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-12 pt-12 border-t border-navy/5">
                <div className="space-y-3">
                  <span className="text-3xl font-serif font-bold text-navy">45m</span>
                  <p className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-navy/30">Audit Duration</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl font-serif font-bold text-navy">100%</span>
                    <span className="text-[9px] font-sans font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Secure</span>
                  </div>
                  <p className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-navy/30">Data Confidentiality</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <motion.div 
                whileHover={{ y: -5 }}
                className="aspect-square bg-cream-light border border-premium rounded-3xl flex items-center justify-center p-16 relative overflow-hidden group shadow-premium"
              >
                <div className="absolute inset-0 bg-grain opacity-5" />
                <div className="absolute inset-0 bg-navy/[0.01] group-hover:bg-navy/[0.03] transition-colors duration-700" />
                <div className="text-center space-y-10 relative z-10">
                  <motion.div 
                    whileHover={{ rotate: 15 }}
                    className="w-24 h-24 rounded-full bg-navy text-cream flex items-center justify-center mx-auto mb-10 shadow-2xl relative"
                  >
                    <Search className="w-10 h-10" />
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute inset-0 rounded-full border-2 border-navy/20 -m-2" 
                    />
                  </motion.div>
                  <div className="space-y-4">
                    <h3 className="text-4xl font-serif font-bold tracking-tight">Request Your Audit</h3>
                    <p className="text-base text-grey-body font-sans font-light max-w-xs mx-auto">A high-fidelity deep dive into your business operations. <span className="text-navy font-bold">Complimentary ÔÇö no obligation.</span></p>
                  </div>
                  <a href="#contact" className="w-full">
                    <Button 
                      className="w-full py-5 shadow-2xl"
                    >
                      Book Discovery Call
                    </Button>
                  </a>
                </div>
              </motion.div>
              
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 border border-navy/5 rounded-full pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-64 h-64 border border-navy/5 rounded-full pointer-events-none" />
            </div>
          </div>
        </Section>

        {/* Final CTA */}
        <Section className="text-center py-64 bg-cream border-t border-premium">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="space-y-6">
              <div className="text-[10px] font-sans font-bold uppercase tracking-[0.6em] text-navy/30">Strategic Partnership</div>
              <h2 className="text-4xl md:text-6xl lg:text-8xl font-serif font-bold tracking-tight leading-tight text-gradient">
              Request a <span className="italic font-normal">Confidential</span> <br /> Revenue Review.
            </h2>
            </div>
            <p className="text-2xl text-grey-body font-sans font-light max-w-2xl mx-auto leading-relaxed tracking-tight">
              We only take on a limited number of partners per month to ensure operational excellence for businesses across the UK.
            </p>
            <div className="pt-12">
              <a href="#contact">
                <Button 
                  className="px-20 py-7 text-xl shadow-premium"
                >
                  Book Discovery Call
                </Button>
              </a>
            </div>
            <div className="pt-12 flex items-center justify-center space-x-12 opacity-30 grayscale">
              <div className="w-32 h-px bg-navy" />
              <Logo className="scale-75" />
              <div className="w-32 h-px bg-navy" />
            </div>
          </div>
        </Section>

        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
