"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlowButton from "@/components/ui/GlowButton";

export default function EmailSignup() {
  const [email,     setEmail]     = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);
  const [error,     setError]     = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Enter a valid email address.");
      return;
    }
    setError("");
    setLoading(true);

    // Frontend-only placeholder — replace with real API call when ready.
    // Options: Mailchimp, ConvertKit, Resend, Loops, or a /api/subscribe route.
    await new Promise((r) => setTimeout(r, 1100));

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="signup" className="relative py-32 lg:py-44 bg-dark-surface overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Bottom ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(0,191,255,0.06) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">

        {/* Lightning icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center mb-10"
        >
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center pulse-glow"
            style={{
              background: "rgba(0,191,255,0.06)",
              border: "1px solid rgba(0,191,255,0.2)",
            }}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <path
                d="M12 2L4 12.5H10.5L9.5 21L18 10.5H11.5L12 2Z"
                stroke="#00BFFF"
                strokeWidth="1.4"
                strokeLinejoin="round"
                fill="rgba(0,191,255,0.08)"
              />
            </svg>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px bg-electric-blue/50" />
            <span className="font-mono text-[10px] tracking-[0.5em] text-electric-blue uppercase">Early Access</span>
            <div className="w-8 h-px bg-electric-blue/50" />
          </div>
          <h2
            className="font-black tracking-tight leading-[0.9] mb-5"
            style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)" }}
          >
            GET NOTIFIED
            <br />
            <span style={{ color: "#00BFFF" }}>AT LAUNCH.</span>
          </h2>
          <p className="text-[#666] text-lg leading-relaxed">
            Be the first to know when THE CAPACITOR goes live.
            Early supporters get exclusive launch pricing.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16, scale: 0.97 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); if (error) setError(""); }}
                  placeholder="your@email.com"
                  className="w-full h-12 px-4 rounded-lg font-mono text-sm text-white placeholder-[#333] focus:outline-none transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: error
                      ? "1px solid rgba(255,80,80,0.5)"
                      : "1px solid rgba(255,255,255,0.08)",
                  }}
                  onFocus={(e) => { if (!error) (e.target as HTMLInputElement).style.borderColor = "rgba(0,191,255,0.4)"; }}
                  onBlur={(e)  => { if (!error) (e.target as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.08)"; }}
                  aria-label="Email address"
                  required
                />
                {error && (
                  <p className="absolute -bottom-5 left-0 font-mono text-[10px] text-red-400">{error}</p>
                )}
              </div>

              <GlowButton
                as="button"
                href="#"
                variant="primary"
                size="md"
                className={`h-12 whitespace-nowrap ${loading ? "opacity-60 pointer-events-none" : ""}`}
                onClick={(e) => { e.preventDefault(); handleSubmit(e as unknown as React.FormEvent); }}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin w-3 h-3" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-20" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-80" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Charging...
                  </span>
                ) : "Stay Charged"}
              </GlowButton>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-sm mx-auto p-8 rounded-2xl text-center"
              style={{
                background: "rgba(0,191,255,0.04)",
                border: "1px solid rgba(0,191,255,0.2)",
                boxShadow: "0 0 60px rgba(0,191,255,0.08)",
              }}
            >
              <div
                className="w-10 h-10 rounded-full mx-auto mb-4 flex items-center justify-center"
                style={{ background: "rgba(0,191,255,0.1)", border: "1px solid rgba(0,191,255,0.3)" }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8l3 3 7-7" stroke="#00BFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-mono font-bold text-white tracking-wider mb-2 text-sm uppercase">
                You&apos;re Charged.
              </h3>
              <p className="text-[#555] text-sm leading-relaxed">
                We&apos;ll alert you the moment THE CAPACITOR goes live.
                Welcome to the build crew.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-8 font-mono text-[10px] text-[#333]"
        >
          No spam. Unsubscribe anytime. We respect your frequency.
        </motion.p>
      </div>

      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
