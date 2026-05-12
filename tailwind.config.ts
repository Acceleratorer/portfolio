import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./config/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#faf9f5",
        "surface-soft": "#f5f0e8",
        "surface-card": "#efe9de",
        "surface-cream-strong": "#e8e0d2",
        "surface-dark": "#181715",
        "surface-dark-elevated": "#252320",
        "surface-dark-soft": "#1f1e1b",
        hairline: "#e6dfd8",
        "hairline-soft": "#ebe6df",
        primary: "#cc785c",
        "primary-active": "#a9583e",
        "primary-disabled": "#e6dfd8",
        "accent-teal": "#5db8a6",
        "accent-amber": "#e8a55a",
        ink: "#141413",
        "body-strong": "#252523",
        body: "#3d3d3a",
        muted: "#6c6a64",
        "muted-soft": "#8e8b82",
        "on-primary": "#ffffff",
        "on-dark": "#faf9f5",
        "on-dark-soft": "#a09d96",
        success: "#5db872",
        warning: "#d4a017",
        error: "#c64545",
        cyan: "#5db8a6",
        violet: "#cc785c",
        amber: "#e8a55a",
        panel: "#efe9de",
      },
      fontFamily: {
        display: [
          "Cormorant Garamond",
          "EB Garamond",
          "Garamond",
          "Times New Roman",
          "serif",
        ],
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: ["JetBrains Mono", "SFMono-Regular", "Consolas", "monospace"],
      },
      boxShadow: {
        soft: "0 1px 3px rgba(20, 20, 19, 0.08)",
        glow: "0 1px 3px rgba(20, 20, 19, 0.08)",
        cyan: "0 1px 3px rgba(20, 20, 19, 0.08)",
      },
      borderRadius: {
        card: "12px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-12px,0)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 8px rgba(204,120,92,0.10)" },
          "50%": { boxShadow: "0 0 0 14px rgba(204,120,92,0.04)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        float: "float 8s ease-in-out infinite",
        pulseGlow: "pulseGlow 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
