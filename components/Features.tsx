"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const FEATURES = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M13 2L4.5 13.5H12L11 22L19.5 10.5H12L13 2Z" stroke="#00BFFF" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
    title: "Clean Energy",
    stat: "200mg",
    unit: "Natural Caffeine",
    body: "No synthetic fillers. No artificial colors. Just the precise blend your body actually uses.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="8" stroke="#00BFFF" strokeWidth="1.4" />
        <circle cx="12" cy="12" r="3" fill="rgba(0,191,255,0.2)" />
        <line x1="12" y1="4"  x2="12" y2="8"  stroke="#00BFFF" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="12" y1="16" x2="12" y2="20" stroke="#00BFFF" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="4"  y1="12" x2="8"  y2="12" stroke="#00BFFF" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="16" y1="12" x2="20" y2="12" stroke="#00BFFF" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: "Enhanced Focus",
    stat: "4–6h",
    unit: "Sustained Clarity",
    body: "Precision-dosed nootropic stack for deep work, flow states, and peak mental output.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="8" width="16" height="11" rx="2" stroke="#00BFFF" strokeWidth="1.4" />
        <path d="M9 8V6a3 3 0 016 0v2" stroke="#00BFFF" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M10 13l2 2 3-3" stroke="#00BFFF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Built Different",
    stat: "Zero",
    unit: "Sugar Added",
    body: "Where others give you a spike and a crash, The Capacitor is engineered for steady output.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 18L8 10l5 6 4-9 4 11" stroke="#00BFFF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="4" y1="18" x2="20" y2="18" stroke="#00BFFF" strokeWidth="0.8" opacity="0.3" />
      </svg>
    ),
    title: "Sustained Performance",
    stat: "No",
    unit: "Crash",
    body: "Electrolytes and B-vitamins keep you operating at full capacity through long builds.",
  },
];

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" ref={ref} className="relative py-32 lg:py-44 bg-matte-black overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-electric-blue" />
              <span className="font-mono text-[10px] tracking-[0.5em] text-electric-blue uppercase">Performance Specs</span>
            </div>
            <h2
              className="font-black tracking-tight leading-[0.9]"
              style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)" }}
            >
              ENGINEERED TO
              <br />
              <span style={{ color: "#00BFFF" }}>PERFORM.</span>
            </h2>
          </div>
          <p className="text-[#555] text-base max-w-sm leading-relaxed lg:text-right">
            Every ingredient chosen with intent.
            No compromise. No filler.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-7 rounded-2xl overflow-hidden cursor-default transition-all duration-500 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.border = "1px solid rgba(0,191,255,0.25)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 40px rgba(0,191,255,0.06), 0 20px 40px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.border = "1px solid rgba(255,255,255,0.06)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              {/* Hover glow in corner */}
              <div
                className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "radial-gradient(circle at top right, rgba(0,191,255,0.08), transparent 70%)" }}
                aria-hidden="true"
              />

              {/* Icon */}
              <div
                className="mb-6 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300"
                style={{
                  background: "rgba(0,191,255,0.06)",
                  border: "1px solid rgba(0,191,255,0.12)",
                }}
              >
                {f.icon}
              </div>

              {/* Stat */}
              <div className="font-mono font-black text-3xl text-electric-blue mb-0.5">{f.stat}</div>
              <div className="font-mono text-[10px] tracking-[0.2em] text-[#444] uppercase mb-5">{f.unit}</div>

              {/* Text */}
              <h3 className="font-bold text-base text-white mb-2 tracking-tight">{f.title}</h3>
              <p className="text-[#555] text-sm leading-relaxed">{f.body}</p>

              {/* Bottom shimmer line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "linear-gradient(90deg, transparent, rgba(0,191,255,0.4), transparent)" }}
                aria-hidden="true"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
