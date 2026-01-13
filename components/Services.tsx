
import React from 'react';
import { SERVICES } from '../constants';

interface ServicesProps {
  onServiceClick: (id: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onServiceClick }) => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#A32A26] font-bold tracking-widest uppercase text-sm mb-3">Nossa Experiência</h2>
          <h3 className="text-4xl font-extrabold text-[#2D3E50] mb-4">Soluções Industriais Completas</h3>
          <div className="w-20 h-1.5 bg-[#A32A26] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="group p-8 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-[#2D3E50] hover:text-white transition-all duration-300 hover:-translate-y-2 shadow-sm">
              <div className="w-14 h-14 bg-red-50 group-hover:bg-[#A32A26] rounded-xl flex items-center justify-center mb-6 transition-colors">
                <i className={`fa-solid ${service.icon} text-2xl text-[#A32A26] group-hover:text-white`}></i>
              </div>
              <h4 className="text-xl font-bold mb-4">{service.title}</h4>
              <p className="text-slate-600 group-hover:text-slate-300 leading-relaxed text-sm">
                {service.description}
              </p>
              <button 
                onClick={() => onServiceClick(service.id)}
                className="mt-6 flex items-center text-[#A32A26] group-hover:text-[#ff615c] font-bold cursor-pointer text-sm uppercase tracking-wider"
              >
                SAIBA MAIS <i className="fa-solid fa-arrow-right ml-2 text-xs"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
