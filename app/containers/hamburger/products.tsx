import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import { Link } from '@remix-run/react';
import { motion } from 'framer-motion';
import { type PropsWithChildren } from 'react';
import { products } from '~/utils/constants';

export const HamburgerProducts = ({ children }: PropsWithChildren) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>

      <DropdownMenuPortal>
        <DropdownMenuContent
          className="flex flex-col gap-4 rounded-xl bg-gray-100 p-10 shadow-sm"
          sideOffset={5}
        >
          {products.map(({ name, id }) => (
            <motion.div
              initial={{ scale: 1 }}
              transition={{ duration: 0.4 }}
              whileHover={{ scale: 1.1 }}
              key={id}
            >
              <Link
                to={`/product/${id}`}
                className="block text-lg text-gray-700 hover:text-gray-900 hover:underline"
              >
                {name}
              </Link>
            </motion.div>
          ))}
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
};
