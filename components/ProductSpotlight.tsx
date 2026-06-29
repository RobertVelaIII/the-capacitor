"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

// ── SQUARE CHECKOUT LINK ─────────────────────────────────────────────────────
// Replace with your real Square product/checkout link
const SQUARE_CHECKOUT_URL = "https://square.link/u/PLACEHOLDER";
// ─────────────────────────────────────────────────────────────────────────────

const specs = [
  { label: "Caffeine", value: "200mg", note: "Natural source" },
  { label: "Sugar", value: "0g", note: "Zero added" },
  { label: "Calories", value: "TBD", note: "Pending formula" },
  { label: "Electrolytes", value: "✓", note: "Sodium & Potassium" },
  { label: "B-Vitamins", value: "✓", note: "B6, B12 complex" },
  { label: "Crash Risk", value: "None", note: "Smooth taper" },
];

export default function ProductSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="product"
      ref={ref}
      className="relative py-28 lg:py-40 bg-matte-black overflow-hidden"
    >
      {/* Ambient glow right */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(0,191,255,0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — can image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center"
          >
            {/* Circular glow behind can */}
            <div
              className="absolute w-80 h-80 rounded-full blur-3xl opacity-20"
              style={{ background: "radial-gradient(circle, #00BFFF, transparent)" }}
              aria-hidden="true"
            />

            {/* TODO: Place your can image at /public/images/can-product.png */}
            <div
              className="relative w-[260px] h-[420px] z-10"
              style={{ animation: "float 7s ease-in-out infinite" }}
            >
              <Image
                src="/images/can-product.png"
                alt="THE CAPACITOR Original Charge can"
                fill
                className="object-contain"
                style={{ filter: "drop-shadow(0 0 50px rgba(0,191,255,0.2))" }}
              />
            </div>

            {/* Tech corner decorators */}
            <div className="absolute top-4 left-4 flex flex-col gap-1 opacity-40">
              <div className="w-6 h-px bg-electric-blue" />
              <div className="w-px h-6 bg-electric-blue" />
            </div>
            <div className="absolute bottom-4 right-4 flex flex-col items-end gap-1 opacity-40">
              <div className="w-6 h-px bg-electric-blue" />
              <div className="self-end w-px h-6 bg-electric-blue" />
            </div>
          </motion.div>

          {/* Right — product details */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mb-10"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-px bg-electric-blue" />
                <span className="font-mono text-xs tracking-[0.4em] text-electric-blue uppercase">
                  The Product
                </span>
              </div>

              <h2 className="font-black text-3xl lg:text-5xl text-white tracking-tight leading-tight mb-2">
                THE CAPACITOR
              </h2>
              <p className="font-mono text-electric-blue tracking-[0.2em] text-sm mb-6 uppercase">
                Original Charge
              </p>
              <p className="text-silver-dim leading-relaxed max-w-md">
                The flagship formula. Engineered for extended deep work sessions,
                late-night builds, and peak creative output. No spike. No crash.
                Just consistent power output — like a well-tuned capacitor.
              </p>
            </motion.div>

            {/* Spec table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mb-10 border border-white/8 rounded-xl overflow-hidden"
            >
              <div className="px-5 py-3 bg-white/3 border-b border-white/5">
                <span className="font-mono text-xs tracking-[0.3em] text-silver-dim uppercase">
                  Formula Specs
                </span>
              </div>
              <div className="divide-y divide-white/5">
                {specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex items-center justify-between px-5 py-4 hover:bg-white/2 transition-colors"
                  >
                    <span className="font-mono text-xs tracking-wider text-silver-dim uppercase">
                      {spec.label}
                    </span>
                    <div className="text-right">
                      <span className="font-mono font-bold text-white text-sm">
                        {spec.value}
                      </span>
                      <span className="font-mono text-xs text-electric-blue/60 ml-3">
                        {spec.note}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-4"
            >
              {/* SQUARE CHECKOUT — replace href when you have a real link */}
              <a
                href={SQUARE_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 font-mono font-bold text-sm tracking-[0.2em] uppercase text-black bg-electric-blue rounded overflow-hidden transition-all duration-300 hover:scale-105 active:scale-100"
                style={{ boxShadow: "0 0 24px rgba(0,191,255,0.35)" }}
              >
                <span className="relative z-10">Buy on Square</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </a>

              <a
                href="#signup"
                className="px-8 py-4 font-mono font-bold text-sm tracking-[0.2em] uppercase text-white border border-white/20 rounded hover:border-electric-blue hover:text-electric-blue transition-all duration-300"
              >
                Get Notified
              </a>
            </motion.div>

            {/* Disclaimer */}
            <p className="mt-6 text-xs text-silver-dim/50 font-mono">
              * Final formula, ingredients, and nutrition facts pending. Concept product.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
