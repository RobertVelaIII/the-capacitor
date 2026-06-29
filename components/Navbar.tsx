"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SQUARE_CHECKOUT_URL, LOGO_WHITE } from "@/lib/constants";
import GlowButton from "@/components/ui/GlowButton";

const NAV_LINKS = [
  { label: "Product",     href: "#product" },
  { label: "Performance", href: "#features" },
  { label: "Our Story",   href: "#story" },
  { label: "FAQ",         href: "#faq" },
  { label: "Contact",     href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/75 backdrop-blur-2xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          {/* TODO: Place logo at /public/images/logo-white.png to replace placeholder */}
          <div className="relative w-7 h-7 flex items-center justify-center">
            {!logoError ? (
              <Image
                src={LOGO_WHITE}
                alt="THE CAPACITOR logo"
                fill
                className="object-contain"
                onError={() => setLogoError(true)}
              />
            ) : (
              /* Placeholder monogram */
              <div
                className="w-7 h-7 rounded flex items-center justify-center"
                style={{
                  background: "rgba(0,191,255,0.12)",
                  border: "1px solid rgba(0,191,255,0.3)",
                }}
              >
                <span className="font-mono font-black text-electric-blue text-[10px] leading-none">TC</span>
              </div>
            )}
          </div>
          <span className="font-mono font-bold text-[11px] tracking-[0.35em] text-white group-hover:text-electric-blue transition-colors duration-300 uppercase hidden sm:block">
            THE CAPACITOR
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-mono text-[11px] tracking-[0.25em] text-[#666] hover:text-white transition-colors duration-300 uppercase"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <GlowButton
            href={SQUARE_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="ghost"
            size="sm"
          >
            Shop Now
          </GlowButton>
          <GlowButton
            href="#signup"
            variant="primary"
            size="sm"
          >
            Join the Charge
          </GlowButton>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 flex flex-col gap-[5px]"
          aria-label="Toggle navigation"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-5 h-px bg-white transition-all duration-300"
              style={{
                transform:
                  menuOpen
                    ? i === 0 ? "rotate(45deg) translate(4px, 4px)"
                    : i === 2 ? "rotate(-45deg) translate(4px, -4px)"
                    : "scaleX(0)"
                    : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden bg-black/90 backdrop-blur-2xl border-b border-white/[0.06]"
          >
            <div className="px-6 py-8 flex flex-col gap-5">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-mono text-sm tracking-widest text-[#888] hover:text-white transition-colors uppercase"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-4 border-t border-white/[0.06] flex flex-col gap-3">
                <GlowButton
                  href={SQUARE_CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  className="w-full justify-center"
                >
                  Shop Now
                </GlowButton>
                <GlowButton
                  href="#signup"
                  variant="primary"
                  className="w-full justify-center"
                  onClick={() => setMenuOpen(false)}
                >
                  Join the Charge
                </GlowButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
