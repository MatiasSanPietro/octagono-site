import { useLang } from '../lang/uselang';

const HERO_IMG = 'https://picsum.photos/id/1043/1600/720';
const PLACEHOLDER = 'https://picsum.photos/id/1050/1200/800';

// ES
const ediliciaPreviosES = [
  {
    title: 'Optimización de Orientación Arquitectónica',
    description:
      'Determinamos la orientación ideal para capturar mejor luz y ventilación, maximizando el confort térmico y reduciendo la demanda de energía.',
    deliverables:
      'Informe de Orientación Óptima, Diagramas Solares, Modelo de Geometría Encontrada.',
  },
  {
    title: 'Optimización de Aberturas',
    description:
      'Definimos proporción y ubicación de ventanas para equilibrar luz natural, ventilación y control térmico. Menos calor en verano, más luz todo el año.',
    deliverables:
      'Planos de Ubicación y Dimensionamiento, Fichas por Orientación, Modelo de Geometría Encontrada.',
  },
  {
    title: 'Optimización de Morfología',
    description:
      'Buscamos forma, altura y compacidad óptimas. Mayor rendimiento bioclimático con menor superficie construida para una inversión más eficiente.',
    deliverables:
      'Informe de Parámetros Morfológicos Óptimos, Comparativa de Rendimiento, Modelo de Geometría Encontrada.',
  },
];
const ediliciaPosterioresES = [
  {
    title: 'Línea Base y Análisis Bioclimático',
    description:
      'Evaluamos el rendimiento energético inicial para identificar pérdidas y ganancias y orientar la inversión donde más impacta.',
    deliverables: 'Informe de Cargas Térmicas, Mapa de Puntos Críticos, Comparativa Energética.',
  },
  {
    title: 'Envolvente Inteligente',
    description:
      'Simulamos y optimizamos aislamiento y masa térmica de muros, techos y pisos para mantener temperatura ideal de forma natural.',
    deliverables: 'Especificaciones Técnicas de Materiales, Memoria de Cálculo de Aislamiento.',
  },
  {
    title: 'Control Solar y Acristalamientos Eficientes',
    description:
      'Diseñamos sombreadores y especificamos acristalamiento óptimo para bloquear sol de verano y aprovechar el de invierno.',
    deliverables:
      'Planos de Geometría de Sombreado, Especificación de Acristalamiento, Modelo con Protecciones.',
  },
  {
    title: 'Flujo de Viento y Ventilación Natural',
    description:
      'Modelado CFD para estrategias efectivas de ventilación y enfriamiento pasivo en interiores y semiabiertos.',
    deliverables:
      'Reporte CFD con Mapas de Velocidad y Presión, Estrategias de Ventilación Natural.',
  },
  {
    title: 'Diseño Técnico de Paneles Fotovoltaicos',
    description:
      'Modelado energético y diseño técnico completo para el sistema fotovoltaico con especificaciones y planos de implantación.',
    deliverables: 'Planos de Implantación, Esquema Funcional, Lista de Especificaciones Técnicas.',
  },
];
const urbanaPreviosES = [
  {
    title: 'Optimización de Orientación Urbana',
    description:
      'Definimos orientación y geometría de calles y manzanas según radiación y clima local.',
    deliverables:
      'Planos de Trazado Urbano Optimizado, Justificación Climática, Modelo de Geometría Encontrada.',
  },
  {
    title: 'Optimización de Dimensiones Urbanas',
    description:
      'Proporciones ideales entre alturas, anchos de calle y separaciones para luz natural y confort a nivel peatonal.',
    deliverables:
      'Informe de Proporciones Óptimas (H/W), Parámetros de Diseño Urbano, Modelo de Geometría Encontrada.',
  },
  {
    title: 'Optimización de Espacios Públicos y Vegetación',
    description:
      'Ubicación de plazas, arbolado y superficies permeables para confort del peatón y mitigación de isla de calor.',
    deliverables:
      'Propuesta de Espacios Verdes, Análisis de Confort Previo, Modelo de Geometría Encontrada.',
  },
];
const urbanaPosterioresES = [
  {
    title: 'Optimización de Vegetación y Arbolado',
    description:
      'Selección estratégica de especies y ubicación por sombra, orientación y evapotranspiración para reducir temperatura ambiente.',
    deliverables: 'Plan de Arborización Estratégica, Ficha de Especies Recomendadas.',
  },
  {
    title: 'Gestión de Superficies y Albedo',
    description:
      'Evaluación de materiales y colores urbanos para menor absorción de calor y mayor reflectancia térmica.',
    deliverables: 'Mapa de Albedo Recomendado, Especificación de Materiales Urbanos.',
  },
  {
    title: 'Microclima Urbano Integrado',
    description:
      'Simulación de confort térmico peatonal considerando radiación, materiales y vegetación.',
    deliverables: 'Mapas de Confort (PET/PMV), Informe de Zonas de Riesgo de Calor.',
  },
  {
    title: 'Flujo de Viento a Gran Escala',
    description:
      'Modelado CFD del régimen de vientos para ventilación natural masiva y confort en plazas y explanadas.',
    deliverables: 'Reporte CFD de Flujo de Viento, Recomendaciones para Trama Urbana.',
  },
];

