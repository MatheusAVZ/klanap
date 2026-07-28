import { type MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';
import { FaWhatsapp } from 'react-icons/fa';
import { LuArrowRight } from 'react-icons/lu';
import { buttonStyles } from '~/components/button';
import { Footer } from '~/containers/footer';
import { Header } from '~/containers/header';
import { ProductCard } from '~/containers/product-card';
import { products, whatsappHref } from '~/utils/constants';

export const meta: MetaFunction = () => {
  return [
    { title: 'Klanap — Cimento Branco Estrutural Royal' },
    {
      name: 'description',
      content:
        'Representante exclusiva do cimento branco Royal (El Minya Cement Co.) no Brasil desde 1997. Cimento branco estrutural com laudo, FDS e suporte técnico.',
    },
  ];
};

const specFacts = [
  { value: 'Desde 1997', detail: 'no mercado brasileiro de construção civil' },
  { value: 'Suporte', detail: 'técnico desde a fórmula à produção' },
  { value: 'Acima da EN', detail: 'resistência superior à normativa europeia' },
  { value: 'Laudo + FDS', detail: 'documentação técnica de todos os produtos' },
];

export default function Index() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-grow pt-20">
        {/* hero grafite: a sacaria como pôster */}
        <section className="relative overflow-hidden bg-graphite-950 text-white">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-14 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:pb-24 md:pt-20">
            <div className="flex flex-col items-start gap-6">
              <h1 className="type-display rise text-display-xl uppercase">
                Cimento branco <span className="text-brand-500">Royal</span>,
                com quem entende dele.
              </h1>
              <p className="rise rise-1 max-w-[52ch] text-lg leading-relaxed text-white/80">
                A Klanap é a representante no Brasil do cimento
                branco estrutural Royal, produzido no Egito pela El Minya
                Cement Co. — e a única que acompanha sua produção com suporte
                técnico, da especificação à aplicação.
              </p>
              <div className="rise rise-2 flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonStyles('primary', 'px-7 py-3.5 text-base')}
                >
                  <FaWhatsapp aria-hidden className="h-5 w-5" />
                  Chamar no WhatsApp
                </a>
                <a
                  href="#catalogo"
                  className={buttonStyles(
                    'outline-inverse',
                    'px-7 py-3.5 text-base',
                  )}
                >
                  Ver catálogo
                </a>
              </div>
            </div>

            <div className="rise rise-3 relative mx-auto w-full max-w-sm md:max-w-none">
              <p
                aria-hidden
                className="type-display text-outline-dark pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-numeral-lg"
              >
                52,5N
              </p>
              <img
                src="/products/royal-saco-52.png"
                alt="Saco de 25 kg do cimento branco estrutural Royal CEM I 52,5 N"
                className="relative mx-auto h-auto w-64 drop-shadow-[0_24px_48px_rgba(0,0,0,0.55)] md:w-80"
                width={640}
                height={880}
              />
            </div>
          </div>
        </section>

        {/* faixa de spec: os fatos, em linha de tabela */}
        <section aria-label="Dados da empresa" className="border-b border-line">
          <dl className="mx-auto grid max-w-6xl grid-cols-2 divide-line md:grid-cols-4 md:divide-x">
            {specFacts.map(({ value, detail }) => (
              <div key={value} className="flex flex-col gap-1 px-5 py-6 md:px-8">
                <dt className="sr-only">{detail}</dt>
                <dd className="type-display text-xl text-ink">{value}</dd>
                <dd className="text-sm leading-snug text-ink-soft">{detail}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* catálogo como fichas de spec */}
        <section id="catalogo" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <div className="mb-12 flex flex-col gap-3">
            <h2 className="type-display flex items-center gap-3 text-display uppercase text-ink">
              <span aria-hidden className="k-mark" />
              Catálogo
            </h2>
            <p className="max-w-[60ch] text-lg text-ink-soft">
              Cimentos especiais com laudo técnico e ficha de
              segurança disponíveis. Especificou, comprovou, aplicou.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* o diferencial, sobre foto real do galpão */}
        <section className="relative isolate overflow-hidden bg-graphite-950 text-white">
          <img
            src="/img5.jpg"
            alt=""
            loading="lazy"
            className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-gradient-to-r from-graphite-950/95 via-graphite-950/80 to-graphite-950/40"
          />
          <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-24 md:px-8 md:py-32">
            <h2 className="type-display max-w-[24ch] text-display uppercase">
              Quem vende cimento é muita gente. Quem acompanha a aplicação,{' '}
              <span className="text-brand-400">só a Klanap.</span>
            </h2>
            <p className="max-w-[52ch] text-lg leading-relaxed text-white/85">
              Suporte e acompanhamento técnico em todo o Brasil: ajudamos a
              especificar o produto certo, orientamos a aplicação e
              respondemos quando a obra precisa. É gente que conhece o
              produto atendendo gente que constrói.
            </p>
            <a
              href={whatsappHref(
                'Olá! Gostaria de falar com o suporte técnico da Klanap.',
              )}
              target="_blank"
              rel="noreferrer"
              className={buttonStyles('primary', 'mt-2 px-7 py-3.5 text-base')}
            >
              <FaWhatsapp aria-hidden className="h-5 w-5" />
              Falar com o técnico
            </a>
          </div>
        </section>

        {/* história: 1997 como numeral de sacaria */}
        <section className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-20 md:grid-cols-[auto_1fr] md:gap-16 md:px-8 md:py-28">
          <p
            aria-hidden
            className="type-display select-none text-numeral text-brand-500"
          >
            1997
          </p>
          <div className="flex flex-col items-start gap-4">
            <h2 className="type-display text-display-sm uppercase text-ink">
              Quase 30 anos movendo cimento especial
            </h2>
            <p className="max-w-[60ch] leading-relaxed text-ink-soft">
              Desde 1997 a Klanap importa e distribui cimentos especiais para
              construtoras e indústrias em todo o Brasil — uma busca
              incessante por marcas com qualidade, praticidade e resultado
              visível no acabamento final.
            </p>
            <Link
              to="/quem-somos"
              className="flex items-center gap-1.5 text-sm font-semibold text-ink underline decoration-brand-500 decoration-2 underline-offset-4 transition-colors hover:text-brand-600"
            >
              Nossa história
              <LuArrowRight aria-hidden className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
