export const links = [
  { title: 'Home', url: '/' },
  { title: 'Quem Somos', url: '/quem-somos' },
  { title: 'Produtos', url: '/#catalogo' },
];

export const contact = {
  phone: '(11) 2601-8186',
  phoneHref: 'tel:+551126018186',
  email: 'klanap@klanap.com.br',
  emailHref: 'mailto:klanap@klanap.com.br',
  address: 'R. Florianópolis, 233 — Vila Bertioga, São Paulo — SP',
  whatsappNumber: '(11) 94515-5293',
};

export function whatsappHref(message?: string) {
  const text =
    message ??
    'Olá! Gostaria de saber mais sobre os produtos da Klanap.';
  return `https://wa.me/5511945155293?text=${encodeURIComponent(text)}`;
}

export const warehouseImages = [
  {
    src: '/img1.jpg',
    alt: 'Caminhão e empilhadeira movimentando big bags de cimento no galpão da Klanap',
  },
  {
    src: '/img2.jpg',
    alt: 'Fachada do galpão da Klanap em São Paulo, com o letreiro laranja da marca',
  },
  {
    src: '/img3.jpg',
    alt: 'Big bags de cimento branco Royal CEM I 52,5 N paletizados no estoque',
  },
  {
    src: '/img4.jpg',
    alt: 'Paletes de cimento branco prontos para expedição',
  },
  {
    src: '/img5.jpg',
    alt: 'Equipe da Klanap segurando sacos de cimento sulfoaluminoso no galpão',
  },
];

export type Product = {
  id: string;
  name: string;
  shortName: string;
  /** norma / classificação, exibida em display grande (ex: "52,5 N") */
  spec: string;
  specDetail: string;
  format: string;
  homeText: string;
  image: string;
  description: {
    label: string;
    items: string[];
  }[];
  report: string;
  fds?: string;
};

export const products: Product[] = [
  {
    id: 'royal-saco-52',
    image: '/products/royal-saco-52.png',
    name: 'Cimento Branco Estrutural Royal CEM I 52,5 N',
    shortName: 'CB Royal CEM I 52,5 N — 25 kg',
    spec: '52,5 N',
    specDetail: 'CEM I · EN 197-1',
    format: 'Sacaria 25 kg',
    homeText:
      'O cimento branco estrutural de maior brancura do mundo, produzido pela Royal El Minya Cement Co. no Egito. Importação exclusiva Klanap.',
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
    report: '/products/reports/52.pdf',
    fds: '/products/fds/cimento-branco.pdf',
  },
  {
    id: 'royal-saco-42',
    image: '/products/royal-saco-42.png',
    name: 'Cimento Branco Estrutural Royal CEM II 42,5 N',
    shortName: 'CB Royal CEM II 42,5 N — 25 kg',
    spec: '42,5 N',
    specDetail: 'CEM II · EN 197-1',
    format: 'Sacaria 25 kg',
    homeText:
      'Brancura e trabalhabilidade superiores com excelente tempo de pega, para qualquer tipo de obra em qualquer clima.',
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
          'Por ser da categoria CEM II 42,5, o cimento Royal tem como destaque:',
        items: [
          'Mais branco',
          'Melhor tempo de pega',
          'Resistência superior à normativa EN',
          'Maior trabalhabilidade',
          'Excelente para qualquer tipo de obra em qualquer tipo de clima',
        ],
      },
    ],
    report: '/products/reports/42-5.pdf',
    fds: '/products/fds/cimento-branco.pdf',
  },
  {
    id: 'big-bag',
    image: '/products/big-bag.jpg',
    name: 'Cimento Branco Estrutural Royal CEM I 52,5 N — Big Bag',
    shortName: 'CB Royal CEM I 52,5 N — Big Bag',
    spec: '52,5 N',
    specDetail: 'CEM I · EN 197-1',
    format: 'Big Bag',
    homeText:
      'O mesmo cimento branco estrutural Royal 52,5 N, em Big Bag para indústrias e obras de grande volume.',
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
    report: '/products/reports/52.pdf',
    fds: '/products/fds/cimento-branco.pdf',
  },
  {
    id: 'microsilex',
    image: '/products/microsilex.jpg',
    name: 'Microsilex',
    shortName: 'Microsilex',
    spec: 'Sílica',
    specDetail: 'Pozolana natural',
    format: 'Aditivo',
    homeText:
      'Aditivo à base de sílica natural que transforma concreto convencional em concreto de alto desempenho.',
    description: [
      {
        label:
          'Ao ser mesclado com concreto e combinado com cimento e água, tem suas características químicas e físicas melhoradas, deixando de ser um concreto convencional e tornando-se um concreto de alto desempenho. /n Microsilex incrementa a resistência (28 dias em diante), melhora o manuseio, reduz a permeabilidade, ajuda a controlar a reação álcali-agregada e aumenta a resistência a sulfatos e erosões. /n O produto deve ser usado como aditivo e misturado em proporção ao cimento e argamassa, e é indicado para aplicações que necessitam de alto desempenho, como obras em:',
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
    report: '/products/reports/microsilex.pdf',
  },
];
