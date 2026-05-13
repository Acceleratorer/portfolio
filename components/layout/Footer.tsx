import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { siteConfig, socialLinks } from "@/config/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-dot-grid py-16 text-on-dark">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[1fr_auto] md:items-start">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center overflow-hidden rounded-full border border-white/10 bg-surface-card">
              <Image
                src="/icons/logo.png"
                alt="Tan Le logo"
                width={28}
                height={28}
                className="h-full w-full object-cover"
              />
            </span>
            <span className="text-sm font-black uppercase">
              {siteConfig.name} / {siteConfig.alias}
            </span>
          </div>
          <p className="mt-4 max-w-xl text-sm leading-6 text-on-dark-soft">
            {siteConfig.description}
          </p>
          <p className="mt-6 text-sm text-on-dark-soft">
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
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-on-dark"
            >
              {link.label} <ArrowUpRight size={14} />
            </Link>
          ))}
        </div>
      </div>
      <div className="pointer-events-none mx-auto mt-12 max-w-7xl px-5 font-display text-6xl font-semibold uppercase leading-none text-white/[0.035] md:text-8xl lg:text-[10rem]">
        ACCELRA
      </div>
    </footer>
  );
}
