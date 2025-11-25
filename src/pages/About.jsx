const teamMembers = [
  {
    name: 'Sipho van Wyk',
    role: 'Managing Director',
    bio: 'Leads client strategy and quality assurance with two decades in premium stone fabrication.',
  },
  {
    name: 'Amelia Jacobs',
    role: 'Design Lead',
    bio: 'Translates concepts into detailed fabrication drawings and curated material palettes.',
  },
  {
    name: 'Lebo Mbeki',
    role: 'Head of Operations',
    bio: 'Oversees installations across the Garden Route, coordinating logistics and finishing.',
  },
];

const About = () => {
  return (
    <div className="space-y-20">
      <section className="grid gap-10 lg:grid-cols-[minmax(0,1fr),360px]">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.35em] text-accent">
            About Garden Route Countertops
          </p>
          <h1 className="font-heading text-4xl text-light">
            Crafting lasting beauty with natural stone and precision engineering.
          </h1>
          <p className="text-sm leading-relaxed text-light/75">
            Since 2010, Garden Route Countertops has partnered with architects, interior
            designers, and homeowners to sculpt bespoke surfaces that honour the
            character of the Garden Route. From quarried slabs to final polish, every
            project receives meticulous attention inside our Knysna fabrication studio.
          </p>
          <p className="text-sm leading-relaxed text-light/70">
            Our craftsmen blend cutting-edge CNC technology with hand-finishing to
            deliver precise mitered edges, waterfall islands, and seamless backsplashes.
            Each installation is orchestrated by our experienced field team, ensuring a
            pristine reveal on handover day.
          </p>
        </div>

        <div className="rounded-3xl border border-accent/40 bg-accent/10 p-8 text-sm text-accent">
          <h2 className="font-heading text-2xl text-light">Mission</h2>
          <p className="mt-4 text-light/80">
            “Crafting lasting beauty with natural stone and precision engineering.”
          </p>
          <p className="mt-6 text-light/70">
            We believe every countertop should be an heirloom piece—timeless, resilient,
            and uniquely yours.
          </p>
        </div>
      </section>

      <section className="space-y-8">
        <header>
          <p className="text-xs uppercase tracking-[0.35em] text-accent">Our team</p>
          <h2 className="mt-3 font-heading text-3xl text-light">The artisans behind the finish</h2>
          <p className="mt-3 max-w-2xl text-sm text-light/70">
            Meet the specialists guiding Garden Route Countertops from concept to
            completion. Add your own team members as the studio grows.
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="rounded-3xl border border-white/10 bg-primary/70 p-8 text-sm text-light/80 shadow-inner"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-accent text-lg font-heading text-accent">
                {member.name
                  .split(' ')
                  .map((part) => part[0])
                  .join('')}
              </div>
              <h3 className="mt-6 font-heading text-xl text-light">{member.name}</h3>
              <p className="text-xs uppercase tracking-[0.25em] text-accent">
                {member.role}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-light/70">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;


