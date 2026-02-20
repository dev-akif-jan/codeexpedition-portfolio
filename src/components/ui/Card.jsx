import React from 'react';

const Card = ({ children, className = '', variant = 'default', hoverEffect = true, padding = true }) => {
  const baseStyles = `bg-white rounded-xl transition-all duration-300 border border-border-subtle ${padding ? 'p-6 md:p-8' : ''}`;

  const variants = {
    default: 'shadow-sm',
    primary: 'bg-gradient-to-br from-brand-primary/5 to-transparent border-brand-primary/20',
    gradient: 'bg-gradient-to-br from-gray-900 to-gray-800 text-white border-transparent'
  };

  const hoverStyles = hoverEffect ? 'hover:shadow-md hover:-translate-y-1' : '';

  return (
    <div className={`${baseStyles} ${variants[variant] || variants.default} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
