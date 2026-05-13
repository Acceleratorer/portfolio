"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight, Download, Github, Linkedin, Sparkles } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

const NeuralOrb = dynamic(() => import("@/components/three/NeuralOrb"), {
  ssr: false,
  loading: () => (
    <div className="h-[420px] w-full animate-pulse rounded-[2rem] border border-white/10 bg-white/5" />
  ),
});

const stack = [
  "Next.js",
  "TypeScript",
  "Tailwind",
  "Motion",
  "R3F",
  "Python",
  "PyTorch",
  "SQL",
];

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-surface-dark px-5 pb-16 pt-32 text-on-dark">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <Reveal>
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-mono text-xs font-bold uppercase tracking-normal text-brand-mint">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-brand-mint" />
              Computer Science @ UIT - AI/Data intern ready
            </div>

            <h1 className="mt-8 max-w-4xl text-6xl font-black uppercase leading-none tracking-normal md:text-7xl lg:text-8xl">
              I&apos;m Tan Le. I build useful AI systems.
            </h1>

            <p className="mt-6 max-w-2xl font-mono text-lg font-semibold text-brand-mint">
              aka Accelra - AI Engineer - Data Scientist - MLOps Learner
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-on-dark-soft sm:text-lg">
              I work across machine learning, data pipelines, MLOps, web
              engineering, and competitive programming - turning experiments
              into portfolio-ready products.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-brand-mint px-6 py-3 text-sm font-black text-ink transition hover:-translate-y-1"
              >
                View projects
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <a
                href="/cv/Tan-Le-CV.txt"
                download
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-black text-on-dark transition hover:-translate-y-1 hover:bg-white/10"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="https://github.com/Acceleratorer"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-on-dark-soft transition hover:bg-white/10 hover:text-on-dark"
              >
                <Github size={17} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/tan-le-accel77/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-on-dark-soft transition hover:bg-white/10 hover:text-on-dark"
              >
                <Linkedin size={17} />
                LinkedIn
              </a>

              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-on-dark-soft">
                <Sparkles size={17} />
                Build - Learn - Ship
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <aside className="relative">
            <div className="absolute -inset-8 -z-10 opacity-80">
              <NeuralOrb />
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-black/30 backdrop-blur-2xl">
              <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
                <span className="ml-auto font-mono text-xs font-bold text-on-dark-soft">
                  accel.io.vn
                </span>
              </div>

              <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-black/30 p-5">
                <pre className="overflow-x-auto font-mono text-xs leading-6 text-on-dark-soft sm:text-sm">
                  <code>{`{
  "name": "Tan Le",
  "alias": "Accelra",
  "role": "Computer Science Student",
  "focus": ["AI", "Data", "MLOps"],
  "stack": ["Next.js", "Python", "SQL"],
  "mode": "build - learn - ship"
}`}</code>
                </pre>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs font-bold text-on-dark-soft"
                >
                  {item}
                </span>
              ))}
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
