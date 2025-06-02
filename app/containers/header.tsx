import { Link } from '@remix-run/react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { links } from '~/utils/constants';
import { HamburgerNav } from './hamburger/nav';
import { HamburgerProducts } from './hamburger/products';

export function Header() {
  return (
    <header className="fixed z-50 flex h-24 w-full items-center justify-between bg-black px-10 shadow">
      <Link to="/">
        <img
          src="/logo.png"
          alt="Logo"
          className="h-24 w-24"
          height={96}
          width={96}
        />
      </Link>

      <nav className="hidden h-full space-x-8 md:flex">
        {links.map((link, index) =>
          link.title === 'Produtos' ? (
            <HamburgerProducts key={index}>
              <button className="h-full text-gray-50 hover:text-gray-400 hover:underline">
                {link.title}
              </button>
            </HamburgerProducts>
          ) : (
            <motion.div
              initial={{ scale: 1 }}
              transition={{ duration: 0.4 }}
              whileHover={{ scale: 1.1 }}
              key={index}
            >
              <Link
                to={link.url}
                className="flex h-full items-center text-gray-50 hover:text-gray-400 hover:underline"
              >
                {link.title}
              </Link>
            </motion.div>
          ),
        )}
      </nav>

      <nav className="md:hidden">
        <HamburgerNav />
      </nav>

      <div className="flex items-center gap-6">
        <div className="hidden flex-col gap-1 md:flex">
          <div className="flex gap-2">
            <p className="text-sm text-orange-500 md:text-base">Telefone:</p>
            <a
              href="tel:+551126018186"
              className="text-sm text-gray-50 md:text-base"
            >
              (11) 2601-8186
            </a>
          </div>
          <div className="flex gap-2">
            <p className="text-sm text-orange-500 md:text-base">Email:</p>
            <a
              href="mailto:kanap@kanap.com"
              className="text-sm text-gray-50 md:text-base"
            >
              Klanap@klanap.com.br{' '}
            </a>
          </div>
        </div>

        <a
          href="https://wa.me/5511945155293?text=Olá, gostaria de saber mais sobre os produtos da Klanap."
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp className="text-gray-50" size={24} />
        </a>
      </div>
    </header>
  );
}
