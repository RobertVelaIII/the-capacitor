"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const INGREDIENTS = [
  { name: "Natural Caffeine",    amount: "200mg", pct: 100, note: "From green tea & coffee bean" },
  { name: "Vitamin B12",         amount: "500%",  pct: 85,  note: "Daily value" },
  { name: "Vitamin B6",          amount: "250%",  pct: 70,  note: "Daily value" },
  { name: "Sodium",              amount: "100mg", pct: 45,  note: "Electrolyte replenishment" },
  { name: "Potassium",           amount: "80mg",  pct: 40,  note: "Muscle function" },
  { name: "L-Theanine",          amount: "TBD",   pct: 60,  note: "Pending formula" },
];

const COMPARE = [
  { label: "Sugar",        us: "0g",   them: "27g",   better: true },
  { label: "Caffeine",     us: "200mg", them: "160mg", better: true },
  { label: "Crash",        us: "No",   them: "Yes",   better: true },
  { label: "Artificial dye", us: "None", them: "Yes", better: true },
  { label: "Calories",     us: "TBD",  them: "110",   better: null },
];

export default function ProductSpecs() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="specs" ref={ref} className="relative py-32 lg:py-44 bg-dark-surface overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-electric-blue" />
            <span className="font-mono text-[10px] tracking-[0.5em] text-electric-blue uppercase">Product Specs</span>
          </div>
          <h2
            className="font-black tracking-tight leading-[0.9]"
            style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)" }}
          >
            FORMULA
            <br />
            <span style={{ color: "#00BFFF" }}>BREAKDOWN.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Ingredient bars */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="font-mono text-[11px] tracking-[0.35em] text-[#444] uppercase mb-8">
              Key Ingredients
            </h3>
            <div className="space-y-6">
              {INGREDIENTS.map((item, i) => (
                <div key={item.name}>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="font-mono text-xs text-white tracking-wider">{item.name}</span>
                    <div className="text-right">
                      <span className="font-mono font-bold text-sm text-electric-blue">{item.amount}</span>
                      <span className="font-mono text-[10px] text-[#444] ml-2">{item.note}</span>
                    </div>
                  </div>
                  <div className="h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.04)" }}>
                    <motion.div
                      className="h-full rounded-full"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${item.pct}%` } : {}}
                      transition={{ duration: 1, delay: 0.4 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                      style={{
                        background: "linear-gradient(90deg, #0066FF, #00BFFF)",
                        boxShadow: "0 0 8px rgba(0,191,255,0.4)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 font-mono text-[10px] text-[#333]">
              * Pending final formula. All values approximate.
            </p>
          </motion.div>

          {/* Comparison table */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="font-mono text-[11px] tracking-[0.35em] text-[#444] uppercase mb-8">
              vs. Standard Energy Drink
            </h3>
            <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
              {/* Column headers */}
              <div
                className="grid grid-cols-3 px-5 py-3 text-[10px] font-mono tracking-[0.25em] uppercase"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}
              >
                <span className="text-[#444]">Metric</span>
                <span className="text-electric-blue text-center">THE CAPACITOR</span>
                <span className="text-[#333] text-center">Standard</span>
              </div>
              {COMPARE.map((row, i) => (
                <div
                  key={row.label}
                  className="grid grid-cols-3 px-5 py-4 items-center transition-colors hover:bg-white/[0.015]"
                  style={{ borderBottom: i < COMPARE.length - 1 ? "1px solid rgba(255,255,255,0.03)" : "none" }}
                >
                  <span className="font-mono text-xs text-[#555]">{row.label}</span>
                  <div className="text-center">
                    <span
                      className="font-mono text-sm font-bold"
                      style={{ color: row.better === true ? "#00BFFF" : row.better === false ? "#ff4444" : "#666" }}
                    >
                      {row.us}
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="font-mono text-sm text-[#333]">{row.them}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
