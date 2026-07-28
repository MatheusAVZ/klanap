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
    id: 'metacaulim',
    image: '/products/metacaulim.png',
    name: 'Metacaulim HP Ultra',
    shortName: 'Metacaulim HP Ultra — 20 kg',
    spec: 'HP Ultra',
    specDetail: 'Metacaulim de alta reatividade · NBR 15.894',
    format: 'Sacaria 20 kg',
    homeText:
      'Adição mineral de alta eficiência que aumenta resistência, impermeabiliza e reduz manutenções em concreto, pasta de cimento e argamassa.',
    description: [
      {
        label:
          'Metacaulim HP Ultra é uma adição mineral de alta eficiência, aplicada no concreto, pasta de cimento e argamassa. É a solução ideal em obras de grande porte, barragens, portos e obras de saneamento, largamente utilizada nas principais obras do país. Seus principais benefícios:',
        items: [
          'Aumento das resistências mecânicas à compressão, tração e abrasão, em todas as idades, em até 40%',
          'Redução e controle das reatividades álcali-agregado em até 95%',
          'Aumento da resistência ao ataque por sulfato, ácidos e outros agentes químicos',
          'Redução da penetração de cloretos em até 75%',
          'Redução da corrosão de armaduras',
          'Diminuição do calor de hidratação e da fissuração de origem térmica',
          'Diminuição da porosidade e permeabilidade em até 90%',
          'Melhoria estética da superfície, controle da eflorescência, fissuração e desgaste',
          'Reologia melhorada: maior coesão, até 90% menos exsudação, redução em até 50% da reflexão em concretos projetados, maior fluidez e menos segregação em concretos autoadensáveis',
        ],
      },
    ],
    report: '/products/reports/metacaulim.pdf',
  },
];
