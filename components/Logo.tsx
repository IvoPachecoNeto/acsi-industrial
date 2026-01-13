
import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Logo: React.FC<LogoProps> = ({ className = "", size = "md" }) => {
  const sizeClasses = {
    sm: "h-12",
    md: "h-20",
    lg: "h-32",
    xl: "h-48"
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      {/* 
        A imagem da logo deve ser salva como 'logo.png' na pasta public.
        Isso garante que ela seja exibida exatamente como solicitado, sem alterações de traço.
      */}
      <img 
        src="/logo.png" 
        alt="ACSI Industrial" 
        className={`${sizeClasses[size]} w-auto object-contain`}
      />
    </div>
  );
};

export default Logo;
