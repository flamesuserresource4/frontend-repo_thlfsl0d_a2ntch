import Hero from './components/Hero';
import SkillGraphPanel from './components/SkillGraphPanel';
import ProjectsShowcase from './components/ProjectsShowcase';
import ContactPanel from './components/ContactPanel';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#05060b] text-white">
      {/* Global neon background accents */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/2 top-[-10%] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.20),transparent_60%)] blur-3xl" />
        <div className="absolute left-[10%] bottom-[-10%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(232,121,249,0.18),transparent_60%)] blur-3xl" />
        <div className="absolute right-[6%] top-[10%] h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.18),transparent_60%)] blur-3xl" />
      </div>

      {/* Content */}
      <main className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="py-6" />
        <Hero />
        <SkillGraphPanel />
        <ProjectsShowcase />
        <ContactPanel />
        <div className="py-10" />
      </main>
    </div>
  );
}

export default App;
