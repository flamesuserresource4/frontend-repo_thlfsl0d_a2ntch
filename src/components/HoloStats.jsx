import { motion } from 'framer-motion';
import { Code, Cpu, Zap } from 'lucide-react';

const items = [
  {
    icon: Code,
    label: 'Projects',
    value: '24+',
    gradient: 'from-cyan-400/30 to-fuchsia-400/30',
  },
  {
    icon: Cpu,
    label: 'AI Integrations',
    value: '12',
    gradient: 'from-indigo-400/30 to-cyan-400/30',
  },
  {
    icon: Zap,
    label: 'Latency',
    value: '~40ms',
    gradient: 'from-emerald-400/30 to-sky-400/30',
  },
];

export default function HoloStats() {
  return (
    <section className="mx-auto mt-10 grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-3">
      {items.map((item, idx) => (
        <motion.div
          key={item.label}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: idx * 0.1, type: 'spring', stiffness: 120 }}
          className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-[0_0_60px_rgba(99,102,241,0.15)]`}
        >
          <div className={`pointer-events-none absolute -inset-16 bg-gradient-to-br ${item.gradient} blur-3xl`} />
          <div className="relative z-10 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20">
              <item.icon className="h-6 w-6 text-white/90" />
            </div>
            <div>
              <div className="text-2xl font-semibold text-white/90 drop-shadow-[0_0_12px_rgba(34,211,238,0.35)]">
                {item.value}
              </div>
              <div className="text-sm uppercase tracking-widest text-white/60">
                {item.label}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
