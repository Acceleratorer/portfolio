import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="bg-surface-soft px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
            Projects
          </p>
          <h2 className="mt-4 font-display text-5xl font-normal leading-tight tracking-[-0.03em] text-ink sm:text-6xl">
            Projects that tell the story.
          </h2>
          <p className="mt-4 text-body">
            AI/Data, computer vision, automation, and portfolio engineering
            proof-of-work.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {projects.slice(0, 4).map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.05}>
              <article className="overflow-hidden rounded-card border border-hairline bg-canvas">
                <Image
                  src={project.cover}
                  alt={`${project.title} preview`}
                  width={900}
                  height={520}
                  className="h-64 w-full border-b border-hairline bg-surface-card object-cover"
                />
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-3xl font-normal tracking-[-0.02em] text-ink">
                      {project.title}
                    </h3>
                    <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium uppercase tracking-[0.08em] text-on-primary">
                      {project.status}
                    </span>
                  </div>
                  <p className="mt-3 text-body">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-surface-card px-3 py-1 text-xs font-medium text-body"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="mt-6 inline-flex items-center gap-2 font-medium text-primary"
                  >
                    Read case study <ArrowUpRight size={16} />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
