import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { siteConfig, socialLinks } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-surface-soft py-20 text-body">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-[1fr_auto] md:items-start">
        <div>
          <div className="flex items-center gap-3 text-ink">
            <span className="grid h-7 w-7 place-items-center overflow-hidden rounded-full bg-canvas">
              <Image
                src="/icons/logo.png"
                alt="Tan Le logo"
                width={28}
                height={28}
                className="h-full w-full object-cover"
              />
            </span>
            <span className="text-sm font-medium tracking-[0.12em]">
              {siteConfig.name} / {siteConfig.alias}
            </span>
          </div>
          <p className="mt-4 max-w-xl text-sm leading-6">
            {siteConfig.description}
          </p>
          <p className="mt-6 text-sm">
            (c) {new Date().getFullYear()} {siteConfig.name}. Built with Next.js,
            TypeScript, and Tailwind CSS.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {socialLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-xl bg-surface-card px-4 py-2 text-sm font-semibold text-ink"
            >
              {link.label} <ArrowUpRight size={14} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
