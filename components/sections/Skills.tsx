"use client";

import { motion } from "framer-motion";
import { Brain, Code2, Database, Hammer, Server } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { skills } from "@/data/skills";
import type { Skill } from "@/types";
import { cn } from "@/lib/utils";

const filters: Array<Skill["category"] | "all"> = [
  "all",
  "frontend",
  "backend",
  "ai",
  "data",
  "tools",
];

const icons = {
  frontend: Code2,
  backend: Server,
  ai: Brain,
  data: Database,
  tools: Hammer,
};

const cardThemes = [
  {
    card: "bg-surface-card text-ink",
    body: "text-body",
    meter: "bg-primary-disabled",
    fill: "bg-brand-mint",
  },
  {
    card: "bg-surface-card text-ink",
    body: "text-body",
    meter: "bg-primary-disabled",
    fill: "bg-brand-ochre",
  },
  {
    card: "bg-surface-card text-ink",
    body: "text-body",
    meter: "bg-primary-disabled",
    fill: "bg-brand-lavender",
  },
  {
    card: "bg-surface-card text-ink",
    body: "text-body",
    meter: "bg-primary-disabled",
    fill: "bg-brand-peach",
  },
  {
    card: "bg-surface-card text-ink",
    body: "text-body",
    meter: "bg-primary-disabled",
    fill: "bg-brand-teal",
  },
  {
    card: "bg-surface-card text-ink",
    body: "text-muted",
    meter: "bg-primary-disabled",
    fill: "bg-primary",
  },
];

export function Skills() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("all");
  const visible =
    filter === "all"
      ? skills
      : skills.filter((skill) => skill.category === filter);

  return (
    <section id="skills" className="bg-dot-grid px-5 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-medium uppercase text-brand-mint">
            Feature matrix
          </p>
          <h2 className="mt-4 font-display text-5xl font-semibold uppercase leading-none tracking-normal text-ink sm:text-6xl">
            Run a better learning system with data.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-body">
            Typed frontend, AI/data workflows, backend foundations, and
            deployment habits.
          </p>
        </Reveal>

        <div className="mt-9 flex flex-wrap gap-3">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={cn(
                "rounded-full border border-white/10 px-4 py-2 text-sm font-medium capitalize text-muted transition",
                filter === item
                  ? "bg-primary text-on-primary"
                  : "bg-surface-card hover:border-primary hover:text-ink",
              )}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {visible.map((skill, index) => {
            const Icon = icons[skill.category];
            const theme = cardThemes[index % cardThemes.length];

            return (
              <motion.article
                key={skill.name}
                layout
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.035 }}
                className={cn(
                  "min-h-52 rounded-[22px] border border-hairline p-6",
                  "border-white/10",
                  theme.card,
                )}
              >
                <Icon />
                <h3 className="mt-7 text-lg font-semibold uppercase">
                  {skill.name}
                </h3>
                <p className={cn("mt-1 text-sm", theme.body)}>{skill.note}</p>
                <div className={cn("mt-5 h-2 rounded-full", theme.meter)}>
                  <div
                    className={cn("h-2 rounded-full", theme.fill)}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
