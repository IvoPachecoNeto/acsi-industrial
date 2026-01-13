
import React from 'react';
import { TEAM } from '../constants';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
            <h2 className="text-[#A32A26] font-bold tracking-widest uppercase text-sm mb-3">Quem Somos</h2>
            <h3 className="text-4xl font-extrabold text-[#2D3E50] mb-8">Perfil Profissional</h3>
            <div className="p-8 bg-slate-50 border-l-4 border-[#A32A26]">
              <p className="text-slate-600 leading-relaxed italic">
                "Agregando nossas experiências e com vontade de crescer, fundamos a ACSI, empresa com sólida base em engenharia e gestão de projetos industriais."
              </p>
            </div>
            
            <div className="mt-12 space-y-4">
              <h4 className="font-bold text-slate-900 uppercase tracking-wider text-sm">Especialização em Aviação</h4>
              <p className="text-slate-600 text-sm">
                Atuação especializada em aeronaves clássicas e experimentais, com foco em reformas completas de célula, motor e aviônicos.
              </p>
            </div>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {TEAM.map((member, idx) => (
              <div key={idx} className="bg-white border border-slate-100 p-8 shadow-xl rounded-sm group hover:border-[#A32A26] transition-colors relative overflow-hidden">
                <div className="flex items-center gap-6 mb-6">
                  {/* Foto do Colaborador - Salva em /public como henri.png e henrique.png */}
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-lg object-cover border-2 border-slate-200 group-hover:border-[#A32A26] shadow-md transition-all grayscale group-hover:grayscale-0"
                  />
                  <div>
                    <h4 className="text-lg font-black text-[#2D3E50] leading-tight uppercase tracking-tight mb-1">{member.name}</h4>
                    <span className="text-[#A32A26] text-xs font-bold uppercase tracking-widest">{member.role}</span>
                  </div>
                </div>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  {member.bio}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {member.experience.slice(0, 3).map((exp, i) => (
                    <span key={i} className="text-[10px] bg-slate-50 text-slate-500 px-2 py-1 font-black uppercase rounded border border-slate-100">
                      {exp}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
