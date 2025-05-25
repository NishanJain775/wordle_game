import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { currentTheme, toggleTheme } = useTheme();

  return (
    <div className="theme-toggle">
      <input
        type="checkbox"
        id="theme-switch"
        className="theme-switch"
        checked={currentTheme === 'dark'}
        onChange={() => toggleTheme(currentTheme === 'light' ? 'dark' : 'light')}
      />
      <label htmlFor="theme-switch" className="theme-switch-label">
        <span className="theme-switch-icon">
          {currentTheme === 'light' ? '🌙' : '☀️'}
        </span>
      </label>
    </div>
  );
};

export default ThemeToggle; 