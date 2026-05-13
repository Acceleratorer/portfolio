import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Brain,
  Code2,
  Database,
  Github,
  GraduationCap,
  Server,
} from "lucide-react";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import { proofStats } from "@/data/stats";
import { siteConfig, socialLinks } from "@/config/site";

const focusAreas = [
  {
    title: "AI Engineer",
    text: "Model experiments, agent workflows, computer vision, and evaluation-minded prototypes.",
    icon: Brain,
  },
  {
    title: "Data Scientist",
    text: "EDA, feature thinking, notebooks, analytics, and clean storytelling from messy inputs.",
    icon: Database,
  },
  {
    title: "Builder",
    text: "Next.js interfaces, backend foundations, automation scripts, and deployment notes.",
    icon: Code2,
  },
];

export default function AboutPage() {
  const highlightedProjects = projects.slice(0, 3);
  const topSkills = skills.slice(0, 8);

  return (
    <main className="bg-canvas pt-28 text-ink">
      <section className="px-5 pb-16 md:pb-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-primary bg-surface-card px-4 py-2 text-xs font-black uppercase">
              <Image
                src="/icons/logo.png"
                alt="Tan Le logo"
                width={28}
                height={28}
                className="h-7 w-7 rounded-full object-cover"
                priority
              />
              Portfolio / About
            </div>

            <h1 className="mt-7 max-w-4xl font-display text-6xl font-black uppercase leading-[0.9] tracking-normal md:text-7xl lg:text-[88px]">
              Tan Le builds AI, data, and web systems.
            </h1>
          </div>

          <div className="rounded-[28px] border border-hairline bg-surface-card p-6">
            <div className="flex items-center gap-3">
              <GraduationCap className="text-brand-coral" />
              <p className="text-sm font-black uppercase text-muted">
                Computer Science Student at UIT
              </p>
            </div>
            <p className="mt-5 text-lg leading-8 text-body">
              {siteConfig.description} The work here is shaped around public
              proof: readable case studies, visible experiments, useful
              interfaces, and a steady build loop.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-5 text-sm font-bold text-on-primary"
              >
                View projects <ArrowUpRight size={17} />
              </Link>
              <a
                href="https://github.com/Acceleratorer"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-primary bg-canvas px-5 text-sm font-bold text-ink"
              >
                <Github size={17} /> GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-t-[34px] bg-surface-dark px-5 py-20 text-on-dark">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-3">
            {focusAreas.map((area) => {
              const Icon = area.icon;
              return (
                <article
                  key={area.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <Icon className="text-brand-mint" />
                  <h2 className="mt-8 font-display text-3xl font-black uppercase leading-none tracking-normal">
                    {area.title}
                  </h2>
                  <p className="mt-4 text-sm leading-6 text-on-dark-soft">
                    {area.text}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-4">
            {proofStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl bg-surface-card p-6 text-ink"
              >
                <strong className="font-display text-5xl font-black tracking-normal">
                  {stat.value}+
                </strong>
                <p className="mt-3 text-sm font-bold text-body">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-soft px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-black uppercase text-muted">
              Portfolio stack
            </p>
            <h2 className="mt-4 font-display text-5xl font-black uppercase leading-none tracking-normal">
              Practical tools over vague claims.
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {topSkills.map((skill) => (
              <div
                key={skill.name}
                className="rounded-2xl border border-hairline bg-surface-card p-4"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-black uppercase">{skill.name}</h3>
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold text-on-primary">
                    {skill.category}
                  </span>
                </div>
                <p className="mt-2 text-sm text-body">{skill.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-canvas px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs font-black uppercase text-muted">
                Selected proof
              </p>
              <h2 className="mt-4 font-display text-5xl font-black uppercase leading-none tracking-normal">
                Case studies in progress.
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-primary bg-surface-card px-5 text-sm font-bold text-ink"
            >
              Project library <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {highlightedProjects.map((project) => (
              <article
                key={project.slug}
                className="rounded-[26px] border border-hairline bg-surface-card p-6"
              >
                <Server className="text-brand-coral" />
                <h3 className="mt-8 font-display text-3xl font-black uppercase leading-none tracking-normal">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-body">
                  {project.description}
                </p>
                <Link
                  href={`/projects/${project.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase text-ink"
                >
                  Read case study <ArrowUpRight size={15} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-soft px-5 py-20">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 rounded-[28px] bg-surface-card p-6">
          <div>
            <p className="text-xs font-black uppercase text-muted">Links</p>
            <h2 className="mt-2 font-display text-4xl font-black uppercase leading-none tracking-normal">
              Follow the work trail.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-4 text-sm font-bold text-on-primary"
              >
                {link.label} <ArrowUpRight size={15} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
