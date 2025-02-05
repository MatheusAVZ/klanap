import { Link } from '@remix-run/react';
import { motion } from 'framer-motion';
import { links } from '~/utils/constants';

export function Footer() {
  return (
    <footer className="w-full rotate-180 bg-white shadow">
      <div className="flex rotate-180 items-center justify-between py-4 pb-8 pt-0 md:pt-4">
        <Link
          to="/"
          className="overflow-hidden bg-black md:rounded-full md:p-2"
        >
          <img
            src="logo.png"
            alt="Logo"
            className="h-24 w-auto md:h-20 md:w-20"
          />
        </Link>

        <nav className="hidden flex-col space-y-2 md:flex">
          {links.map((link, index) => (
            <motion.div
              initial={{ scale: 1 }}
              transition={{ duration: 0.4 }}
              whileHover={{ scale: 1.1 }}
              key={index}
            >
              <Link
                to={link.url}
                className="text-gray-700 hover:text-gray-900 hover:underline"
              >
                {link.title}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div>
          <div className="flex gap-2">
            <p className="text-gray-700">Endereço:</p>
            <p></p>
          </div>
          <div className="flex gap-2">
            <p className="text-gray-700">Telefone:</p>
            <a href="tel:+5511999999999">(011) 99999-9999</a>
          </div>
          <div className="flex gap-2">
            <p className="text-gray-700">Email:</p>
            <a href="mailto:kanap@kanap.com">kanap@kanap.com</a>
          </div>
        </div>

        <div />
      </div>
    </footer>
  );
}
