import { type ButtonHTMLAttributes, type AnchorHTMLAttributes, type ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline';
type Size = 'sm' | 'md' | 'lg';

const variantClasses: Record<Variant, string> = {
  primary: 'bg-primary-600 text-white hover:bg-primary-700 focus-visible:outline-primary-600',
  secondary: 'bg-neutral-900 text-white hover:bg-neutral-800 focus-visible:outline-neutral-900',
  ghost: 'bg-transparent text-neutral-700 hover:bg-neutral-100 focus-visible:outline-neutral-900',
  outline:
    'bg-transparent border border-neutral-300 text-neutral-700 hover:border-neutral-400 hover:bg-neutral-50 focus-visible:outline-neutral-900',
};

const sizeClasses: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base',
};

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

interface AnchorButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  href: string;
}

export function Button({ variant = 'primary', size = 'md', className = '', children, ...rest }: ButtonProps) {
  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`} {...rest}>
      {children}
    </button>
  );
}

export function AnchorButton({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...rest
}: AnchorButtonProps) {
  return (
    <a className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`} {...rest}>
      {children}
    </a>
  );
}
