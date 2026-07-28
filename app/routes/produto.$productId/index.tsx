import { type LoaderFunctionArgs, type MetaFunction } from '@remix-run/node';
import {
  isRouteErrorResponse,
  Link,
  useLoaderData,
  useRouteError,
} from '@remix-run/react';
import { FaWhatsapp } from 'react-icons/fa';
import { LuArrowLeft, LuArrowUpRight, LuFileText } from 'react-icons/lu';
import { buttonStyles } from '~/components/button';
import { Footer } from '~/containers/footer';
import { Header } from '~/containers/header';
import { products, whatsappHref } from '~/utils/constants';

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) {
    return [{ title: 'Produto não encontrado — Klanap' }];
  }
  return [
    { title: `${data.product.name} — Klanap` },
    { name: 'description', content: data.product.homeText },
  ];
};

export async function loader({ params }: LoaderFunctionArgs) {
  const product = products.find((product) => product.id === params.productId);

  if (!product) {
    throw new Response('Produto não encontrado', { status: 404 });
  }

  return { product };
}

export default function ProductPage() {
  const { product } = useLoaderData<typeof loader>();
  const { name, spec, specDetail, format, image, description, report, fds } =
    product;

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="mx-auto w-full max-w-6xl flex-grow px-5 pb-20 pt-28 md:px-8 md:pt-32">
        <Link
          to="/#catalogo"
          className="flex w-fit items-center gap-1.5 text-sm text-ink-soft transition-colors hover:text-ink"
        >
          <LuArrowLeft aria-hidden className="h-4 w-4" />
          Catálogo
        </Link>

        <div className="mt-8 grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-14">
          {/* painel da imagem, como amostra sobre bancada */}
          <div className="self-start bg-mist p-8 md:sticky md:top-28 md:p-12">
            <img
              src={image}
              alt={`${name} — ${format}`}
              className="mx-auto h-auto w-full max-w-xs object-contain"
              width={640}
              height={880}
            />
          </div>

          <div className="flex flex-col gap-8">
            <header className="flex flex-col gap-3">
              <p className="type-spec text-xs text-ink-soft">
                {format} · {specDetail}
              </p>
              <p className="type-display text-6xl text-brand-600">{spec}</p>
              <h1 className="type-display text-display-sm uppercase text-ink">
                {name}
              </h1>
            </header>

            {/* documentação técnica: a prova antes da promessa */}
            <section
              aria-label="Documentação técnica"
              className="flex flex-col border border-line"
            >
              <p className="type-spec border-b border-line px-5 py-3 text-xs text-ink-soft">
                Documentação técnica
              </p>
              <a
                href={report}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-3 px-5 py-4 transition-colors hover:bg-mist"
              >
                <span className="flex items-center gap-2.5 text-sm font-semibold text-ink">
                  <LuFileText aria-hidden className="h-4 w-4 text-brand-600" />
                  Laudo técnico (PDF)
                </span>
                <LuArrowUpRight
                  aria-hidden
                  className="h-4 w-4 text-ink-soft transition-colors group-hover:text-ink"
                />
              </a>
              {fds ? (
                <a
                  href={fds}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-3 border-t border-line px-5 py-4 transition-colors hover:bg-mist"
                >
                  <span className="flex items-center gap-2.5 text-sm font-semibold text-ink">
                    <LuFileText
                      aria-hidden
                      className="h-4 w-4 text-brand-600"
                    />
                    Ficha de segurança — FDS (PDF)
                  </span>
                  <LuArrowUpRight
                    aria-hidden
                    className="h-4 w-4 text-ink-soft transition-colors group-hover:text-ink"
                  />
                </a>
              ) : null}
            </section>

            {description.map(({ label, items }, sectionIndex) => (
              <section key={sectionIndex} className="flex flex-col gap-4">
                {label.split('/n').map((text, index) => (
                  <h2
                    key={index}
                    className="max-w-[62ch] font-semibold leading-relaxed text-ink"
                  >
                    {text.trim()}
                  </h2>
                ))}
                <ul className="flex flex-col gap-2.5">
                  {items.map((item, index) => (
                    <li key={index} className="flex items-baseline gap-3">
                      <span aria-hidden className="k-mark h-2 w-2" />
                      <span className="leading-relaxed text-ink-soft">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}

            <div className="flex flex-wrap items-center gap-4 border-t border-line pt-8">
              <a
                href={whatsappHref(
                  `Olá! Gostaria de uma cotação do ${name} (${format}).`,
                )}
                target="_blank"
                rel="noreferrer"
                className={buttonStyles('primary', 'px-7 py-3.5 text-base')}
              >
                <FaWhatsapp aria-hidden className="h-5 w-5" />
                Pedir cotação no WhatsApp
              </a>
              <span className="text-sm text-ink-soft">
                Resposta com orientação técnica, não robô.
              </span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  const notFound = isRouteErrorResponse(error) && error.status === 404;

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="mx-auto flex w-full max-w-6xl flex-grow flex-col items-start justify-center gap-5 px-5 py-32 md:px-8">
        <p className="type-display text-6xl text-brand-600">404</p>
        <h1 className="type-display text-display-sm uppercase text-ink">
          {notFound ? 'Produto não encontrado' : 'Algo deu errado'}
        </h1>
        <p className="max-w-[52ch] text-ink-soft">
          {notFound
            ? 'O produto que você procura não existe ou saiu do catálogo. Veja os produtos disponíveis ou fale com a equipe.'
            : 'Tente novamente em instantes ou fale direto com a equipe pelo WhatsApp.'}
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <Link to="/#catalogo" className={buttonStyles('primary')}>
            Ver catálogo
          </Link>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noreferrer"
            className={buttonStyles('outline')}
          >
            <FaWhatsapp aria-hidden className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
