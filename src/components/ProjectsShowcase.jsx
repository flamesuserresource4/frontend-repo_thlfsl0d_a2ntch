import { motion } from 'framer-motion';
import { ExternalLink, Code, Rocket } from 'lucide-react';

const projects = [
  {
    title: 'Neon Commerce Engine',
    desc: 'Headless storefront with AI product discovery and holographic analytics.',
    tech: ['Next.js', 'FastAPI', 'MongoDB'],
    hue: 'from-cyan-400/40 via-fuchsia-400/30 to-blue-400/40',
  },
  {
    title: 'Realtime Collab Studio',
    desc: 'WebRTC canvas, CRDT sync, and neural brush dynamics for teams.',
    tech: ['Vite', 'WebRTC', 'Redis'],
    hue: 'from-fuchsia-400/40 via-blue-400/30 to-cyan-400/40',
  },
  {
    title: 'Autonomous Dev Agent',
    desc: 'Code generation pipeline with eval harness and toolformer routing.',
    tech: ['Python', 'OpenAI', 'LangChain'],
    hue: 'from-blue-400/40 via-cyan-400/30 to-fuchsia-400/40',
  },
];

export default function ProjectsShowcase() {
  return (
    <section className="mx-auto mt-16 w-full max-w-6xl">
      <div className="mb-6 flex items-center justify-between px-1">
        <div>
          <h2 className="text-2xl font-semibold text-white">Selected Work</h2>
          <p className="mt-1 text-sm text-white/60">A snapshot of high-impact builds.</p>
        </div>
        <div className="hidden sm:flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-md">
          <Rocket className="h-3.5 w-3.5 text-cyan-300" />
          <span>Shipping fast</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-[0_0_60px_rgba(99,102,241,0.10)]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
          >
            <div className={`pointer-events-none absolute -inset-1 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-60 bg-gradient-to-br ${p.hue}`} />
            <div className="relative z-10">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/70">
                <Code className="h-3.5 w-3.5 text-fuchsia-300" />
                {p.tech.join(' • ')}
              </div>
              <h3 className="text-lg font-medium text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-white/65">{p.desc}</p>
              <div className="mt-4 inline-flex items-center gap-2 text-sm text-cyan-300/90">
                <span>View project</span>
                <ExternalLink className="h-4 w-4" />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
