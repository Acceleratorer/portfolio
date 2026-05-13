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
    card: "bg-brand-pink text-on-dark",
    body: "text-white/85",
    meter: "bg-white/30",
    fill: "bg-white",
  },
  {
    card: "bg-brand-teal text-on-dark",
    body: "text-on-dark-soft",
    meter: "bg-white/25",
    fill: "bg-white",
  },
  {
    card: "bg-brand-lavender text-ink",
    body: "text-body",
    meter: "bg-primary/15",
    fill: "bg-primary",
  },
  {
    card: "bg-brand-peach text-ink",
    body: "text-body",
    meter: "bg-primary/15",
    fill: "bg-primary",
  },
  {
    card: "bg-brand-ochre text-ink",
    body: "text-body",
    meter: "bg-primary/15",
    fill: "bg-primary",
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
    <section id="skills" className="bg-canvas px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-coral">
            Skills
          </p>
          <h2 className="mt-4 font-display text-5xl font-medium leading-tight tracking-[-0.05em] text-ink sm:text-6xl">
            Focused stack, clear enough to scan.
          </h2>
          <p className="mt-4 text-body">
            Typed frontend, AI/data workflows, backend foundations, and
            deployment habits.
          </p>
        </Reveal>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-medium capitalize text-muted transition",
                filter === item
                  ? "bg-surface-card text-ink"
                  : "hover:bg-surface-card hover:text-ink",
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
                className={cn("rounded-feature p-6", theme.card)}
              >
                <Icon />
                <h3 className="mt-7 text-lg font-semibold">
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
