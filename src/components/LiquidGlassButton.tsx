import { motion } from 'framer-motion';
import React from 'react';

interface LiquidGlassButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
  variant?: 'default' | 'terracotta';
  href?: string;
  className?: string;
}

export default function LiquidGlassButton({
  children,
  onClick,
  active = false,
  variant = 'default',
  href,
  className = '',
}: LiquidGlassButtonProps) {
  const baseClass =
    variant === 'terracotta'
      ? 'liquid-glass-terracotta'
      : active
        ? 'liquid-glass-active'
        : 'liquid-glass';

  const content = (
    <motion.span
      className={`${baseClass} inline-flex items-center justify-center gap-2.5 rounded-full px-5 py-2.5 text-[13px] font-medium cursor-pointer select-none tracking-wide ${
        variant === 'terracotta'
          ? 'text-white'
          : active
            ? 'text-terracotta'
            : 'text-brown-dark/80'
      } ${className}`}
      style={{ fontFamily: 'var(--font-sans)' }}
      whileTap={{ scale: 0.93 }}
      whileHover={{ scale: 1.04 }}
      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick}>
      {content}
    </button>
  );
}
