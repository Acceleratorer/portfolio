import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./config/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#070914",
        panel: "rgba(255,255,255,0.07)",
        cyan: "#22d3ee",
        violet: "#8b5cf6",
        amber: "#f97316"
      },
      boxShadow: {
        glow: "0 24px 90px rgba(139, 92, 246, 0.28)",
        cyan: "0 18px 60px rgba(34, 211, 238, 0.22)"
      },
      borderRadius: {
        card: "28px"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        float: {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-16px,0)" }
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 8px rgba(34,197,94,0.10)" },
          "50%": { boxShadow: "0 0 0 14px rgba(34,197,94,0.04)" }
        }
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        float: "float 8s ease-in-out infinite",
        pulseGlow: "pulseGlow 2.4s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
