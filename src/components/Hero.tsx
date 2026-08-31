function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full bg-blue-100/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700">
          ✨ Tienda de Tecnología de Nueva Generación
        </span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          Equipa tu espacio de trabajo con
          {' '}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">NovaShop</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
          Descubre nuestra selección de artículos electrónicos, teclados mecánicos, monitores de alta resolución y periféricos diseñados para desarrolladores y profesionales.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#catalog"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-700 hover:shadow-blue-500/35 active:scale-95"
          >
            Ver Catálogo ↓
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
