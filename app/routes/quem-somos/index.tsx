import { type MetaFunction } from '@remix-run/node';
import { FaWhatsapp } from 'react-icons/fa';
import { buttonStyles } from '~/components/button';
import { Footer } from '~/containers/footer';
import { Header } from '~/containers/header';
import { contact, warehouseImages, whatsappHref } from '~/utils/constants';

export const meta: MetaFunction = () => {
  return [
    { title: 'Quem Somos — Klanap' },
    {
      name: 'description',
      content:
        'Desde 1997 a Klanap importa e distribui cimentos especiais no Brasil, com representação exclusiva do cimento branco Royal El Minya Cement Co.',
    },
  ];
};

const milestones = [
  {
    value: '1997',
    detail: 'início da operação no mercado brasileiro de construção civil',
  },
  {
    value: 'Qualidade',
    detail: 'de excelência comprovada por laudo',
  },
  {
    value: 'Brasil todo',
    detail: 'fornecimento rápido para construtoras e indústrias',
  },
];

export default function AboutUsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-grow pt-20">
        <section className="mx-auto max-w-6xl px-5 pb-16 pt-14 md:px-8 md:pt-20">
          <h1 className="type-display flex max-w-[18ch] items-baseline gap-3 text-display-xl uppercase text-ink">
            <span aria-hidden className="k-mark" />
            Quase 30 anos movendo cimento especial
          </h1>

          <div className="mt-10 flex max-w-[68ch] flex-col gap-5 text-lg leading-relaxed text-ink">
            <p>
              A Klanap trabalha há quase 30 anos no mercado brasileiro de
              construção civil, industrializando e comercializando uma vasta
              gama de produtos para empresas e construtoras que desejam aliar
              qualidade de ponta em seus projetos à alta tecnologia dos
              cimentos especiais.
            </p>
            <p>
              Atendemos clientes no ramo da construção civil em todo o Brasil,
              fornecendo cimentos especiais de maneira rápida e eficaz,
              entregando qualidade e preço justo.
            </p>
            <p>
              As inovações e tecnologias empregadas em nossos cimentos
              especiais são claramente visíveis no resultado final dos
              projetos, com um leque de produtos que é fruto de uma busca
              incessante de novas marcas com qualidade e praticidade.
            </p>
            <p>
              Trabalhamos desde 1997 proporcionando a nossos clientes o melhor
              custo-benefício do mercado da construção, oferecendo produtos
              como o Cimento Branco Estrutural Royal 52,5 N e 42,5 N em
              sacaria e Big Bag, Sílica Ativa e Cimento Sulfoaluminoso.
            </p>
          </div>
        </section>

        {/* marcos, no mesmo vocabulário de spec da home */}
        <section aria-label="Marcos da empresa" className="border-y border-line bg-mist">
          <dl className="mx-auto grid max-w-6xl sm:grid-cols-3 sm:divide-x sm:divide-line">
            {milestones.map(({ value, detail }) => (
              <div key={value} className="flex flex-col gap-1 px-5 py-7 md:px-8">
                <dd className="type-display text-2xl text-ink">{value}</dd>
                <dd className="text-sm leading-snug text-ink-soft">{detail}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* a operação real: galpão, gente, sacaria */}
        <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <h2 className="sr-only">Nossa operação</h2>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            <img
              src={warehouseImages[4].src}
              alt={warehouseImages[4].alt}
              loading="lazy"
              className="col-span-2 aspect-[16/9] w-full object-cover"
            />
            <img
              src={warehouseImages[1].src}
              alt={warehouseImages[1].alt}
              loading="lazy"
              className="aspect-[3/4] w-full object-cover md:aspect-auto md:h-full"
            />
            <img
              src={warehouseImages[0].src}
              alt={warehouseImages[0].alt}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            <img
              src={warehouseImages[2].src}
              alt={warehouseImages[2].alt}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            <img
              src={warehouseImages[3].src}
              alt={warehouseImages[3].alt}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <p className="mt-4 text-sm text-ink-soft">
            Operação própria em São Paulo — {contact.address}.
          </p>
        </section>

        {/* fechamento com o CTA humano */}
        <section className="bg-graphite-950 text-white">
          <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-20 md:px-8 md:py-24">
            <h2 className="type-display max-w-[22ch] text-display uppercase">
              Fale com quem conhece o produto{' '}
              <span className="text-brand-400">há décadas.</span>
            </h2>
            <p className="max-w-[52ch] text-lg leading-relaxed text-white/85">
              Da especificação à aplicação, nossa equipe acompanha sua obra.
              Chame no WhatsApp e fale direto com quem entende.
            </p>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noreferrer"
              className={buttonStyles('primary', 'px-7 py-3.5 text-base')}
            >
              <FaWhatsapp aria-hidden className="h-5 w-5" />
              Chamar no WhatsApp
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
