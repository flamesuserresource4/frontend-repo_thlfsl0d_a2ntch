import { motion } from 'framer-motion';

const nodes = [
  { id: 1, x: 15, y: 30, size: 10, color: '#22d3ee' },
  { id: 2, x: 35, y: 20, size: 8, color: '#a78bfa' },
  { id: 3, x: 55, y: 35, size: 12, color: '#38bdf8' },
  { id: 4, x: 75, y: 25, size: 9, color: '#f472b6' },
  { id: 5, x: 25, y: 60, size: 11, color: '#34d399' },
  { id: 6, x: 50, y: 62, size: 9, color: '#22d3ee' },
  { id: 7, x: 72, y: 58, size: 10, color: '#a78bfa' },
];

const links = [
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 5],
  [5, 6],
  [6, 7],
  [2, 6],
  [3, 6],
];

export default function SkillGraphPanel() {
  return (
    <section className="relative mx-auto mt-12 w-full max-w-6xl">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-0 backdrop-blur-2xl shadow-[0_0_80px_rgba(56,189,248,0.15)]">
        {/* holographic header */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <div className="text-sm uppercase tracking-widest text-white/60">AI Skill Graph</div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-cyan-400/80 shadow-[0_0_12px_2px_rgba(34,211,238,0.6)]" />
            <span className="h-2 w-2 rounded-full bg-fuchsia-400/80 shadow-[0_0_12px_2px_rgba(232,121,249,0.6)]" />
            <span className="h-2 w-2 rounded-full bg-blue-400/80 shadow-[0_0_12px_2px_rgba(96,165,250,0.6)]" />
          </div>
        </div>

        {/* graph canvas */}
        <div className="relative h-[360px] w-full">
          {/* links */}
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="glow" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#a78bfa" />
              </linearGradient>
              <filter id="softGlow" filterUnits="userSpaceOnUse">
                <feGaussianBlur stdDeviation="0.6" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {links.map(([a, b], idx) => {
              const n1 = nodes.find((n) => n.id === a)!;
              const n2 = nodes.find((n) => n.id === b)!;
              return (
                <motion.line
                  key={idx}
                  x1={n1.x}
                  y1={n1.y}
                  x2={n2.x}
                  y2={n2.y}
                  stroke="url(#glow)"
                  strokeWidth={0.6}
                  filter="url(#softGlow)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.2, 0.9, 0.2] }}
                  transition={{ duration: 4 + idx * 0.3, repeat: Infinity, ease: 'easeInOut' }}
                />
              );
            })}
          </svg>

          {/* nodes */}
          {nodes.map((n, i) => (
            <motion.div
              key={n.id}
              className="absolute rounded-full"
              style={{
                left: `${n.x}%`,
                top: `${n.y}%`,
                width: n.size * 4,
                height: n.size * 4,
                background: `radial-gradient(closest-side, ${n.color}, transparent 70%)`,
                boxShadow: `0 0 24px ${n.color}55, inset 0 0 18px ${n.color}88`,
              }}
              initial={{ scale: 0.8, opacity: 0.7 }}
              animate={{
                scale: [0.9, 1.15, 0.95],
                x: [0, (i % 2 === 0 ? 6 : -6), 0],
                y: [0, (i % 3 === 0 ? -4 : 4), 0],
                opacity: [0.6, 1, 0.8],
              }}
              transition={{ duration: 6 + i, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}

          {/* frosted glass panel label */}
          <div className="pointer-events-none absolute bottom-4 left-4 rounded-xl border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur-md">
            dynamic 3D-style network on frosted glass
          </div>
        </div>
      </div>
    </section>
  );
}
