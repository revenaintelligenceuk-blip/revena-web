'use client';

import { ReactNode } from "react";
import { motion } from "motion/react";

const Section = ({ 
  children, 
  className = "", 
  id = "", 
  dark = false, 
  muted = false,
  noAnimation = false
}: { 
  children: ReactNode; 
  className?: string; 
  id?: string; 
  dark?: boolean; 
  muted?: boolean;
  noAnimation?: boolean;
}) => (
  <motion.section 
    id={id} 
    initial={noAnimation ? { opacity: 1 } : { opacity: 0 }}
    whileInView={noAnimation ? { opacity: 1 } : { opacity: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 1 }}
    className={`py-40 px-6 md:px-12 lg:px-24 ${dark ? 'bg-navy text-cream' : muted ? 'bg-cream-muted text-navy' : 'bg-cream text-navy'} ${className} relative overflow-hidden`}
  >
    {!dark && <div className="absolute inset-0 bg-grain pointer-events-none opacity-100" />}
    {!dark && <div className="absolute inset-0 bg-grid pointer-events-none" />}
    <div className="max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={noAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        whileInView={noAnimation ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        {children}
      </motion.div>
    </div>
  </motion.section>
);

export default Section;
