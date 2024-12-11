import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
}

export default function Button({ children, variant = 'primary', className = '', onClick }: ButtonProps) {
  const baseStyles = 'rounded-lg font-medium transition-colors duration-200';
  const variantStyles = {
    primary: 'bg-[#D4AF37] text-white hover:bg-[#C19B2C]',
    secondary: 'bg-[#1A1A1A] text-white hover:bg-[#333]',
    outline: 'border border-[#666] text-[#666] hover:bg-[#f5f5f5]'
  };

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}