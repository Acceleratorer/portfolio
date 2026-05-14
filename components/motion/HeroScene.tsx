import Spline from "@splinetool/react-spline/next";
import { ArrowUpRight, Github, Radio, Sparkles } from "lucide-react";

const SPLINE_SCENE_URL =
  "https://prod.spline.design/Sh68HSNWpAT8yudq/scene.splinecode";

const stack = ["Python", "PyTorch", "Next.js", "MLOps", "Docker", "GitHub"];

const terminalLines = [
  "collect signals",
  "train pipeline",
  "evaluate drift",
  "ship demo",
];

const bars = [
  { height: 34, color: "bg-brand-mint" },
  { height: 62, color: "bg-brand-teal" },
  { height: 46, color: "bg-brand-lavender" },
  { height: 76, color: "bg-brand-ochre" },
  { height: 52, color: "bg-brand-coral" },
  { height: 88, color: "bg-brand-mint" },
  { height: 58, color: "bg-brand-teal" },
  { height: 70, color: "bg-brand-lavender" },
  { height: 42, color: "bg-brand-ochre" },
  { height: 82, color: "bg-brand-coral" },
  { height: 50, color: "bg-brand-mint" },
  { height: 66, color: "bg-brand-teal" },
];

export default function HeroScene() {
  return (
    <section className="relative isolate overflow-hidden bg-technical-grid px-5 pb-16 pt-28 text-ink md:pb-24 md:pt-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-surface-card px-4 py-2 text-xs font-medium uppercase text-body">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-brand-mint" />
            Accelra agentic build system
          </div>

          <h1 className="mt-8 font-display text-6xl font-semibold uppercase leading-[0.92] tracking-normal text-ink md:text-7xl lg:text-[94px]">
            I build AI systems that ship.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-body md:text-lg">
            A dark technical portfolio for AI products, data workflows, MLOps
            practice, and web systems - designed like infrastructure, written
            like proof.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#work"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-on-primary transition active:bg-primary-active"
            >
              Explore system
              <ArrowUpRight size={17} />
            </a>

            <a
              href="/about"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-white/10 bg-surface-card px-5 text-sm font-semibold text-ink"
            >
              <Github size={17} /> About Tan
            </a>
          </div>

          <div className="mx-auto mt-9 flex h-28 max-w-3xl items-end justify-center gap-2 rounded-2xl border border-white/10 bg-surface-card/80 px-5 py-4">
            {bars.map((bar, index) => (
              <span
                key={`${bar.color}-${index}`}
                className={`equalizer-bar w-full max-w-7 rounded-sm ${bar.color}`}
                style={{
                  height: `${bar.height}px`,
                  animationDelay: `${index * 110}ms`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <aside aria-label="Animated portfolio scene">
            <div className="scanline h-full overflow-hidden rounded-2xl border border-white/10 bg-surface-card p-3 text-on-dark">
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-surface-dark-soft px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-brand-coral" />
                <span className="h-2.5 w-2.5 rounded-full bg-brand-ochre" />
                <span className="h-2.5 w-2.5 rounded-full bg-brand-mint" />
                <span className="ml-auto font-mono text-xs text-muted">
                  accel.io.vn
                </span>
              </div>

              <div className="relative mt-3 h-[390px] overflow-hidden rounded-[22px] border border-white/10 bg-black shadow-[inset_0_-90px_120px_rgba(114,247,178,0.10)] sm:h-[460px]">
                <div className="absolute inset-0 overflow-hidden rounded-[20px]">
                  <Spline
                    scene={SPLINE_SCENE_URL}
                    className="absolute inset-0 h-full w-full"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-[22px] ring-1 ring-white/10" />
              </div>
            </div>
          </aside>

          <div className="grid gap-5">
            <div className="rounded-2xl border border-white/10 bg-surface-card p-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-ink">
                <Sparkles size={16} className="text-brand-mint" />
                Deployment loop
              </div>
              <div className="mt-4 grid gap-2 font-mono text-xs text-body">
                {terminalLines.map((line, index) => (
                  <span
                    key={line}
                    className="rounded-lg border border-white/10 bg-surface-dark-elevated px-3 py-2"
                  >
                    <span className="text-brand-mint">$</span> {line}
                    <span className="float-right text-muted">
                      0{index + 1}
                    </span>
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-surface-card p-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-ink">
                <Radio size={16} className="text-brand-teal" />
                Connected stack
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-surface-dark-elevated px-3 py-1.5 text-xs font-medium text-body"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-surface-card p-5">
              <pre className="overflow-x-auto font-mono text-xs leading-6 text-body">
                <code>{`agent:
  owner: tan-le
  focus: [ai, data, mlops, web]
  rule: "prototype -> evaluate -> ship"
  output: public proof`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
