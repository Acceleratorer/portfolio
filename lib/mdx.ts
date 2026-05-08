import { blogPosts } from "@/data/blog";
import { projects } from "@/data/projects";

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
