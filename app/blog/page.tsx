import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/data/blog";

export default function BlogPage() {
  return (
    <main className="px-5 pb-24 pt-32">
      <section className="mx-auto max-w-5xl">
        <p className="font-mono text-xs font-black uppercase tracking-[0.16em] text-cyan">Blog</p>
        <h1 className="mt-4 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.075em] sm:text-7xl">Learning notes and engineering logs.</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">Use this area for technical reflections, case studies, and portfolio-building notes.</p>

        <div className="mt-12 grid gap-5">
          {blogPosts.map((post) => (
            <article key={post.slug} className="panel rounded-card p-6 transition hover:-translate-y-1 hover:border-cyan/40">
              <p className="font-mono text-xs font-black uppercase tracking-[0.16em] text-cyan">{post.date}</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.05em]">{post.title}</h2>
              <p className="mt-3 text-slate-400">{post.excerpt}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {post.tags.map((tag) => <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs font-black text-white">{tag}</span>)}
              </div>
              <Link href={`/blog/${post.slug}`} className="mt-6 inline-flex items-center gap-2 font-black text-cyan">
                Read note <ArrowUpRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
