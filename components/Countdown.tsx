"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { LAUNCH_DATE } from "@/lib/constants";
import GlowButton from "@/components/ui/GlowButton";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(): TimeLeft {
  const diff = LAUNCH_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days:    Math.floor(diff / 86400000),
    hours:   Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

function DigitBlock({ value, label }: { value: number; label: string }) {
  const [prev, setPrev] = useState(value);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (value !== prev) {
      setAnimate(true);
      const t = setTimeout(() => { setPrev(value); setAnimate(false); }, 320);
      return () => clearTimeout(t);
    }
  }, [value, prev]);

  const display = String(value).padStart(2, "0");
  const prevDisplay = String(prev).padStart(2, "0");

  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-xl overflow-hidden flex items-center justify-center"
        style={{
          background: "rgba(255,255,255,0.025)",
          border: "1px solid rgba(255,255,255,0.07)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
        }}
      >
        {/* Outgoing digit */}
        {animate && (
          <span
            className="absolute font-mono font-black text-3xl sm:text-4xl lg:text-5xl text-white"
            style={{ animation: "digitOut 0.32s ease forwards" }}
          >
            {prevDisplay}
          </span>
        )}
        {/* Current digit */}
        <span
          key={display}
          className="font-mono font-black text-3xl sm:text-4xl lg:text-5xl text-white"
          style={animate ? { animation: "digitFlip 0.32s cubic-bezier(0.16,1,0.3,1) forwards" } : {}}
        >
          {display}
        </span>

        {/* Top glow edge */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(0,191,255,0.3), transparent)" }}
          aria-hidden="true"
        />
      </div>
      <span className="font-mono text-[10px] tracking-[0.4em] text-[#444] uppercase">{label}</span>
    </div>
  );
}

export default function Countdown() {
  const [time, setTime] = useState<TimeLeft | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    setTime(getTimeLeft());
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const launched = time && (time.days === 0 && time.hours === 0 && time.minutes === 0 && time.seconds === 0);

  return (
    <section ref={ref} className="relative py-32 lg:py-44 bg-matte-black overflow-hidden">

      {/* Center ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(0,191,255,0.05) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-electric-blue/50" />
            <span className="font-mono text-[10px] tracking-[0.5em] text-electric-blue uppercase">
              {launched ? "We&apos;re Live" : "Launch Countdown"}
            </span>
            <div className="w-8 h-px bg-electric-blue/50" />
          </div>
          <h2
            className="font-black tracking-tight leading-[0.9] mb-6"
            style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)" }}
          >
            {launched ? (
              <>WE&apos;RE <span style={{ color: "#00BFFF" }}>LIVE.</span></>
            ) : (
              <>LAUNCHING<br /><span style={{ color: "#00BFFF" }}>SOON.</span></>
            )}
          </h2>
          <p className="text-[#555] text-lg max-w-lg mx-auto">
            {launched
              ? "THE CAPACITOR is available now. Get yours."
              : "THE CAPACITOR launches October 15, 2026. Join the list and get early access."}
          </p>
        </motion.div>

        {/* Digit blocks */}
        {time && !launched && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center gap-3 sm:gap-5 mb-16"
          >
            <DigitBlock value={time.days}    label="Days" />
            <span className="font-mono font-black text-3xl text-[#333] mb-6">:</span>
            <DigitBlock value={time.hours}   label="Hours" />
            <span className="font-mono font-black text-3xl text-[#333] mb-6">:</span>
            <DigitBlock value={time.minutes} label="Minutes" />
            <span className="font-mono font-black text-3xl text-[#333] mb-6">:</span>
            <DigitBlock value={time.seconds} label="Seconds" />
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <GlowButton href="#signup" variant="primary" size="lg">
            Join the Charge
          </GlowButton>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes digitOut {
          from { opacity: 1; transform: translateY(0); }
          to   { opacity: 0; transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
}
