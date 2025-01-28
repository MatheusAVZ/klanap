import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { Link } from '@remix-run/react';
import { motion } from 'framer-motion';
import { links } from '~/utils/constants';

export const HamburgerNav = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 shadow-lg">
          <HamburgerMenuIcon />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuPortal>
        <DropdownMenuContent
          className="flex flex-col gap-4 rounded-xl bg-gray-100 p-10 shadow-sm"
          sideOffset={5}
        >
          {links.map(({ url, title }, index) => (
            <motion.div
              initial={{ scale: 1 }}
              transition={{ duration: 0.4 }}
              whileHover={{ scale: 1.1 }}
              key={index}
            >
              <Link
                to={url}
                className="block text-lg text-gray-700 hover:text-gray-900 hover:underline"
              >
                {title}
              </Link>
            </motion.div>
          ))}
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
};
