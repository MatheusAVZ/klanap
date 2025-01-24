import { type ComponentProps } from 'react';
import { cn } from '~/utils/cn';

type ButtonProps = {
  variant: 'primary' | 'secondary' | 'text';
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
    <button
      className={cn(
        'flex w-fit items-center justify-center rounded-full px-4 py-1.5 text-sm transition-colors',
        {
          'bg-primary-pure text-white hover:bg-hover-primary disabled:bg-disabled':
            variant === 'primary',
          'border border-border bg-white text-primary-pure hover:bg-hover-secondary disabled:text-disabled':
            variant === 'secondary',
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
  );
}
