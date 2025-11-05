import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden rounded-3xl bg-[#05060b]">
      {/* Spline 3D full-width cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Qe6dlWJktclXcUBS/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Non-interactive neon glows */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-[#06b6d4]/30 via-[#6366f1]/20 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-[#db2777]/30 via-[#22d3ee]/20 to-transparent blur-3xl" />

      {/* Static text overlay */}
      <div className="relative z-10 flex h-full w-full items-end justify-start p-6 sm:p-10">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-6 py-5 max-w-xl">
          <h1 className="text-white text-2xl sm:text-3xl font-semibold tracking-tight">
            Fullstack Developer Portfolio
          </h1>
          <p className="mt-2 text-white/70 text-sm">
            Futuristic, glassmorphic interface with neon accents.
          </p>
        </div>
      </div>

      {/* Soft vignette for contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
    </section>
  );
}
