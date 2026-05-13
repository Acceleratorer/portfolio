import { Activity, Brain, Code2, Database, Github, Rocket } from "lucide-react";
import { DashboardCharts } from "@/components/ui/DashboardCharts";
import { projectPipeline, proofStats, readinessData } from "@/data/stats";

const icons = [Github, Code2, Activity, Rocket];

export default function DashboardPage() {
  return (
    <main className="px-5 pb-24 pt-32">
      <section className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-coral">Dashboard</p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl font-medium leading-none tracking-[-0.055em] sm:text-7xl">Accelra public command center.</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-body">A proof-of-work dashboard for projects, learning velocity, technical focus, and portfolio readiness.</p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {proofStats.map((stat, index) => {
            const Icon = icons[index] ?? Brain;
            return (
              <article key={stat.label} className="panel rounded-feature p-6">
                <Icon className="text-brand-coral" />
                <strong className="mt-6 block font-display text-5xl font-medium tracking-[-0.055em] text-gradient">{stat.value}+</strong>
                <span className="mt-2 block text-sm font-semibold text-muted">{stat.label}</span>
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
            <article key={title} className="panel rounded-feature p-6">
              <Database className="text-brand-coral" />
              <h2 className="mt-5 text-xl font-semibold tracking-[-0.03em]">{title}</h2>
              <p className="mt-2 text-muted">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
