# THE CAPACITOR — Landing Page

Premium energy drink landing page. Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

---

## Quick Start

```bash
cd the-capacitor
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Add Your Images

Place the following files in `/public/images/`:

| File | Used In | Recommended Size |
|------|---------|-----------------|
| `hero-capacitor.png` | Hero section (right side) | 800×1200px, transparent bg |
| `can-product.png` | Product Spotlight section | 600×900px, transparent bg |
| `logo-white.png` | Navbar + Footer | 200×200px, transparent bg |
| `logo-black.png` | Reserved for light themes | 200×200px, transparent bg |

> All images should be PNG with transparent backgrounds for the best look on dark backgrounds.

---

## Square Checkout Setup

Search for `SQUARE_CHECKOUT_URL` across the project — it appears in:

- `components/Navbar.tsx`
- `components/Hero.tsx`
- `components/ProductSpotlight.tsx`
- `components/Footer.tsx`

Replace `https://square.link/u/PLACEHOLDER` with your real Square checkout link in each file, or extract it to a shared `lib/constants.ts` file.

**To embed a Square payment button** in the future, Square provides an embeddable Web Payments SDK. You can drop it into a new `components/SquareBuyButton.tsx` client component.

---

## Project Structure

```
the-capacitor/
├── app/
│   ├── globals.css          # Global styles, Tailwind, custom utilities
│   ├── layout.tsx           # Root layout + SEO metadata
│   └── page.tsx             # Main page — composes all sections
├── components/
│   ├── Navbar.tsx           # Fixed nav with mobile menu
│   ├── Hero.tsx             # Full-screen hero with animated canvas
│   ├── Features.tsx         # 4-card performance feature grid
│   ├── ProductSpotlight.tsx # Can image + spec table + CTA
│   ├── BrandStory.tsx       # Brand copy + audience pillars + voltage bars
│   ├── EmailSignup.tsx      # Email capture with fake success state
│   └── Footer.tsx           # Links, social icons, disclaimer
├── public/
│   └── images/              # ← Place your images here
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

---

## Deploy to Vercel

### Option A — Vercel CLI (fastest)

```bash
npm install -g vercel
vercel login
vercel --prod
```

Follow the prompts. Vercel auto-detects Next.js — no config needed.

### Option B — GitHub + Vercel Dashboard

1. Push this repo to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial: THE CAPACITOR landing page"
   git remote add origin https://github.com/YOUR_USERNAME/the-capacitor.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import the GitHub repo
4. Framework: **Next.js** (auto-detected)
5. Click **Deploy**

### Custom Domain

In Vercel dashboard → **Project Settings → Domains** → add your domain (e.g., `thecapacitor.com`).

---

## Customization Checklist

- [ ] Replace all `SQUARE_CHECKOUT_URL` placeholders with real Square link
- [ ] Add product images to `/public/images/`
- [ ] Update social URLs in `Footer.tsx` (Instagram, TikTok)
- [ ] Update contact email in `Footer.tsx`
- [ ] Update SEO metadata in `app/layout.tsx` (url, og:image)
- [ ] Wire up email signup to real backend (Mailchimp, Resend, ConvertKit)
- [ ] Add real domain in Vercel settings

---

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS 3**
- **Framer Motion 11**
- **Vercel** (hosting)

---

*Concept product. Final formula, ingredients, and nutrition facts pending.*
