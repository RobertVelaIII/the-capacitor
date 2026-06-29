import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "electric-blue": "#00BFFF",
        "deep-blue": "#0066FF",
        "neon-blue": "#00E5FF",
        "matte-black": "#0A0A0A",
        "dark-surface": "#111111",
        "dark-card": "#161616",
        "silver": "#C0C0C0",
        "silver-dim": "#888888",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "electric-glow":
          "radial-gradient(ellipse at center, rgba(0,191,255,0.15) 0%, transparent 70%)",
        "hero-gradient":
          "linear-gradient(135deg, #0A0A0A 0%, #0D1117 50%, #0A0A0A 100%)",
      },
      animation: {
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "scan-line": "scanLine 3s linear infinite",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0,191,255,0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(0,191,255,0.6)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        scanLine: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
