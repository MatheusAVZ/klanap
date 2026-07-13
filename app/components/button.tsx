import { type ComponentProps } from 'react';
import { cn } from '~/utils/cn';

type Variant = 'primary' | 'outline' | 'outline-inverse';

// estilos compartilhados entre <button> e âncoras (buttonStyles em <a>/<Link>)
export function buttonStyles(variant: Variant, className?: string) {
  return cn(
    'inline-flex w-fit items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-semibold transition-colors',
    {
      'bg-brand-500 text-graphite-950 hover:bg-brand-400':
        variant === 'primary',
      'border border-graphite-700/40 text-ink hover:border-graphite-950 hover:text-graphite-950':
        variant === 'outline',
      'border border-white/25 text-white hover:border-white hover:bg-white/5':
        variant === 'outline-inverse',
    },
    className,
  );
}

type ButtonProps = {
  variant?: Variant;
} & ComponentProps<'button'>;

export function Button({
  variant = 'primary',
  children,
  className,
  ...buttonProps
}: ButtonProps) {
  return (
    <button className={buttonStyles(variant, className)} {...buttonProps}>
      {children}
    </button>
  );
}
