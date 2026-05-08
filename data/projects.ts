import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "ai-uit-problem-hub",
    title: "AI-UIT Problem Hub",
    description: "A curated repository for UIT AI problems, solutions, experiments, and learning notes.",
    longDescription:
      "A long-term academic portfolio asset that organizes AI/ML problems, implementation notes, and reproducible experiments for UIT learning.",
    stack: ["Python", "Markdown", "Algorithms", "AI"],
    status: "featured",
    cover: "/projects/ai-uit.svg",
    github: "https://github.com/Acceleratorer",
    highlights: [
      "Designed as a knowledge base instead of a one-off assignment repo.",
      "Clear folder structure for problems, solutions, datasets, and notes.",
      "Built for academic proof-of-work and future collaboration."
    ]
  },
  {
    slug: "doomscrolling-detection",
    title: "Doomscrolling Detection",
    description: "Computer vision experiment using OpenCV and MediaPipe for attention and fatigue-like signals.",
    longDescription:
      "A playful computer vision pipeline that tracks face mesh, eyes, and interaction signals to detect long-scroll fatigue patterns.",
    stack: ["Python", "OpenCV", "MediaPipe", "Computer Vision"],
    status: "research",
    cover: "/projects/vision.svg",
    github: "https://github.com/Acceleratorer",
    highlights: [
      "Uses webcam signals for real-time feedback.",
      "Designed as a research-style experiment, not a medical diagnosis tool.",
      "Good bridge between AI, UX, and human-computer interaction."
    ]
  },
  {
    slug: "ai-trader",
    title: "AI Trader",
    description: "An agent-native trading research bench exploring whether AI can beat market baselines.",
    longDescription:
      "A research-oriented project for live trading experiments, data pipelines, agent behavior, and market benchmark tracking.",
    stack: ["Python", "Pandas", "NumPy", "SQL", "Agents"],
    status: "building",
    cover: "/projects/ai-trader.svg",
    github: "https://github.com/Acceleratorer/AI-Trader",
    highlights: [
      "Frames trading as benchmarked research instead of hype.",
      "Combines data engineering, backtesting, and agent workflows.",
      "Designed to document failure cases and lessons learned."
    ]
  },
  {
    slug: "autocommit-heatmap-wizard",
    title: "AutoCommit Heatmap Wizard",
    description: "Automation tool with human-like commit rhythm, cooldown logic, logs, and contribution analytics.",
    longDescription:
      "A Windows-friendly automation experiment that explores scheduling, randomness, logging, Git operations, and contribution analytics.",
    stack: ["Python", "Git", "Scheduler", "Automation"],
    status: "automation",
    cover: "/projects/autocommit.svg",
    github: "https://github.com/Acceleratorer",
    highlights: [
      "Includes logs and safety checks for scheduled runs.",
      "Explores realistic rhythm modeling and cooldown logic.",
      "Great proof of scripting, Git, and automation fundamentals."
    ]
  }
];
