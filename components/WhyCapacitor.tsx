"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const CONTRAST = [
  {
    bad:  "Spike → Crash",
    good: "Steady Output",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M2 14 L6 6 L10 12 L14 4 L18 14" stroke="#00BFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    bad:  "Proprietary blend",
    good: "Exact doses, listed",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="14" height="14" rx="2" stroke="#00BFFF" strokeWidth="1.5" />
        <line x1="7" y1="8"  x2="13" y2="8"  stroke="#00BFFF" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="7" y1="12" x2="11" y2="12" stroke="#00BFFF" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    bad:  "Sugar + artificial dye",
    good: "Zero sugar. Nothing fake.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="7" stroke="#00BFFF" strokeWidth="1.5" />
        <path d="M7 10l2 2 4-4" stroke="#00BFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const PILLARS = [
  {
    number: "01",
    title: "Clean Formula",
    body: "No artificial colors. No mystery proprietary blends. Every ingredient disclosed. Every dose exact.",
  },
  {
    number: "02",
    title: "Precision Dosed",
    body: "200mg of natural caffeine — not more, not less. Engineered like the systems you build: predictable, reliable, documented.",
  },
  {
    number: "03",
    title: "No Crash Architecture",
    body: "B-vitamin matrix and electrolytes create a smooth taper so you stay in the zone, not bouncing off a wall at 3pm.",
  },
];

export default function WhyCapacitor() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-32 lg:py-48 bg-dark-surface overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Subtle background glow */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,191,255,0.04) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 lg:mb-28"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-electric-blue" />
            <span className="font-mono text-[10px] tracking-[0.5em] text-electric-blue uppercase">Why The Capacitor</span>
          </div>
          <h2
            className="font-black tracking-tight leading-[0.9] mb-6"
            style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)" }}
          >
            MOST ENERGY DRINKS
            <br />
            <span className="text-[#333]">ARE ENGINEERED</span>
            <br />
            <span className="text-[#222]">TO GET YOU HOOKED.</span>
          </h2>
          <p className="text-[#555] text-lg max-w-lg">
            Ours is engineered to get you{" "}
            <span className="text-white font-semibold">results.</span>
          </p>
        </motion.div>

        {/* Contrast strips */}
        <div className="grid md:grid-cols-3 gap-4 mb-24">
          {CONTRAST.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-xl overflow-hidden"
            >
              {/* Before */}
              <div className="px-5 py-4 bg-[#111] border border-white/[0.04] flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#333]" />
                <span className="font-mono text-xs text-[#444] line-through tracking-wide">{c.bad}</span>
              </div>
              {/* After */}
              <div
                className="px-5 py-4 flex items-center gap-3"
                style={{
                  background: "rgba(0,191,255,0.05)",
                  border: "1px solid rgba(0,191,255,0.15)",
                  borderTop: "none",
                }}
              >
                <div className="shrink-0">{c.icon}</div>
                <span className="font-mono text-xs text-white tracking-wide font-bold">{c.good}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-8">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <div className="font-mono font-black text-5xl text-white/[0.04] mb-5 select-none">
                {p.number}
              </div>
              <div className="w-8 h-px bg-electric-blue/40 mb-5 group-hover:w-16 group-hover:bg-electric-blue transition-all duration-500" />
              <h3 className="font-bold text-xl text-white mb-3 tracking-tight">{p.title}</h3>
              <p className="text-[#666] text-sm leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
