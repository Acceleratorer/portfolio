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
  "bg-brand-pink text-on-dark",
  "bg-brand-teal text-on-dark",
  "bg-brand-lavender text-ink",
  "bg-brand-peach text-ink",
];

export function DashboardPreview() {
  return (
    <section className="bg-canvas px-5 py-24 text-ink">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-coral">
            Public Dashboard
          </p>
          <h2 className="mt-4 font-display text-5xl font-medium leading-tight tracking-[-0.05em] sm:text-6xl">
            Proof-of-work command center.
          </h2>
          <p className="mt-4 text-body">
            A living dashboard for skills, projects, learning, and shipping.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {proofStats.map((stat, index) => {
                const Icon = icons[index] ?? Target;
                return (
                  <article
                    key={stat.label}
                    className={`rounded-feature p-6 ${
                      statThemes[index % statThemes.length]
                    }`}
                  >
                    <Icon />
                    <strong className="mt-6 block font-display text-5xl font-medium tracking-[-0.05em]">
                      {stat.value}+
                    </strong>
                    <span className="mt-2 block text-sm font-medium opacity-80">
                      {stat.label}
                    </span>
                  </article>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="h-full rounded-feature border border-hairline bg-surface-card p-6">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <h3 className="font-display text-3xl font-semibold tracking-[-0.04em]">
                    Project pipeline
                  </h3>
                  <p className="mt-2 text-sm text-muted">
                    Replace with real GitHub/Kaggle metrics later.
                  </p>
                </div>
                <Link
                  href="/dashboard"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-on-primary"
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
                        background: "#fffaf0",
                        border: "1px solid #e5e5e5",
                        borderRadius: 16,
                      }}
                    />
                    <Bar dataKey="count" fill="#ff4d8b" radius={[12, 12, 0, 0]} />
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
