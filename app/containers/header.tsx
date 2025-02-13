import { Link } from '@remix-run/react';
import { motion } from 'framer-motion';
import { links } from '~/utils/constants';
import { HamburgerNav } from './hamburguer-nav';

export function Header() {
  return (
    <header className="fixed z-50 flex h-24 w-full items-center justify-end bg-black pr-10 shadow md:justify-center md:p-0">
      <Link to="/" className="absolute left-0 pl-3">
        <img
          src="/logo.png"
          alt="Logo"
          className="h-24 w-24"
          height={96}
          width={96}
        />
      </Link>

      <nav className="hidden space-x-8 md:flex">
        {links.map((link, index) => (
          <motion.div
            initial={{ scale: 1 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.1 }}
            key={index}
          >
            <Link
              to={link.url}
              className="text-gray-50 hover:text-gray-400 hover:underline"
            >
              {link.title}
            </Link>
          </motion.div>
        ))}
      </nav>

      <nav className="md:hidden">
        <HamburgerNav />
      </nav>
    </header>
  );
}
