import { Reveal } from "@/components/motion/Reveal";

const pills = [
  "AI prototypes",
  "Data workflows",
  "MLOps habits",
  "Dashboard UI",
  "Automation tools",
  "Case-study docs",
];

const promises = [
  {
    title: "AI.",
    text: "Models, agents, and experiments framed around measurable usefulness.",
  },
  {
    title: "DATA.",
    text: "Pipelines, notebooks, analytics, and proof that can be inspected.",
  },
  {
    title: "SHIPPED.",
    text: "Interfaces, docs, deployment notes, and public project trails.",
  },
];

export function About() {
  return (
    <section
      id="work"
      className="rounded-t-[34px] bg-surface-dark px-5 py-20 text-on-dark md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-5 md:grid-cols-3">
          {promises.map((item) => (
            <Reveal key={item.title}>
              <article className="min-h-44 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <h2 className="font-display text-4xl font-black uppercase leading-none tracking-normal">
                  {item.title}
                </h2>
                <p className="mt-5 max-w-sm text-sm leading-6 text-on-dark-soft">
                  {item.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <Reveal>
            <p className="text-xs font-black uppercase text-brand-mint">
              Work system
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-5xl font-black uppercase leading-none tracking-normal sm:text-6xl">
              We are turning learning into shipped proof.
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="text-lg leading-8 text-on-dark-soft">
              <p>
                Accelra is the public surface for Tan Le&apos;s technical work:
                AI demos, data products, automation, and Next.js interfaces
                built with a portfolio-first habit.
              </p>
              <p className="mt-5">
                The site behaves like a product website on the homepage, while
                the personal portfolio details live in the dedicated About
                route.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              {pills.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-bold text-on-dark"
                >
                  {pill}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
