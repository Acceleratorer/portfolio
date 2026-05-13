import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const projectThemes = [
  {
    card: "bg-brand-mint text-ink",
    body: "text-body",
    badge: "bg-primary text-on-primary",
    tag: "bg-white/50 text-ink",
    link: "text-ink",
  },
  {
    card: "bg-brand-lavender text-ink",
    body: "text-body",
    badge: "bg-primary text-on-primary",
    tag: "bg-white/50 text-ink",
    link: "text-ink",
  },
  {
    card: "bg-brand-peach text-ink",
    body: "text-body",
    badge: "bg-primary text-on-primary",
    tag: "bg-white/50 text-ink",
    link: "text-ink",
  },
  {
    card: "bg-brand-ochre text-ink",
    body: "text-body",
    badge: "bg-primary text-on-primary",
    tag: "bg-white/50 text-ink",
    link: "text-ink",
  },
];

export function Projects() {
  return (
    <section id="projects" className="bg-surface-soft px-5 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-black uppercase text-muted">
            Use case library
          </p>
          <h2 className="mt-4 font-display text-5xl font-black uppercase leading-none tracking-normal text-ink sm:text-6xl">
            Explore projects that prove the work.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-body">
            AI/Data, computer vision, automation, and portfolio engineering
            proof-of-work.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-4">
          {projects.slice(0, 4).map((project, index) => {
            const theme = projectThemes[index % projectThemes.length];

            return (
              <Reveal key={project.slug} delay={index * 0.05}>
                <article
                  className={cn(
                    "flex h-full flex-col overflow-hidden rounded-[26px] border border-hairline",
                    theme.card,
                  )}
                >
                  <Image
                    src={project.cover}
                    alt={`${project.title} preview`}
                    width={900}
                    height={520}
                    className="h-44 w-full border-b border-black/10 bg-surface-card object-cover"
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-display text-2xl font-black uppercase leading-none tracking-normal">
                        {project.title}
                      </h3>
                      <span
                        className={cn(
                          "rounded-full px-3 py-1 text-xs font-black uppercase",
                          theme.badge,
                        )}
                      >
                        {project.status}
                      </span>
                    </div>
                    <p className={cn("mt-4 text-sm leading-6", theme.body)}>
                      {project.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className={cn(
                            "rounded-full px-3 py-1 text-xs font-bold",
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
                        "mt-auto inline-flex items-center gap-2 pt-6 text-sm font-black uppercase",
                        theme.link,
                      )}
                    >
                      Read more <ArrowUpRight size={16} />
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
