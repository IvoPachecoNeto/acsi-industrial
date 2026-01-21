
import React from 'react';
import { COMPANY_INFO } from '../constants';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Logo: React.FC<LogoProps> = ({ className = "", size = "md" }) => {
  // Ajuste de escala (altura) baseado no tamanho
  const heightClasses = {
    sm: "h-8",
    md: "h-12",
    lg: "h-16",
    xl: "h-20"
  };

  const textSizeClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-4xl",
    xl: "text-5xl"
  };

  const subTextSizeClasses = {
    sm: "text-[8px]",
    md: "text-[10px]",
    lg: "text-xs",
    xl: "text-sm"
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Imagem da Logo via Link Global definido em constants.ts */}
      <img 
        src={COMPANY_INFO.logoUrl} 
        alt={`${COMPANY_INFO.name} Logo`} 
        className={`${heightClasses[size]} w-auto object-contain opacity-90`}
      />
      
      {/* Texto da Logo Global definido em constants.ts */}
      <div className={`flex flex-col justify-center ${size === 'sm' ? 'hidden md:flex' : 'flex'}`}>
        <h1 className={`font-black text-[#2D3E50] leading-none tracking-tighter ${textSizeClasses[size]}`}>
          {COMPANY_INFO.name}
        </h1>
        <span className={`font-bold text-[#A32A26] uppercase tracking-[0.2em] leading-none ${subTextSizeClasses[size]}`}>
          {COMPANY_INFO.subtitle}
        </span>
      </div>
    </div>
  );
};

export default Logo;
