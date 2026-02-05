
import { Service, Project } from './types';

// Configurações Gerais da Empresa (Logo e Textos)
export const COMPANY_INFO = {
  name: 'ACSI',
  subtitle: 'Industrial',
  // Link do Ícone da Logo
  logoUrl: 'https://preview.redd.it/d10iwrs7zpeg1.png?width=1080&crop=smart&auto=webp&s=77d23dc4c4bc9e1bd739c5d6dd15c1a0b20c4fcf'
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
      { title: '...', image: 'https://preview.redd.it/acsi-industrieal-v0-e7l980lwobeg1.jpg?width=935&format=pjpg&auto=webp&s=66c482f4a76293b8747a7691089571ff111d4e96' },
      // Link: Estrutura Metálica
      { title: '...', image: 'https://preview.redd.it/acsi-industrieal-v0-nllyq5lwobeg1.jpg?width=1080&crop=smart&auto=webp&s=5709177b2cc12095d4432c2f83da7650c68f14ba' }
    ]
  },
  {
    id: 'dispositivos',
    title: 'Dispositivos e Gabaritos',
    description: 'Desenvolvimento de dispositivos de solda, montagem e gabaritos de controle sob medida para processos manuais e automatizados.',
    fullDescription: 'Projetamos e fabricamos dispositivos de alta precisão que garantem repetibilidade e qualidade em processos de manufatura. Desde o conceito 3D até o startup na linha.',
    icon: 'fa-microchip',
    features: [
      'Dispositivos de solda manuais e robotizados',
      '(Gabaritos de controle dimensional (PNP))',
      'Sistemas de fixação pneumática e hidráulica',
      'sistemas de monitoramento de peças',
      'projetos completos com manuais e detalhes conforme normas vigentes',
    ],
    subProjects: [
      // Link: Medição de Precisão
      { title: 'Gabarito de Controle com Pinos de Precisão', image: 'https://preview.redd.it/acsi-industrieal-v0-yfrtpykwobeg1.jpg?width=1080&crop=smart&auto=webp&s=1ea7b993882b6a7c474cfae5bc55379d6894e149' },
      // Link: Prensa / Máquina Industrial
      { title: 'Projeto 3D - Prensa Hidráulica Especial', image: 'https://preview.redd.it/acsi-industrieal-v0-ibxzr0lwobeg1.jpg?width=1080&crop=smart&auto=webp&s=a1fed75871ce7269bb626048605915b22ac80ba7' },
      // Link: Desenho Técnico / Gabarito
      { title: 'Gabarito Dimensional (Vista Frontal)', image: 'https://preview.redd.it/acsi-industrieal-v0-nahvj2lwobeg1.jpg?width=751&format=pjpg&auto=webp&s=4fbcc9f546f20103f02a4978f64446a6d2421cfc' },
      // Link: Tela de CAD / 3D
      { title: 'Render 3D - Dispositivo de Controle', image: 'https://preview.redd.it/acsi-industrieal-v0-x92aa1lwobeg1.jpg?width=648&format=pjpg&auto=webp&s=aa91d665ea10e144b51f9826d3dacb32f7a6119f' },
      // Link: Peças de Engenharia
      // Link: Bancada de Trabalho
      // Link: Pneu / Automotivo
      // Link: Engrenagens / Mecanismo
      { title: 'Detalhamento de Mecanismo Complexo', image: 'https://preview.redd.it/acsi-industrieal-v0-nllyq5lwobeg1.jpg?width=1080&crop=smart&auto=webp&s=5709177b2cc12095d4432c2f83da7650c68f14ba' },
      // Link: Laboratório de Controle
      { title: 'Mesa de Controle com Pinos Coloridos', image: 'https://preview.redd.it/acsi-industrieal-v0-cpoxb0lwobeg1.jpg?width=578&format=pjpg&auto=webp&s=b0adf7649ac23660f8689f5fd090a5b5b65a7073' }
    ]
  },
  {
    id: 'projetos',
    title: 'Laudos Técnicos',
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

    subProjects: []
  }
];

