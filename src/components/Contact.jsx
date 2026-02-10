const contactEmail = import.meta.env.VITE_CONTACT_EMAIL ?? 'info@ethnicmedia.ca';
const phone = import.meta.env.VITE_PHONE ?? '+1-000-000-0000';

function Contact() {
  return (
    <section id="contact" className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold">Let&apos;s build your multicultural growth plan</h2>
        <p className="mt-4 max-w-2xl text-slate-300">
          Ready to launch a campaign that connects authentically with diverse audiences across Canada?
        </p>
        <div className="mt-8 flex flex-col gap-3 text-slate-200">
          <a href={`mailto:${contactEmail}`} className="hover:text-brand-accent">
            {contactEmail}
          </a>
          <a href={`tel:${phone}`} className="hover:text-brand-accent">
            {phone}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
