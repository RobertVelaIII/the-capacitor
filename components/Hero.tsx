"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { SQUARE_CHECKOUT_URL, HERO_IMAGE_CANDIDATES } from "@/lib/constants";
import PCBBackground from "@/components/ui/PCBBackground";
import ProductImage from "@/components/ui/ProductImage";
import GlowButton from "@/components/ui/GlowButton";

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] } },
});

// ── Particle canvas ────────────────────────────────────────────────────────────
function ParticleCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let t = 0;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const W = () => canvas.width;
    const H = () => canvas.height;

    // Particles
    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * 1400,
      y: Math.random() * 900,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.5 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W(), H());

      // Dot grid
      const cols = 28;
      const rows = 18;
      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x = (i / cols) * W();
          const y = (j / rows) * H();
          const wave = Math.sin(t * 0.018 + i * 0.25 + j * 0.35) * 0.5 + 0.5;
          ctx.beginPath();
          ctx.arc(x, y, 0.9, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0,191,255,${wave * 0.09})`;
          ctx.fill();
        }
      }

      // Moving particles + connection lines
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W();
        if (p.x > W()) p.x = 0;
        if (p.y < 0) p.y = H();
        if (p.y > H()) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,191,255,${p.alpha * 0.7})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dist = Math.hypot(p.x - q.x, p.y - q.y);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(0,191,255,${(1 - dist / 110) * 0.06})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      t++;
      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, []);

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  );
}

// ── Lightning bolt ─────────────────────────────────────────────────────────────
function LightningCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    function bolt(
      ctx: CanvasRenderingContext2D,
      x1: number, y1: number,
      x2: number, y2: number,
      depth: number
    ) {
      if (depth <= 0) {
        ctx.lineTo(x2, y2);
        return;
      }
      const mx = (x1 + x2) / 2 + (Math.random() - 0.5) * 70;
      const my = (y1 + y2) / 2 + (Math.random() - 0.5) * 10;
      bolt(ctx, x1, y1, mx, my, depth - 1);
      bolt(ctx, mx, my, x2, y2, depth - 1);
    }

    // Non-null aliases so closures pass strict type checks
    const canvasEl: HTMLCanvasElement = canvas;
    const context: CanvasRenderingContext2D = ctx;

    function strike() {
      const W = canvasEl.width;
      const H = canvasEl.height;
      const startX = W * (0.3 + Math.random() * 0.4);
      const endX   = startX + (Math.random() - 0.5) * 120;

      let alpha = 0;
      let phase: "in" | "out" = "in";
      let raf: number;

      const animate = () => {
        context.clearRect(0, 0, W, H);

        if (phase === "in") {
          alpha = Math.min(alpha + 0.12, 1);
          if (alpha >= 1) phase = "out";
        } else {
          alpha = Math.max(alpha - 0.06, 0);
        }

        if (alpha <= 0) {
          cancelAnimationFrame(raf);
          return;
        }

        // Outer glow
        context.save();
        context.globalAlpha = alpha * 0.3;
        context.shadowColor = "#00BFFF";
        context.shadowBlur  = 30;
        context.strokeStyle = "rgba(0,191,255,0.8)";
        context.lineWidth   = 4;
        context.beginPath();
        context.moveTo(startX, 0);
        bolt(context, startX, 0, endX, H * 0.7, 5);
        context.stroke();
        context.restore();

        // Core
        context.save();
        context.globalAlpha = alpha * 0.9;
        context.strokeStyle = "#ffffff";
        context.lineWidth   = 1.2;
        context.shadowColor = "#00BFFF";
        context.shadowBlur  = 12;
        context.beginPath();
        context.moveTo(startX, 0);
        bolt(context, startX, 0, endX, H * 0.7, 4);
        context.stroke();
        context.restore();

        raf = requestAnimationFrame(animate);
      };

      animate();
    }

    // Fire immediately then every 15–20 seconds
    const initial = setTimeout(strike, 2000);
    const interval = setInterval(strike, 15000 + Math.random() * 5000);

    return () => {
      clearTimeout(initial);
      clearInterval(interval);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}

// ── Hero ───────────────────────────────────────────────────────────────────────
export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const SPECS = ["Zero Sugar", "200mg Caffeine", "Electrolytes", "No Crash"];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-matte-black">

      {/* PCB background texture */}
      <PCBBackground />

      {/* Particle + grid canvas */}
      <div className="absolute inset-0 opacity-60">
        {mounted && <ParticleCanvas />}
      </div>

      {/* Lightning overlay */}
      <div className="absolute inset-0 z-10">
        {mounted && <LightningCanvas />}
      </div>

      {/* Ambient radial glow — slowly drifts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute ambient-glow"
          style={{
            width: "900px",
            height: "900px",
            top: "50%",
            left: "55%",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(ellipse, rgba(0,191,255,0.07) 0%, transparent 65%)",
          }}
        />
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none z-10"
        style={{ background: "linear-gradient(to bottom, transparent, #0A0A0A)" }}
        aria-hidden="true"
      />

      {/* ── Main content ─────────────────────────────────────────────────── */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 items-center min-h-[86vh]">

          {/* LEFT — copy */}
          <div className="flex flex-col justify-center order-2 lg:order-1 lg:pr-12">

            {/* Eyebrow */}
            <motion.div
              variants={fadeUp(0.1)}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-3 mb-10"
            >
              <div className="w-8 h-px bg-electric-blue" />
              <span className="font-mono text-[10px] tracking-[0.5em] text-electric-blue uppercase">
                Premium Energy Drink
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp(0.2)}
              initial="hidden"
              animate="visible"
              className="font-black leading-[0.88] tracking-tight mb-7"
              style={{ fontSize: "clamp(3.2rem, 9vw, 7rem)" }}
            >
              <span className="block headline-gradient">CHARGE</span>
              <span className="block headline-gradient">YOUR</span>
              <span className="block text-glow-blue" style={{ color: "#00BFFF" }}>
                POTENTIAL.
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={fadeUp(0.35)}
              initial="hidden"
              animate="visible"
              className="text-[#888] text-lg leading-relaxed max-w-md mb-10"
            >
              A premium energy drink engineered for focus, performance, and
              sustained energy. Built for the builders of tomorrow.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp(0.5)}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4 mb-10"
            >
              {/* TODO: Replace SQUARE_CHECKOUT_URL in lib/constants.ts with your real Square link */}
              <GlowButton
                href={SQUARE_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
              >
                Join the Charge
              </GlowButton>
              <GlowButton href="#product" variant="secondary" size="lg">
                View Product
              </GlowButton>
            </motion.div>

            {/* Spec pills */}
            <motion.div
              variants={fadeUp(0.65)}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-2"
            >
              {SPECS.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 font-mono text-[10px] tracking-[0.2em] uppercase rounded-full"
                  style={{
                    color: "rgba(0,191,255,0.65)",
                    border: "1px solid rgba(0,191,255,0.15)",
                    background: "rgba(0,191,255,0.04)",
                  }}
                >
                  {s}
                </span>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — product image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center order-1 lg:order-2 min-h-[400px] lg:min-h-[600px]"
          >
            {/* Outer ambient ring */}
            <div
              className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(0,191,255,0.06) 0%, transparent 68%)",
                filter: "blur(40px)",
              }}
              aria-hidden="true"
            />

            {/* Product image container — half the hero */}
            {/* TODO: Drop hero-can.png or can.png into /public/images/ — displays automatically */}
            <div
              className="relative w-[280px] h-[460px] lg:w-[340px] lg:h-[560px] float"
              style={{ filter: "drop-shadow(0 0 60px rgba(0,191,255,0.18))" }}
            >
              <ProductImage
                candidates={HERO_IMAGE_CANDIDATES}
                alt="THE CAPACITOR Original Charge"
                priority
              />
            </div>

            {/* Tech corner accents */}
            <div className="absolute top-6 right-6 w-14 h-14 border-t border-r border-electric-blue/20 pointer-events-none" aria-hidden="true" />
            <div className="absolute bottom-6 left-6 w-14 h-14 border-b border-l border-electric-blue/20 pointer-events-none" aria-hidden="true" />

            {/* Floating data tag */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-12 -right-4 lg:right-2 glass rounded-lg px-3 py-2 pointer-events-none"
            >
              <p className="font-mono text-[9px] tracking-widest text-electric-blue/70 uppercase">Caffeine</p>
              <p className="font-mono font-black text-sm text-white">200mg</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-16 -left-4 lg:left-2 glass rounded-lg px-3 py-2 pointer-events-none"
            >
              <p className="font-mono text-[9px] tracking-widest text-electric-blue/70 uppercase">Sugar</p>
              <p className="font-mono font-black text-sm text-white">Zero</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="font-mono text-[9px] tracking-[0.5em] text-[#444] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-px h-8"
          style={{ background: "linear-gradient(to bottom, rgba(0,191,255,0.5), transparent)" }}
        />
      </motion.div>
    </section>
  );
}
