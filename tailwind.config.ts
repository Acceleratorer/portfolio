import type { Config } from "tailwindcss";

const color = (name: string) => `rgb(var(${name}) / <alpha-value>)`;

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
        canvas: color("--color-canvas"),
        "surface-soft": color("--color-surface-soft"),
        "surface-card": color("--color-surface-card"),
        "surface-cream-strong": color("--color-surface-cream-strong"),
        "surface-dark": color("--color-surface-dark"),
        "surface-dark-elevated": color("--color-surface-dark-elevated"),
        "surface-dark-soft": color("--color-surface-dark-soft"),
        hairline: color("--color-hairline"),
        "hairline-soft": color("--color-hairline-soft"),
        primary: color("--color-primary"),
        "primary-active": color("--color-primary-active"),
        "primary-disabled": color("--color-primary-disabled"),
        "accent-teal": color("--color-accent-teal"),
        "accent-amber": color("--color-accent-amber"),
        "brand-pink": color("--color-brand-pink"),
        "brand-teal": color("--color-brand-teal"),
        "brand-lavender": color("--color-brand-lavender"),
        "brand-peach": color("--color-brand-peach"),
        "brand-ochre": color("--color-brand-ochre"),
        "brand-mint": color("--color-brand-mint"),
        "brand-coral": color("--color-brand-coral"),
        ink: color("--color-ink"),
        "body-strong": color("--color-body-strong"),
        body: color("--color-body"),
        muted: color("--color-muted"),
        "muted-soft": color("--color-muted-soft"),
        "on-primary": color("--color-on-primary"),
        "on-dark": color("--color-on-dark"),
        "on-dark-soft": color("--color-on-dark-soft"),
        success: color("--color-success"),
        warning: color("--color-warning"),
        error: color("--color-error"),
        cyan: color("--color-accent-teal"),
        violet: color("--color-primary"),
        amber: color("--color-accent-amber"),
        panel: color("--color-panel"),
      },
      fontFamily: {
        display: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
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
        card: "16px",
        feature: "24px",
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
