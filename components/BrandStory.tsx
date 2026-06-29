"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const pillars = [
  { emoji: "⚡", label: "Engineers" },
  { emoji: "🤖", label: "Robotics" },
  { emoji: "💻", label: "Coders" },
  { emoji: "🎮", label: "Gamers" },
  { emoji: "🧠", label: "AI Builders" },
  { emoji: "🔧", label: "Makers" },
  { emoji: "🎨", label: "Creators" },
  { emoji: "📐", label: "Designers" },
];

export default function BrandStory() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="story"
      ref={ref}
      className="relative py-28 lg:py-40 bg-dark-surface overflow-hidden"
    >
      {/* Top divider */}
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Background pattern — circuit-like lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M0 40 H30 V10 H50 V40 H80" stroke="#00BFFF" strokeWidth="1" fill="none" />
              <path d="M40 0 V25 H70 V55 H40 V80" stroke="#00BFFF" strokeWidth="1" fill="none" />
              <circle cx="30" cy="10" r="2" fill="#00BFFF" />
              <circle cx="50" cy="40" r="2" fill="#00BFFF" />
              <circle cx="40" cy="55" r="2" fill="#00BFFF" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left — story copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-electric-blue" />
              <span className="font-mono text-xs tracking-[0.4em] text-electric-blue uppercase">
                Our Story
              </span>
            </div>

            <h2 className="font-black text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-8">
              BUILT FOR
              <br />
              <span style={{ color: "#00BFFF" }}>BUILDERS.</span>
            </h2>

            <div className="space-y-5 text-silver-dim leading-relaxed">
              <p>
                The energy drink market was designed for people who want a quick
                rush — loud cans, neon colors, and enough sugar to crash your
                system before noon. That was never us.
              </p>
              <p>
                THE CAPACITOR was created for the late-night coders pushing past
                midnight commits. For the engineers stress-testing hardware at
                2am. For the AI builders training models, iterating pipelines,
                and solving problems that have never been solved before.
              </p>
              <p>
                We took the same precision-first mindset that defines great
                engineering and applied it to energy. No guesswork. No cheap
                fillers. Just a formula that stores clean energy and releases it
                steadily — exactly like a capacitor does.
              </p>
              <p className="text-white font-semibold">
                Clean. Powerful. Sustained. That&apos;s the Capacitor principle.
              </p>
            </div>

            {/* Quote */}
            <div className="mt-10 pl-5 border-l-2 border-electric-blue/40">
              <p className="text-lg text-white/80 italic leading-relaxed">
                &ldquo;The best energy drink isn&apos;t the loudest one.
                It&apos;s the one that keeps you charged when it matters most.&rdquo;
              </p>
              <span className="mt-3 block font-mono text-xs tracking-widest text-electric-blue/60 uppercase">
                — THE CAPACITOR
              </span>
            </div>
          </motion.div>

          {/* Right — audience pillars */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative p-8 lg:p-10 border border-white/8 rounded-2xl bg-dark-card">
              {/* Header */}
              <p className="font-mono text-xs tracking-[0.4em] text-electric-blue uppercase mb-6">
                Powered by THE CAPACITOR
              </p>

              {/* Pill grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-3 mb-10">
                {pillars.map((p, i) => (
                  <motion.div
                    key={p.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + i * 0.06,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="flex flex-col items-center gap-2 p-4 bg-white/3 border border-white/5 rounded-xl hover:border-electric-blue/20 hover:bg-electric-blue/5 transition-all duration-300 cursor-default"
                  >
                    <span className="text-2xl" role="img" aria-label={p.label}>
                      {p.emoji}
                    </span>
                    <span className="font-mono text-xs text-silver-dim tracking-wider">
                      {p.label}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Voltage meter visual */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-xs text-silver-dim tracking-wider uppercase">
                    Energy Output
                  </span>
                  <span className="font-mono text-xs text-electric-blue">
                    FULL CHARGE
                  </span>
                </div>
                {[
                  { label: "Focus", pct: 94 },
                  { label: "Stamina", pct: 88 },
                  { label: "Clarity", pct: 96 },
                ].map((bar, i) => (
                  <div key={bar.label}>
                    <div className="flex justify-between mb-1">
                      <span className="font-mono text-xs text-silver-dim">
                        {bar.label}
                      </span>
                      <span className="font-mono text-xs text-electric-blue/70">
                        {bar.pct}%
                      </span>
                    </div>
                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${bar.pct}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: 0.5 + i * 0.15,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="h-full rounded-full"
                        style={{
                          background:
                            "linear-gradient(90deg, #00BFFF, #00E5FF)",
                          boxShadow: "0 0 8px rgba(0,191,255,0.5)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Corner glow */}
              <div
                className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-10 pointer-events-none"
                style={{ background: "#00BFFF" }}
                aria-hidden="true"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
