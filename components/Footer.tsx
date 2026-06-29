"use client";

import Link from "next/link";
import Image from "next/image";

// ── SQUARE CHECKOUT LINK ─────────────────────────────────────────────────────
// Replace with your real Square product/checkout link
const SQUARE_CHECKOUT_URL = "https://square.link/u/PLACEHOLDER";
// ─────────────────────────────────────────────────────────────────────────────

// TODO: Replace these with your actual social media URLs
const INSTAGRAM_URL = "https://instagram.com/thecapacitor";
const TIKTOK_URL = "https://tiktok.com/@thecapacitor";

const footerLinks = [
  {
    label: "Product",
    links: [
      { name: "Original Charge", href: "#product" },
      { name: "Performance", href: "#features" },
      // SQUARE CHECKOUT — replace href with real Square link when ready
      { name: "Buy on Square", href: SQUARE_CHECKOUT_URL, external: true },
    ],
  },
  {
    label: "Brand",
    links: [
      { name: "Our Story", href: "#story" },
      { name: "Mission", href: "#story" },
      { name: "Get Notified", href: "#signup" },
    ],
  },
  {
    label: "Connect",
    links: [
      { name: "Contact", href: "mailto:hello@thecapacitor.com" },
      { name: "Instagram", href: INSTAGRAM_URL, external: true },
      { name: "TikTok", href: TIKTOK_URL, external: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative bg-dark-surface border-t border-white/5 overflow-hidden"
    >
      {/* Top blue line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(0,191,255,0.6) 50%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-16">

          {/* Brand column */}
          <div className="col-span-2 lg:col-span-1">
            {/* TODO: Place your logo at /public/images/logo-white.png */}
            <div className="relative w-7 h-7 mb-4">
              <Image
                src="/images/logo-white.png"
                alt="THE CAPACITOR logo"
                fill
                className="object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
            <h3 className="font-mono font-black text-sm tracking-[0.3em] text-white uppercase mb-3">
              THE CAPACITOR
            </h3>
            <p className="text-silver-dim text-sm leading-relaxed max-w-xs mb-6">
              Clean. Powerful. Sustained Energy. Built for the builders of
              tomorrow.
            </p>
            {/* Social icons */}
            <div className="flex gap-4">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded border border-white/10 flex items-center justify-center text-silver-dim hover:text-electric-blue hover:border-electric-blue/40 transition-all duration-300"
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded border border-white/10 flex items-center justify-center text-silver-dim hover:text-electric-blue hover:border-electric-blue/40 transition-all duration-300"
                aria-label="TikTok"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.label}>
              <h4 className="font-mono text-xs tracking-[0.3em] text-electric-blue uppercase mb-5">
                {col.label}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.name}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-silver-dim hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-silver-dim hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-silver-dim/50 text-center md:text-left">
            © {new Date().getFullYear()} THE CAPACITOR. All rights reserved.
          </p>
          <p className="font-mono text-xs text-silver-dim/40 text-center max-w-sm">
            Concept product. Final formula, ingredients, and nutrition facts
            pending. Not intended to diagnose, treat, or cure any condition.
          </p>
        </div>
      </div>
    </footer>
  );
}
