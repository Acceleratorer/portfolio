"use client";

import Link from "next/link";
import { ArrowRight, Activity, GitBranch, Target, Trophy } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Reveal } from "@/components/motion/Reveal";
import { projectPipeline, proofStats } from "@/data/stats";

const icons = [GitBranch, Activity, Trophy, Target];

export function DashboardPreview() {
  return (
    <section className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs font-black uppercase tracking-[0.16em] text-cyan">Public Dashboard</p>
          <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.055em] sm:text-5xl">Proof-of-work command center.</h2>
          <p className="mt-4 text-slate-400">Not just a resume page — a living dashboard for skills, projects, learning, and shipping.</p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {proofStats.map((stat, index) => {
                const Icon = icons[index] ?? Target;
                return (
                  <article key={stat.label} className="panel rounded-card p-6">
                    <Icon className="text-cyan" />
                    <strong className="mt-6 block text-5xl font-black tracking-[-0.07em] text-gradient">{stat.value}+</strong>
                    <span className="mt-2 block text-sm font-bold text-slate-400">{stat.label}</span>
                  </article>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="panel h-full rounded-card p-6">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <h3 className="text-2xl font-black">Project pipeline</h3>
                  <p className="mt-2 text-sm text-slate-400">Replace with real GitHub/Kaggle metrics later.</p>
                </div>
                <Link href="/dashboard" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-black text-cyan hover:bg-white/15">
                  Open <ArrowRight size={15} />
                </Link>
              </div>
              <div className="mt-8 h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={projectPipeline}>
                    <XAxis dataKey="stage" stroke="#94a3b8" tickLine={false} axisLine={false} />
                    <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} />
                    <Tooltip contentStyle={{ background: "#0f172a", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 16 }} />
                    <Bar dataKey="count" fill="#22d3ee" radius={[12, 12, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
