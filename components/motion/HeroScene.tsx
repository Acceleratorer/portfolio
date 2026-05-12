import Spline from "@splinetool/react-spline/next";
import { ArrowUpRight, Github, Sparkles } from "lucide-react";

const SPLINE_SCENE_URL =
  "https://prod.spline.design/2N9EIKqtUrQy2vvp/scene.splinecode";

const stack = ["Python", "PyTorch", "Next.js", "MLOps"];

const terminalLines = [
  "load dataset",
  "train model",
  "evaluate signal",
  "ship portfolio",
];

export default function HeroScene() {
  return (
    <section className="relative isolate overflow-hidden bg-canvas px-5 pb-10 pt-28 text-ink md:pb-14 md:pt-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="relative z-10 animate-float">
          <div className="inline-flex items-center gap-3 rounded-full border border-hairline bg-surface-card px-4 py-2 text-sm font-medium text-body">
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
            AI Engineer / Data Scientist / Builder
          </div>

          <h1 className="mt-7 max-w-2xl font-display text-6xl font-normal leading-[1.02] tracking-[-0.04em] text-ink md:text-7xl lg:text-8xl">
            Tan Le
          </h1>

          <p className="mt-5 max-w-2xl font-display text-3xl font-normal leading-tight tracking-[-0.02em] text-body-strong md:text-4xl">
            Accelra portfolio for intelligent systems, data products, and
            production-minded experiments.
          </p>

          <p className="mt-6 max-w-xl text-base leading-8 text-body md:text-lg">
            I build across machine learning, analytics, full-stack interfaces,
            and deployment workflows with a calm focus on useful shipped work.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-5 text-sm font-medium text-on-primary transition active:bg-primary-active"
            >
              View projects
              <ArrowUpRight size={17} />
            </a>

            <a
              href="https://github.com/Acceleratorer"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-lg border border-hairline bg-canvas px-5 text-sm font-medium text-ink"
            >
              <Github size={17} />
              GitHub
            </a>
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {stack.map((item) => (
              <span
                key={item}
                className="rounded-full bg-surface-card px-3 py-1.5 text-sm font-medium text-body"
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
          <div className="overflow-hidden rounded-2xl bg-surface-dark p-4 text-on-dark shadow-soft">
            <div className="flex items-center gap-2 rounded-xl bg-surface-dark-elevated px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-primary" />
              <span className="h-3 w-3 rounded-full bg-accent-amber" />
              <span className="h-3 w-3 rounded-full bg-accent-teal" />
              <span className="ml-auto font-mono text-xs text-on-dark-soft">
                accel.io.vn
              </span>
            </div>

            <div className="relative mt-4 min-h-[300px] overflow-hidden rounded-xl bg-surface-dark-soft sm:min-h-[360px]">
              <Spline
                scene={SPLINE_SCENE_URL}
                className="absolute inset-0 h-full w-full"
              />

              <div className="pointer-events-none absolute inset-x-4 bottom-4 rounded-xl border border-white/10 bg-surface-dark/85 p-4 backdrop-blur">
                <div className="mb-3 flex items-center gap-2 text-sm font-medium text-on-dark">
                  <Sparkles size={16} className="text-primary" />
                  Shipping loop
                </div>
                <div className="grid gap-2 font-mono text-xs text-on-dark-soft sm:grid-cols-4">
                  {terminalLines.map((line, index) => (
                    <span
                      key={line}
                      className="animate-pulse rounded-lg bg-surface-dark-elevated px-3 py-2"
                      style={{ animationDelay: `${index * 180}ms` }}
                    >
                      <span className="text-accent-teal">$</span> {line}
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
