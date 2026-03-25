"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import Section from "./Section";

const faqs = [
  {
    question: "How quickly can your systems be deployed?",
    answer: "Following our initial audit, a standard recovery framework takes 14-21 days to implement. We handle all technical configuration so your team can focus entirely on operations."
  },
  {
    question: "Do we need to change our existing CRM or software?",
    answer: "No. Our infrastructure is designed to integrate seamlessly with your existing tech stack (e.g., Salesforce, HubSpot, Cliniko). We act as an intelligent layer on top of your current software."
  },
  {
    question: "Is the data capture fully secure and compliant?",
    answer: "Absolutely. All our systems operate with strict GDPR compliance and end-to-end encryption. Data confidentiality for high-ticket clients is our top priority."
  },
  {
    question: "How do you calculate 'Revenue Recovery'?",
    answer: "We track leads that would have previously been missed (e.g., missed calls converted via automated SMS, or dormant leads reactivated via workflows) and measure the direct monetary value of those converted clients."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" dark className="border-t border-cream/10 dark:border-navy/10 py-48">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        <div className="md:w-1/3 space-y-6 sticky top-32">
          <div className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-gold/60">Clarity & Expectations</div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight leading-tight text-cream dark:text-navy">
            Common <br /> <span className="italic font-normal text-gold">Inquiries.</span>
          </h2>
          <p className="text-sm text-cream/50 dark:text-navy/50 leading-relaxed font-sans font-normal">
            Answers to frequent questions about our implementation timeline and integration capabilities.
          </p>
        </div>

        <div className="md:w-2/3 w-full">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border-b border-cream/10 dark:border-navy/10 pb-2 mb-2 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left py-6 flex items-center justify-between group cursor-pointer"
              >
                <span className={`text-lg font-serif transition-colors duration-300 ${openIndex === index ? 'text-gold' : 'text-cream dark:text-navy group-hover:text-cream/80 dark:group-hover:text-navy/80'}`}>
                  {faq.question}
                </span>
                <span className="ml-6 flex-shrink-0 text-cream/40 dark:text-navy/40 group-hover:text-gold transition-colors duration-300">
                  {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                     initial={{ height: 0, opacity: 0 }}
                     animate={{ height: "auto", opacity: 1 }}
                     exit={{ height: 0, opacity: 0 }}
                     transition={{ duration: 0.3, ease: "easeInOut" }}
                     style={{ overflow: 'hidden' }}
                   >
                     <p className="pb-8 text-cream/50 dark:text-navy/50 font-sans font-normal leading-relaxed pr-12">
                       {faq.answer}
                     </p>
                   </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FAQ;
