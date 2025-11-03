import { Link } from 'react-router-dom';
import Slider from '../components/slider';
import { useLang } from '../lang/uselang';

export default function Home() {
  const { lang } = useLang();
  const hero =
    lang === 'en'
      ? 'Predictive design for a brighter future'
      : 'Diseño predictivo para un futuro más brillante';

  return (
    <section className="relative">
      <Slider />
      <div className="pointer-events-none absolute inset-0 flex items-center">
        <div className="mx-auto max-w-6xl w-full px-4">
          <div className="inline-block pointer-events-auto rounded-xl bg-black/45 backdrop-blur-sm px-3 md:px-4 py-2 md:py-3 glass-text">
            <Link to="/projects" className="group inline-block">
              <span className="octa-title text-white text-2xl md:text-5xl font-semibold transition-colors duration-300 group-hover:text-[var(--color-brand-500)]">
                {hero}
              </span>
              <span className="block relative mt-1 h-[3px] w-0 bg-[var(--color-brand-500)] transition-all duration-300 group-hover:w-full" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
