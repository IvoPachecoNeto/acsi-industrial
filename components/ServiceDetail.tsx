
import React from 'react';
import { DetailedService } from '../constants';

interface ServiceDetailProps {
  service: DetailedService;
  onBack: () => void;
  onContactClick: () => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onBack, onContactClick }) => {
  // Título personalizado para a seção de Dispositivos e Gabaritos
  const projectsTitle = service.id === 'dispositivos' 
    ? "Alguns dos projetos que já concluímos" 
    : "Exemplos de Projetos Realizados";

  return (
    <div className="pt-32 pb-24 bg-white animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="mb-12 flex items-center gap-2 text-[#A32A26] font-bold uppercase tracking-widest text-sm hover:underline"
        >
          <i className="fa-solid fa-arrow-left"></i> Voltar ao inicio
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="w-20 h-20 bg-red-50 text-[#A32A26] rounded-2xl flex items-center justify-center mb-8 shadow-sm">
              <i className={`fa-solid ${service.icon} text-4xl`}></i>
            </div>
            <h1 className="text-5xl font-black text-[#2D3E50] mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-10">
              {service.fullDescription}
            </p>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-[#2D3E50] uppercase tracking-wider border-b-2 border-[#A32A26] inline-block pb-1">
                O que entregamos:
              </h3>
              <ul className="space-y-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-slate-700">
                    <div className="mt-1 w-5 h-5 bg-[#A32A26] text-white rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="fa-solid fa-check text-[10px]"></i>
                    </div>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12">
              <button 
                onClick={onContactClick}
                className="bg-[#A32A26] hover:bg-[#85211e] text-white px-10 py-5 rounded-sm font-black text-lg transition-all shadow-xl shadow-red-900/20 uppercase tracking-widest w-full sm:w-auto"
              >
                Solicitar Orçamento Técnico
              </button>
            </div>
          </div>

          <div className="space-y-8 w-full">
            <h3 className="text-2xl font-black text-[#2D3E50] uppercase tracking-tighter">{projectsTitle}</h3>
            
            {/* Grid ajustado para 3 colunas em telas maiores para acomodar as 9 imagens */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.subProjects.length > 0 ? service.subProjects.map((p, i) => (
                <div key={i} className="group relative overflow-hidden rounded-sm shadow-xl aspect-square bg-slate-100">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <h4 className="text-white font-bold text-xs leading-tight">{p.title}</h4>
                  </div>
                </div>
              )) : (
                <div className="col-span-full p-12 bg-slate-50 border-2 border-dashed border-slate-200 rounded-sm text-center">
                  <i className="fa-solid fa-industry text-4xl text-slate-300 mb-4"></i>
                  <p className="text-slate-500 font-bold">Confira nosso portfólio completo para ver centenas de outros projetos nesta área.</p>
                </div>
              )}
            </div>
            
            <div className="bg-[#2D3E50] p-8 text-white rounded-sm mt-8">
               <div className="text-3xl font-black text-[#A32A26] mb-2">100+</div>
               <div className="text-sm font-bold uppercase tracking-widest opacity-80 mb-4">Projetos de sucesso no currículo</div>
               <p className="text-slate-300 text-sm leading-relaxed">
                 Nossa equipe técnica possui vasto histórico em empresas de classe mundial, trazendo o melhor da engenharia global para o seu projeto local.
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
