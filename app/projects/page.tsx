import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="px-5 pb-24 pt-32">
      <section className="mx-auto max-w-6xl">
        <p className="font-mono text-xs font-black uppercase tracking-[0.16em] text-cyan">Projects</p>
        <h1 className="mt-4 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.075em] sm:text-7xl">Case studies and shipped experiments.</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">Each project should eventually include problem, solution, architecture, tradeoffs, results, and what I learned.</p>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <article key={project.slug} className="overflow-hidden rounded-card border border-white/10 bg-white/5 transition hover:-translate-y-2 hover:border-cyan/40">
              <Image src={project.cover} alt={project.title} width={900} height={520} className="h-64 w-full object-cover" />
              <div className="p-6">
                <span className="rounded-full border border-cyan/25 bg-cyan/10 px-3 py-1 text-xs font-black uppercase text-cyan">{project.status}</span>
                <h2 className="mt-4 text-2xl font-black tracking-[-0.04em]">{project.title}</h2>
                <p className="mt-3 text-slate-400">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => <span key={item} className="rounded-full bg-white/10 px-3 py-1 text-xs font-black text-white">{item}</span>)}
                </div>
                <Link href={`/projects/${project.slug}`} className="mt-6 inline-flex items-center gap-2 font-black text-cyan">
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
