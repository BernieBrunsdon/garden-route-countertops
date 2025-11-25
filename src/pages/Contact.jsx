import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Contact = () => {
  const [searchParams] = useSearchParams();

  const defaultMessage = useMemo(() => {
    const material = searchParams.get('material');
    const color = searchParams.get('color');
    const messageParam = searchParams.get('message');

    if (messageParam) {
      return decodeURIComponent(messageParam);
    }

    if (material && color) {
      return `Hi Garden Route Countertops team,\n\nI would love to request a quote for the ${color} ${material}. Please contact me with next steps.\n\nThanks!`;
    }

    return '';
  }, [searchParams]);

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: defaultMessage,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, phone, message } = formState;
    const mailto = new URL(`mailto:studio@gardenroutecountertops.com`);
    mailto.searchParams.set(
      'subject',
      `Quote request from ${name || 'Garden Route client'}`,
    );
    mailto.searchParams.set(
      'body',
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
    );
    window.location.href = mailto.toString();
  };

  return (
    <div className="space-y-16">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.35em] text-accent">Contact</p>
        <h1 className="font-heading text-4xl text-light">Let’s discuss your project</h1>
        <p className="max-w-3xl text-sm text-light/70">
          Share your ideas, measurements, or inspiration references. Our team will respond
          with tailored slab recommendations and a detailed project timeline within 24
          hours.
        </p>
      </header>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr),420px]">
        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-[32px] border border-white/10 bg-primary/70 p-10 backdrop-blur"
        >
          <div>
            <label
              htmlFor="name"
              className="text-xs uppercase tracking-[0.25em] text-light/60"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formState.name}
              onChange={handleChange}
              className="mt-2 w-full rounded-full border border-white/15 bg-primary px-5 py-3 text-sm text-light focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/60"
              placeholder="Your full name"
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="email"
                className="text-xs uppercase tracking-[0.25em] text-light/60"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formState.email}
                onChange={handleChange}
                className="mt-2 w-full rounded-full border border-white/15 bg-primary px-5 py-3 text-sm text-light focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/60"
                placeholder="name@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="text-xs uppercase tracking-[0.25em] text-light/60"
              >
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formState.phone}
                onChange={handleChange}
                className="mt-2 w-full rounded-full border border-white/15 bg-primary px-5 py-3 text-sm text-light focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/60"
                placeholder="+27 00 000 0000"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="text-xs uppercase tracking-[0.25em] text-light/60"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={formState.message}
              onChange={handleChange}
              className="mt-2 w-full rounded-3xl border border-white/15 bg-primary px-5 py-4 text-sm text-light focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/60"
              placeholder="Tell us about the space, material, and timeline."
            />
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              type="submit"
              className="rounded-full bg-accent px-8 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
            >
              Request a Quote
            </button>
            <a
              href="tel:+27440000000"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-3 text-sm font-semibold text-light transition-all duration-300 hover:border-accent hover:text-accent"
            >
              Call our studio
            </a>
          </div>
        </form>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-primary/60 p-8 text-sm text-light/75">
            <h2 className="font-heading text-2xl text-light">Studio Hours</h2>
            <p className="mt-4">Monday – Friday · 08:00 – 17:00</p>
            <p className="mt-2">Saturday consultations by appointment.</p>
            <div className="mt-6 space-y-1 text-light/60">
              <p>Email: studio@gardenroutecountertops.com</p>
              <p>Phone: +27 44 000 0000</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 shadow-inner">
            <iframe
              title="Garden Route Countertops service area"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107325.32025951487!2d22.961399897616237!3d-34.04824293259908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dd3a9a74b5a3d5d%3A0x7ad6ff8cd3b1d346!2sGarden%20Route!5e0!3m2!1sen!2sza!4v1731247000000!5m2!1sen!2sza"
              width="100%"
              height="360"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

