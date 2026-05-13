import Spline from "@splinetool/react-spline/next";
import { ArrowUpRight, Github, Sparkles } from "lucide-react";

const SPLINE_SCENE_URL =
  "https://prod.spline.design/Sh68HSNWpAT8yudq/scene.splinecode";

const stack = ["Python", "PyTorch", "Next.js", "MLOps"];

const terminalLines = [
  "prototype agent",
  "train signal",
  "deploy workflow",
  "document proof",
];

export default function HeroScene() {
  return (
    <section className="relative isolate overflow-hidden bg-canvas px-5 pb-16 pt-28 text-ink md:pt-32">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.95fr]">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-3 rounded-full border border-primary bg-surface-card px-4 py-2 text-xs font-black uppercase text-ink">
            <span className="h-2.5 w-2.5 rounded-full bg-brand-mint" />
            Accel.io.vn / AI command center
          </div>

          <h1 className="mt-7 max-w-3xl font-display text-6xl font-black uppercase leading-[0.9] tracking-normal text-ink md:text-7xl lg:text-[92px]">
            AI systems for useful work
          </h1>

          <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-body-strong md:text-xl">
            A hybrid portfolio and workbench for AI products, data workflows,
            MLOps practice, and web systems that actually ship.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#work"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-bold text-on-primary transition active:bg-primary-active"
            >
              Explore work
              <ArrowUpRight size={17} />
            </a>

            <a
              href="/about"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-primary bg-surface-card px-6 text-sm font-bold text-ink"
            >
              <Github size={17} /> About Tan
            </a>
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {stack.map((item) => (
              <span
                key={item}
                className="rounded-full bg-surface-card px-4 py-2 text-xs font-black uppercase text-body"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <aside
          className="relative z-10"
          aria-label="Animated portfolio scene"
        >
          <div className="overflow-hidden rounded-[28px] border border-primary bg-surface-dark p-4 text-on-dark shadow-soft">
            <div className="flex items-center gap-2 rounded-2xl bg-surface-dark-soft px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-brand-coral" />
              <span className="h-3 w-3 rounded-full bg-brand-ochre" />
              <span className="h-3 w-3 rounded-full bg-brand-mint" />
              <span className="ml-auto font-mono text-xs text-on-dark-soft">
                accel.io.vn
              </span>
            </div>

            <div className="relative mt-4 min-h-[400px] overflow-hidden rounded-[20px] bg-black sm:min-h-[470px] lg:min-h-[500px]">
              <Spline
                scene={SPLINE_SCENE_URL}
                className="absolute inset-0 h-full w-full"
              />

              <div className="pointer-events-none absolute inset-x-4 bottom-4 rounded-2xl border border-white/10 bg-surface-dark-elevated/90 p-3 backdrop-blur sm:p-4">
                <div className="mb-3 flex items-center gap-2 text-sm font-bold text-on-dark">
                  <Sparkles size={16} className="text-brand-coral" />
                  Shipping loop
                </div>
                <div className="grid gap-2 font-mono text-xs text-on-dark-soft sm:grid-cols-4">
                  {terminalLines.map((line, index) => (
                    <span
                      key={line}
                      className="animate-pulse rounded-xl bg-white/[0.08] px-3 py-2 leading-tight"
                      style={{ animationDelay: `${index * 180}ms` }}
                    >
                      <span className="text-brand-teal">$</span> {line}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
