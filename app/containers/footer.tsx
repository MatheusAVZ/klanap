import { Link } from '@remix-run/react';
import { FaWhatsapp } from 'react-icons/fa';
import { LuMail, LuMapPin, LuPhone } from 'react-icons/lu';
import { contact, products, whatsappHref } from '~/utils/constants';

const footerLinkStyles =
  'text-sm text-white/70 transition-colors hover:text-white';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div className="flex flex-col items-start gap-4">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt=""
              className="h-12 w-12"
              height={48}
              width={48}
            />
            <span className="type-display text-xl tracking-wide">KLANAP</span>
            <span className="sr-only">Klanap — página inicial</span>
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-white/70">
            Representante do cimento branco Royal — El Minya Cement
            Co. — no Brasil desde 1997.
          </p>
        </div>

        <nav aria-label="Produtos" className="flex flex-col gap-3">
          <p className="type-spec text-xs text-white/50">Produtos</p>
          {products.map(({ id, shortName }) => (
            <Link
              key={id}
              to={`/produto/${id}`}
              className={footerLinkStyles}
            >
              {shortName}
            </Link>
          ))}
          <Link to="/quem-somos" className={`${footerLinkStyles} mt-2`}>
            Quem Somos
          </Link>
        </nav>

        <div className="flex flex-col gap-3">
          <p className="type-spec text-xs text-white/50">Contato</p>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noreferrer"
            className={`${footerLinkStyles} flex items-center gap-2.5`}
          >
            <FaWhatsapp aria-hidden className="h-4 w-4 shrink-0" />
            {contact.whatsappNumber}
          </a>
          <a
            href={contact.phoneHref}
            className={`${footerLinkStyles} flex items-center gap-2.5`}
          >
            <LuPhone aria-hidden className="h-4 w-4 shrink-0" />
            {contact.phone}
          </a>
          <a
            href={contact.emailHref}
            className={`${footerLinkStyles} flex items-center gap-2.5`}
          >
            <LuMail aria-hidden className="h-4 w-4 shrink-0" />
            {contact.email}
          </a>
          <p className="flex items-start gap-2.5 text-sm text-white/70">
            <LuMapPin aria-hidden className="mt-0.5 h-4 w-4 shrink-0" />
            {contact.address}
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-white/50 md:px-8">
          © {new Date().getFullYear()} Klanap Comércio Importação e Exportação
          · Desde 1997
        </p>
      </div>
    </footer>
  );
}
