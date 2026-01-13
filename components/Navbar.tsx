
import React, { useState } from 'react';
import Logo from './Logo';

interface NavbarProps {
  onHomeClick: () => void;
  onProjectsClick: () => void;
  onContactClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onHomeClick, onProjectsClick, onContactClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    if (id === 'home') {
      onHomeClick();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (id === 'portfolio') {
      onProjectsClick();
      return;
    }
    if (id === 'contact') {
      onContactClick();
      return;
    }
    
    // Fallback for general scrolling if we are already on home
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
        // If element not found (e.g. we are in detail view), force home first
        onHomeClick();
        setTimeout(() => {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-white text-slate-900 shadow-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <button onClick={() => scrollTo('home')} className="flex-shrink-0 flex flex-col items-center hover:opacity-80 transition-opacity">
              <Logo size="sm" />
            </button>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollTo('home')} className="hover:text-[#A32A26] transition-colors font-bold text-sm uppercase tracking-wider">Início</button>
            <button onClick={() => scrollTo('services')} className="hover:text-[#A32A26] transition-colors font-bold text-sm uppercase tracking-wider">Serviços</button>
            <button onClick={() => scrollTo('team')} className="hover:text-[#A32A26] transition-colors font-bold text-sm uppercase tracking-wider">Quem Somos</button>
            <button onClick={() => scrollTo('portfolio')} className="hover:text-[#A32A26] transition-colors font-bold text-sm uppercase tracking-wider">Portfólio</button>
            <button onClick={onContactClick} className="bg-[#A32A26] hover:bg-[#85211e] text-white px-6 py-2 rounded-sm transition-all font-black text-xs uppercase tracking-widest shadow-lg shadow-red-900/10">Orçamento</button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-[#A32A26] focus:outline-none">
              <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <button onClick={() => scrollTo('home')} className="block w-full text-left px-3 py-4 text-sm font-black uppercase tracking-widest hover:bg-slate-50 border-l-4 border-transparent hover:border-[#A32A26]">Início</button>
            <button onClick={() => scrollTo('services')} className="block w-full text-left px-3 py-4 text-sm font-black uppercase tracking-widest hover:bg-slate-50 border-l-4 border-transparent hover:border-[#A32A26]">Serviços</button>
            <button onClick={() => scrollTo('team')} className="block w-full text-left px-3 py-4 text-sm font-black uppercase tracking-widest hover:bg-slate-50 border-l-4 border-transparent hover:border-[#A32A26]">Quem Somos</button>
            <button onClick={() => scrollTo('portfolio')} className="block w-full text-left px-3 py-4 text-sm font-black uppercase tracking-widest hover:bg-slate-50 border-l-4 border-transparent hover:border-[#A32A26]">Portfólio</button>
            <button onClick={() => { setIsOpen(false); onContactClick(); }} className="block w-full bg-[#A32A26] text-white py-4 font-black uppercase tracking-widest text-center rounded mt-4">Orçamento</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
