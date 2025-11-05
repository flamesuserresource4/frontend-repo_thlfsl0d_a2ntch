import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden rounded-3xl bg-[#05060b]">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Neon gradient glows (non-interactive) */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-[#06b6d4]/30 via-[#6366f1]/20 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-[#db2777]/30 via-[#22d3ee]/20 to-transparent blur-3xl" />

      {/* Content overlay */}
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_0_60px_rgba(59,130,246,0.15)] rounded-2xl px-8 sm:px-12 py-8 sm:py-10 max-w-3xl mx-auto text-center">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#22d3ee]/60 to-[#a78bfa]/60 ring-1 ring-white/20 shadow-[0_0_40px_rgba(93,188,255,0.35)]">
            <Sparkles className="h-7 w-7 text-white/90" />
          </div>
          <h1 className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/70 text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.1] tracking-tight">
            Futuristic Developer Interface
          </h1>
          <p className="mt-4 text-sm sm:text-base text-white/70">
            Glassmorphic, neon-infused, cinematic UI — crafted for 2025.
          </p>
          <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
            <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-emerald-400/90 shadow-[0_0_20px_4px_rgba(52,211,153,0.55)]" />
            <span className="text-xs text-white/70">Realtime 3D scene active</span>
          </div>
        </div>
      </div>

      {/* Soft vignette overlay to increase contrast over edges */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
    </section>
  );
}
