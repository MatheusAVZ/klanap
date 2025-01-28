import { Link } from '@remix-run/react';
import { motion } from 'framer-motion';
import { links } from '~/utils/constants';

export function Header() {
  return (
    <header className="relative flex h-20 items-center justify-center bg-white shadow">
      <Link to="/" className="absolute left-0">
        <img src="logo.png" alt="Logo" className="h-20" />
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
              className="text-gray-700 hover:text-gray-900 hover:underline"
            >
              {link.title}
            </Link>
          </motion.div>
        ))}
      </nav>
    </header>
  );
}
