import { services } from '../data/siteContent';

function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-3xl font-bold text-slate-900">Services</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <article key={service.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
