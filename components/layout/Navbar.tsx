"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Proof", href: "/dashboard" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-hairline bg-canvas/95 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Back to homepage"
        >
          <span className="grid h-9 w-9 place-items-center overflow-hidden rounded-full border border-hairline bg-surface-card">
            <Image
              src="/icons/logo.png"
              alt="Tan Le logo"
              width={36}
              height={36}
              priority
              className="h-full w-full object-cover"
            />
          </span>

          <span className="hidden text-sm font-medium tracking-[0.12em] text-ink sm:inline">
            TAN LE / ACCELRA
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted transition hover:bg-surface-card hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/cv/Tan-Le-CV.txt"
            className="rounded-lg px-3 py-2 text-sm font-medium text-ink"
          >
            Resume
          </Link>

          <Link
            href="/#contact"
            className="inline-flex h-10 items-center rounded-lg bg-primary px-5 text-sm font-medium text-on-primary transition active:bg-primary-active"
          >
            Hire me
          </Link>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-hairline bg-canvas text-ink md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-hairline bg-canvas px-5 py-4 md:hidden">
          <div className="mx-auto grid max-w-6xl gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-body hover:bg-surface-card"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="rounded-lg bg-primary px-4 py-3 text-center text-sm font-medium text-on-primary"
            >
              Hire me
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
