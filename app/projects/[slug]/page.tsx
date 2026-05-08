import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Github } from "lucide-react";
import { getProjectBySlug } from "@/lib/mdx";
import { projects } from "@/data/projects";

interface ProjectDetailPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <main className="px-5 pb-24 pt-32">
      <article className="mx-auto max-w-5xl">
        <Link href="/projects" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-black text-slate-300 hover:bg-white/10">
          <ArrowLeft size={16} /> Back to projects
        </Link>

        <div className="mt-8 overflow-hidden rounded-card border border-white/10 bg-white/5">
          <Image src={project.cover} alt={project.title} width={1100} height={620} className="h-[360px] w-full object-cover" />
          <div className="p-7 sm:p-10">
            <span className="rounded-full border border-cyan/25 bg-cyan/10 px-3 py-1 text-xs font-black uppercase text-cyan">{project.status}</span>
            <h1 className="mt-5 text-5xl font-black leading-none tracking-[-0.07em] sm:text-7xl">{project.title}</h1>
            <p className="mt-6 text-lg leading-8 text-slate-400">{project.longDescription}</p>

            <div className="mt-7 flex flex-wrap gap-2">
              {project.stack.map((item) => <span key={item} className="rounded-full bg-white/10 px-3 py-1 text-sm font-black text-white">{item}</span>)}
            </div>

            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet to-cyan px-5 py-3 font-black text-white">
                <Github size={18} /> GitHub repository
              </a>
            )}

            <div className="mdx-body mt-10">
              <h2>Highlights</h2>
              <ul>
                {project.highlights.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <h2>Next step</h2>
              <p>Turn this page into a full technical write-up: problem, constraints, architecture, implementation notes, metrics, screenshots, and lessons learned.</p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
