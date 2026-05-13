import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const projectThemes = [
  {
    card: "bg-brand-lavender text-ink",
    body: "text-body",
    badge: "bg-primary text-on-primary",
    tag: "bg-white/35 text-ink",
    link: "text-ink",
  },
  {
    card: "bg-brand-peach text-ink",
    body: "text-body",
    badge: "bg-primary text-on-primary",
    tag: "bg-white/35 text-ink",
    link: "text-ink",
  },
  {
    card: "bg-brand-teal text-on-dark",
    body: "text-on-dark-soft",
    badge: "bg-white text-ink",
    tag: "bg-white/15 text-on-dark",
    link: "text-on-dark",
  },
  {
    card: "bg-brand-ochre text-ink",
    body: "text-body",
    badge: "bg-primary text-on-primary",
    tag: "bg-white/35 text-ink",
    link: "text-ink",
  },
];

export function Projects() {
  return (
    <section id="projects" className="bg-surface-soft px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-coral">
            Projects
          </p>
          <h2 className="mt-4 font-display text-5xl font-medium leading-tight tracking-[-0.05em] text-ink sm:text-6xl">
            Projects that tell the story.
          </h2>
          <p className="mt-4 text-body">
            AI/Data, computer vision, automation, and portfolio engineering
            proof-of-work.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {projects.slice(0, 4).map((project, index) => {
            const theme = projectThemes[index % projectThemes.length];

            return (
              <Reveal key={project.slug} delay={index * 0.05}>
                <article
                  className={cn(
                    "overflow-hidden rounded-feature border border-hairline",
                    theme.card,
                  )}
                >
                  <Image
                    src={project.cover}
                    alt={`${project.title} preview`}
                    width={900}
                    height={520}
                    className="h-64 w-full border-b border-hairline bg-surface-card object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-display text-3xl font-semibold tracking-[-0.04em]">
                        {project.title}
                      </h3>
                      <span
                        className={cn(
                          "rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em]",
                          theme.badge,
                        )}
                      >
                        {project.status}
                      </span>
                    </div>
                    <p className={cn("mt-3", theme.body)}>
                      {project.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className={cn(
                            "rounded-full px-3 py-1 text-xs font-medium",
                            theme.tag,
                          )}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/projects/${project.slug}`}
                      className={cn(
                        "mt-6 inline-flex items-center gap-2 font-semibold",
                        theme.link,
                      )}
                    >
                      Read case study <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
