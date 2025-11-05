export default function SkillGraphPanel() {
  return (
    <section className="relative mx-auto mt-12 w-full max-w-6xl">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-0 backdrop-blur-2xl">
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <div className="text-sm uppercase tracking-widest text-white/70">AI Skill Graph</div>
          <div className="text-xs text-white/50">Static preview</div>
        </div>

        {/* Simple static grid mimicking a graph on frosted glass */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 p-6">
          {[
            'React',
            'TypeScript',
            'FastAPI',
            'MongoDB',
            'Tailwind',
            'Docker',
            'Next.js',
            'Node.js',
            'GraphQL',
            'Redis',
            'Vite',
            'CI/CD',
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-white/10 bg-white/8 px-3 py-2 text-center text-xs text-white/80 shadow-[0_0_24px_rgba(56,189,248,0.12)]"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
