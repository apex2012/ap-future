import { type ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
  className?: string;
  width?: 'default' | 'wide';
}

export function PageContainer({
  children,
  className = '',
  width = 'default',
}: PageContainerProps) {
  const containerClass = width === 'wide' ? 'container-wide' : 'container-page';
  return <div className={`${containerClass} ${className}`}>{children}</div>;
}
