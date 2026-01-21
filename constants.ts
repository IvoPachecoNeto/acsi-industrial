
import { Service, Project } from './types';

// Configurações Gerais da Empresa (Logo e Textos)
export const COMPANY_INFO = {
  name: 'ACSI',
  subtitle: 'Industrial',
  // Link do Ícone da Logo
  logoUrl: 'https://cdn-icons-png.flaticon.com/512/3096/3096998.png'
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
      // Link: Ponte Rolante / Industrial Crane
      { title: 'Laudo de Ponte Rolante 10t', image: 'https://images.unsplash.com/photo-1565043589221-1a6fd497a05c?auto=format&fit=crop&q=80&w=600' },
      // Link: Estrutura Metálica
      { title: 'Inspeção de Estruturas Metálicas', image: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80&w=600' }
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
      // Link: Medição de Precisão
      { title: 'Gabarito de Controle com Pinos de Precisão', image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=600' },
      // Link: Prensa / Máquina Industrial
      { title: 'Projeto 3D - Prensa Hidráulica Especial', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600' },
      // Link: Desenho Técnico / Gabarito
      { title: 'Gabarito Dimensional (Vista Frontal)', image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80&w=600' },
      // Link: Tela de CAD / 3D
      { title: 'Render 3D - Dispositivo de Controle', image: 'https://images.unsplash.com/photo-1611090332859-994191684c98?auto=format&fit=crop&q=80&w=600' },
      // Link: Peças de Engenharia
      { title: 'Projeto 3D - Base de Controle Modular', image: 'https://images.unsplash.com/photo-1581092334651-ddf26f9a09d0?auto=format&fit=crop&q=80&w=600' },
      // Link: Bancada de Trabalho
      { title: 'Gabarito Dimensional (Vista Superior)', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=600' },
      // Link: Pneu / Automotivo
      { title: 'Suporte Ergonômico para Pneus', image: 'https://images.unsplash.com/photo-1578844251758-2f71da645217?auto=format&fit=crop&q=80&w=600' },
      // Link: Engrenagens / Mecanismo
      { title: 'Detalhamento de Mecanismo Complexo', image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=600' },
      // Link: Laboratório de Controle
      { title: 'Mesa de Controle com Pinos Coloridos', image: 'https://images.unsplash.com/photo-1581092580637-e2f696dc6763?auto=format&fit=crop&q=80&w=600' }
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
    // Foto Link: Homem de negócios / Engenheiro
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
    bio: 'Pós-graduado em Engenharia de Segurança do Trabalho com mais de 15 anos de experiência na gestão de projetos voltados à melhoria de processos de fabricação.',
    experience: ['BMW', 'Faurecia', 'Renault', 'Positivo', 'Perkins']
  },
  {
    name: 'Henrique Kaston Tobler',
    role: 'Engenheiro Mecânico',
    // Foto Link: Engenheiro / Profissional
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
    bio: 'Especialista em instalações industriais e manutenção aeronáutica, com forte atuação em projetos técnicos e gestão de obras multidisciplinares.',
    experience: ['Atacadão', 'Festval', 'Condor', 'Aviação Clássica']
  }
];

export const CLIENTS: string[] = [];

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
