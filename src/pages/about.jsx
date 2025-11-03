import { useLang } from '../lang/uselang';

export default function About() {
  const { lang } = useLang();
  const heroUrl =
    'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1920&auto=format&fit=crop';

  const CARDS =
    lang === 'en'
      ? [
          {
            title: 'Our approach',
            text: 'We integrate modelling, energy and daylight simulations, and constructive criteria to make informed decisions from concept to construction.',
          },
          {
            title: 'Services',
            text: 'Energy and daylight simulations, envelope and shading optimization, glazing assessment, thermal mass and passive strategies.',
          },
        ]
      : [
          {
            title: 'Nuestro enfoque',
            text: 'Integramos modelado, simulaciones energéticas y lumínicas, y criterios constructivos para tomar decisiones informadas desde el anteproyecto hasta la obra.',
          },
          {
            title: 'Servicios',
            text: 'Simulaciones energéticas y de luz natural, optimización de envolvente y protecciones solares, evaluación de DVH, masa térmica y estrategias pasivas.',
          },
        ];

  return (
    <section className="min-h-[calc(100vh-72px-64px)] bg-[color:var(--bg-deep)] text-[color:var(--text)]">
      <div className="relative">
        <img
          src={heroUrl}
          alt={lang === 'en' ? 'About Octágono' : 'Sobre Octágono'}
          width={1600}
          height={720}
          loading="eager"
          fetchpriority="high"
          decoding="async"
          className="w-full h-[48vh] md:h-[56vh] object-cover"
        />
        <div className="absolute inset-0 bg-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto max-w-6xl w-full px-4 pb-8">
            <div className="inline-block rounded-xl bg-black/45 backdrop-blur-sm px-4 py-3 glass-text">
              <h1 className="text-3xl md:text-4xl font-semibold text-[var(--color-brand-500)] drop-shadow">
                {lang === 'en' ? 'About Octágono' : 'Sobre Octágono'}
              </h1>
              <p className="mt-2 text-[color:var(--text)]/90 max-w-3xl prose prose-invert [&_b]:text-[var(--color-brand-500)]">
                {lang === 'en' ? (
                  <>
                    {' '}
                    <b>Predictive</b> design with simulation and data to optimize spatial
                    performance, elevating <b>comfort</b> and reducing <b>consumption</b>.{' '}
                  </>
                ) : (
                  <>
                    {' '}
                    Diseño <b>predictivo</b> con simulación y datos para optimizar el desempeño de
                    los espacios, elevando el <b>confort</b> y reduciendo <b>consumos</b>.{' '}
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-10">
        {CARDS.map((c, i) => (
          <article
            key={i}
            className="group relative transition-all duration-300 hover:-translate-y-[2px]"
          >
            <div className="rounded-2xl p-6 bg-[color:var(--bg-tint)]/40 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:border-[var(--color-brand-500)]/50 hover:bg-[color:var(--bg-tint)]/60 hover:shadow-[0_6px_18px_rgba(0,0,0,0.35)]">
              <h2 className="text-2xl font-semibold text-[var(--color-brand-500)]">{c.title}</h2>
              <p className="mt-3 text-[color:var(--text)]/90 leading-relaxed">{c.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
