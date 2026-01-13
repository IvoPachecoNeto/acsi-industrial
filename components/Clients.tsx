
import React from 'react';
import { CLIENTS } from '../constants';

const Clients: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h4 className="text-center text-slate-400 font-bold uppercase tracking-[0.3em] text-xs mb-10">Empresas que marcamos presença</h4>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-50 grayscale hover:grayscale-0 transition-all">
           {CLIENTS.map((client) => (
             <span key={client} className="text-2xl font-black text-slate-800 tracking-tighter hover:text-[#A32A26] cursor-default transition-colors">
               {client}
             </span>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
