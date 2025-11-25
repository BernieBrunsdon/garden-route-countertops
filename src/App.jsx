import { NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Home from './pages/Home.jsx';
import Visualizer from './pages/Visualizer.jsx';

const navigationItems = [
  { path: '/', label: 'Home' },
  { path: '/visualizer', label: 'Visualizer' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
];

const RouteTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -16 }}
    transition={{ duration: 0.4, ease: 'easeInOut' }}
    className="flex-1"
  >
    {children}
  </motion.div>
);

const AppShell = () => {
  const location = useLocation();

  return (
    <div className="relative min-h-screen bg-primary text-light">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,162,76,0.12),_transparent_55%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 pb-10 pt-8 sm:px-10 md:px-12 lg:px-14">
        <header className="mb-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <NavLink to="/" className="group flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/60 bg-primary text-lg font-heading text-accent transition-all duration-300 group-hover:shadow-glow">
              GR
            </span>
            <div className="text-left">
              <p className="font-heading text-xl text-light">Garden Route Countertops</p>
              <p className="text-xs uppercase tracking-[0.35em] text-light/60">
                Luxury stone surfaces
              </p>
            </div>
          </NavLink>

          <nav className="flex flex-wrap gap-3 text-sm">
            {navigationItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  [
                    'rounded-full border px-5 py-2 transition-all duration-300',
                    isActive
                      ? 'border-accent bg-accent text-primary shadow-glow'
                      : 'border-white/15 text-light/70 hover:border-accent/60 hover:text-accent',
                  ].join(' ')
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </header>

        <main className="flex-1 pb-16">
          <AnimatePresence mode="wait">
            <RouteTransition key={location.pathname}>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/visualizer" element={<Visualizer />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route
                  path="*"
                  element={
                    <div className="rounded-3xl border border-white/10 bg-primary/70 p-16 text-center">
                      <h1 className="font-heading text-4xl text-light">Page not found</h1>
                      <p className="mt-4 text-sm text-light/70">
                        The page you&apos;re looking for has moved. Explore our materials or
                        reach out for assistance.
                      </p>
                      <NavLink
                        to="/"
                        className="mt-6 inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-primary transition-all hover:shadow-glow"
                      >
                        Return Home
                      </NavLink>
                    </div>
                  }
                />
              </Routes>
            </RouteTransition>
          </AnimatePresence>
        </main>

        <footer className="mt-auto rounded-[28px] border border-white/10 bg-primary/80 p-8 text-sm text-light/70 backdrop-blur">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-heading text-xl text-light">
                © 2025 Garden Route Countertops. All rights reserved.
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-accent">
                Premium stone | Quartz · Marble · Granite
              </p>
            </div>
            <div className="flex flex-wrap gap-3 text-sm">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  className="rounded-full border border-white/15 px-5 py-2 text-light/70 transition-all hover:border-accent hover:text-accent"
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
            <div className="flex items-center gap-4 text-light/60">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15">
                in
              </span>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15">
                ig
              </span>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15">
                fb
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

const App = () => <AppShell />;

export default App;
