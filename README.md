# THE CAPACITOR — Landing Page

Premium energy drink landing page built for engineers, makers, and builders.
Next.js 16 · TypeScript · Tailwind CSS · Framer Motion · Deployed on Vercel.

**Live:** https://the-capacitor.vercel.app
**Repo:** https://github.com/RobertVelaIII/the-capacitor

---

## Quick Start

```bash
cd the-capacitor
npm install
npm run dev
# → http://localhost:3000
```

---

## Add Your Images

Drop files into `/public/images/` and push. No code changes needed — the site auto-detects them in priority order.

| Purpose | Accepted filenames (tried in order) | Recommended size |
|---------|--------------------------------------|-----------------|
| Hero product render | `hero-can.png` → `can.png` → `hero-capacitor.png` | 800×1200px, transparent bg |
| Product Spotlight can | `can-front.png` → `can-product.png` | 600×900px, transparent bg |
| Logo (dark backgrounds) | `logo-white.png` | 200×200px, transparent bg |
| Logo (light backgrounds) | `logo-black.png` | 200×200px, transparent bg |

If an image is missing, an elegant branded placeholder is shown automatically.

---

## Configuration

Everything you'll need to update lives in **`lib/constants.ts`**:

```ts
// Square checkout link — replaces PLACEHOLDER everywhere on the site
export const SQUARE_CHECKOUT_URL = "https://square.link/u/PLACEHOLDER";

// Launch date — drives the Countdown section
export const LAUNCH_DATE = new Date("2026-10-15T09:00:00-06:00");

// Social links
export const SOCIAL = {
  instagram: "https://instagram.com/thecapacitor",
  tiktok:    "https://tiktok.com/@thecapacitor",
  twitter:   "https://x.com/thecapacitor",
  email:     "hello@thecapacitor.com",
};
```

---

## Project Structure

```
the-capacitor/
├── app/
│   ├── globals.css              # Global styles, glass/glow utilities, animations
│   ├── layout.tsx               # Root layout + SEO metadata
│   └── page.tsx                 # Page — composes all sections in order
├── components/
│   ├── Navbar.tsx               # Fixed nav, glass blur on scroll, mobile drawer
│   ├── Hero.tsx                 # Full-screen: particle canvas, lightning bolt, ambient glow
│   ├── WhyCapacitor.tsx         # Before/after contrast strips + 3 brand pillars
│   ├── Features.tsx             # 4-card performance grid
│   ├── DesignedForBuilders.tsx  # Animated scrolling ticker + stats bar
│   ├── ProductSpotlight.tsx     # Can image + spec table + Square CTA
│   ├── ProductSpecs.tsx         # Ingredient bars + competitor comparison table
│   ├── BrandStory.tsx           # Brand copy + audience grid + voltage bars
│   ├── FAQ.tsx                  # 8-question accordion
│   ├── Countdown.tsx            # Live countdown timer to launch date
│   ├── EmailSignup.tsx          # Email capture (frontend only — wire up backend)
│   ├── Footer.tsx               # Links, social icons, Square CTA, disclaimer
│   └── ui/
│       ├── GlowButton.tsx       # Reusable button: primary / secondary / ghost
│       ├── PCBBackground.tsx    # Subtle SVG circuit trace background
│       └── ProductImage.tsx     # Smart image with ordered fallback + placeholder
├── lib/
│   └── constants.ts             # ← Single config file: Square URL, dates, socials, image paths
├── public/
│   └── images/                  # ← Drop product images here
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

---

## Deploy to Vercel

Already deployed. To redeploy after changes:

```bash
git add .
git commit -m "your message"
git push origin main
# Vercel auto-deploys on push
```

To deploy manually:
```bash
vercel --prod
```

### Custom Domain
Vercel dashboard → Project Settings → Domains → add your domain.
Then update the `url` field in `app/layout.tsx`.

---

## Tech Stack

| Tool | Version | Role |
|------|---------|------|
| Next.js | 16 (App Router) | Framework |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 3 | Styling |
| Framer Motion | 11 | Animations |
| Vercel | — | Hosting + CI/CD |

---

## Animations Reference

| Effect | Where | Notes |
|--------|-------|-------|
| Particle canvas + connection lines | Hero | 60 moving particles, `requestAnimationFrame` |
| Lightning bolt | Hero | Fires at 2s, then every 15–20s randomly |
| Ambient glow drift | Hero | 20s CSS keyframe loop |
| Floating product image | Hero, Product | `float` keyframe |
| PCB circuit traces | Hero, Brand Story | SVG pattern, 2.8% opacity |
| Scrolling ticker rows | Designed For Builders | `framer-motion` infinite scroll |
| Staggered scroll reveals | All sections | `whileInView` + `once: true` |
| Live countdown digits | Countdown | Updates every second, flip animation |
| FAQ accordion | FAQ | Smooth `height: auto` via AnimatePresence |
| Button shimmer | All GlowButtons | CSS `::after` sweep on hover |
| Card border glow | Features, Brand Story | `onMouseEnter` inline style swap |

---

*Concept product. Final formula, ingredients, and nutrition facts pending.*
