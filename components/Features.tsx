"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const features = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path
          d="M16 4L20 13H28L22 19L24 28L16 23L8 28L10 19L4 13H12L16 4Z"
          stroke="#00BFFF"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Clean Energy",
    description:
      "No artificial junk. No synthetic fillers. Just the precise blend of caffeine, B vitamins, and adaptogens your body actually uses.",
    stat: "200mg",
    statLabel: "Natural Caffeine",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="10" stroke="#00BFFF" strokeWidth="1.5" />
        <circle cx="16" cy="16" r="4" fill="#00BFFF" opacity="0.4" />
        <line x1="16" y1="6" x2="16" y2="10" stroke="#00BFFF" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="16" y1="22" x2="16" y2="26" stroke="#00BFFF" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="6" y1="16" x2="10" y2="16" stroke="#00BFFF" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="22" y1="16" x2="26" y2="16" stroke="#00BFFF" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Enhanced Focus",
    description:
      "Precision-dosed nootropic stack for deep work, flow states, and peak mental clarity — engineered like the machines you build.",
    stat: "4–6hrs",
    statLabel: "Sustained Focus",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="6" y="10" width="20" height="14" rx="2" stroke="#00BFFF" strokeWidth="1.5" />
        <path d="M12 10V8a4 4 0 018 0v2" stroke="#00BFFF" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 17l2 2 4-4" stroke="#00BFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Built Different",
    description:
      "Where other drinks give you a spike and a crash, THE CAPACITOR is engineered for sustained output — like the hardware you admire.",
    stat: "Zero",
    statLabel: "Sugar Added",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path
          d="M6 24L10 14L16 20L20 10L26 24"
          stroke="#00BFFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line x1="6" y1="24" x2="26" y2="24" stroke="#00BFFF" strokeWidth="1" opacity="0.3" />
      </svg>
    ),
    title: "Sustained Performance",
    description:
      "Electrolytes and B-vitamin matrix keep you operating at full capacity through long sessions, deadlines, and late-night builds.",
    stat: "No Crash",
    statLabel: "Guaranteed",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="features"
      ref={ref}
      className="relative py-28 lg:py-40 bg-dark-surface overflow-hidden"
    >
      {/* Top divider */}
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(0,191,255,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-electric-blue/50" />
            <span className="font-mono text-xs tracking-[0.4em] text-electric-blue uppercase">
              Performance Specs
            </span>
            <div className="w-12 h-px bg-electric-blue/50" />
          </div>
          <h2 className="font-black text-4xl lg:text-6xl tracking-tight text-white mb-4">
            ENGINEERED TO
            <br />
            <span style={{ color: "#00BFFF" }}>PERFORM.</span>
          </h2>
          <p className="text-silver-dim text-lg max-w-xl mx-auto leading-relaxed">
            Every ingredient chosen with purpose. No compromise. No filler.
            Just clean, sustained energy for people who build things.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i}
              className="group relative p-7 bg-dark-card border border-white/5 rounded-xl overflow-hidden hover:border-electric-blue/30 transition-all duration-500 cursor-default"
            >
              {/* Corner accent */}
              <div
                className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(circle at top right, rgba(0,191,255,0.12), transparent 70%)",
                }}
                aria-hidden="true"
              />

              {/* Icon */}
              <div className="mb-5 w-12 h-12 flex items-center justify-center rounded-lg bg-electric-blue/5 border border-electric-blue/10 group-hover:border-electric-blue/30 transition-colors duration-300">
                {feature.icon}
              </div>

              {/* Stat */}
              <div className="mb-1 font-mono font-black text-2xl text-electric-blue">
                {feature.stat}
              </div>
              <div className="mb-4 font-mono text-xs tracking-widest text-silver-dim uppercase">
                {feature.statLabel}
              </div>

              {/* Title */}
              <h3 className="font-bold text-lg text-white mb-3 tracking-tight">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-silver-dim leading-relaxed">
                {feature.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-blue/0 to-transparent group-hover:via-electric-blue/40 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
