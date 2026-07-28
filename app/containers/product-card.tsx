import { Link } from '@remix-run/react';
import { LuArrowRight, LuFileText } from 'react-icons/lu';
import { type Product } from '~/utils/constants';

// ficha de spec: a prova técnica na frente, não um card genérico de e-commerce
export function ProductCard({ product }: { product: Product }) {
  const { id, spec, specDetail, format, name, homeText, report } = product;

  return (
    <article className="group relative flex h-full flex-col border border-line bg-white transition-colors hover:border-graphite-700">
      <div className="flex flex-col gap-0.5 border-b border-line px-6 py-4">
        <p className="type-spec whitespace-nowrap text-xs text-ink-soft">
          {format}
        </p>
        <p className="type-spec whitespace-nowrap text-xs text-ink-soft">
          {specDetail}
        </p>
      </div>

      <div className="flex flex-1 flex-col gap-3 px-6 pb-6 pt-5">
        <p className="type-display text-4xl text-brand-600">{spec}</p>
        <h3 className="text-lg font-semibold leading-snug text-ink">
          <Link
            to={`/produto/${id}`}
            className="after:absolute after:inset-0 focus-visible:ring-0"
          >
            {name}
          </Link>
        </h3>
        <p className="text-sm leading-relaxed text-ink-soft">{homeText}</p>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-t border-line px-6 py-4">
        <span className="flex items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-ink transition-colors group-hover:text-brand-600">
          Ficha completa
          <LuArrowRight
            aria-hidden
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
          />
        </span>
        <a
          href={report}
          target="_blank"
          rel="noreferrer"
          className="relative z-10 flex items-center gap-1.5 whitespace-nowrap text-sm text-ink-soft underline decoration-line underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
        >
          <LuFileText aria-hidden className="h-4 w-4" />
          Laudo (PDF)
        </a>
      </div>
    </article>
  );
}
