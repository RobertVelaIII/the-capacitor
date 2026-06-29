"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SQUARE_CHECKOUT_URL, LOGO_WHITE, SOCIAL } from "@/lib/constants";
import GlowButton from "@/components/ui/GlowButton";

const COL_LINKS = [
  {
    label: "Product",
    links: [
      { name: "Original Charge",   href: "#product" },
      { name: "Performance Specs", href: "#specs" },
      { name: "Ingredients",       href: "#specs" },
      // TODO: Replace SQUARE_CHECKOUT_URL in lib/constants.ts with real Square link
      { name: "Buy on Square",     href: SQUARE_CHECKOUT_URL, external: true },
    ],
  },
  {
    label: "Brand",
    links: [
      { name: "Why The Capacitor", href: "#story" },
      { name: "Our Story",         href: "#story" },
      { name: "Built For Builders",href: "#story" },
      { name: "FAQ",               href: "#faq" },
    ],
  },
  {
    label: "Connect",
    links: [
      { name: "Join the List",  href: "#signup" },
      { name: "Instagram",      href: SOCIAL.instagram, external: true },
      { name: "TikTok",         href: SOCIAL.tiktok,    external: true },
      { name: "X / Twitter",    href: SOCIAL.twitter,   external: true },
      { name: "Contact",        href: `mailto:${SOCIAL.email}` },
    ],
  },
];

export default function Footer() {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer
      id="contact"
      className="relative bg-[#080808] overflow-hidden"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      {/* Top blue line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent 0%, rgba(0,191,255,0.5) 50%, transparent 100%)" }}
        aria-hidden="true"
      />

      {/* Main columns */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-16">

          {/* Brand column */}
          <div className="col-span-2 lg:col-span-1">
            {/* TODO: Place logo at /public/images/logo-white.png */}
            <div className="flex items-center gap-2.5 mb-5">
              <div className="relative w-6 h-6">
                {!logoError ? (
                  <Image
                    src={LOGO_WHITE}
                    alt="THE CAPACITOR"
                    fill
                    className="object-contain"
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <div
                    className="w-6 h-6 rounded flex items-center justify-center"
                    style={{ background: "rgba(0,191,255,0.1)", border: "1px solid rgba(0,191,255,0.25)" }}
                  >
                    <span className="font-mono font-black text-electric-blue text-[9px]">TC</span>
                  </div>
                )}
              </div>
              <span className="font-mono font-bold text-[10px] tracking-[0.35em] text-white uppercase">
                The Capacitor
              </span>
            </div>

            <p className="text-[#444] text-sm leading-relaxed max-w-xs mb-7">
              Clean. Powerful. Sustained Energy.
              <br />
              Built for the builders of tomorrow.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {[
                {
                  href: SOCIAL.instagram, label: "Instagram",
                  icon: (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="5" />
                      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
                    </svg>
                  ),
                },
                {
                  href: SOCIAL.tiktok, label: "TikTok",
                  icon: (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" strokeLinecap="round" />
                    </svg>
                  ),
                },
                {
                  href: SOCIAL.twitter, label: "X / Twitter",
                  icon: (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.3 5H20.5L15.3 10.9L21.5 19H16.5L12.5 13.8L7.8 19H5.6L11.1 12.7L5.2 5H10.3L13.9 9.7L18.3 5ZM17.4 17.7H18.6L9.3 6.3H8L17.4 17.7Z" />
                    </svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded flex items-center justify-center text-[#444] hover:text-electric-blue transition-all duration-300"
                  style={{ border: "1px solid rgba(255,255,255,0.06)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(0,191,255,0.3)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)")}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {COL_LINKS.map((col) => (
            <div key={col.label}>
              <h4 className="font-mono text-[10px] tracking-[0.4em] text-electric-blue uppercase mb-5">
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
                        className="text-sm text-[#444] hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-[#444] hover:text-white transition-colors duration-200"
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

        {/* CTA strip */}
        <div
          className="rounded-2xl p-8 mb-12 flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{ background: "rgba(0,191,255,0.03)", border: "1px solid rgba(0,191,255,0.1)" }}
        >
          <div>
            <p className="font-bold text-white text-lg mb-1">Ready to get charged?</p>
            <p className="text-[#555] text-sm">Join early and lock in launch pricing.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <GlowButton href="#signup" variant="primary" size="md">
              Join the Charge
            </GlowButton>
            <GlowButton
              href={SQUARE_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              size="md"
            >
              Buy on Square
            </GlowButton>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
        >
          <p className="font-mono text-[11px] text-[#333]">
            © {new Date().getFullYear()} THE CAPACITOR. All rights reserved.
          </p>
          <p className="font-mono text-[10px] text-[#222] text-center max-w-sm">
            Concept product. Final formula, ingredients, and nutrition facts pending.
            Not intended to diagnose, treat, or cure any condition.
          </p>
        </div>
      </div>
    </footer>
  );
}
