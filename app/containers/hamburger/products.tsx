import {
  Trigger,
  Portal,
  Content,
  Arrow,
  Root,
} from '@radix-ui/react-hover-card';
import { Link } from '@remix-run/react';
import { motion } from 'framer-motion';
import { type PropsWithChildren } from 'react';
import { products } from '~/utils/constants';

export const HamburgerProducts = ({ children }: PropsWithChildren) => {
  return (
    <Root openDelay={0}>
      <Trigger asChild>{children}</Trigger>

      <Portal>
        <Content
          className="z-50 flex flex-col gap-4 rounded-xl bg-gray-100 p-6 shadow-sm"
          sideOffset={5}
          onPointerDownOutside={(event) => {
            if (event.target instanceof HTMLButtonElement) {
              event.preventDefault();
            }
          }}
        >
          <Arrow className="fill-gray-100" />
          {products.map(({ name, id }) => (
            <motion.div
              initial={{ scale: 1 }}
              transition={{ duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              key={id}
            >
              <Link
                to={`/produto/${id}`}
                className="block text-gray-700 hover:text-gray-900 hover:underline"
              >
                {name}
              </Link>
            </motion.div>
          ))}
        </Content>
      </Portal>
    </Root>
  );
};
