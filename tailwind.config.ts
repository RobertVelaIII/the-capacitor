import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "electric-blue": "#00BFFF",
        "deep-blue":     "#0066FF",
        "neon-blue":     "#00E5FF",
        "matte-black":   "#0A0A0A",
        "dark-surface":  "#0D0D0D",
        "dark-card":     "#141414",
        "silver":        "#C0C0C0",
        "silver-dim":    "#666666",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient":
          "linear-gradient(135deg, #0A0A0A 0%, #0D0D0D 50%, #0A0A0A 100%)",
      },
      animation: {
        "pulse-glow":   "pulseGlow 3s ease-in-out infinite",
        "float":        "float 7s ease-in-out infinite",
        "ambient-glow": "ambientFloat 20s ease-in-out infinite",
        "shimmer":      "shimmer 0.7s ease forwards",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0,191,255,0.3), 0 0 40px rgba(0,191,255,0.1)" },
          "50%":      { boxShadow: "0 0 40px rgba(0,191,255,0.6), 0 0 80px rgba(0,191,255,0.2)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-18px)" },
        },
        ambientFloat: {
          "0%":   { transform: "translate(0px, 0px) scale(1)" },
          "25%":  { transform: "translate(40px, -30px) scale(1.05)" },
          "50%":  { transform: "translate(-20px, 20px) scale(0.97)" },
          "75%":  { transform: "translate(20px, 40px) scale(1.03)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        shimmer: {
          "0%":   { left: "-100%" },
          "100%": { left: "160%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
