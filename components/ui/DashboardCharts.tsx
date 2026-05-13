"use client";

import {
  Bar,
  BarChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface DashboardChartsProps {
  readinessData: Array<{ area: string; score: number }>;
  projectPipeline: Array<{ stage: string; count: number }>;
}

export function DashboardCharts({ readinessData, projectPipeline }: DashboardChartsProps) {
  return (
    <div className="mt-6 grid gap-5 lg:grid-cols-2">
      <article className="panel rounded-feature p-6">
        <h2 className="text-2xl font-semibold tracking-[-0.03em]">
          Readiness radar
        </h2>
        <p className="mt-2 text-sm text-muted">
          Portfolio capability map. Replace with real self-review or mentor
          feedback later.
        </p>
        <div className="mt-6 h-80">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={readinessData}>
              <PolarGrid stroke="#e5e5e5" />
              <PolarAngleAxis dataKey="area" stroke="#6a6a6a" />
              <PolarRadiusAxis stroke="#9a9a9a" />
              <Radar
                dataKey="score"
                stroke="#ff4d8b"
                fill="#ff4d8b"
                fillOpacity={0.28}
              />
              <Tooltip
                contentStyle={{
                  background: "#fffaf0",
                  border: "1px solid #e5e5e5",
                  borderRadius: 16,
                }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </article>

      <article className="panel rounded-feature p-6">
        <h2 className="text-2xl font-semibold tracking-[-0.03em]">
          Project pipeline
        </h2>
        <p className="mt-2 text-sm text-muted">
          A simple public status board for ideas, builds, docs, and published
          work.
        </p>
        <div className="mt-6 h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={projectPipeline}>
              <XAxis
                dataKey="stage"
                stroke="#6a6a6a"
                tickLine={false}
                axisLine={false}
              />
              <YAxis stroke="#6a6a6a" tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{
                  background: "#fffaf0",
                  border: "1px solid #e5e5e5",
                  borderRadius: 16,
                }}
              />
              <Bar dataKey="count" fill="#b8a4ed" radius={[12, 12, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </article>
    </div>
  );
}