export const TEAM = [
  {
    name: 'Henrique Kaston Tobler',
    role: 'Engenheiro Mecânico',
    // Foto Link: Engenheiro / Profissional
    image:  'https://preview.redd.it/ie7wz5tn3ahg1.png?width=640&crop=smart&auto=webp&s=594fcb2b7b51ee68e4fd9b0b04cb911659dd87ce',
    bio: 'Sou Engenheiro Mecânico com sólida experiência no setor industrial, atuando em projetos técnicos, manutenção e gestão de obras. Trabalhei por mais de seis anos supervisionando obras de sistemas de refrigeração comercial, liderando equipes multidisciplinares nas áreas civil, mecânica e elétrica, garantindo a entrega completa e funcional das instalações. Também acumulo mais de cinco anos de experiência em instalações industriais, incluindo implantação de máquinas e equipamentos, construção de galpões, infraestrutura de utilidades e integração de células robotizadas. Minha atuação envolve a gestão de prazos, custos, qualidade e segurança, assegurando eficiência e confiabilidade em projetos no ambiente fabril',
    experience: []
  }
  {
    name: 'Henri Udo Bostelmann Filho',
    role: 'Engenheiro Mecânico',
    // Foto Link: Homem de negócios / Engenheiro
    image:  'https://preview.redd.it/acsi-industrieal-v0-sjcf32lwobeg1.jpg?width=640&crop=smart&auto=webp&s=7bfe505211ad4ea139277f2f1558280064fb9332',
    bio: 'Sou engenheiro mecânico com pós-graduação em Engenharia de Segurança do Trabalho e mais de 15 anos de experiência na gestão e execução de projetos voltados à melhoria de processos de fabricação. Atuei em diferentes segmentos industriais, liderando iniciativas que geraram avanços significativos em eficiência operacional e qualidade. Trabalho desde a concepção até a entrega final de projetos, incluindo definição técnica, fabricação, montagem, instalação e startup. Desenvolvi máquinas especiais, gabaritos, dispositivos de solda, sistemas de manipulação e outros meios de produção, sempre com foco em inovação, segurança e melhoria contínua. Tenho perfil analítico, visão sistêmica e forte atuação prática no chão de fábrica, integrando tecnologia, produtividade e sustentabilidade aos processos',
    experience: []
  },

];

export const CLIENTS: string[] = [];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Dispositivo de Solda',
    category: 'Industrial',
    imageUrl: 'https://preview.redd.it/acsi-industrieal-v0-x92aa1lwobeg1.jpg?width=648&format=pjpg&auto=webp&s=aa91d665ea10e144b51f9826d3dacb32f7a6119f'
  },
  {
    id: 'p2',
    title: 'Máquinas especiais',
    category: 'Engenharia',
    imageUrl: 'https://preview.redd.it/acsi-industrieal-v0-nahvj2lwobeg1.jpg?width=751&format=pjpg&auto=webp&s=4fbcc9f546f20103f02a4978f64446a6d2421cfc'
  },
  {
    id: 'p3',
    title: 'manipuladores e carros industriais',
    category: 'Automação',
    imageUrl: 'https://preview.redd.it/acsi-industrieal-v0-e7t7b1lwobeg1.jpg?width=591&format=pjpg&auto=webp&s=4982651d3c4c9bb4099096976a2205b913716262'
  },
  {
    id: 'p4',
    title: 'dispositivos de controle',
    category: 'Mecânica',
    imageUrl: 'https://preview.redd.it/acsi-industrieal-v0-e7l980lwobeg1.jpg?width=935&format=pjpg&auto=webp&s=66c482f4a76293b8747a7691089571ff111d4e96'
  },
  {
    id: 'p5',
    title: 'Manipulador de Chicote Elétrico',
    category: 'Logística',
    imageUrl: 'https://preview.redd.it/acsi-industrieal-v0-cpoxb0lwobeg1.jpg?width=578&format=pjpg&auto=webp&s=b0adf7649ac23660f8689f5fd090a5b5b65a7073'
  },
  {
    id: 'p6',
    title: 'Gabarito de Controle Dimensional',
    category: 'Qualidade',
    imageUrl: 'https://preview.redd.it/acsi-industrieal-v0-x92aa1lwobeg1.jpg?width=648&format=pjpg&auto=webp&s=aa91d665ea10e144b51f9826d3dacb32f7a6119f'
  }
];
