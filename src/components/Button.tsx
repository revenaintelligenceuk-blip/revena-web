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
  variant?: "primary" | "outline" | "light" | "ghost"; 
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}) => {
  const variants = {
    primary: "bg-navy dark:bg-cream text-cream dark:text-navy hover:opacity-90",
    outline: "bg-transparent border border-navy/20 dark:border-cream/20 text-navy dark:text-cream hover:bg-navy dark:hover:bg-cream hover:text-cream dark:hover:text-navy",
    light: "bg-cream dark:bg-navy text-navy dark:text-cream border border-cream/20 dark:border-navy/20 hover:opacity-90",
    ghost: "bg-transparent text-navy dark:text-cream hover:bg-navy/5 dark:hover:bg-cream/5"
  };

  return (
    <motion.button 
      type={type}
      disabled={disabled}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`px-10 py-4 font-sans font-bold text-[10px] uppercase tracking-[0.2em] transition-all duration-500 ${variants[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} relative overflow-hidden group`}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default Button;
