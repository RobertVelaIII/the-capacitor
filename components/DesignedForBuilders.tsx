"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const BUILDERS = [
  { label: "Software Engineers",    icon: "⌨" },
  { label: "AI / ML Researchers",   icon: "🧠" },
  { label: "Robotics Teams",        icon: "🤖" },
  { label: "Game Developers",       icon: "🎮" },
  { label: "Hardware Makers",       icon: "🔧" },
  { label: "3D Artists",            icon: "🎨" },
  { label: "Founders & CTOs",       icon: "⚡" },
  { label: "Security Researchers",  icon: "🔐" },
  { label: "DevOps Engineers",      icon: "🚀" },
  { label: "Students & Hackers",    icon: "💡" },
  { label: "Circuit Designers",     icon: "📐" },
  { label: "Open Source Builders",  icon: "🌐" },
];

// Scrolling ticker row
function Ticker({ items, reverse = false }: { items: typeof BUILDERS; reverse?: boolean }) {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden" aria-hidden="true">
      <motion.div
        className="flex gap-3 w-max"
        animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((b, i) => (
          <div
            key={i}
            className="shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full"
            style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <span className="text-base">{b.icon}</span>
            <span className="font-mono text-xs text-[#555] tracking-wider whitespace-nowrap">
              {b.label}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function DesignedForBuilders() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const half1 = BUILDERS.slice(0, 6);
  const half2 = BUILDERS.slice(6);

  return (
    <section ref={ref} className="relative py-32 lg:py-44 bg-dark-surface overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* PCB decoration — right side only */}
      <div
        className="absolute right-0 top-0 bottom-0 w-[300px] pointer-events-none"
        style={{
          background: "linear-gradient(to left, rgba(0,191,255,0.015), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-electric-blue" />
            <span className="font-mono text-[10px] tracking-[0.5em] text-electric-blue uppercase">Built For</span>
          </div>
          <h2
            className="font-black tracking-tight leading-[0.9] mb-6"
            style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)" }}
          >
            DESIGNED FOR
            <br />
            <span style={{ color: "#00BFFF" }}>BUILDERS.</span>
          </h2>
          <p className="text-[#555] text-lg max-w-xl leading-relaxed">
            The people who build the future don&apos;t have time for a 2pm crash.
            THE CAPACITOR was made for sessions that last.
          </p>
        </motion.div>
      </div>

      {/* Scrolling tickers */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.4 }}
        className="flex flex-col gap-4"
      >
        <Ticker items={half1} />
        <Ticker items={half2} reverse />
      </motion.div>

      {/* Bottom stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-6 lg:px-12 mt-20"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.04] rounded-2xl overflow-hidden border border-white/[0.04]">
          {[
            { stat: "200mg",    label: "Caffeine per can" },
            { stat: "0g",       label: "Added sugar" },
            { stat: "4–6h",     label: "Average focus window" },
            { stat: "No crash", label: "Guaranteed" },
          ].map((s) => (
            <div key={s.label} className="bg-matte-black px-6 py-7 text-center">
              <div className="font-mono font-black text-2xl text-white mb-1">{s.stat}</div>
              <div className="font-mono text-[10px] tracking-[0.2em] text-[#444] uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
