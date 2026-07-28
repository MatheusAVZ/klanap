import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import { Content, Portal, Root, Trigger } from '@radix-ui/react-hover-card';
import { Link } from '@remix-run/react';
import { FaWhatsapp } from 'react-icons/fa';
import { LuChevronDown, LuMenu } from 'react-icons/lu';
import { products, whatsappHref } from '~/utils/constants';

const navLinkStyles =
  'flex h-full items-center text-sm text-white/80 transition-colors hover:text-white';

function ProductsMenu() {
  return (
    <Root openDelay={0} closeDelay={150}>
      <Trigger asChild>
        <Link to="/#catalogo" className={`${navLinkStyles} gap-1.5`}>
          Produtos
          <LuChevronDown aria-hidden className="h-3.5 w-3.5" />
        </Link>
      </Trigger>
      <Portal>
        <Content
          sideOffset={-8}
          align="start"
          className="z-50 flex min-w-64 flex-col border border-graphite-800 bg-graphite-900 py-2 shadow-xl shadow-black/40"
        >
          {products.map(({ id, shortName }) => (
            <Link
              key={id}
              to={`/produto/${id}`}
              className="px-5 py-2.5 text-sm text-white/80 transition-colors hover:bg-graphite-800 hover:text-white"
            >
              {shortName}
            </Link>
          ))}
        </Content>
      </Portal>
    </Root>
  );
}

function MobileMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          aria-label="Abrir menu"
          className="flex h-11 w-11 items-center justify-center text-white md:hidden"
        >
          <LuMenu aria-hidden className="h-6 w-6" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent
          align="end"
          sideOffset={8}
          className="z-50 flex w-72 flex-col border border-graphite-800 bg-graphite-900 py-3 shadow-xl shadow-black/40"
        >
          <DropdownMenuItem asChild>
            <Link
              to="/"
              className="px-5 py-3 text-base text-white/90 hover:bg-graphite-800"
            >
              Home
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link
              to="/quem-somos"
              className="px-5 py-3 text-base text-white/90 hover:bg-graphite-800"
            >
              Quem Somos
            </Link>
          </DropdownMenuItem>

          <p className="type-spec mt-2 px-5 pb-1 pt-3 text-xs text-white/50">
            Produtos
          </p>
          {products.map(({ id, shortName }) => (
            <DropdownMenuItem asChild key={id}>
              <Link
                to={`/produto/${id}`}
                className="px-5 py-2.5 text-sm text-white/80 hover:bg-graphite-800"
              >
                {shortName}
              </Link>
            </DropdownMenuItem>
          ))}

          <DropdownMenuItem asChild>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noreferrer"
              className="mx-5 mt-4 flex items-center justify-center gap-2 rounded-sm bg-brand-500 px-4 py-3 text-sm font-semibold text-graphite-950"
            >
              <FaWhatsapp aria-hidden className="h-4 w-4" />
              Chamar no WhatsApp
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
}

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-black">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-6 px-5 md:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt=""
            className="h-11 w-11"
            height={44}
            width={44}
          />
          <span className="type-display text-lg tracking-wide text-white">
            KLANAP
          </span>
          <span className="sr-only">Klanap — página inicial</span>
        </Link>

        <nav className="hidden h-full items-center gap-8 md:flex">
          <Link to="/" className={navLinkStyles}>
            Home
          </Link>
          <Link to="/quem-somos" className={navLinkStyles}>
            Quem Somos
          </Link>
          <ProductsMenu />
        </nav>

        <div className="flex items-center gap-5">
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-sm bg-brand-500 px-4 py-2.5 text-sm font-semibold text-graphite-950 transition-colors hover:bg-brand-400 md:inline-flex"
          >
            <FaWhatsapp aria-hidden className="h-4 w-4" />
            WhatsApp
          </a>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
