import type { ReactNode } from 'react';
import { ThemeContext, type Theme } from '@/lib/theme-context';

interface ThemeProviderProps {
  children: ReactNode;
  theme?: Theme;
}

export function ThemeProvider({ children, theme = 'light' }: ThemeProviderProps) {
  return <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>;
}
