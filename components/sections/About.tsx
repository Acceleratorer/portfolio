import { Reveal } from "@/components/motion/Reveal";

const pills = [
  "AI Engineer",
  "Data Scientist",
  "MLOps Learner",
  "Competitive Programmer",
  "GitHub Builder",
  "Product-minded Dev",
];

export function About() {
  return (
    <section id="about" className="bg-surface-soft px-5 py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-coral">
            About
          </p>
          <h2 className="mt-4 font-display text-5xl font-medium leading-tight tracking-[-0.05em] text-ink sm:text-6xl">
            Builder mindset, AI direction, engineering discipline.
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="text-lg leading-8 text-body">
            <p>
              I am a Computer Science student at UIT who learns by rebuilding
              real systems: AI demos, data workflows, automation tools, backend
              logic, and clean portfolio interfaces.
            </p>
            <p className="mt-5">
              My strongest direction is AI and Data Science, while a full-stack
              toolkit lets me ship projects end-to-end: model, backend, UI,
              deployment, and documentation.
            </p>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            {pills.map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-hairline bg-canvas px-4 py-2 text-sm font-medium text-body-strong"
              >
                {pill}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
