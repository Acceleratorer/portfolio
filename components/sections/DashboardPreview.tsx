"use client";

import Link from "next/link";
import { ArrowRight, Activity, GitBranch, Target, Trophy } from "lucide-react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Reveal } from "@/components/motion/Reveal";
import { projectPipeline, proofStats } from "@/data/stats";

const icons = [GitBranch, Activity, Trophy, Target];
const statThemes = [
  "bg-brand-mint text-ink",
  "bg-brand-ochre text-ink",
  "bg-brand-lavender text-ink",
  "bg-brand-peach text-ink",
];

export function DashboardPreview() {
  return (
    <section className="bg-technical-grid px-5 py-20 text-on-dark md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
        <Reveal>
          <p className="text-xs font-black uppercase text-brand-mint">
            Introducing Accelra OS
          </p>
          <h2 className="mt-4 max-w-xl font-display text-5xl font-semibold uppercase leading-none tracking-normal sm:text-6xl">
            A public command center for the build loop.
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-8 text-on-dark-soft">
            Metrics, project pipeline, and learning evidence presented like a
            product dashboard instead of a static resume block.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {proofStats.map((stat, index) => {
              const Icon = icons[index] ?? Target;
              return (
                <article
                  key={stat.label}
                  className={`rounded-xl p-6 ${
                    statThemes[index % statThemes.length]
                  }`}
                >
                  <Icon />
                  <strong className="mt-6 block font-display text-5xl font-medium tracking-normal">
                    {stat.value}+
                  </strong>
                  <span className="mt-2 block text-sm font-bold opacity-80">
                    {stat.label}
                  </span>
                </article>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="scanline rounded-2xl border border-white/10 bg-surface-card p-4">
            <div className="rounded-xl bg-surface-dark-soft p-5 text-ink">
              <div className="flex flex-wrap items-start justify-between gap-5">
                <div>
                  <h3 className="font-display text-3xl font-semibold uppercase tracking-normal">
                    Project pipeline
                  </h3>
                  <p className="mt-2 text-sm text-muted">
                    Replace with real GitHub/Kaggle metrics as the proof layer
                    grows.
                  </p>
                </div>
                <Link
                  href="/dashboard"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-on-primary"
                >
                  Open <ArrowRight size={15} />
                </Link>
              </div>
              <div className="mt-8 h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={projectPipeline}>
                    <XAxis
                      dataKey="stage"
                      stroke="#6a6a6a"
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis
                      stroke="#6a6a6a"
                      tickLine={false}
                      axisLine={false}
                    />
                    <Tooltip
                      contentStyle={{
                        background: "#fffffa",
                        border: "1px solid #cacac2",
                        borderRadius: 20,
                      }}
                    />
                    <Bar dataKey="count" fill="#bbff66" radius={[18, 18, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
