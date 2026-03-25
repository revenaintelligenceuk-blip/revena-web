"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

export const Button = ({ 
  children, 
  variant = "primary", 
  className = "",
  onClick,
  type = "button",
  disabled = false
}: { 
  children: ReactNode; 
  variant?: "primary" | "outline" | "light"; 
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}) => {
  const variants = {
    primary: "bg-navy text-cream hover:bg-navy-muted border border-navy shadow-premium",
    outline: "bg-transparent border border-navy/20 text-navy hover:bg-navy hover:text-cream hover:border-navy",
    light: "bg-cream text-navy hover:bg-cream-light border border-cream shadow-premium"
  };

  return (
    <motion.button 
      type={type}
      disabled={disabled}
      whileHover={{ y: -4, boxShadow: "0 20px 40px -10px rgba(10, 26, 47, 0.25)" }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`px-10 py-4 font-sans font-bold text-[10px] uppercase tracking-[0.2em] transition-all duration-500 ${variants[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} relative overflow-hidden group`}
    >
      <span className="relative z-10">{children}</span>
      {variant === "primary" && !disabled && (
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cream-light/10 to-transparent -translate-x-full group-hover:animate-shimmer transition-transform duration-1000"
        />
      )}
    </motion.button>
  );
};

export default Button;
