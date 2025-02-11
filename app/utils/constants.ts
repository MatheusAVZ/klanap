export const links = [
  { title: 'Home', url: '/' },
  { title: 'Quem Somos', url: '/quem-somos' },
  { title: 'Produtos', url: '/produtos' },
  { title: 'Fale Conosco', url: '/fale-conosco' },
];

export const homeImages = [
  'img1.jpg',
  'img2.jpg',
  'img3.jpg',
  'img4.jpg',
  'img5.jpg',
];

type Product = {
  id: string;
  name: string;
  homeText: string;
  image: string;
  description: {
    label: string;
    items: string[];
  }[];
};

export const products: Product[] = [
  {
    id: 'royal-saco-52',
    image: '/products/royal-saco-52.png',
    name: 'CIMENTO BRANCO ESTRUTURAL ROYAL CEM I 52,5 N - Sacaria 25KG',
    homeText:
      'A Klanap é a principal representante e importadora do cimento Royal El Minya Cement Co. no Brasil, produzido no Egito, sendo uma das principais fabricantes de cimento branco do mundo.',
    description: [
      {
        label:
          'O cimento branco Royal é de extrema qualidade e apresenta inúmeras possibilidades de uso:',
        items: [
          'Aplicações estruturais com maior resistência',
          'Argamassas com acabamento colorido para ambientes internos e externos',
          'Pisos com desenhos e combinações ilimitadas de cores e padronagens',
          'Rejuntes para paredes e pisos',
          'Objetos pré-fabricados como vasos, jardineiras, colunas e fontes',
        ],
      },
      {
        label:
          'O cimento branco Royal tem características superiores, sendo resistente a fogo, umidade, fungos e infiltrações, além de alta tecnologia que se traduz em:',
        items: [
          'Acabamento branco e brilhante',
          'Maior brancura dentre os cimentos brancos de todo o mundo',
          'Resistência superior à normativa EN',
          'Ideal para indústrias, nas linhas de brancos e coloridos',
          'Resistente a fogo, umidade, fungos e infiltrações',
        ],
      },
    ],
  },
  {
    id: 'royal-saco-42',
    image: '/products/royal-saco-42.png',
    name: 'CIMENTO BRANCO ESTRUTURAL ROYAL CEM II 42,5',
    homeText:
      'A Klanap é a principal representante e importadora do cimento Royal El Minya Cement Co. no Brasil, produzido no Egito, sendo uma das principais fabricantes de cimento branco do mundo.',
    description: [
      {
        label:
          'O cimento branco Royal 42.5N é de extrema qualidade e apresenta possibilidades de uso semelhantes ao 52.5N:',
        items: [
          'Aplicações estruturais com maior resistência',
          'Argamassas com acabamento colorido para ambientes internos e externos',
          'Pisos com desenhos e combinações ilimitadas de cores e padronagens',
          'Rejuntes para paredes e pisos',
          'Objetos pré-fabricados como vasos, jardineiras, colunas e fontes',
        ],
      },
      {
        label:
          '   Por ser da categoria CEM II 42,5, o cimento Royal tem como destaque:',
        items: [
          'Mais branco',
          'Melhor tempo de pega',
          'Resistência superior à normativa EN',
          'Maior trabalhabilidade',
          'Excelente para qualquer tipo de obra em qualquer tipo de clima',
        ],
      },
    ],
  },
  {
    id: 'big-bag',
    image: '/products/big-bag.jpg',
    name: 'CIMENTO BRANCO ESTRUTURAL ROYAL CEM I 52,5 N - Big Bag',
    homeText:
      'A Klanap é a principal representante e importadora do cimento Royal El Minya Cement Co. no Brasil, produzido no Egito, sendo uma das principais fabricantes de cimento branco do mundo.',
    description: [
      {
        label:
          'O cimento branco Royal é de extrema qualidade e apresenta inúmeras possibilidades de uso:',
        items: [
          'Aplicações estruturais com maior resistência',
          'Argamassas com acabamento colorido para ambientes internos e externos',
          'Pisos com desenhos e combinações ilimitadas de cores e padronagens',
          'Rejuntes para paredes e pisos',
          'Objetos pré-fabricados como vasos, jardineiras, colunas e fontes',
        ],
      },
      {
        label:
          'O cimento branco Royal tem características superiores, sendo resistente a fogo, umidade, fungos e infiltrações, além de alta tecnologia que se traduz em:',
        items: [
          'Acabamento branco e brilhante',
          'Maior brancura dentre os cimentos brancos de todo o mundo',
          'Resistência superior à normativa EN',
          'Ideal para indústrias, nas linhas de brancos e coloridos',
          'Resistente a fogo, umidade, fungos e infiltrações',
        ],
      },
    ],
  },
  {
    id: 'microsilex',
    image: '/products/microsilex.jpg',
    name: 'MICROSILEX',
    homeText:
      'Microsilex é um produto desenvolvido à base de sílica natural para melhorar o desempenho de concretos e argamassas, devido às suas propriedades pozolânicas.',
    description: [
      {
        label:
          ' Ao ser mesclado com concreto e combinado com cimento e água, tem suas características químicas e físicas melhoradas, deixando de ser um concreto convencional e tornando-se um concreto de alto desempenho. /n Microsilex incrementa a resistência (28 dias em diante), melhora o manuseio, reduz a permeabilidade, ajuda a controlar a reação álcali-agregada e aumenta a resistência a sulfatos e erosões. /n O produto deve ser usado como aditivo e misturado em proporção ao cimento e argamassa, e é indicado para aplicações que necessitam de alto desempenho, como obras em:',
        items: [
          'Pontes',
          'Pavimentos',
          'Concreto lançado',
          'Canais',
          'Tanques de águas residuais',
          'Concretos de alta resistência',
          'Estruturas marítimas',
          'Calçamento de poços',
          'Mescla de argamassas',
          'Em qualquer concreto exposto ao ataque de sulfatos e erosão',
        ],
      },
    ],
  },
];
