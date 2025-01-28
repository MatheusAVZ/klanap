import { Link } from "@remix-run/react";
import { motion } from 'framer-motion';
import { links } from "~/utils/constants";

export function Header() {
  return (
    <header className="bg-white shadow flex justify-center relative items-center h-20">
      <Link to="/" className="absolute left-0">
          <img src="logo.png" alt="Logo image" className="h-20"/>
      </Link>

      <nav className="hidden md:flex space-x-8">
        {
          links.map((link, index) => (
            <motion.div
              initial={{ scale: 1 }}
              transition={{ duration: 0.4 }}
              whileHover={{scale: 1.1}}
            >
              <Link key={index} to={link.url} className="text-gray-700 hover:text-gray-900 hover:underline">
                {link.title}
              </Link>
            </motion.div>
          ))
        }
      </nav>
    </header>
  )
}

