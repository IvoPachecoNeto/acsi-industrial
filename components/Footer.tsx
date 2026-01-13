
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

  const handleSub = (e: React.FormEvent) => {
    e.preventDefault();
    setSubbed(true);
    setTimeout(() => setSubbed(false), 3000);
  };

  return (
    <footer className="bg-[#2D3E50] text-white pt-20 pb-10">
      <div className="max-w-7xl auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <button onClick={() => scrollTo('home')} className="hover:opacity-80 transition-opacity">
              <Logo size="sm" className="items-start" />
            </button>
            <p className="text-slate-400 leading-relaxed text-sm">
              Pioneirismo em excelência industrial há mais de 15 anos. Construímos a infraestrutura que impulsiona indústrias globais.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-[#A32A26] transition-colors">
                <i className="fa-brands fa-linkedin-in text-white"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-[#A32A26] transition-colors">
                <i className="fa-brands fa-instagram text-white"></i>
              </a>
              <a href="https://wa.me/5541988339333" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-[#A32A26] transition-colors">
                <i className="fa-brands fa-whatsapp text-white"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-[#A32A26] pb-2 inline-block uppercase tracking-widest text-xs">Empresa</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-bold uppercase tracking-wider">
              <li><button onClick={() => scrollTo('team')} className="hover:text-[#A32A26] transition-colors">Sobre Nós</button></li>
              <li><button onClick={() => scrollTo('home')} className="hover:text-[#A32A26] transition-colors">Início</button></li>
              <li><button onClick={() => scrollTo('portfolio')} className="hover:text-[#A32A26] transition-colors">Projetos</button></li>
              <li><button onClick={() => scrollTo('contact')} className="hover:text-[#A32A26] transition-colors">Contatos</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-[#A32A26] pb-2 inline-block uppercase tracking-widest text-xs">Soluções</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-bold uppercase tracking-wider">
              <li><button onClick={() => scrollTo('services')} className="hover:text-[#A32A26] transition-colors">Laudos Técnicos</button></li>
              <li><button onClick={() => scrollTo('services')} className="hover:text-[#A32A26] transition-colors">Dispositivos</button></li>
              <li><button onClick={() => scrollTo('services')} className="hover:text-[#A32A26] transition-colors">Engenharia</button></li>
              <li><button onClick={() => scrollTo('services')} className="hover:text-[#A32A26] transition-colors">Máquinas Especiais</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-[#A32A26] pb-2 inline-block uppercase tracking-widest text-xs">Newsletter</h4>
            <p className="text-slate-400 mb-6 text-sm">Receba as últimas tendências industriais e atualizações da ACSI no seu e-mail.</p>
            {subbed ? (
              <p className="text-green-400 font-bold text-sm">Obrigado por se inscrever!</p>
            ) : (
              <form className="flex gap-2" onSubmit={handleSub}>
                <input required type="email" placeholder="Seu e-mail" className="bg-slate-800 border-none rounded-sm px-4 py-2 w-full focus:ring-2 focus:ring-[#A32A26] text-white text-sm" />
                <button type="submit" className="bg-[#A32A26] hover:bg-[#85211e] px-4 py-2 rounded-sm font-black text-sm uppercase">OK</button>
              </form>
            )}
          </div>
        </div>

        <div className="border-t border-slate-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs uppercase tracking-widest font-bold">© 2025 ACSI Industrial LTDA. Todos os direitos reservados.</p>
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
