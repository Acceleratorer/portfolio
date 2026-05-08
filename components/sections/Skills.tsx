"use client";

import { motion } from "framer-motion";
import { Brain, Code2, Database, Hammer, Server } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { skills } from "@/data/skills";
import type { Skill } from "@/types";
import { cn } from "@/lib/utils";

const filters: Array<Skill["category"] | "all"> = ["all", "frontend", "backend", "ai", "data", "tools"];

const icons = {
  frontend: Code2,
  backend: Server,
  ai: Brain,
  data: Database,
  tools: Hammer
};

export function Skills() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("all");
  const visible = filter === "all" ? skills : skills.filter((skill) => skill.category === filter);

  return (
    <section className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs font-black uppercase tracking-[0.16em] text-cyan">Skills</p>
          <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.055em] sm:text-5xl">Focused stack, colorful enough to remember.</h2>
          <p className="mt-4 text-slate-400">Typed frontend, AI/data workflows, backend foundations, and deployment habits.</p>
        </Reveal>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={cn(
                "rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-black capitalize text-slate-400 transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-white",
                filter === item && "bg-gradient-to-r from-violet to-cyan text-white"
              )}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {visible.map((skill, index) => {
            const Icon = icons[skill.category];
            return (
              <motion.article
                key={skill.name}
                layout
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.035 }}
                className="group panel rounded-card p-5 transition hover:-translate-y-2 hover:border-cyan/40"
              >
                <Icon className="text-cyan" />
                <h3 className="mt-7 text-lg font-black">{skill.name}</h3>
                <p className="mt-1 text-sm text-slate-400">{skill.note}</p>
                <div className="mt-5 h-2 rounded-full bg-white/10">
                  <div className="h-2 rounded-full bg-gradient-to-r from-violet to-cyan" style={{ width: `${skill.level}%` }} />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
