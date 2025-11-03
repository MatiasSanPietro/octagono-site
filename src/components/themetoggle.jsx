import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    const root = document.documentElement;

    if (theme === 'light') root.classList.add('light');
    else root.classList.remove('light');

    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <button
      onClick={toggleTheme}
      aria-label="Cambiar tema"
      className="p-2 rounded-full transition-all duration-300 hover:bg-[var(--color-brand-500)]/10"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-[var(--color-brand-500)]" />
      ) : (
        <Sun className="w-5 h-5 text-[var(--color-brand-500)]" />
      )}
    </button>
  );
}
