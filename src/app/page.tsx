"use client";

import { motion } from "motion/react";
import { ArrowRight, PhoneMissed, Target, Clock, ShieldCheck } from "lucide-react";

import Button from "@/components/Button";
import Section from "@/components/Section";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      {/* SECTION 1: HERO */}
      <Section className="pt-64 pb-56 border-b border-navy/10 relative">
        <div className="max-w-5xl mx-auto space-y-12">
          
          {/* Label */}
          <div className="flex items-center space-x-6">
            <div className="h-[1px] w-16 bg-gold/50" />
            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-navy/60">UK-Wide Strategic Revenue Advisory</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-7xl lg:text-9xl font-serif font-bold tracking-tight text-navy leading-[1.1]">
            Eliminate <br />
            <span className="italic font-normal text-gold">Revenue Leakage.</span>
          </h1>
          
          {/* Body Copy */}
          <p className="text-lg md:text-2xl lg:text-3xl text-navy/80 max-w-3xl leading-relaxed font-sans font-normal tracking-tight">
            Most service businesses lose 20–45% of inbound revenue due to missed calls, slow response times, and broken follow-up systems. <span className="font-bold border-b border-gold/50">RVNA</span> builds intelligent systems that recover it.
          </p>
          
          {/* Inline Stats Row */}
          <div className="flex items-center space-x-12 pt-6">
            <div className="flex flex-col space-y-2">
              <span className="text-4xl font-serif font-bold text-navy tracking-tighter">24/7</span>
              <span className="text-[9px] font-sans font-bold uppercase tracking-[0.3em] text-navy/50">Lead Capture</span>
            </div>
            <div className="w-[1px] h-12 bg-navy/20" />
            <div className="flex flex-col space-y-2">
              <span className="text-4xl font-serif font-bold text-navy tracking-tighter">98%</span>
              <span className="text-[9px] font-sans font-bold uppercase tracking-[0.3em] text-navy/50">System Efficiency</span>
            </div>
            <div className="w-[1px] h-12 bg-navy/20" />
            <div className="flex flex-col space-y-2">
              <span className="text-4xl font-serif font-bold text-navy tracking-tighter">20–45%</span>
              <span className="text-[9px] font-sans font-bold uppercase tracking-[0.3em] text-navy/50">Revenue Recovery</span>
            </div>
          </div>
          
          {/* Buttons */}
          <div className="pt-10 flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-8">
            <a href="#contact">
              <Button className="flex items-center group">
                Book Discovery Call
              </Button>
            </a>
            <a href="#framework" className="text-xs font-sans font-bold uppercase tracking-widest text-navy/60 hover:text-navy transition-colors flex items-center group">
              Explore Methodology
              <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
            </a>
          </div>
        </div>
      </Section>

      {/* SECTION 2: OPERATIONAL FRICTION */}
      <Section id="problem" className="border-b border-navy/10 relative">
        <div className="grid lg:grid-cols-2 gap-32 items-center mx-auto max-w-7xl">
          {/* Left Column */}
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-navy/50">The Challenge</div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight leading-tight text-navy">
                The Cost of <br /> Operational Friction.
              </h2>
            </div>
            <p className="text-xl text-navy/80 leading-relaxed font-sans font-normal">
              In high-ticket service sectors, the first response is often the only response. Revenue leakage isn't a marketing problem—it's an infrastructure failure.
            </p>
            <div className="pt-8 space-y-16">
              {[
                { metric: "32%", label: "Average missed call rate in UK dental and aesthetic clinics.", icon: PhoneMissed },
                { metric: "40%", label: "Enquiries that never receive a second follow-up attempt.", icon: Target },
                { metric: "3–8h", label: "Average delay between enquiry and first human contact.", icon: Clock }
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-8">
                  <div className="p-4 bg-navy/5 border border-navy/10 rounded-sm">
                    <item.icon className="w-6 h-6 text-navy/60" />
                  </div>
                  <div>
                    <div className="text-4xl font-serif font-bold text-navy mb-2 tracking-tighter">{item.metric}</div>
                    <p className="text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-navy/60 leading-relaxed max-w-xs">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column (Floating Navy Card) */}
          <div className="bg-navy p-16 text-cream space-y-12 shadow-2xl relative border border-transparent">
            <h3 className="text-3xl font-serif font-bold italic tracking-tight text-gold">Financial Impact Analysis</h3>
            <p className="text-cream/80 text-lg leading-relaxed font-sans font-normal">
              Conservative modelling suggests that for a high-growth clinic, a typical 20-45% leakage rate represents a significant six-figure sum in preventable annual loss. This is capital that has already been paid for through marketing spend but never captured.
            </p>
            <div className="pt-10 border-t border-cream/20 space-y-6">
              <div className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-cream/50">Strategic Objective</div>
              <p className="text-2xl font-serif italic leading-relaxed text-cream">"Move from reactive lead handling to an automated, 24/7 revenue capture infrastructure."</p>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 3: FRAMEWORK */}
      <Section id="framework" className="border-b border-navy/10">
        <div className="text-center max-w-3xl mx-auto mb-32 space-y-8">
          <div className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-navy/50">Strategic Methodology</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-navy">
            The <span className="italic font-normal text-gold">RVNA Framework.</span>
          </h2>
          <div className="h-[1px] w-32 bg-navy/20 mx-auto" />
          <p className="text-xl text-navy/80 font-sans font-normal">A structured methodology for operational revenue recovery and sustainable growth.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
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
            <div 
              key={i} 
              className="space-y-10 p-12 border border-navy/20 bg-cream/50 hover:bg-cream hover:border-navy hover:shadow-xl transition-all duration-500 relative"
            >
              <div className="text-5xl font-serif italic text-navy/10 absolute top-8 right-12 z-10">{item.step}</div>
              <h3 className="text-3xl font-serif font-bold tracking-tight text-navy">{item.title}</h3>
              <p className="text-base text-navy/80 leading-relaxed font-sans font-normal">{item.desc}</p>
              <ul className="space-y-4 pt-6 border-t border-navy/10">
                {item.features.map((f, j) => (
                  <li key={j} className="flex items-center text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-navy/70">
                    <div className="w-1.5 h-1.5 bg-gold mr-4" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* SECTION 4: OPERATIONAL EXCELLENCE (DARK SECTION) */}
      <Section dark className="bg-navy py-48 text-cream">
        <div className="grid lg:grid-cols-2 gap-32 items-center mx-auto max-w-7xl">
          {/* Left side text */}
          <div className="space-y-16">
            <div className="space-y-8">
              <div className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-cream/50">Implementation Journey</div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight leading-tight text-cream">
                From Audit to <br /> <span className="italic font-normal text-gold">Operational Excellence.</span>
              </h2>
            </div>
            
            <div className="space-y-16">
              {[
                { step: "01", title: "Operational Audit", desc: "A deep-dive analysis of your current lead handling and conversion infrastructure." },
                { step: "02", title: "System Design", desc: "We architect a custom recovery framework tailored to your specific business model." },
                { step: "03", title: "Deployment", desc: "Seamless integration of automated capture and conversion systems with your existing workflow." },
                { step: "04", title: "Refinement", desc: "Ongoing optimization based on real-world performance data and ROI metrics." }
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-10">
                  <span className="text-2xl font-serif font-bold text-gold">{item.step}</span>
                  <div className="space-y-3">
                    <h4 className="text-2xl font-serif font-bold tracking-tight text-cream">{item.title}</h4>
                    <p className="text-base text-cream/70 leading-relaxed max-w-md font-sans font-normal">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Floating Card */}
          <div className="relative">
            <div className="bg-navy border border-cream/20 shadow-2xl relative overflow-hidden flex flex-col items-center justify-center p-16 text-center">
              <div className="w-24 h-24 rounded-full border border-cream/20 flex items-center justify-center mx-auto mb-10">
                <ShieldCheck className="w-10 h-10 text-gold" />
              </div>
              <div className="space-y-6">
                <h3 className="text-4xl font-serif font-bold tracking-tight text-cream leading-tight">
                  The <span className="italic font-normal text-gold">RVNA Standard</span>
                </h3>
                <p className="text-base text-cream/70 font-sans font-normal leading-relaxed">We don't just build systems; we build the infrastructure for your next phase of growth.</p>
              </div>
              <div className="mt-12">
                <a href="#contact">
                  <Button variant="light">Book Discovery Call</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 5: QUANTIFYING */}
      <Section id="impact" className="relative bg-cream border-t border-navy/10 py-48">
        <div className="grid lg:grid-cols-2 gap-32 items-center mx-auto max-w-7xl">
          <div className="space-y-16">
            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className="w-16 h-[1px] bg-gold" />
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-navy/60">Revenue Analysis</span>
              </div>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight leading-[1.1] text-navy">
                Quantifying <br />
                <span className="italic font-normal text-gold">the Opportunity.</span>
              </h2>
            </div>
            
            <p className="text-2xl text-navy/80 leading-relaxed font-sans font-normal tracking-tight">
              Our analysis focuses on the "Preventable Loss"—revenue that is currently entering your ecosystem but exiting before conversion due to systemic friction.
            </p>
            
            <div className="pt-12 space-y-10">
              <div className="p-10 border-l-2 border-gold bg-navy/5">
                <p className="text-lg text-navy/90 leading-relaxed italic font-serif font-bold">
                  "For a practice generating £850k, a 30% leakage represents a £255k gross deficit. Recovering even a fraction of this loss delivers an immediate and substantial ROI."
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-20 py-12">
            <div className="grid grid-cols-1 gap-16">
              <div className="space-y-6 pb-12 border-b border-navy/20">
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-navy/60">Weekly Enquiries</span>
                <div className="text-7xl font-serif font-bold text-navy tracking-tighter">120+</div>
              </div>
              
              <div className="space-y-6 pb-12 border-b border-navy/20">
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-navy/60">Estimated Leakage</span>
                <div className="text-7xl font-serif font-bold text-gold italic tracking-tighter">42%</div>
              </div>

              <div className="space-y-8 p-12 bg-navy text-cream shadow-2xl relative">
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-cream/50 relative z-10">System Recovery Potential</span>
                <div className="space-y-4 relative z-10">
                  <div className="text-8xl md:text-9xl font-serif font-bold text-cream tracking-tighter">
                    96%
                  </div>
                  <p className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-cream/50 italic">
                    Based on high-fidelity operational modelling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <FAQ />
      <Contact />
    </main>
  );
}
