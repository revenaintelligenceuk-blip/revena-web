"use client";

import { motion } from "motion/react";

export const Logo = ({ className = "", onClick, light = false }: { className?: string; onClick?: () => void; light?: boolean }) => (
  <motion.button 
    whileHover={{ scale: 1.01 }}
    onClick={onClick}
    className={`flex flex-col items-center ${className} ${onClick ? 'cursor-pointer' : ''} text-center border-none bg-transparent p-0 outline-none group`}
  >
    <div className="flex flex-col items-center leading-none relative">
      <span className={`${light ? 'text-cream' : 'text-navy'} font-serif font-bold text-4xl tracking-tight transition-colors drop-shadow-[0_1px_1px_rgba(235,221,203,0.2)]`}>
        RVNA
      </span>
      <span className={`${light ? 'text-cream/40' : 'text-navy/60'} font-sans font-bold text-[9px] uppercase tracking-[0.6em] mt-1 transition-colors`}>
        Intelligence
      </span>
    </div>
  </motion.button>
);

export default Logo;
