import type { HTMLAttributes } from 'react';

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level: HeadingLevel;
}

const levelClasses: Record<HeadingLevel, string> = {
  1: 'text-4xl sm:text-5xl font-bold tracking-tight leading-tight',
  2: 'text-3xl sm:text-4xl font-semibold tracking-tight leading-tight',
  3: 'text-2xl sm:text-3xl font-semibold leading-tight',
  4: 'text-xl sm:text-2xl font-semibold leading-snug',
  5: 'text-lg font-semibold leading-snug',
  6: 'text-base font-semibold leading-snug',
};

export function Heading({ level, className = '', children, ...props }: HeadingProps) {
  const Tag = `h${level}` as const;
  return (
    <Tag className={`${levelClasses[level]} ${className}`} {...props}>
      {children}
    </Tag>
  );
}

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  variant?: 'body' | 'lead' | 'small' | 'muted';
}

const variantClasses = {
  body: 'text-base leading-relaxed text-neutral-800',
  lead: 'text-lg leading-relaxed text-neutral-700',
  small: 'text-sm leading-relaxed text-neutral-600',
  muted: 'text-sm leading-relaxed text-neutral-500',
} as const;

export function Text({ variant = 'body', className = '', children, ...props }: TextProps) {
  return (
    <p className={`${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </p>
  );
}
