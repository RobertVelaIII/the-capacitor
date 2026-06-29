"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const FAQS = [
  {
    q: "When does THE CAPACITOR launch?",
    a: "We&apos;re targeting a launch in late 2026. Join our notification list and you&apos;ll be the first to know — and the first to get access to early supporter pricing.",
  },
  {
    q: "How is THE CAPACITOR different from other energy drinks?",
    a: "Most energy drinks are engineered to taste good and create dependence through sugar crashes. We engineered ours for engineers — precise caffeine dosing (200mg), zero sugar, a full B-vitamin complex, and electrolytes. No mystery &apos;proprietary blends.&apos; Every ingredient disclosed.",
  },
  {
    q: "What are the ingredients? Is it safe?",
    a: "The final formula is still being validated, but the core stack includes 200mg natural caffeine (from green tea and coffee bean extracts), B6 and B12 vitamins, sodium and potassium electrolytes, and zero added sugar. No artificial dyes. No taurine spikes. Safety is non-negotiable.",
  },
  {
    q: "Will it be available in stores?",
    a: "We&apos;re launching direct-to-consumer first via Square — available in 12-packs. Retail partnerships are a future chapter. Follow us to stay updated.",
  },
  {
    q: "Can I order for my team or company?",
    a: "Absolutely. Bulk and team orders are on our roadmap. If you&apos;re interested in stocking your office, lab, or studio — email us and we&apos;ll put you on the early access list.",
  },
  {
    q: "Does it actually taste good?",
    a: "We refused to compromise on taste. Zero sugar doesn&apos;t mean zero flavor. The Original Charge formula is currently in taste testing. If it doesn&apos;t make us want to drink it, it doesn&apos;t ship.",
  },
  {
    q: "What&apos;s the caffeine source?",
    a: "Natural caffeine derived from green tea extract and coffee bean. Not synthetic anhydrous caffeine. This affects how it absorbs and tapers — contributing to the smoother, more sustained energy profile.",
  },
  {
    q: "Will there be a subscription?",
    a: "Yes. A monthly subscription (with free shipping) is planned for launch. Subscribe once, stay charged.",
  },
];

function FAQItem({ item, index, isOpen, onToggle }: {
  item: typeof FAQS[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="border-b"
      style={{ borderColor: "rgba(255,255,255,0.05)" }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span
          className="font-sans font-semibold text-base pr-8 transition-colors duration-200"
          style={{ color: isOpen ? "#ffffff" : "#888" }}
        >
          {item.q.replace(/&apos;/g, "'")}
        </span>
        <span
          className="shrink-0 w-6 h-6 rounded flex items-center justify-center transition-all duration-300"
          style={{
            background: isOpen ? "rgba(0,191,255,0.15)" : "rgba(255,255,255,0.04)",
            border: isOpen ? "1px solid rgba(0,191,255,0.3)" : "1px solid rgba(255,255,255,0.07)",
            color: isOpen ? "#00BFFF" : "#555",
          }}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
            <path
              d={isOpen ? "M2 5h6" : "M5 2v6M2 5h6"}
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p
              className="pb-6 text-[#666] text-sm leading-relaxed max-w-2xl"
              dangerouslySetInnerHTML={{ __html: item.a }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" ref={ref} className="relative py-32 lg:py-44 bg-dark-surface overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-electric-blue" />
            <span className="font-mono text-[10px] tracking-[0.5em] text-electric-blue uppercase">FAQ</span>
          </div>
          <h2
            className="font-black tracking-tight leading-[0.9]"
            style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)" }}
          >
            COMMON
            <br />
            <span style={{ color: "#00BFFF" }}>QUESTIONS.</span>
          </h2>
        </motion.div>

        <div>
          {FAQS.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              index={i}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>
      </div>

      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
