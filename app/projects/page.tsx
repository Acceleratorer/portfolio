import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="px-5 pb-24 pt-32">
      <section className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-coral">Projects</p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl font-medium leading-none tracking-[-0.055em] sm:text-7xl">Case studies and shipped experiments.</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-body">Each project should eventually include problem, solution, architecture, tradeoffs, results, and what I learned.</p>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <article key={project.slug} className="overflow-hidden rounded-feature border border-hairline bg-surface-card transition hover:-translate-y-2">
              <Image src={project.cover} alt={project.title} width={900} height={520} className="h-64 w-full border-b border-hairline bg-canvas object-cover" />
              <div className="p-6">
                <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase text-on-primary">{project.status}</span>
                <h2 className="mt-4 font-display text-2xl font-semibold tracking-[-0.04em]">{project.title}</h2>
                <p className="mt-3 text-body">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => <span key={item} className="rounded-full bg-canvas px-3 py-1 text-xs font-semibold text-body">{item}</span>)}
                </div>
                <Link href={`/projects/${project.slug}`} className="mt-6 inline-flex items-center gap-2 font-semibold text-ink">
                  Open case study <ArrowUpRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
