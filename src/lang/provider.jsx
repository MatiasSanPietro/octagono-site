import { useEffect, useMemo, useState } from 'react';
import { LangContext } from './contex';

export default function LangProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'es');

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  const toggleLang = () => setLang((prev) => (prev === 'es' ? 'en' : 'es'));

  const value = useMemo(() => ({ lang, setLang, toggleLang }), [lang]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}
