"use client";

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Radar, RadarChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis } from "recharts";

interface DashboardChartsProps {
  readinessData: Array<{ area: string; score: number }>;
  projectPipeline: Array<{ stage: string; count: number }>;
}

export function DashboardCharts({ readinessData, projectPipeline }: DashboardChartsProps) {
  return (
    <div className="mt-6 grid gap-5 lg:grid-cols-2">
      <article className="panel rounded-card p-6">
        <h2 className="text-2xl font-black">Readiness radar</h2>
        <p className="mt-2 text-sm text-slate-400">Portfolio capability map. Replace with real self-review or mentor feedback later.</p>
        <div className="mt-6 h-80">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={readinessData}>
              <PolarGrid stroke="rgba(255,255,255,0.13)" />
              <PolarAngleAxis dataKey="area" stroke="#94a3b8" />
              <PolarRadiusAxis stroke="#64748b" />
              <Radar dataKey="score" stroke="#22d3ee" fill="#22d3ee" fillOpacity={0.28} />
              <Tooltip contentStyle={{ background: "#0f172a", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 16 }} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </article>

      <article className="panel rounded-card p-6">
        <h2 className="text-2xl font-black">Project pipeline</h2>
        <p className="mt-2 text-sm text-slate-400">A simple public status board for ideas, builds, docs, and published work.</p>
        <div className="mt-6 h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={projectPipeline}>
              <XAxis dataKey="stage" stroke="#94a3b8" tickLine={false} axisLine={false} />
              <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} />
              <Tooltip contentStyle={{ background: "#0f172a", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 16 }} />
              <Bar dataKey="count" fill="#8b5cf6" radius={[12, 12, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </article>
    </div>
  );
}
