import { ArrowUpRight, Database, Github, Layers3, Zap } from "lucide-react";

const trustedStack = [
  "Python",
  "PyTorch",
  "TensorFlow",
  "PostgreSQL",
  "Docker",
  "GitHub",
  "Next.js",
  "Vercel",
];

const products = [
  {
    title: "Accelra for AI",
    text: "A portfolio memory layer for agents, experiments, model notes, and evaluation traces.",
    items: ["Agent memory", "Vector search", "Semantic cache"],
    icon: Zap,
  },
  {
    title: "Project Cache",
    text: "Keep shipped work, repo signals, screenshots, and lessons close to the surface.",
    items: ["Case studies", "Metrics", "Build logs"],
    icon: Database,
  },
  {
    title: "Insight Console",
    text: "Inspect learning velocity, project status, and technical proof from one clean UI.",
    items: ["Dashboard", "Docs", "Deployments"],
    icon: Layers3,
  },
];

const gridCells = Array.from({ length: 36 }, (_, index) => index);

export default function HeroScene() {
  return (
    <section className="relative isolate overflow-hidden bg-canvas px-5 pb-16 pt-28 text-ink md:pb-24 md:pt-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,68,56,0.18),transparent_32rem)]" />
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-surface-card px-4 py-2 text-xs font-medium uppercase text-body">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-primary" />
            Accelra for AI
          </div>

          <h1 className="mt-8 font-display text-6xl font-semibold uppercase leading-[0.92] tracking-normal text-ink md:text-7xl lg:text-[92px]">
            The real-time build engine for AI systems
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-body md:text-lg">
            Retrieve the right project context, ship fast experiments, and turn
            AI/data work into proof that recruiters, collaborators, and users
            can inspect.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#projects"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-on-primary transition active:bg-primary-active"
            >
              Start building
              <ArrowUpRight size={17} />
            </a>

            <a
              href="https://github.com/Acceleratorer"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-white/10 bg-surface-card px-5 text-sm font-semibold text-ink"
            >
              <Github size={17} /> View GitHub
            </a>
          </div>

          <p className="mt-12 text-sm font-medium text-muted">
            Works with your technical stack
          </p>
          <div className="mx-auto mt-4 flex max-w-4xl flex-wrap justify-center gap-2">
            {trustedStack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-surface-card px-4 py-2 text-xs font-medium text-body"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-5 lg:grid-cols-[1fr_1.15fr]">
          <div className="rounded-2xl border border-white/10 bg-surface-card p-5">
            <div className="grid grid-cols-6 gap-2">
              {gridCells.map((cell) => (
                <span
                  key={cell}
                  className="aspect-square rounded-md border border-white/10 bg-surface-dark-soft"
                >
                  <span
                    className="block h-full w-full rounded-md bg-primary/80 opacity-80"
                    style={{
                      transform: `scale(${0.36 + ((cell * 7) % 9) / 14})`,
                    }}
                  />
                </span>
              ))}
            </div>
            <div className="mt-6 border-t border-white/10 pt-5">
              <p className="text-xs font-medium uppercase text-muted">
                Live context
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold uppercase leading-none tracking-normal">
                Think fast. Build faster.
              </h2>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <article
                  key={product.title}
                  className="rounded-2xl border border-white/10 bg-surface-card p-5"
                >
                  <Icon className="text-primary" />
                  <h2 className="mt-6 font-display text-2xl font-semibold uppercase leading-none tracking-normal">
                    {product.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-body">
                    {product.text}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {product.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-surface-dark-soft px-3 py-1 text-xs font-medium text-muted"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
