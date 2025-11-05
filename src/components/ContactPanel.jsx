import { Mail, Github, Linkedin } from 'lucide-react';

export default function ContactPanel() {
  return (
    <section className="mx-auto my-16 w-full max-w-6xl">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-6 sm:p-8 shadow-[0_0_80px_rgba(34,211,238,0.12)]">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-white">Let’s build something groundbreaking</h3>
            <p className="mt-2 text-sm text-white/70">
              Open to collaborations, consulting, and ambitious ideas.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 px-4 py-2 text-sm text-white shadow-[0_0_24px_rgba(56,189,248,0.25)] hover:from-cyan-500/30 hover:to-fuchsia-500/30"
            >
              <Mail className="h-4 w-4" /> Email
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
