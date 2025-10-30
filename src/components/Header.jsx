import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Button from './Button';

const Header = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold dark:text-white">Task Manager</h1>
        <Button onClick={toggleTheme} variant="secondary" size="sm">
          {isDark ? '☀️ Light' : '🌙 Dark'}
        </Button>
      </div>
    </header>
  );
};

export default Header;