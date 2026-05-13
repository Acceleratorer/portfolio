import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { getBlogPostBySlug } from "@/lib/mdx";

interface BlogDetailPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <main className="px-5 pb-24 pt-32">
      <article className="mx-auto max-w-3xl">
        <Link href="/blog" className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface-card px-4 py-2 text-sm font-semibold text-body">
          <ArrowLeft size={16} /> Back to blog
        </Link>

        <p className="mt-10 text-xs font-semibold uppercase tracking-[0.16em] text-brand-coral">{post.date}</p>
        <h1 className="mt-4 font-display text-5xl font-medium leading-none tracking-[-0.055em] sm:text-7xl">{post.title}</h1>
        <p className="mt-6 text-lg leading-8 text-body">{post.excerpt}</p>

        <div className="mdx-body mt-12 rounded-feature border border-hairline bg-surface-card p-7 sm:p-10">
          <h2>Context</h2>
          <p>This is a placeholder article page. Replace it with MDX content when the portfolio migration reaches the content phase.</p>
          <h2>Why it matters</h2>
          <p>A good technical blog proves that you understand the tradeoffs behind the projects, not just the final UI.</p>
          <h2>Next actions</h2>
          <ul>
            <li>Add MDX parsing or contentlayer-style integration.</li>
            <li>Write project retrospectives with screenshots and metrics.</li>
            <li>Link blog posts back to project case studies.</li>
          </ul>
        </div>
      </article>
    </main>
  );
}
