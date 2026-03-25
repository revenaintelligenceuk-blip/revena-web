"use client";

import { motion } from "motion/react";

export const Logo = ({ className = "", onClick, light = false }: { className?: string; onClick?: () => void; light?: boolean }) => (
  <motion.button 
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`flex items-center space-x-2 md:space-x-2.5 ${className} ${onClick ? 'cursor-pointer' : ''} text-left border-none bg-transparent p-0 outline-none group`}
  >
    <div className="flex flex-col justify-center pt-0.5">
      <span className={`${light ? 'text-cream' : 'text-navy'} font-serif font-bold text-2xl md:text-3xl tracking-tight transition-colors duration-500 leading-[1.1]`}>
        RVNA
      </span>
      <span className={`${light ? 'text-cream/60' : 'text-navy/60'} font-sans font-bold text-[8.5px] md:text-[9.5px] uppercase tracking-[0.35em] md:tracking-[0.45em] transition-colors duration-500 group-hover:text-gold mt-0.5`}>
        Intelligence
      </span>
    </div>
  </motion.button>
);

export default Logo;
