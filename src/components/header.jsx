import { Link, NavLink } from 'react-router-dom';
import ThemeToggle from './themetoggle';
import { useLang } from '../lang/uselang';

export default function Header() {
  const { lang, toggleLang } = useLang();

  const nav =
    lang === 'en'
      ? { services: 'Services', about: 'About OCTÁGONO', contact: 'Contact' }
      : { services: 'Servicios', about: 'Sobre OCTÁGONO', contact: 'Contáctenos' };

  return (
    <header className="sticky top-0 z-40 bg-[color:var(--bg-deep)]/60 backdrop-blur-md border-b border-white/10 shadow-[0_2px_12px_rgba(0,0,0,0.25)] transition-colors duration-500">
      <div className="mx-auto max-w-6xl h-[72px] px-4 flex items-center justify-between">
        <Link
          to="/"
          className="relative flex items-baseline gap-2 group text-[color:var(--text)] no-underline"
        >
          <span className="text-2xl font-semibold tracking-tight text-[var(--color-brand-500)] transition-colors">
            OCTÁGONO
          </span>
          <span className="text-sm text-[color:var(--text-muted)]">
            {lang === 'en' ? 'Design Lab' : 'Laboratorio de Diseño'}
          </span>
          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[var(--color-brand-500)] transition-all duration-300 group-hover:w-full" />
        </Link>

        <nav className="flex items-center gap-4 md:gap-8">
          {[
            { to: '/projects', label: nav.services },
            { to: '/about', label: nav.about },
            { to: '/contact', label: nav.contact },
          ].map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `
                relative text-sm tracking-wide transition-colors duration-300
                ${
                  isActive
                    ? 'text-[var(--color-brand-500)]'
                    : 'text-[color:var(--text)] hover:text-[var(--color-brand-500)]'
                }
                after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                after:w-0 after:bg-[var(--color-brand-500)] after:transition-all after:duration-300
                hover:after:w-full
                ${isActive ? 'after:w-full' : ''}
              `
              }
            >
              {link.label}
            </NavLink>
          ))}
          <button
            onClick={toggleLang}
            className="px-2 py-1 rounded-md text-sm border border-white/10 hover:border-[var(--color-brand-500)]/50 hover:bg-[var(--color-brand-500)]/10 transition-colors"
            aria-label="Toggle language"
            title="Idioma / Language"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
