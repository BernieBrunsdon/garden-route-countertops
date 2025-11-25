import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const services = [
  {
    id: 'design',
    title: 'Design',
    description:
      'Collaborate with our design atelier to curate layouts, edge profiles, and material palettes tailored to your lifestyle.',
  },
  {
    id: 'fabrication',
    title: 'Fabrication',
    description:
      'Precision CNC fabrication and hand-finishing bring every contour to life with museum-grade craftsmanship.',
  },
  {
    id: 'installation',
    title: 'Installation',
    description:
      'White-glove installation across the Garden Route ensures a seamless fit and pristine finish every time.',
  },
];

const Home = () => {
  return (
    <div className="space-y-28">
      <section className="relative overflow-hidden rounded-[40px] border border-white/10 bg-hero-gradient p-10 sm:p-16 md:p-20">
        <div className="absolute inset-0 -z-10 bg-marble-texture bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 -z-10 bg-hero-gradient" />
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr),340px]">
          <div className="space-y-8">
            <motion.p
              className="text-sm uppercase tracking-[0.4em] text-accent"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Premium stone artistry
            </motion.p>
            <motion.h1
              className="font-heading text-4xl leading-tight text-light sm:text-5xl md:text-6xl"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Elevate Your Space with Timeless Countertops.
            </motion.h1>
            <motion.p
              className="max-w-2xl text-lg text-light/80"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Garden Route Countertops designs, fabricates, and installs bespoke
              stone surfaces in quartz, marble, and granite. We fuse natural beauty
              with precision engineering to create lasting statements in the heart
              of your home.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              <Link
                to="/visualizer"
                className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
              >
                Explore Our Materials
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-light/20 px-8 py-3 text-sm font-semibold text-light/90 transition-all duration-300 hover:border-accent hover:bg-white/10"
              >
                Get a Quote
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="space-y-6 rounded-3xl border border-white/10 bg-primary/70 p-8 backdrop-blur"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
          >
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-light/60">
                Project Snapshot
              </p>
              <p className="mt-2 text-sm text-light/80">
                Select a finish, visualize it in our immersive kitchen mockup, and
                request a personalized quotation in minutes.
              </p>
            </div>
            <div className="rounded-2xl border border-accent/40 bg-accent/10 p-6 text-sm text-accent">
              Over 15 years elevating residences, boutique hotels, and hospitality
              destinations along South Africa&apos;s Garden Route.
            </div>
          </motion.div>
        </div>
      </section>

      <section className="space-y-10">
        <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-accent">
              Our promise
            </p>
            <h2 className="font-heading text-3xl text-light">
              Luxury craftsmanship in three key phases
            </h2>
          </div>
          <p className="max-w-xl text-sm text-light/70">
            We guide each project from concept to installation with meticulous
            attention to detail and a passion for fine stone.
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-primary/60 p-8 transition-all duration-300 hover:border-accent/60 hover:shadow-glow"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div>
                <div className="flex items-center justify-between text-light/50">
                  <span className="text-xs uppercase tracking-[0.3em]">
                    {service.id}
                  </span>
                  <span className="text-xs font-medium text-accent">0{index + 1}</span>
                </div>
                <h3 className="mt-6 font-heading text-2xl text-light">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm text-light/70">{service.description}</p>
              </div>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors duration-300 group-hover:text-light"
              >
                Consult with us →
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="rounded-[36px] border border-white/10 bg-primary/70 p-10 sm:p-12 md:p-16 text-center shadow-inner">
        <h2 className="font-heading text-3xl text-light">
          Ready to elevate your next project?
        </h2>
        <p className="mt-4 text-sm text-light/70">
          Share your vision and our team will prepare bespoke slab recommendations,
          edge profiles, and installation timelines.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link
            to="/visualizer"
            className="inline-flex items-center justify-center rounded-full border border-accent px-6 py-3 text-sm font-semibold text-accent transition-all duration-300 hover:bg-accent hover:text-primary"
          >
            Preview Materials
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:shadow-glow"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;


