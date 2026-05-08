"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Sparkles,
} from "lucide-react";
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
    <section className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-32">
      <div className="absolute left-[-8rem] top-24 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="absolute right-[-8rem] top-48 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute bottom-10 left-1/3 h-72 w-72 rounded-full bg-orange-400/10 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <Reveal>
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.9)]" />
              Computer Science @ UIT · AI/Data intern ready
            </div>

            <h1 className="mt-8 max-w-4xl text-[clamp(3.2rem,8vw,6.8rem)] font-black leading-[0.92] tracking-[-0.075em] text-white">
              I’m{" "}
              <span className="bg-gradient-to-r from-white via-violet-300 to-cyan-300 bg-clip-text text-transparent">
                Tan Le
              </span>
              <br />
              I build AI systems that feel fast, useful, and human.
            </h1>

            <p className="mt-6 max-w-2xl font-mono text-lg font-semibold text-cyan-300">
              aka Accelra · AI Engineer · Data Scientist · MLOps Learner
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              I work across machine learning, data pipelines, MLOps, web
              engineering, and competitive programming — turning experiments
              into portfolio-ready products.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 text-sm font-black text-white shadow-xl shadow-violet-500/20 transition hover:-translate-y-1 hover:shadow-cyan-400/20"
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
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-white/10"
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
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                <Github size={17} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/tan-le-accel77/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                <Linkedin size={17} />
                LinkedIn
              </a>

              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-slate-300">
                <Sparkles size={17} />
                Build → Learn → Ship
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
                <span className="ml-auto font-mono text-xs font-bold text-slate-400">
                  accelra.dev
                </span>
              </div>

              <div className="mx-auto mt-8 max-w-[330px] rounded-[2.1rem] bg-gradient-to-br from-violet-400/70 via-cyan-300/50 to-orange-300/60 p-[2px] shadow-[0_24px_80px_rgba(124,58,237,0.35)]">
                <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-slate-950">
                  <Image
                    src="/icons/avatar.jpg"
                    alt="Tan Le avatar"
                    fill
                    priority
                    sizes="(max-width: 768px) 80vw, 330px"
                    className="object-cover object-center brightness-[0.98] contrast-[1.08] saturate-[1.03]"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-violet-500/10 via-transparent to-cyan-300/10" />
                </div>
              </div>

              <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-black/30 p-5">
                <pre className="overflow-x-auto font-mono text-xs leading-6 text-slate-300 sm:text-sm">
                  <code>{`{
  "name": "Tan Le",
  "alias": "Accelra",
  "role": "Computer Science Student",
  "focus": ["AI", "Data", "MLOps"],
  "stack": ["Next.js", "Python", "SQL"],
  "mode": "build → learn → ship"
}`}</code>
                </pre>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs font-bold text-slate-300"
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