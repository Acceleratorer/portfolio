import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/data/blog";

export default function BlogPage() {
  return (
    <main className="px-5 pb-24 pt-32">
      <section className="mx-auto max-w-5xl">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-coral">Blog</p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl font-medium leading-none tracking-[-0.055em] sm:text-7xl">Learning notes and engineering logs.</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-body">Use this area for technical reflections, case studies, and portfolio-building notes.</p>

        <div className="mt-12 grid gap-5">
          {blogPosts.map((post) => (
            <article key={post.slug} className="panel rounded-feature p-6 transition hover:-translate-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-coral">{post.date}</p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.05em]">{post.title}</h2>
              <p className="mt-3 text-body">{post.excerpt}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {post.tags.map((tag) => <span key={tag} className="rounded-full bg-canvas px-3 py-1 text-xs font-semibold text-body">{tag}</span>)}
              </div>
              <Link href={`/blog/${post.slug}`} className="mt-6 inline-flex items-center gap-2 font-semibold text-ink">
                Read note <ArrowUpRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
