import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const LogoContainer = ({ className = '', variant = 'dark', onClick }) => {
  const isLight = variant === 'light';

  return (
    <Link to="/" className={`flex items-center gap-2 sm:gap-3 group ${className}`} onClick={onClick}>
      <img
        src={logo}
        alt="CodeExpedition"
        className={`h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105 ${isLight ? 'brightness-0 invert' : ''}`}
      />
      <span className={`text-base sm:text-xl font-bold tracking-tight ${isLight ? 'text-white' : 'text-brand-primary'}`}>
        CodeExpedition
      </span>
    </Link>
  );
};

export default LogoContainer;
