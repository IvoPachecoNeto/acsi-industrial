
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Clients from './components/Clients';
import Services from './components/Services';
import Team from './components/Team';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServiceDetail from './components/ServiceDetail';
import { SERVICES } from './constants';

function App() {
  const [view, setView] = useState<'home' | 'service-detail' | 'all-projects'>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  const navigateToService = (id: string) => {
    setSelectedServiceId(id);
    setView('service-detail');
  };

  const navigateToAllProjects = () => {
    setView('all-projects');
  };

  const goHome = () => {
    setView('home');
    setSelectedServiceId(null);
  };

  // Função centralizada para navegar até o contato
  const navigateToContact = () => {
    // Se não estivermos na home (onde o contato está visível), vamos para a home primeiro
    if (view === 'service-detail') {
      setView('home');
      setSelectedServiceId(null);
      // Pequeno timeout para garantir que a home renderizou antes de rolar
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Se já estivermos na home ou all-projects (que tem contato no final)
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const selectedService = SERVICES.find(s => s.id === selectedServiceId);

  return (
    <div className="min-h-screen selection:bg-[#A32A26] selection:text-white bg-white">
      <Navbar onHomeClick={goHome} onProjectsClick={navigateToAllProjects} onContactClick={navigateToContact} />
      
      {view === 'home' && (
        <>
          <Hero onProjectsClick={navigateToAllProjects} />
          <Clients />
          <Services onServiceClick={navigateToService} />
          <Team />
          <Portfolio onAllProjectsClick={navigateToAllProjects} onContactClick={navigateToContact} />
          <Contact />
        </>
      )}

      {view === 'service-detail' && selectedService && (
        <ServiceDetail service={selectedService} onBack={goHome} onContactClick={navigateToContact} />
      )}

      {view === 'all-projects' && (
        <div className="pt-32 pb-24">
          <div className="max-w-7xl mx-auto px-4">
            <button onClick={goHome} className="mb-12 flex items-center gap-2 text-[#A32A26] font-bold uppercase tracking-widest text-sm hover:underline">
              <i className="fa-solid fa-arrow-left"></i> Voltar ao Início
            </button>
            <div className="text-center mb-16">
              <h2 className="text-[#A32A26] font-bold tracking-widest uppercase text-sm mb-3">Portfólio Completo</h2>
              <h3 className="text-4xl font-extrabold text-[#2D3E50] mb-4">Mais de 100 Projetos Concluídos</h3>
              <div className="w-20 h-1.5 bg-[#A32A26] mx-auto rounded-full"></div>
              <p className="mt-8 text-slate-600 max-w-2xl mx-auto">
                Confira alguns projetos que participamos ou atuamos na Industria" na aba portifolio.
              </p>
            </div>
            <Portfolio isFullView={true} onAllProjectsClick={() => {}} onContactClick={navigateToContact} />
            <div className="mt-20">
              <Contact />
            </div>
          </div>
        </div>
      )}

      <Footer onHomeClick={goHome} />
      
      {/* Scroll to Top Floating Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#A32A26] text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-[#85211e] transition-all hover:scale-110 active:scale-95 border-2 border-white/20"
        aria-label="Voltar ao topo"
      >
        <i className="fa-solid fa-chevron-up text-xl"></i>
      </button>
    </div>
  );
}

export default App;
