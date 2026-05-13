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
        <Link href="/projects" className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface-card px-4 py-2 text-sm font-semibold text-body">
          <ArrowLeft size={16} /> Back to projects
        </Link>

        <div className="mt-8 overflow-hidden rounded-feature border border-hairline bg-surface-card">
          <Image src={project.cover} alt={project.title} width={1100} height={620} className="h-[360px] w-full border-b border-hairline object-cover" />
          <div className="p-7 sm:p-10">
            <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase text-on-primary">{project.status}</span>
            <h1 className="mt-5 font-display text-5xl font-black uppercase leading-none tracking-normal sm:text-7xl">{project.title}</h1>
            <p className="mt-6 text-lg leading-8 text-body">{project.longDescription}</p>

            <div className="mt-7 flex flex-wrap gap-2">
              {project.stack.map((item) => <span key={item} className="rounded-full bg-canvas px-3 py-1 text-sm font-semibold text-body">{item}</span>)}
            </div>

            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-on-primary">
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
