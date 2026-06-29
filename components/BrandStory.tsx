"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import PCBBackground from "@/components/ui/PCBBackground";

export default function BrandStory() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const bars = [
    { label: "Focus",   pct: 94 },
    { label: "Stamina", pct: 88 },
    { label: "Clarity", pct: 97 },
  ];

  return (
    <section id="story" ref={ref} className="relative py-32 lg:py-44 bg-matte-black overflow-hidden">

      {/* PCB background at very low opacity */}
      <PCBBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT — story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-electric-blue" />
              <span className="font-mono text-[10px] tracking-[0.5em] text-electric-blue uppercase">Our Story</span>
            </div>

            <h2
              className="font-black tracking-tight leading-[0.9] mb-10"
              style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)" }}
            >
              BUILT FOR
              <br />
              <span style={{ color: "#00BFFF" }}>BUILDERS.</span>
            </h2>

            <div className="space-y-5 text-[#666] text-base leading-relaxed">
              <p>
                The energy drink market was designed for people who want a quick
                rush — loud cans, neon colors, and enough sugar to crash your
                system before noon. That was never us.
              </p>
              <p>
                THE CAPACITOR was created for the late-night coders pushing past
                midnight commits. For the engineers stress-testing hardware at 2am.
                For the AI builders training models, iterating pipelines, and solving
                problems that have never been solved before.
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

            {/* Pull quote */}
            <div className="mt-10 pl-5" style={{ borderLeft: "2px solid rgba(0,191,255,0.3)" }}>
              <p className="text-base text-[#888] italic leading-relaxed">
                &ldquo;The best energy drink isn&apos;t the loudest one.
                It&apos;s the one that keeps you charged when it matters most.&rdquo;
              </p>
              <span className="mt-3 block font-mono text-[10px] tracking-[0.35em] text-electric-blue/50 uppercase">
                — THE CAPACITOR
              </span>
            </div>
          </motion.div>

          {/* RIGHT — metrics card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="relative p-8 lg:p-10 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                boxShadow: "0 40px 80px rgba(0,0,0,0.4)",
              }}
            >
              <p className="font-mono text-[10px] tracking-[0.45em] text-electric-blue uppercase mb-8">
                Powered by THE CAPACITOR
              </p>

              {/* Audience grid */}
              <div className="grid grid-cols-4 gap-2 mb-10">
                {[
                  { e: "⌨", l: "Engineers" },
                  { e: "🤖", l: "Robotics" },
                  { e: "💻", l: "Coders" },
                  { e: "🎮", l: "Gamers" },
                  { e: "🧠", l: "AI Builders" },
                  { e: "🔧", l: "Makers" },
                  { e: "🎨", l: "Creators" },
                  { e: "📐", l: "Designers" },
                ].map((p) => (
                  <motion.div
                    key={p.l}
                    whileHover={{ y: -2, scale: 1.04 }}
                    className="flex flex-col items-center gap-1.5 p-3 rounded-xl cursor-default transition-colors duration-300"
                    style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,191,255,0.2)";
                      (e.currentTarget as HTMLDivElement).style.background = "rgba(0,191,255,0.04)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.05)";
                      (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.02)";
                    }}
                  >
                    <span className="text-xl">{p.e}</span>
                    <span className="font-mono text-[9px] text-[#444] tracking-wider text-center">{p.l}</span>
                  </motion.div>
                ))}
              </div>

              {/* Voltage meter bars */}
              <div className="space-y-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-mono text-[10px] text-[#444] tracking-[0.3em] uppercase">Output Level</span>
                  <span className="font-mono text-[10px] text-electric-blue/60 uppercase">Full Charge</span>
                </div>
                {bars.map((b, i) => (
                  <div key={b.label}>
                    <div className="flex justify-between mb-1.5">
                      <span className="font-mono text-[11px] text-[#555]">{b.label}</span>
                      <span className="font-mono text-[11px] text-electric-blue/60">{b.pct}%</span>
                    </div>
                    <div className="h-px rounded-full" style={{ background: "rgba(255,255,255,0.04)" }}>
                      <motion.div
                        className="h-full rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${b.pct}%` } : {}}
                        transition={{ duration: 1.2, delay: 0.6 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                          background: "linear-gradient(90deg, #0066FF, #00BFFF)",
                          boxShadow: "0 0 6px rgba(0,191,255,0.5)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Corner glow */}
              <div
                className="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-3xl opacity-10 pointer-events-none"
                style={{ background: "#00BFFF" }}
                aria-hidden="true"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
