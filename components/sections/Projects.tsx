import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs font-black uppercase tracking-[0.16em] text-cyan">Projects</p>
          <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.055em] sm:text-5xl">Projects that tell the story.</h2>
          <p className="mt-4 text-slate-400">AI/Data, computer vision, automation, and portfolio engineering proof-of-work.</p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {projects.slice(0, 4).map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.05}>
              <article className="group overflow-hidden rounded-card border border-white/10 bg-white/5 transition hover:-translate-y-2 hover:border-cyan/40 hover:bg-white/[0.08]">
                <Image src={project.cover} alt={`${project.title} preview`} width={900} height={520} className="h-64 w-full object-cover" />
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-black tracking-[-0.04em]">{project.title}</h3>
                    <span className="rounded-full border border-cyan/25 bg-cyan/10 px-3 py-1 text-xs font-black uppercase text-cyan">{project.status}</span>
                  </div>
                  <p className="mt-3 text-slate-400">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => <span key={item} className="rounded-full bg-white/10 px-3 py-1 text-xs font-black text-white">{item}</span>)}
                  </div>
                  <Link href={`/projects/${project.slug}`} className="mt-6 inline-flex items-center gap-2 font-black text-cyan">
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
