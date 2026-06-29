"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// ── SQUARE CHECKOUT LINK ─────────────────────────────────────────────────────
// Replace the URL below with your real Square product/checkout link
const SQUARE_CHECKOUT_URL = "https://square.link/u/PLACEHOLDER";
// ─────────────────────────────────────────────────────────────────────────────

const navLinks = [
  { label: "Product", href: "#product" },
  { label: "Performance", href: "#features" },
  { label: "Our Story", href: "#story" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* TODO: Replace with your actual logo file at /public/images/logo-white.png */}
          <div className="relative w-8 h-8">
            <Image
              src="/images/logo-white.png"
              alt="THE CAPACITOR"
              fill
              className="object-contain"
              onError={(e) => {
                // Fallback: hide broken image
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
          <span className="font-mono text-sm tracking-[0.3em] text-white font-bold uppercase group-hover:text-electric-blue transition-colors duration-300">
            THE CAPACITOR
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-mono tracking-widest text-silver-dim hover:text-electric-blue transition-colors duration-300 uppercase"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          {/* SQUARE CHECKOUT — replace href with your real Square link */}
          <a
            href={SQUARE_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 text-xs font-mono font-bold tracking-[0.2em] uppercase text-electric-blue border border-electric-blue/50 rounded hover:bg-electric-blue/10 hover:border-electric-blue transition-all duration-300"
          >
            Shop Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 group"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10"
          >
            <div className="px-6 py-6 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-mono tracking-widest text-silver uppercase hover:text-electric-blue transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              {/* SQUARE CHECKOUT — mobile */}
              <a
                href={SQUARE_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-5 py-3 text-xs font-mono font-bold tracking-[0.2em] uppercase text-center text-electric-blue border border-electric-blue rounded"
              >
                Shop Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
