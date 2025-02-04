import { motion } from 'framer-motion';
import { type ComponentProps } from 'react';
import { cn } from '~/utils/cn';

type ButtonProps = {
  variant: 'primary' | 'text';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
} & ComponentProps<'button'>;

export function Button({
  variant,
  leftIcon,
  rightIcon,
  children,
  className,
  ...buttonProps
}: ButtonProps) {
  return (
    <motion.div
      initial={{ scale: 1 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.1 }}
      className={className}
    >
      <button
        className={cn(
          'flex w-fit items-center justify-center rounded-full px-4 py-1.5 text-sm transition-colors',
          {
            'bg-orange-500 text-white hover:bg-orange-600':
              variant === 'primary',
            'text-primary-pure hover:bg-hover-secondary': variant === 'text',
            'gap-2': leftIcon ?? rightIcon,
          },
          className,
        )}
        {...buttonProps}
      >
        {leftIcon ?? null}
        {children}
        {rightIcon ?? null}
      </button>
    </motion.div>
  );
}
