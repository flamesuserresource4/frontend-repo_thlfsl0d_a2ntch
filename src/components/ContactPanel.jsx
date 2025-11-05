export default function ContactPanel() {
  return (
    <section className="mx-auto my-16 w-full max-w-6xl">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-6 sm:p-8">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-white">Contact</h3>
            <p className="mt-2 text-sm text-white/70">Static links for reliability.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#" className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10">Email</a>
            <a href="#" className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10">GitHub</a>
            <a href="#" className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}
