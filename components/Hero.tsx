"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// ── SQUARE CHECKOUT LINK ─────────────────────────────────────────────────────
// Replace with your real Square product/checkout link
const SQUARE_CHECKOUT_URL = "https://square.link/u/PLACEHOLDER";
// ─────────────────────────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animated particle grid background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrameId: number;
    let t = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cols = 24;
      const rows = 14;
      const cellW = canvas.width / cols;
      const cellH = canvas.height / rows;

      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x = i * cellW;
          const y = j * cellH;
          const wave = Math.sin(t * 0.02 + i * 0.3 + j * 0.4) * 0.5 + 0.5;
          const alpha = wave * 0.12;

          ctx.beginPath();
          ctx.arc(x, y, 1.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 191, 255, ${alpha})`;
          ctx.fill();
        }
      }

      // Vertical scan line
      const scanX = ((t * 2) % canvas.width);
      const grad = ctx.createLinearGradient(scanX - 60, 0, scanX + 2, 0);
      grad.addColorStop(0, "rgba(0,191,255,0)");
      grad.addColorStop(1, "rgba(0,191,255,0.04)");
      ctx.fillStyle = grad;
      ctx.fillRect(scanX - 60, 0, 62, canvas.height);

      t++;
      animFrameId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-matte-black">
      {/* Animated grid canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-70"
        aria-hidden="true"
      />

      {/* Radial blue glow center */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 50%, rgba(0,191,255,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, #0A0A0A)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 items-center min-h-[80vh]">

          {/* Left — copy */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            {/* Eyebrow tag */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-8 h-px bg-electric-blue" />
              <span className="font-mono text-xs tracking-[0.4em] text-electric-blue uppercase">
                Premium Energy
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.25}
              className="font-sans font-black leading-[0.9] tracking-tight mb-6"
              style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)" }}
            >
              <span className="block text-white">CHARGE</span>
              <span className="block text-white">YOUR</span>
              <span
                className="block text-glow-blue"
                style={{ color: "#00BFFF" }}
              >
                POTENTIAL.
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.4}
              className="text-silver-dim text-lg leading-relaxed max-w-md mb-10 font-sans"
            >
              A premium energy drink engineered for focus, performance, and
              sustained energy. Built for the builders of tomorrow.
            </motion.p>

            {/* CTA row */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.55}
              className="flex flex-wrap gap-4"
            >
              {/* Primary CTA — Square checkout */}
              {/* TODO: Replace href with your real Square checkout/product page URL */}
              <a
                href={SQUARE_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 font-mono font-bold text-sm tracking-[0.2em] uppercase text-black bg-electric-blue rounded overflow-hidden transition-all duration-300 hover:scale-105 active:scale-100"
                style={{ boxShadow: "0 0 30px rgba(0,191,255,0.4)" }}
              >
                <span className="relative z-10">Join the Charge</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </a>

              {/* Secondary CTA */}
              <a
                href="#product"
                className="px-8 py-4 font-mono font-bold text-sm tracking-[0.2em] uppercase text-white border border-white/20 rounded hover:border-electric-blue hover:text-electric-blue transition-all duration-300"
              >
                View Product
              </a>
            </motion.div>

            {/* Spec pills */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.7}
              className="flex flex-wrap gap-3 mt-10"
            >
              {["Zero Sugar", "200mg Caffeine", "No Crash", "Electrolytes"].map(
                (spec) => (
                  <span
                    key={spec}
                    className="px-3 py-1 text-xs font-mono tracking-widest text-electric-blue/70 border border-electric-blue/20 rounded-full uppercase"
                  >
                    {spec}
                  </span>
                )
              )}
            </motion.div>
          </div>

          {/* Right — product image */}
          <div className="relative flex items-center justify-center order-1 lg:order-2">
            {/* Outer glow ring */}
            <div
              className="absolute w-[420px] h-[420px] rounded-full opacity-20 blur-3xl"
              style={{ background: "radial-gradient(circle, #00BFFF, transparent 70%)" }}
              aria-hidden="true"
            />

            {/* Product image */}
            {/* TODO: Place your product image at /public/images/hero-capacitor.png */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-[300px] h-[480px] lg:w-[360px] lg:h-[580px]"
              style={{ animation: "float 6s ease-in-out infinite" }}
            >
              <Image
                src="/images/hero-capacitor.png"
                alt="THE CAPACITOR energy drink"
                fill
                priority
                className="object-contain drop-shadow-2xl"
                style={{ filter: "drop-shadow(0 0 40px rgba(0,191,255,0.25))" }}
              />

              {/* Reflection / shimmer */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 60%)",
                  borderRadius: "8px",
                }}
                aria-hidden="true"
              />
            </motion.div>

            {/* Corner accent lines */}
            <div className="absolute top-8 right-8 w-16 h-16 border-t border-r border-electric-blue/30" aria-hidden="true" />
            <div className="absolute bottom-8 left-8 w-16 h-16 border-b border-l border-electric-blue/30" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs tracking-[0.4em] text-silver-dim uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-electric-blue/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
