import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from '@radix-ui/react-dropdown-menu';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { Link } from '@remix-run/react';
import { motion } from 'framer-motion';
import { links, products } from '~/utils/constants';

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
          {links.map(({ url, title }, index) =>
            title === 'Produtos' ? (
              <DropdownMenuSub key={index}>
                <DropdownMenuSubTrigger asChild>
                  <motion.div
                    initial={{ scale: 1 }}
                    transition={{ duration: 0.4 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <p className="text-lg text-gray-700 hover:text-gray-900 hover:underline">
                      {title}
                    </p>
                  </motion.div>
                </DropdownMenuSubTrigger>

                <DropdownMenuSubContent
                  sideOffset={5}
                  className="flex flex-col gap-4 rounded-xl bg-gray-200 p-5 shadow-2xl"
                >
                  {products.map(({ name, id }) => (
                    <motion.div
                      initial={{ scale: 1 }}
                      transition={{ duration: 0.4 }}
                      whileHover={{ scale: 1.1 }}
                      key={id}
                    >
                      <Link
                        to={`/produto/${id}`}
                        className="block w-32 overflow-hidden text-ellipsis text-nowrap text-gray-700 hover:text-gray-900 hover:underline"
                      >
                        {name}
                      </Link>
                    </motion.div>
                  ))}
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            ) : (
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
            ),
          )}
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
};
