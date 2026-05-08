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
    const subject = encodeURIComponent(String(data.get("subject") ?? "Portfolio contact"));
    const message = encodeURIComponent(`Hi Tan,\n\n${data.get("message")}\n\nFrom: ${data.get("name")}\nEmail: ${data.get("email")}`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${message}`;
    setSent(true);
  }

  return (
    <section id="contact" className="px-5 py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="font-mono text-xs font-black uppercase tracking-[0.16em] text-cyan">Contact</p>
          <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.055em] sm:text-5xl">Let’s build something sharp.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-400">For internships, collaborations, AI/data projects, or portfolio feedback — send a message or jump straight to GitHub.</p>
          <a href={`mailto:${siteConfig.email}`} className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 font-black text-white hover:bg-white/10">
            <Mail size={18} /> {siteConfig.email}
          </a>
        </Reveal>

        <Reveal delay={0.08}>
          <form onSubmit={handleSubmit} className="panel grid gap-4 rounded-card p-6">
            <label className="grid gap-2 text-sm font-bold text-slate-400">
              Name
              <input name="name" required className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-cyan/60" placeholder="Your name" />
            </label>
            <label className="grid gap-2 text-sm font-bold text-slate-400">
              Email
              <input name="email" type="email" required className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-cyan/60" placeholder="your@email.com" />
            </label>
            <label className="grid gap-2 text-sm font-bold text-slate-400">
              Subject
              <input name="subject" required className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-cyan/60" placeholder="Project / internship / collaboration" />
            </label>
            <label className="grid gap-2 text-sm font-bold text-slate-400">
              Message
              <textarea name="message" rows={5} required className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-cyan/60" placeholder="Tell me what you want to build..." />
            </label>
            <button className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet to-cyan px-6 font-black text-white shadow-cyan transition hover:-translate-y-1">
              Open email draft <Send size={18} />
            </button>
            {sent && <p className="text-sm font-bold text-cyan">Opening your email app...</p>}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
