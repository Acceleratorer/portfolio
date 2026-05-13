"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/#work" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Proof", href: "/dashboard" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-canvas/85 backdrop-blur">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Back to homepage"
        >
          <span className="grid h-9 w-9 place-items-center overflow-hidden rounded-full border border-primary bg-surface-card">
            <Image
              src="/icons/logo.png"
              alt="Tan Le logo"
              width={36}
              height={36}
              priority
              className="h-full w-full object-cover"
            />
          </span>

          <span className="hidden text-sm font-black uppercase text-ink sm:inline">
            Accelra
          </span>
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-hairline bg-surface-card px-2 py-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-xs font-semibold uppercase text-muted transition hover:bg-primary hover:text-on-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/cv/Tan-Le-CV.txt"
            className="rounded-full px-3 py-2 text-sm font-bold text-ink"
          >
            Resume
          </Link>

          <ThemeToggle />

          <Link
            href="/#contact"
            className="inline-flex h-11 items-center rounded-full bg-primary px-5 text-sm font-bold text-on-primary transition active:bg-primary-active"
          >
            Hire me
          </Link>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-primary bg-surface-card text-ink md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-hairline bg-canvas px-5 py-4 md:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-bold uppercase text-body hover:bg-surface-card"
              >
                {item.label}
              </Link>
            ))}

            <div className="flex items-center justify-between gap-3 rounded-xl px-4 py-2">
              <Link
                href="/cv/Tan-Le-CV.txt"
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-body"
              >
                Resume
              </Link>
              <ThemeToggle className="h-10 w-10" />
            </div>

            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-primary px-4 py-3 text-center text-sm font-bold text-on-primary"
            >
              Hire me
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
