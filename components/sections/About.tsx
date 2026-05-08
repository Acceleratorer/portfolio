import { Reveal } from "@/components/motion/Reveal";

export function About() {
  const pills = ["AI Engineer", "Data Scientist", "MLOps Learner", "Competitive Programmer", "GitHub Builder", "Product-minded Dev"];

  return (
    <section className="px-5 py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <p className="font-mono text-xs font-black uppercase tracking-[0.16em] text-cyan">About</p>
          <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.055em] sm:text-5xl">Builder mindset, AI direction, engineering discipline.</h2>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="text-lg leading-8 text-slate-400">
            <p>
              I’m a Computer Science student at UIT who enjoys learning by rebuilding real systems: AI demos, data workflows, automation tools, backend logic, and clean portfolio interfaces.
            </p>
            <p className="mt-5">
              My strongest direction is AI/Data Science, but I keep a full-stack toolkit so I can ship projects end-to-end: model, backend, UI, deployment, and documentation.
            </p>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            {pills.map((pill) => <span key={pill} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-black text-white">{pill}</span>)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
