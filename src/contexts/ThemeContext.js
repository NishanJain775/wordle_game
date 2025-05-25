import React, { createContext, useState, useContext, useEffect } from 'react';
import { themes } from '../themes/themeConfig';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return themes[savedTheme] ? savedTheme : 'light';
  });

  const applyTheme = (themeName) => {
    const theme = themes[themeName];
    if (!theme || !theme.colors) {
      console.error(`Theme ${themeName} not found or invalid, falling back to light theme`);
      setCurrentTheme('light');
      return;
    }

    const root = document.documentElement;
    
    Object.entries(theme.colors).forEach(([key, value]) => {
      if (typeof value === 'object') {
        Object.entries(value).forEach(([subKey, subValue]) => {
          root.style.setProperty(`--${key}-${subKey}`, subValue);
        });
      } else {
        root.style.setProperty(`--${key}`, value);
      }
    });
  };

  useEffect(() => {
    localStorage.setItem('theme', currentTheme);
    applyTheme(currentTheme);
  }, [currentTheme]);

  const toggleTheme = (themeName) => {
    if (themes[themeName]) {
      setCurrentTheme(themeName);
    } else {
      console.error(`Invalid theme name: ${themeName}, falling back to light theme`);
      setCurrentTheme('light');
    }
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}; 