import React, { useState } from 'react';
import Logo from './Logo';

interface FooterProps {
  onHomeClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onHomeClick }) => {
  const [subbed, setSubbed] = useState(false);

  const scrollTo = (id: string) => {
    if (id === 'home') {
      onHomeClick();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2D3E50] text-white pt-20 pb-10">
      <div className="max-w-7xl auto px-4 sm:px-6 lg:px-8">

        <div className="mb-16">

          <button onClick={() => scrollTo('home')}>
            <Logo size="sm" />
          </button>

          <p className="text-slate-400 text-sm mt-4">
            Sua descrição aqui
          </p>

        </div>

        <div className="border-t border-slate-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-slate-500 text-xs uppercase tracking-widest font-bold">
            © 2025 ACSI Industrial LTDA. Todos os direitos reservados.
          </p>

          <div className="flex gap-8 text-xs text-slate-500 font-bold uppercase tracking-wider">
            <button className="hover:text-white transition-colors">Privacidade</button>
            <button className="hover:text-white transition-colors">Termos</button>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
