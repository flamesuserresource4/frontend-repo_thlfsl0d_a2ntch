const projects = [
  { title: 'Neon Commerce Engine', link: '#', note: 'Headless storefront' },
  { title: 'Realtime Collab Studio', link: '#', note: 'Canvas + sync' },
  { title: 'Autonomous Dev Agent', link: '#', note: 'Agentic tooling' },
  { title: 'Holographic Dashboard', link: '#', note: 'Data visuals' },
  { title: 'AI Docs Summarizer', link: '#', note: 'NLP pipeline' },
  { title: 'Edge Analytics Kit', link: '#', note: 'WebWorkers' },
];

export default function ProjectsShowcase() {
  return (
    <section className="mx-auto mt-16 w-full max-w-6xl">
      <div className="mb-6 px-1">
        <h2 className="text-2xl font-semibold text-white">Selected Work</h2>
        <p className="mt-1 text-sm text-white/60">Static list with safe links.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.link}
            className="relative block overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl hover:bg-white/10 transition-colors"
          >
            <div className="pointer-events-none absolute -inset-1 opacity-50 blur-2xl bg-gradient-to-br from-cyan-400/20 via-fuchsia-400/10 to-blue-400/20" />
            <div className="relative z-10">
              <div className="text-[11px] text-white/70">{p.note}</div>
              <h3 className="mt-1 text-lg font-medium text-white">{p.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
