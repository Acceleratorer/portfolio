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

export function DashboardPreview() {
  return (
    <section className="bg-surface-dark px-5 py-24 text-on-dark">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
            Public Dashboard
          </p>
          <h2 className="mt-4 font-display text-5xl font-normal leading-tight tracking-[-0.03em] sm:text-6xl">
            Proof-of-work command center.
          </h2>
          <p className="mt-4 text-on-dark-soft">
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
                    className="rounded-card bg-surface-dark-elevated p-6"
                  >
                    <Icon className="text-primary" />
                    <strong className="mt-6 block font-display text-5xl font-normal tracking-[-0.04em] text-on-dark">
                      {stat.value}+
                    </strong>
                    <span className="mt-2 block text-sm font-medium text-on-dark-soft">
                      {stat.label}
                    </span>
                  </article>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="h-full rounded-card bg-surface-dark-elevated p-6">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <h3 className="font-display text-3xl font-normal">
                    Project pipeline
                  </h3>
                  <p className="mt-2 text-sm text-on-dark-soft">
                    Replace with real GitHub/Kaggle metrics later.
                  </p>
                </div>
                <Link
                  href="/dashboard"
                  className="inline-flex items-center gap-2 rounded-lg bg-surface-dark-soft px-4 py-2 text-sm font-medium text-on-dark"
                >
                  Open <ArrowRight size={15} />
                </Link>
              </div>
              <div className="mt-8 h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={projectPipeline}>
                    <XAxis
                      dataKey="stage"
                      stroke="#a09d96"
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis
                      stroke="#a09d96"
                      tickLine={false}
                      axisLine={false}
                    />
                    <Tooltip
                      contentStyle={{
                        background: "#181715",
                        border: "1px solid rgba(250,249,245,0.12)",
                        borderRadius: 12,
                      }}
                    />
                    <Bar dataKey="count" fill="#cc785c" radius={[8, 8, 0, 0]} />
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
