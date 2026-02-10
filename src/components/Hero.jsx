function Hero() {
  return (
    <section id="home" className="bg-slate-950 py-20 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-accent">Ethnicmedia.ca</p>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Reach Canada&apos;s diverse communities with confidence.
          </h1>
          <p className="mt-5 max-w-xl text-slate-300">
            We combine multicultural strategy, multilingual creative, and trusted media relationships to build
            campaigns that perform.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex rounded-lg bg-brand-primary px-6 py-3 font-semibold text-slate-950 transition hover:bg-brand-accent"
          >
            Book a strategy call
          </a>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-xl">
          <p className="text-sm font-medium text-brand-accent">What we do best</p>
          <ul className="mt-4 space-y-3 text-slate-100">
            <li>• Multicultural audience research</li>
            <li>• Integrated media planning & buying</li>
            <li>• Performance analytics across channels</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hero;
