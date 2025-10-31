import React, { createContext, useState, useContext, useMemo, useEffect } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const defaultThemeContext: ThemeContextType = {
  theme: 'light',
  toggleTheme: () => console.warn('toggleTheme called outside of a ThemeProvider'),
};

const ThemeContext = createContext<ThemeContextType>(defaultThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');

  // This effect handles applying the theme class when the theme state changes.
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  // This effect handles cleaning up the theme when the ThemeProvider is unmounted.
  // This is crucial for when the user navigates away from a themed page (like Care Suite)
  // back to a non-themed page (like the Homepage).
  useEffect(() => {
    const root = window.document.documentElement;
    
    // The cleanup function will run when the component unmounts.
    return () => {
      // Revert to the default light theme for the rest of the site.
      root.classList.remove('dark');
      root.classList.add('light');
    };
  }, []); // The empty dependency array ensures this runs only on mount and unmount.

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
