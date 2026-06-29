"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setLoading(true);

    // Frontend-only fake submit — replace this block with a real API call
    // (e.g., Mailchimp, ConvertKit, Resend, or a Square Marketing integration)
    await new Promise((r) => setTimeout(r, 1200));

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      id="signup"
      className="relative py-28 lg:py-36 bg-matte-black overflow-hidden"
    >
      {/* Ambient blue glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(0,191,255,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Icon — lightning bolt */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center mb-8"
        >
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center border border-electric-blue/30"
            style={{ boxShadow: "0 0 30px rgba(0,191,255,0.2)" }}
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <path
                d="M15 3L5 16H13L11 25L23 12H15L15 3Z"
                stroke="#00BFFF"
                strokeWidth="1.5"
                strokeLinejoin="round"
                fill="rgba(0,191,255,0.1)"
              />
            </svg>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px bg-electric-blue/50" />
            <span className="font-mono text-xs tracking-[0.4em] text-electric-blue uppercase">
              Launch Notification
            </span>
            <div className="w-8 h-px bg-electric-blue/50" />
          </div>

          <h2 className="font-black text-4xl lg:text-5xl text-white tracking-tight mb-4">
            GET NOTIFIED
            <br />
            <span style={{ color: "#00BFFF" }}>AT LAUNCH.</span>
          </h2>
          <p className="text-silver-dim text-lg max-w-lg mx-auto mb-10 leading-relaxed">
            Be the first to know when THE CAPACITOR goes live. Early supporters
            get exclusive access and launch pricing.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            >
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError("");
                  }}
                  placeholder="your@email.com"
                  className="w-full px-5 py-4 bg-dark-card border border-white/10 rounded-lg font-mono text-sm text-white placeholder-silver-dim/40 focus:outline-none focus:border-electric-blue/50 focus:ring-1 focus:ring-electric-blue/30 transition-all duration-300"
                  aria-label="Email address"
                  required
                />
                {error && (
                  <p className="absolute -bottom-6 left-0 text-xs font-mono text-red-400">
                    {error}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="relative px-7 py-4 font-mono font-bold text-sm tracking-[0.15em] uppercase text-black bg-electric-blue rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 active:scale-100 disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
                style={{ boxShadow: "0 0 24px rgba(0,191,255,0.3)" }}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      />
                    </svg>
                    Charging...
                  </span>
                ) : (
                  "Stay Charged"
                )}
              </button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-lg mx-auto p-8 bg-dark-card border border-electric-blue/30 rounded-2xl"
              style={{ boxShadow: "0 0 40px rgba(0,191,255,0.1)" }}
            >
              <div className="flex items-center justify-center mb-4">
                <div
                  className="w-12 h-12 rounded-full bg-electric-blue/10 border border-electric-blue/30 flex items-center justify-center"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path
                      d="M4 10l4 4 8-8"
                      stroke="#00BFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="font-mono font-bold text-white text-lg tracking-wider mb-2">
                YOU&apos;RE CHARGED.
              </h3>
              <p className="text-silver-dim text-sm leading-relaxed">
                We&apos;ll hit you with an alert the moment THE CAPACITOR goes live.
                Welcome to the build crew.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 text-xs text-silver-dim/40 font-mono"
        >
          No spam. Unsubscribe anytime. We respect your frequency.
        </motion.p>
      </div>
    </section>
  );
}