// EN
const ediliciaPreviosEN = [
  {
    title: 'Architectural Orientation Optimization',
    description:
      'We determine the ideal orientation to capture daylight and ventilation, maximizing thermal comfort and reducing energy demand.',
    deliverables: 'Optimal Orientation Report, Solar Diagrams, Derived Geometry Model.',
  },
  {
    title: 'Openings Optimization',
    description:
      'We define window ratio and placement to balance daylight, ventilation and thermal control. Less heat in summer, more light year-round.',
    deliverables:
      'Location & Sizing Plans, Orientation-based Specs Sheets, Derived Geometry Model.',
  },
  {
    title: 'Morphology Optimization',
    description:
      'We search for optimal massing, height and compactness. Better bioclimatic performance with less built area for a more efficient investment.',
    deliverables:
      'Optimal Morphology Parameters Report, Performance Comparison, Derived Geometry Model.',
  },
];
const ediliciaPosterioresEN = [
  {
    title: 'Baseline & Bioclimatic Analysis',
    description:
      'We assess initial energy performance to pinpoint losses and gains and direct investment where it matters most.',
    deliverables: 'Thermal Loads Report, Critical Points Map, Energy Comparison.',
  },
  {
    title: 'Smart Envelope',
    description:
      'We simulate and optimize insulation and thermal mass for walls, roofs and floors to keep ideal temperature naturally.',
    deliverables: 'Technical Specs for Materials, Insulation Calculation Memo.',
  },
  {
    title: 'Solar Control & Efficient Glazing',
    description:
      'We design shading geometries and specify the best glazing to block summer sun and admit winter sun.',
    deliverables: 'Shading Geometry Plans, Glazing Specification, Protected Model.',
  },
  {
    title: 'Wind Flow & Natural Ventilation',
    description:
      'CFD modelling to design effective ventilation and passive cooling in indoor and semi-outdoor spaces.',
    deliverables: 'CFD Report with Velocity/Pressure Maps, Natural Ventilation Strategies.',
  },
  {
    title: 'PV System Technical Design',
    description:
      'Energy modelling and full technical design for your PV system with exact specs and layout drawings.',
    deliverables: 'Layout Drawings, Functional Diagram, Technical Specs List.',
  },
];
const urbanaPreviosEN = [
  {
    title: 'Urban Orientation Optimization',
    description:
      'We define street and block orientation and geometry based on solar radiation and local climate.',
    deliverables: 'Optimized Urban Layout Plans, Climate Rationale, Derived Geometry Model.',
  },
  {
    title: 'Urban Dimensions Optimization',
    description:
      'Ideal proportions between building heights, street widths and setbacks for daylight and pedestrian comfort.',
    deliverables: 'Optimal H/W Ratios Report, Urban Design Parameters, Derived Geometry Model.',
  },
  {
    title: 'Public Space & Vegetation Optimization',
    description:
      'Placement of plazas, trees and permeable surfaces to enhance pedestrian comfort and mitigate heat-island effects.',
    deliverables: 'Green Space Proposal, Preliminary Comfort Analysis, Derived Geometry Model.',
  },
];
const urbanaPosterioresEN = [
  {
    title: 'Vegetation & Tree Strategy',
    description:
      'Strategic species selection and placement by shade, orientation and evapotranspiration to actively reduce ambient temperature.',
    deliverables: 'Strategic Tree Plan, Recommended Species Sheet.',
  },
  {
    title: 'Surface Management & Albedo',
    description:
      'Material and color evaluation to reduce heat absorption and increase thermal reflectance.',
    deliverables: 'Recommended Albedo Map, Urban Materials Specification.',
  },
  {
    title: 'Integrated Urban Microclimate',
    description:
      'Detailed pedestrian thermal comfort simulation considering radiation, materials and vegetation.',
    deliverables: 'Comfort Maps (PET/PMV), Heat-Risk Areas Report.',
  },
  {
    title: 'Large-Scale Wind Flow',
    description:
      'CFD modelling of wind regimes to promote massive natural ventilation and improve comfort in plazas and esplanades.',
    deliverables: 'Wind Flow CFD Report, Urban Grid Recommendations.',
  },
];

