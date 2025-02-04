export const links = [
  { title: 'home', url: '/' },
  { title: 'quem somos', url: '/quem-somos' },
  { title: 'produtos', url: '/produtos' },
  { title: 'fale conosco', url: '/fale-conosco' },
];

export const homeImages = [
  'img1.jpg',
  'img2.jpg',
  'img3.jpg',
  'img4.jpg',
  'img5.jpg',
];

type Product = {
  name: string;
  homeText: string;
  image: string;
  description: {
    summary: string;
    applications: string[];
    features: string[];
  };
};

export const products: Product[] = [
  {
    image: '/products/royal-saco-52.png',
    name: 'CIMENTO BRANCO ESTRUTURAL ROYAL CEM I 52,5 N - Sacaria 25KG',
    homeText:
      'A Klanap é a principal representante e importadora do cimento Royal El Minya Cement Co. no Brasil, produzido no Egito, sendo uma das principais fabricantes de cimento branco do mundo.',
    description: {
      summary:
        'O cimento branco Royal é de extrema qualidade e apresenta inúmeras possibilidades de uso:',
      applications: [
        'Aplicações estruturais com maior resistência',
        'Argamassas com acabamento colorido para ambientes internos e externos',
        'Pisos com desenhos e combinações ilimitadas de cores e padronagens',
        'Rejuntes para paredes e pisos',
        'Objetos pré-fabricados como vasos, jardineiras, colunas e fontes',
      ],
      features: [
        'Acabamento branco e brilhante',
        'Maior brancura dentre os cimentos brancos de todo o mundo',
        'Resistência superior à normativa EN',
        'Ideal para indústrias, nas linhas de brancos e coloridos',
        'Resistente a fogo, umidade, fungos e infiltrações',
      ],
    },
  },
  {
    image: '/products/royal-saco-42.png',
    name: 'CIMENTO BRANCO ESTRUTURAL ROYAL CEM II 42,5',
    homeText:
      'A Klanap é a principal representante e importadora do cimento Royal El Minya Cement Co. no Brasil, produzido no Egito, sendo uma das principais fabricantes de cimento branco do mundo.',
    description: {
      summary:
        'O cimento branco Royal 42.5N é de extrema qualidade e apresenta possibilidades de uso semelhantes ao 52.5N:',
      applications: [
        'Aplicações estruturais com maior resistência',
        'Argamassas com acabamento colorido para ambientes internos e externos',
        'Pisos com desenhos e combinações ilimitadas de cores e padronagens',
        'Rejuntes para paredes e pisos',
        'Objetos pré-fabricados como vasos, jardineiras, colunas e fontes',
      ],
      features: [
        'Mais branco',
        'Melhor tempo de pega',
        'Resistência superior à normativa EN',
        'Maior trabalhabilidade',
        'Excelente para qualquer tipo de obra em qualquer tipo de clima',
      ],
    },
  },
  {
    image: '/products/big-bag.jpg',
    name: 'CIMENTO BRANCO ESTRUTURAL ROYAL CEM I 52,5 N - Big Bag',
    homeText:
      'A Klanap é a principal representante e importadora do cimento Royal El Minya Cement Co. no Brasil, produzido no Egito, sendo uma das principais fabricantes de cimento branco do mundo.',
    description: {
      summary:
        'O cimento branco Royal é de extrema qualidade e apresenta inúmeras possibilidades de uso:',
      applications: [
        'Aplicações estruturais com maior resistência',
        'Argamassas com acabamento colorido para ambientes internos e externos',
        'Pisos com desenhos e combinações ilimitadas de cores e padronagens',
        'Rejuntes para paredes e pisos',
        'Objetos pré-fabricados como vasos, jardineiras, colunas e fontes',
      ],
      features: [
        'Acabamento branco e brilhante',
        'Maior brancura dentre os cimentos brancos de todo o mundo',
        'Resistência superior à normativa EN',
        'Ideal para indústrias, nas linhas de brancos e coloridos',
        'Resistente a fogo, umidade, fungos e infiltrações',
      ],
    },
  },
  {
    image: '/products/microsilex.jpg',
    name: 'MICROSILEX',
    homeText:
      'Microsilex é um produto desenvolvido à base de sílica natural para melhorar o desempenho de concretos e argamassas, devido às suas propriedades pozolânicas.',
    description: {
      summary:
        'Ao ser mesclado com concreto e combinado com cimento e água, tem suas características químicas e físicas melhoradas, tornando-se um concreto de alto desempenho.',
      features: [
        'Incrementa a resistência (28 dias em diante)',
        'Melhora o manuseio',
        'Reduz a permeabilidade',
        'Ajuda a controlar a reação álcali-agregada',
        'Aumenta a resistência a sulfatos e erosões',
      ],
      applications: [
        'Pontes',
        'Pavimentos',
        'Concreto lançado',
        'Canais',
        'Tanques de águas residuais',
        'Concretos de alta resistência',
        'Estruturas marítimas',
        'Calçamento de poços',
        'Mescla de argamassas',
        'Concreto exposto ao ataque de sulfatos e erosão',
      ],
    },
  },
];
