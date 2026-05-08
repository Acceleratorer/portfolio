import { Activity, Brain, Code2, Database, Github, Rocket } from "lucide-react";
import { DashboardCharts } from "@/components/ui/DashboardCharts";
import { projectPipeline, proofStats, readinessData } from "@/data/stats";

const icons = [Github, Code2, Activity, Rocket];

export default function DashboardPage() {
  return (
    <main className="px-5 pb-24 pt-32">
      <section className="mx-auto max-w-6xl">
        <p className="font-mono text-xs font-black uppercase tracking-[0.16em] text-cyan">Dashboard</p>
        <h1 className="mt-4 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.075em] sm:text-7xl">Accelra public command center.</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">A proof-of-work dashboard for projects, learning velocity, technical focus, and portfolio readiness.</p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {proofStats.map((stat, index) => {
            const Icon = icons[index] ?? Brain;
            return (
              <article key={stat.label} className="panel rounded-card p-6">
                <Icon className="text-cyan" />
                <strong className="mt-6 block text-5xl font-black tracking-[-0.06em] text-gradient">{stat.value}+</strong>
                <span className="mt-2 block text-sm font-bold text-slate-400">{stat.label}</span>
              </article>
            );
          })}
        </div>

        <DashboardCharts readinessData={readinessData} projectPipeline={projectPipeline} />

        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {[
            ["Current focus", "Next.js migration, project case studies, AI/Data portfolio proof."],
            ["Shipping rule", "No fake numbers. Every metric should map to a repo, write-up, or demo."],
            ["Next upgrade", "Connect live GitHub API, add MDX case studies, and lazy-load 3D only above desktop."]
          ].map(([title, text]) => (
            <article key={title} className="panel rounded-card p-6">
              <Database className="text-cyan" />
              <h2 className="mt-5 text-xl font-black">{title}</h2>
              <p className="mt-2 text-slate-400">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
