"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SQUARE_CHECKOUT_URL, CAN_IMAGE_CANDIDATES } from "@/lib/constants";
import ProductImage from "@/components/ui/ProductImage";
import GlowButton from "@/components/ui/GlowButton";

const SPECS = [
  { label: "Format",    value: "12-Pack",           note: "355ml cans" },
  { label: "Caffeine",  value: "200mg",             note: "Natural source" },
  { label: "Sugar",     value: "0g",                note: "Zero added" },
  { label: "Calories",  value: "TBD",              note: "Pending formula" },
  { label: "Electrolytes", value: "✓",             note: "Na⁺ & K⁺" },
  { label: "B-Vitamins",  value: "✓",             note: "B6 + B12 complex" },
  { label: "Crash Risk",  value: "None",            note: "Smooth taper" },
  { label: "Artificial dyes", value: "None",        note: "Clean label" },
];

export default function ProductSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="product" ref={ref} className="relative py-32 lg:py-44 bg-matte-black overflow-hidden">

      {/* Right-side ambient glow */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,191,255,0.05) 0%, transparent 65%)" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* LEFT — can image */}
          <motion.div
            initial={{ opacity: 0, x: -48 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center min-h-[400px] lg:min-h-[560px]"
          >
            {/* Glow behind can */}
            <div
              className="absolute w-72 h-72 rounded-full blur-3xl pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(0,191,255,0.1), transparent)" }}
              aria-hidden="true"
            />

            {/* TODO: Drop can-front.png into /public/images/ to display here */}
            <div
              className="relative w-[220px] h-[360px] lg:w-[260px] lg:h-[440px] float z-10"
              style={{ filter: "drop-shadow(0 0 50px rgba(0,191,255,0.15))" }}
            >
              <ProductImage
                candidates={CAN_IMAGE_CANDIDATES}
                alt="THE CAPACITOR Original Charge can"
              />
            </div>

            {/* Blueprint corner ticks */}
            <div className="absolute top-4 left-4 w-10 h-10 border-t border-l border-electric-blue/15 pointer-events-none" aria-hidden="true" />
            <div className="absolute bottom-4 right-4 w-10 h-10 border-b border-r border-electric-blue/15 pointer-events-none" aria-hidden="true" />
          </motion.div>

          {/* RIGHT — product details */}
          <div>
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mb-10"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-px bg-electric-blue" />
                <span className="font-mono text-[10px] tracking-[0.5em] text-electric-blue uppercase">The Product</span>
              </div>
              <h2 className="font-black text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-1">
                THE CAPACITOR
              </h2>
              <p className="font-mono text-electric-blue tracking-[0.25em] text-sm mb-4 uppercase">
                Original Charge — 12 Pack
              </p>
              <p className="text-[#555] leading-relaxed max-w-md">
                The flagship formula. Engineered for deep work, late-night builds,
                and sustained creative output. No spike. No crash.
                Just consistent power — like a well-tuned capacitor.
              </p>
            </motion.div>

            {/* Spec table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="mb-10 rounded-xl overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.06)" }}
            >
              {/* Table header */}
              <div
                className="px-5 py-3 flex items-center justify-between"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.04)", background: "rgba(255,255,255,0.02)" }}
              >
                <span className="font-mono text-[10px] tracking-[0.35em] text-[#444] uppercase">Formula Specs</span>
                <span className="font-mono text-[10px] tracking-widest text-electric-blue/50 uppercase">v1.0</span>
              </div>
              <div style={{ background: "rgba(0,0,0,0.2)" }}>
                {SPECS.map((s, i) => (
                  <div
                    key={s.label}
                    className="flex items-center justify-between px-5 py-3.5 transition-colors duration-200 hover:bg-white/[0.02]"
                    style={{ borderBottom: i < SPECS.length - 1 ? "1px solid rgba(255,255,255,0.03)" : "none" }}
                  >
                    <span className="font-mono text-[11px] tracking-wider text-[#555] uppercase">{s.label}</span>
                    <div className="text-right">
                      <span className="font-mono font-bold text-white text-sm">{s.value}</span>
                      <span className="font-mono text-[10px] text-electric-blue/50 ml-3">{s.note}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-3"
            >
              {/* TODO: Replace SQUARE_CHECKOUT_URL in lib/constants.ts with real Square link */}
              <GlowButton
                href={SQUARE_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
              >
                Buy on Square
              </GlowButton>
              <GlowButton href="#specs" variant="secondary" size="lg">
                Learn More
              </GlowButton>
            </motion.div>

            <p className="mt-5 font-mono text-[10px] text-[#333]">
              * Final formula, ingredients, and nutrition facts pending. Concept product.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
