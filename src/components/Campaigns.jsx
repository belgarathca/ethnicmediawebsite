import { campaignHighlights } from '../data/siteContent';

function Campaigns() {
  return (
    <section id="campaigns" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold text-slate-900">Campaign highlights</h2>
        <ul className="mt-8 space-y-4">
          {campaignHighlights.map((item) => (
            <li key={item} className="rounded-xl border border-slate-200 bg-white p-5 text-slate-700 shadow-sm">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Campaigns;
