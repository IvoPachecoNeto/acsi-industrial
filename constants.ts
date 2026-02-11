import { Service, Project } from './types';

// Configurações Gerais da Empresa
export const COMPANY_INFO = {
  name: 'ACSI',
  subtitle: 'Industrial',
  logoUrl: 'https://i.redd.it/d10iwrs7zpeg1.png'
};

export interface DetailedService extends Service {
  fullDescription: string;
  features: string[];
  subProjects: { title: string; image: string }[];
}

export const SERVICES: DetailedService[] = [
  {
    id: 'laudos',
    title: 'Laudos Técnicos Industriais',
    description: 'Elaboração de laudos estruturais mecânicos, laudos de segurança e conformidade com normas técnicas e regulamentadoras (NR’s).',
    fullDescription: 'A ACSI Industrial é especializada na emissão de laudos técnicos fundamentais para a segurança e conformidade legal da sua operação.',
    icon: 'fa-file-signature',
    features: [
      'Laudos de esforços e capacidade de carga',
      'Conformidade com NR-11',
      'Laudos de segurança NR-12',
      'Cálculos estruturais por elementos finitos',
      'Emissão de ART'
    ],
    subProjects: [
      { title: '...', image: 'https://i.redd.it/e7l980lwobeg1.jpg' },
      { title: '...', image: 'https://i.redd.it/nllyq5lwobeg1.jpg' }
    ]
  },
  {
    id: 'dispositivos',
    title: 'Dispositivos e Gabaritos',
    description: 'Desenvolvimento de dispositivos de solda, montagem e gabaritos sob medida.',
    fullDescription: 'Projetamos dispositivos de alta precisão com repetibilidade industrial.',
    icon: 'fa-microchip',
    features: [
      'Dispositivos manuais e robotizados',
      'Gabaritos dimensionais',
      'Fixação pneumática/hidráulica',
      'Monitoramento de peças',
      'Projetos normatizados'
    ],
    subProjects: [
      { title: 'Gabarito de Precisão', image: 'https://i.redd.it/yfrtpykwobeg1.jpg' },
      { title: 'Prensa Especial', image: 'https://i.redd.it/ibxzr0lwobeg1.jpg' },
      { title: 'Gabarito Frontal', image: 'https://i.redd.it/nahvj2lwobeg1.jpg' },
      { title: 'Render 3D', image: 'https://i.redd.it/x92aa1lwobeg1.jpg' },
      { title: 'Mecanismo', image: 'https://i.redd.it/nllyq5lwobeg1.jpg' },
      { title: 'Mesa Controle', image: 'https://i.redd.it/cpoxb0lwobeg1.jpg' }
    ]
  },
  {
    id: 'projetos',
    title: 'Laudos Técnicos',
    description: 'Engenharia mecânica com modelagem 3D.',
    fullDescription: 'Serviço completo de engenharia industrial.',
    icon: 'fa-drafting-compass',
    features: [
      'Detalhamento técnico',
      'Retrofitting',
      'Projetos industriais',
      'Consultoria'
    ],
    subProjects: []
  },
  {
    id: 'maquinas',
    title: 'Máquinas Especiais',
    description: 'Máquinas sob medida para automação.',
    fullDescription: 'Soluções industriais exclusivas.',
    icon: 'fa-cogs',
    features: [],
    subProjects: []
  }
];

export const TEAM = [
  {
    name: 'Henrique Kaston Tobler',
    role: 'Engenheiro Mecânico',
    image: 'https://i.redd.it/sjcf32lwobeg1.jpg',
    bio: 'Sou Engenheiro Mecânico com sólida experiência no setor industrial, atuando em projetos técnicos, manutenção e gestão de obras. Trabalhei por mais de seis anos supervisionando obras de sistemas de refrigeração comercial, liderando equipes multidisciplinares nas áreas civil, mecânica e elétrica, garantindo a entrega completa e funcional das instalações. Também acumulo mais de cinco anos de experiência em instalações industriais, incluindo implantação de máquinas e equipamentos, construção de galpões, infraestrutura de utilidades e integração de células robotizadas. Minha atuação envolve a gestão de prazos, custos, qualidade e segurança, assegurando eficiência e confiabilidade em projetos no ambiente fabril',
    experience: []
  },
  {
    name: 'Henri Udo Bostelmann Filho',
    role: 'Engenheiro Mecânico',
    image: 'https://i.redd.it/ie7wz5tn3ahg1.png',
    bio: 'Sou engenheiro mecânico com pós-graduação em Engenharia de Segurança do Trabalho e mais de 15 anos de experiência na gestão e execução de projetos voltados à melhoria de processos de fabricação. Atuei em diferentes segmentos industriais, liderando iniciativas que geraram avanços significativos em eficiência operacional e qualidade. Trabalho desde a concepção até a entrega final de projetos, incluindo definição técnica, fabricação, montagem, instalação e startup. Desenvolvi máquinas especiais, gabaritos, dispositivos de solda, sistemas de manipulação e outros meios de produção, sempre com foco em inovação, segurança e melhoria contínua. Tenho perfil analítico, visão sistêmica e forte atuação prática no chão de fábrica, integrando tecnologia, produtividade e sustentabilidade aos processos.',
    experience: []
  }
];

export const CLIENTS: string[] = [];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Dispositivo de Solda',
    category: 'Industrial',
    imageUrl: 'https://i.redd.it/x92aa1lwobeg1.jpg'
  },
  {
    id: 'p2',
    title: 'Máquinas especiais',
    category: 'Engenharia',
    imageUrl: 'https://i.redd.it/nahvj2lwobeg1.jpg'
  },
  {
    id: 'p3',
    title: 'Manipuladores industriais',
    category: 'Automação',
    imageUrl: 'https://i.redd.it/e7t7b1lwobeg1.jpg'
  },
  {
    id: 'p4',
    title: 'Dispositivos de controle',
    category: 'Mecânica',
    imageUrl: 'https://i.redd.it/e7l980lwobeg1.jpg'
  },
  {
    id: 'p5',
    title: 'Manipulador elétrico',
    category: 'Logística',
    imageUrl: 'https://i.redd.it/cpoxb0lwobeg1.jpg'
  },
  {
    id: 'p6',
    title: 'Gabarito dimensional',
    category: 'Qualidade',
    imageUrl: 'https://i.redd.it/x92aa1lwobeg1.jpg'
  }
];