function ServiceCard({ title, description, deliverables, labelDeliverables }) {
  return (
    <article className="group relative">
      <div className="transition-transform duration-300 group-hover:-translate-y-[2px]">
        <div className="rounded-2xl p-5 md:p-6 bg-[color:var(--bg-tint)]/40 backdrop-blur-sm border border-white/10 transition-all duration-300 group-hover:border-[var(--color-brand-500)]/50 group-hover:bg-[color:var(--bg-tint)]/60 shadow-[0_4px_12px_rgba(0,0,0,0.35)]">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-xl md:text-2xl font-semibold text-[var(--color-brand-500)]">
                {title}
              </h3>
              <p className="mt-3 text-[15px] text-[color:var(--text)]/90 leading-relaxed">
                {description}
              </p>
              {deliverables && (
                <p className="mt-3 text-[14px] text-[color:var(--text-muted)]">
                  <span className="font-medium text-[var(--color-brand-500)]">
                    {labelDeliverables}
                  </span>{' '}
                  {deliverables}
                </p>
              )}
            </div>
            <div className="order-1 md:order-2">
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src={PLACEHOLDER}
                  alt={title}
                  className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const { lang } = useLang();

  const title = lang === 'en' ? 'Services' : 'Servicios';
  const heroP =
    lang === 'en' ? (
      <>
        We use <b>algorithmic design</b> tools to explore and validate thousands of configurations
        for your project’s specific location. This lets us find the <b>optimal solution</b>,
        ensuring <b>maximum comfort</b> with minimal energy demand.
      </>
    ) : (
      <>
        Aplicamos herramientas de <b>diseño algorítmico</b> para explorar y validar miles de
        configuraciones según la ubicación específica de su proyecto. Esto nos permite encontrar la
        <b> solución óptima</b>, garantizando <b>máximo confort</b> y mínima demanda energética.
      </>
    );

  const note1 =
    lang === 'en'
      ? 'Selecting two or more services reduces the per-study cost, applying a discount and boosting improvement effectiveness.'
      : 'Al seleccionar dos o más servicios, el costo por estudio se reduce, aplicando un descuento y aumentando la eficacia de las mejoras.';
  const note2 =
    lang === 'en'
      ? 'All services include a comprehensive report on the site’s climatic conditions.'
      : 'Todos los servicios incluyen un informe exhaustivo de condiciones climáticas del lugar.';

  const ediliciaTitle = lang === 'en' ? 'Building Scale' : 'Escala Edilicia';
  const ediliciaSub =
    lang === 'en'
      ? '(Buildings, Housing and Architectural Proposals)'
      : '(Edificios, Viviendas y Propuestas Arquitectónicas)';
  const previosMsg =
    lang === 'en'
      ? 'Focused on maximizing potential from the start and securing the best design groundwork.'
      : 'Enfocados en maximizar el potencial desde el inicio y asegurar la mejor base de diseño.';
  const posterioresTitle =
    lang === 'en' ? 'Post-Design Services' : 'Servicios Posteriores al Diseño';
  const posterioresMsg =
    lang === 'en'
      ? 'Focused on validation and performance engineering for the designed project.'
      : 'Enfocados en la validación y la ingeniería de rendimiento del proyecto ya diseñado.';

  const urbanaTitle = lang === 'en' ? 'Urban Scale' : 'Escala Urbana';
  const urbanaSub =
    lang === 'en'
      ? '(Developments, Masterplans and Public Spaces)'
      : '(Desarrollos, Planes Maestros y Espacios Públicos)';
  const urbanaPreviosMsg =
    lang === 'en'
      ? 'Focused on strategic planning for local climate and livability.'
      : 'Enfocados en la planificación estratégica para la habitabilidad y el clima local.';
  const urbanaPosterioresTitle = posterioresTitle;
  const urbanaPosterioresMsg =
    lang === 'en'
      ? 'Focused on impact mitigation and urban microclimate improvement.'
      : 'Enfocados en la mitigación de impactos y la mejora del microclima urbano.';

  const labelDeliverables = lang === 'en' ? 'Deliverables:' : 'Entregables:';

  const previos = lang === 'en' ? ediliciaPreviosEN : ediliciaPreviosES;
  const posteriores = lang === 'en' ? ediliciaPosterioresEN : ediliciaPosterioresES;
  const uPrevios = lang === 'en' ? urbanaPreviosEN : urbanaPreviosES;
  const uPosteriores = lang === 'en' ? urbanaPosterioresEN : urbanaPosterioresES;

  return (
    <section className="min-h-[calc(100vh-72px-64px)] bg-[color:var(--bg-deep)] text-[color:var(--text)]">
      <div className="relative">
        <img
          src={HERO_IMG}
          alt="Octágono - Services"
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
                {title}
              </h1>
              <p className="mt-2 text-[color:var(--text)]/90 max-w-3xl">{heroP}</p>
              <div className="mt-3 space-y-2 max-w-3xl">
                <p className="text-sm italic text-[color:var(--text)]/75 -skew-x-3">{note1}</p>
                <p className="text-sm italic text-[color:var(--text)]/75 -skew-x-3">{note2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative" style={{ clipPath: 'polygon(0 0, 100% 4rem, 100% 100%, 0 100%)' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[color:var(--bg-tint)]" />
        <div className="relative mx-auto max-w-6xl px-4 pt-20 pb-12 grid gap-12">
          <header className="grid gap-2">
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-brand-500)]">
              {ediliciaTitle}
              <span className="text-[color:var(--text-muted)] text-base font-normal">
                {' '}
                {ediliciaSub}
              </span>
            </h2>
            <div className="text-sm italic text-[color:var(--text)]/75 -skew-x-3">{previosMsg}</div>
          </header>

          <div className="grid gap-8">
            {previos.map((s, i) => (
              <ServiceCard key={`ep-${i}`} {...s} labelDeliverables={labelDeliverables} />
            ))}
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-6" />

          <header className="grid gap-2">
            <h3 className="text-xl md:text-2xl font-semibold text-[var(--color-brand-500)]">
              {posterioresTitle}
            </h3>
            <div className="text-sm italic text-[color:var(--text)]/75 -skew-x-3">
              {posterioresMsg}
            </div>
          </header>

          <div className="grid gap-8">
            {posteriores.map((s, i) => (
              <ServiceCard key={`epo-${i}`} {...s} labelDeliverables={labelDeliverables} />
            ))}
          </div>
        </div>
      </div>

      <div
        className="relative"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 4rem), 0 100%)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--bg-tint)] to-[color:var(--bg-deep)]" />
        <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-24 grid gap-12">
          <header className="grid gap-2">
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-brand-500)]">
              {urbanaTitle}
              <span className="text-[color:var(--text-muted)] text-base font-normal">
                {' '}
                {urbanaSub}
              </span>
            </h2>
            <div className="text-sm italic text-[color:var(--text)]/75 -skew-x-3">
              {urbanaPreviosMsg}
            </div>
          </header>

          <div className="grid gap-8">
            {uPrevios.map((s, i) => (
              <ServiceCard key={`up-${i}`} {...s} labelDeliverables={labelDeliverables} />
            ))}
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-6" />

          <header className="grid gap-2">
            <h3 className="text-xl md:text-2xl font-semibold text-[var(--color-brand-500)]">
              {urbanaPosterioresTitle}
            </h3>
            <div className="text-sm italic text-[color:var(--text)]/75 -skew-x-3">
              {urbanaPosterioresMsg}
            </div>
          </header>

          <div className="grid gap-8">
            {uPosteriores.map((s, i) => (
              <ServiceCard key={`upo-${i}`} {...s} labelDeliverables={labelDeliverables} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
