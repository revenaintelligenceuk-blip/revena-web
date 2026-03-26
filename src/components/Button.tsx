'use client';

import { ReactNode } from "react";
import { motion } from "motion/react";

const Button = ({ 
  children, 
  variant = "primary", 
  className = "",
  onClick,
  type = "button"
}: { 
  children: ReactNode; 
  variant?: "primary" | "outline" | "light"; 
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}) => {
  const variants = {
    primary: "bg-navy text-cream hover:bg-navy-muted border border-navy shadow-premium",
    outline: "bg-transparent border border-navy/20 text-navy hover:bg-navy hover:text-cream hover:border-navy",
    light: "bg-cream text-navy hover:bg-cream-light border border-cream shadow-premium"
  };

  return (
    <motion.button 
      type={type}
      whileHover={{ y: -2, boxShadow: "0 20px 40px -10px rgba(1, 23, 45, 0.15)" }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`px-10 py-4 font-sans font-bold text-[10px] uppercase tracking-[0.2em] transition-all duration-500 ${variants[variant]} ${className} cursor-pointer relative overflow-hidden group`}
    >
      <span className="relative z-10">{children}</span>
      {variant === "primary" && (
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cream-light/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
        />
      )}
    </motion.button>
  );
};

export default Button;
