
import React from 'react';
import { PROJECTS } from '../constants';

interface PortfolioProps {
  onAllProjectsClick: () => void;
  isFullView?: boolean;
  onContactClick?: () => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onAllProjectsClick, isFullView = false, onContactClick }) => {
  const displayedProjects = isFullView ? PROJECTS : PROJECTS.slice(0, 3);

  const handleContactClick = () => {
    if (onContactClick) {
      onContactClick();
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className={`py-24 ${isFullView ? 'bg-white' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!isFullView && (
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-3">
                <h2 className="text-[#A32A26] font-bold tracking-widest uppercase text-sm">Portfólio</h2>
                <span className="bg-[#A32A26] text-white text-[10px] font-black px-2 py-0.5 rounded-full">100+ PROJETOS</span>
              </div>
              <h3 className="text-4xl font-extrabold text-[#2D3E50] mb-4">Histórias de Sucesso em Engenharia</h3>
              <p className="text-slate-600">Um olhar sobre os desafios industriais complexos que superamos em diversos setores.</p>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={onAllProjectsClick}
                className="px-8 py-3 bg-white text-[#2D3E50] rounded-sm shadow-sm hover:bg-[#2D3E50] hover:text-white transition-all font-black uppercase tracking-widest text-xs border border-slate-200"
              >
                Ver Portfólio Completo
              </button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <div key={project.id} className="relative group overflow-hidden rounded-sm aspect-[4/3] shadow-lg border-2 border-transparent hover:border-[#A32A26]/30 transition-all">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D3E50] via-[#2D3E50]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-[#ff615c] text-sm font-black uppercase mb-2 tracking-widest">{project.category}</span>
                <h4 className="text-white text-2xl font-bold leading-tight">{project.title}</h4>
              </div>
            </div>
          ))}
        </div>

        {isFullView && (
           <div className="mt-16 p-12 bg-[#2D3E50] text-center text-white rounded-sm shadow-xl">
              <h4 className="text-3xl font-black mb-4">Quer saber mais sobre nossos outros 100+ projetos?</h4>
              <p className="text-slate-300 mb-8 max-w-xl mx-auto">Temos vasta experiência em laudos técnicos, dispositivos de precisão e máquinas especiais para diversos segmentos da indústria.</p>
              <button 
                onClick={handleContactClick}
                className="bg-[#A32A26] hover:bg-[#85211e] px-10 py-4 font-black uppercase tracking-widest transition-all shadow-xl shadow-black/20"
              >
                SOLICITAR APRESENTAÇÃO COMPLETA
              </button>
           </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
