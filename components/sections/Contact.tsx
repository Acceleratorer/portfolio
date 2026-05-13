"use client";

import { Mail, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig } from "@/config/site";

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(
      String(data.get("subject") ?? "Portfolio contact"),
    );
    const message = encodeURIComponent(
      `Hi Tan,\n\n${data.get("message")}\n\nFrom: ${data.get(
        "name",
      )}\nEmail: ${data.get("email")}`,
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${message}`;
    setSent(true);
  }

  return (
    <section id="contact" className="bg-technical-grid px-5 py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="text-xs font-medium uppercase text-brand-mint">
            Contact
          </p>
          <h2 className="mt-4 font-display text-5xl font-semibold uppercase leading-none tracking-normal text-ink sm:text-6xl">
            Start a project or inspect the work.
          </h2>
          <p className="mt-5 text-lg leading-8 text-body">
            For internships, collaborations, AI/data projects, or portfolio
            feedback, send a message or jump straight to GitHub.
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-7 inline-flex h-11 items-center gap-2 rounded-full border border-white/10 bg-surface-card px-5 text-sm font-semibold text-ink"
          >
            <Mail size={18} /> {siteConfig.email}
          </a>
        </Reveal>

        <Reveal delay={0.08}>
          <form
            onSubmit={handleSubmit}
            className="scanline grid gap-4 rounded-2xl border border-white/10 bg-surface-card p-6"
          >
            <label className="grid gap-2 text-sm font-medium text-body">
              Name
              <input
                name="name"
                required
                className="h-12 rounded-lg border border-white/10 bg-surface-dark-soft px-4 text-on-dark outline-none focus:border-primary focus:ring-4 focus:ring-primary/10"
                placeholder="Your name"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-body">
              Email
              <input
                name="email"
                type="email"
                required
                className="h-12 rounded-lg border border-white/10 bg-surface-dark-soft px-4 text-on-dark outline-none focus:border-primary focus:ring-4 focus:ring-primary/10"
                placeholder="your@email.com"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-body">
              Subject
              <input
                name="subject"
                required
                className="h-12 rounded-lg border border-white/10 bg-surface-dark-soft px-4 text-on-dark outline-none focus:border-primary focus:ring-4 focus:ring-primary/10"
                placeholder="Project / internship / collaboration"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-body">
              Message
              <textarea
                name="message"
                rows={5}
                required
                className="rounded-lg border border-white/10 bg-surface-dark-soft px-4 py-3 text-on-dark outline-none focus:border-primary focus:ring-4 focus:ring-primary/10"
                placeholder="Tell me what you want to build..."
              />
            </label>
            <button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-on-primary transition active:bg-primary-active">
              Open email draft <Send size={18} />
            </button>
            {sent && (
              <p className="text-sm font-bold text-brand-coral">
                Opening your email app...
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
