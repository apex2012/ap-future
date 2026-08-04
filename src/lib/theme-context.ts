import { createContext } from 'react';

export type Theme = 'light';

export interface ThemeContextValue {
  theme: Theme;
}

export const ThemeContext = createContext<ThemeContextValue>({ theme: 'light' });
