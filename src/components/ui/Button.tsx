import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue disabled:pointer-events-none disabled:opacity-50",
          {
            'bg-accent-blue text-white hover:bg-blue-600 hover:shadow-lg hover:shadow-accent-blue/30': variant === 'primary',
            'bg-dark-blue text-white hover:bg-slate-800 hover:shadow-lg': variant === 'secondary',
            'border-2 border-dark-blue text-dark-blue hover:bg-dark-blue hover:text-white': variant === 'outline',
            'text-dark-blue hover:bg-dark-blue/5': variant === 'ghost',
            'h-9 px-4 text-sm': size === 'sm',
            'h-11 px-8 text-base': size === 'md',
            'h-14 px-10 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
