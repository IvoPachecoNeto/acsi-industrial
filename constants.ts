
import { Service, Project } from './types';

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
    fullDescription: 'A ACSI Industrial é especializada na emissão de laudos técnicos fundamentais para a segurança e conformidade legal da sua operação. Atuamos com uma visão sistêmica que une exigências normativas à viabilidade prática do chão de fábrica.',
    icon: 'fa-file-signature',
    features: [
      'Laudos de esforços e capacidade de carga',
      'Conformidade com NR-11 (Transporte e Movimentação)',
      'Laudos de segurança para NR-12 (Máquinas e Equipamentos)',
      'Cálculos estruturais com validação por software de elementos finitos',
      'Emissão de ART (Anotação de Responsabilidade Técnica)'
    ],
    subProjects: [
      { title: 'Laudo de Ponte Rolante 10t', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=600' },
      { title: 'Inspeção de Estruturas Metálicas', image: 'https://images.unsplash.com/photo-1516937622548-a5c1e17231ce?auto=format&fit=crop&q=80&w=600' }
    ]
  },
  {
    id: 'dispositivos',
    title: 'Dispositivos e Gabaritos',
    description: 'Desenvolvimento de dispositivos de solda, montagem e gabaritos de controle sob medida para processos automatizados.',
    fullDescription: 'Projetamos e fabricamos dispositivos de alta precisão que garantem repetibilidade e qualidade extrema em processos de manufatura. Desde o conceito 3D até o startup na linha.',
    icon: 'fa-microchip',
    features: [
      'Dispositivos de solda manuais e robotizados',
      'Gabaritos de controle dimensional (Go/No-Go)',
      'Sistemas de fixação pneumática e hidráulica',
      'Integração com sensores de presença e qualidade',
      'Modelagem 3D detalhada para fácil manutenção'
    ],
    subProjects: [
      { title: 'Dispositivo de Solda para Chassi', image: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80&w=600' },
      { title: 'Gabarito de Montagem Eletrônica', image: 'https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?auto=format&fit=crop&q=80&w=600' }
    ]
  },
  {
    id: 'projetos',
    title: 'Projetos de Engenharia',
    description: 'Engenharia mecânica e industrial com modelagem 3D, detalhamento técnico e acompanhamento de fabricação.',
    fullDescription: 'Serviço completo de engenharia mecânica para modernização ou criação de novos ativos industriais.',
    icon: 'fa-drafting-compass',
    features: [
      'Detalhamento técnico para fabricação',
      'Modernização de máquinas antigas (Retrofitting)',
      'Projetos de utilidades industriais',
      'Consultoria em processos produtivos'
    ],
    subProjects: []
  },
  {
    id: 'maquinas',
    title: 'Máquinas Especiais',
    description: 'Desenvolvimento de máquinas sob medida, manipuladores e ferramentas especiais para automação de processos.',
    fullDescription: 'Soluções exclusivas para problemas complexos de movimentação e transformação que não existem prontas no mercado.',
    icon: 'fa-cogs',
    features: [
      'Manipuladores pneumáticos e eletrônicos',
      'Esteiras de transporte inteligente',
      'Postos de trabalho ergonômicos automatizados',
      'Sistemas de embalagem sob medida'
    ],
    subProjects: []
  }
];

export const TEAM = [
  {
    name: 'Henri Udo Bostelmann Filho',
    role: 'Engenheiro Mecânico',
    image: '/henri.png',
    bio: 'Pós-graduado em Engenharia de Segurança do Trabalho com mais de 15 anos de experiência na gestão de projetos voltados à melhoria de processos de fabricação.',
    experience: ['BMW', 'Faurecia', 'Renault', 'Positivo', 'Perkins']
  },
  {
    name: 'Henrique Kaston Tobler',
    role: 'Engenheiro Mecânico',
    image: '/henrique.png',
    bio: 'Especialista em instalações industriais e manutenção aeronáutica, com forte atuação em projetos técnicos e gestão de obras multidisciplinares.',
    experience: ['Atacadão', 'Festval', 'Condor', 'Aviação Clássica']
  }
];

export const CLIENTS = [
  'BMW', 'VOLVO', 'RENAULT', 'ELECTROLUX', 'WEG', 'WHIRLPOOL', 'FORVIA', 'SUMITOMO', 'POSITIVO', 'MAGIUS', 'PERKINS'
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Dispositivo de Solda Bancos',
    category: 'Industrial',
    imageUrl: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p2',
    title: 'Elevador de Cabeçote',
    category: 'Engenharia',
    imageUrl: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p3',
    title: 'Linha de Montagem de Estatores',
    category: 'Automação',
    imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p4',
    title: 'Célula de Rebitagem Automática',
    category: 'Mecânica',
    imageUrl: 'https://images.unsplash.com/photo-1565173293042-436449176465?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p5',
    title: 'Manipulador de Chicote Elétrico',
    category: 'Logística',
    imageUrl: 'https://images.unsplash.com/photo-1516937622548-a5c1e17231ce?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p6',
    title: 'Gabarito de Controle Dimensional',
    category: 'Qualidade',
    imageUrl: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80&w=800'
  }
];
