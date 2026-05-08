import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig, socialLinks } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} {siteConfig.name} / {siteConfig.alias}. Built with Next.js, TypeScript and Tailwind CSS.
        </p>
        <div className="flex flex-wrap gap-3">
          {socialLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              {link.label} <ArrowUpRight size={14} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
