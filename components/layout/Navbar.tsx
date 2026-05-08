"use client";

import Image from "next/image";
import Link from "next/link";
import { Moon, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/projects" },
  { label: "Proof", href: "/dashboard" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-slate-950/70 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-2xl">
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label="Back to homepage"
        >
          <span className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-full border border-white/15 bg-white/10 shadow-lg shadow-cyan-500/10 ring-1 ring-cyan-300/20 transition duration-300 group-hover:scale-105 group-hover:ring-cyan-300/50">
            <Image
              src="/icons/logo.png"
              alt="Tan Le logo"
              width={44}
              height={44}
              priority
              className="h-full w-full object-cover"
            />
          </span>

          <span className="hidden text-sm font-black tracking-[0.18em] text-white sm:inline">
            TAN LE
          </span>
        </Link>

        <div className="hidden items-center rounded-full bg-white/5 p-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-bold text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            aria-label="Toggle theme"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
          >
            <Moon size={18} />
          </button>

          <Link
            href="/#contact"
            className="rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-3 text-sm font-black text-white shadow-lg shadow-violet-500/20 transition hover:-translate-y-0.5 hover:shadow-cyan-400/20"
          >
            Hire me
          </Link>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-3 grid max-w-6xl gap-2 rounded-3xl border border-white/10 bg-slate-950/90 p-4 shadow-2xl backdrop-blur-2xl md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-center text-sm font-bold text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-400 px-4 py-3 text-center text-sm font-black text-white"
          >
            Hire me
          </Link>
        </div>
      )}
    </header>
  );
}