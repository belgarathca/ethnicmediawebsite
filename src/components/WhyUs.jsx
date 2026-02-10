import { metrics } from '../data/siteContent';

function WhyUs() {
  return (
    <section id="why-us" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-3xl font-bold text-slate-900">Why brands choose us</h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {metrics.map((metric) => (
          <article key={metric.label} className="rounded-2xl border border-slate-200 p-6">
            <p className="text-3xl font-bold text-brand-primary">{metric.value}</p>
            <p className="mt-2 text-sm text-slate-600">{metric.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default WhyUs;
