"use client";
import { motion } from "motion/react";
import { ReactNode } from "react";

export const Section = ({ children, className = "", id = "", dark = false, muted = false }: { children: ReactNode; className?: string; id?: string; dark?: boolean; muted?: boolean }) => (
  <motion.section 
    id={id} 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={`py-40 px-6 md:px-12 lg:px-24 ${dark ? 'bg-navy dark:bg-cream/5 text-cream dark:text-navy' : 'bg-cream dark:bg-navy text-navy dark:text-cream'} ${className} relative overflow-hidden transition-colors duration-500`}
  >
    <div className="max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        {children}
      </motion.div>
    </div>
  </motion.section>
);
export default Section;
