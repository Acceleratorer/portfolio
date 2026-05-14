import {
  Boxes,
  BrainCircuit,
  ChartNoAxesCombined,
  Check,
  Cpu,
  DatabaseZap,
  Search,
  Waypoints,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import {
  CachingPanels,
  DataBuilding,
  FlexPyramid,
  InsightBlocks,
  IsometricBlocks,
  LangCacheStreams,
  SearchLayers,
} from "@/components/visuals/AnimatedBlocks";

const productCards = [
  {
    title: "Accelra for AI",
    text: "The fast memory layer for agents, experiments, and model notes. Get ready-to-use tools for building AI apps today.",
    bullets: ["Vector database", "AI agent memory", "Semantic search"],
    icon: BrainCircuit,
    visual: "cubes",
    className: "lg:col-span-2",
  },
  {
    title: "Accelra LangCache",
    text: "Lower latency and prompt cost with fully managed semantic caching.",
    icon: Waypoints,
    visual: "lanes",
  },
  {
    title: "Caching",
    text: "Obviously.",
    icon: Cpu,
    visual: "panels",
  },
  {
    title: "Accelra Insight",
    text: "Develop, debug, and visualize with a free graphical interface and dev tool.",
    icon: ChartNoAxesCombined,
    visual: "blocks",
  },
  {
    title: "Accelra Flex",
    text: "Cache 5X more proof signals with the same build loop.",
    icon: Boxes,
    visual: "pyramid",
  },
  {
    title: "Accelra Search",
    text: "Run powerful data queries and project search in real-time.",
    icon: Search,
    visual: "search",
  },
  {
    title: "Data Integration",
    text: "Sync project data from your repos, notebooks, and deployment logs.",
    icon: DatabaseZap,
    visual: "building",
  },
];

const integrations = [
  "AWS",
  "Azure",
  "GCP",
  "Vercel",
  "Node",
  "Java",
  "JS",
  "Go",
  "PHP",
  ".NET",
  "Python",
  "LangChain",
  "K8s",
  "Docker",
  "C++",
];

const codeLines = [
  ["import", " { createAgentContext } ", "from", " 'accelra';"],
  ["const", " memory = ", "createAgentContext", "();"],
  ["await", " memory.connect();", "", ""],
  ["await", " memory.projects.set('ai-trader', {", "", ""],
  ["", "  stack: ['Python', 'Pandas', 'Agents'],", "", ""],
  ["", "  status: 'building',", "", ""],
  ["", "  proof: ['repo', 'case-study', 'metrics']", "", ""],
  ["", "});", "", ""],
  ["const", " signal = ", "await memory.search", "('agent benchmark');"],
];

function CardVisual({ type }: { type: string }) {
  if (type === "cubes") {
    return <IsometricBlocks />;
  }

  if (type === "lanes") {
    return <LangCacheStreams />;
  }

  if (type === "panels") {
    return <CachingPanels />;
  }

  if (type === "pyramid") {
    return <FlexPyramid />;
  }

  if (type === "search") {
    return <SearchLayers />;
  }

  if (type === "building") {
    return <DataBuilding />;
  }

  return <InsightBlocks />;
}

export function ProductSystem() {
  return (
    <>
      <section className="bg-surface-dark-soft px-5 py-16 text-on-dark md:py-20">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-8 max-w-3xl">
            <p className="text-xs font-medium uppercase text-brand-mint">
              Think fast. Build faster.
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold uppercase leading-none tracking-normal md:text-5xl">
              Product surfaces for the Accelra build engine.
            </h2>
          </Reveal>

          <div className="grid gap-5 lg:grid-cols-4">
            {productCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <Reveal
                  key={card.title}
                  delay={index * 0.035}
                  className={card.className}
                >
                  <article
                    className="redis-card group relative min-h-[360px] overflow-hidden rounded-xl border border-white/10 bg-surface-dark-elevated p-6"
                  >
                    <div className="relative z-10">
                      <div className="flex items-center gap-3">
                        <Icon className="text-on-dark" size={28} />
                        <h3 className="text-xl font-semibold text-on-dark">
                          {card.title}
                        </h3>
                      </div>
                      <p className="mt-6 max-w-sm text-sm leading-6 text-on-dark-soft/70">
                        {card.text}
                      </p>
                      {card.bullets && (
                        <ul className="mt-28 grid gap-2 text-sm text-on-dark-soft/70 md:mt-32">
                          {card.bullets.map((item) => (
                            <li key={item} className="flex items-center gap-2">
                              <Check size={15} className="text-on-dark" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <CardVisual type={card.visual} />
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-surface-dark px-5 py-14 text-on-dark">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.32fr_0.68fr] lg:items-center">
          <Reveal>
            <h2 className="font-display text-4xl font-semibold leading-none tracking-normal">
              Works with
              <span className="block text-brand-mint">your tech stack</span>
            </h2>
            <a
              href="#skills"
              className="mt-7 inline-flex h-11 items-center rounded-lg border border-white/10 bg-surface-card px-5 text-sm font-semibold text-on-dark"
            >
              See all integrations
            </a>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="grid grid-cols-3 gap-x-10 gap-y-9 text-center text-2xl font-semibold text-muted md:grid-cols-5">
              {integrations.map((item, index) => (
                <span
                  key={item}
                  className="redis-tech-token opacity-75"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface-dark px-5 py-20 text-on-dark md:py-24">
        <div className="mx-auto max-w-7xl text-center">
          <Reveal>
            <h2 className="font-display text-4xl font-semibold leading-none tracking-normal md:text-5xl">
              Start building in <span className="text-brand-mint">minutes</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-body">
              Connect with Accelra using trusted tools in your language of
              choice.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="scanline mx-auto mt-10 max-w-4xl overflow-hidden rounded-xl border border-white/10 bg-surface-card text-left">
              <div className="flex gap-8 border-b border-white/10 px-5 py-5 font-mono text-xs font-semibold uppercase text-muted">
                {["JavaScript", "Java", "Python", "PHP", ".NET", "Go"].map(
                  (tab, index) => (
                    <span
                      key={tab}
                      className={index === 0 ? "text-on-dark underline decoration-brand-mint underline-offset-8" : ""}
                    >
                      {tab}
                    </span>
                  ),
                )}
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-sm leading-7 text-body">
                <code>
                  {codeLines.map(([a, b, c, d], index) => (
                    <span
                      key={`${a}-${index}`}
                      className="redis-code-line block"
                      style={{ animationDelay: `${index * 80}ms` }}
                    >
                      <span className="text-brand-mint">{a}</span>
                      <span className="text-on-dark">{b}</span>
                      <span className="text-brand-coral">{c}</span>
                      <span className="text-brand-ochre">{d}</span>
                    </span>
                  ))}
                </code>
              </pre>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
