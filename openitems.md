# THE CAPACITOR — Open Items

## Images
- [ ] Upload `public/images/hero-capacitor.png` — main hero product shot (right side of hero section)
- [ ] Upload `public/images/can-product.png` — can image for Product Spotlight section
- [ ] Upload `public/images/logo-white.png` — white logo for Navbar and Footer
- [ ] Upload `public/images/logo-black.png` — black logo (reserved for light backgrounds)

## Square Checkout
- [ ] Replace `SQUARE_CHECKOUT_URL = "https://square.link/u/PLACEHOLDER"` with real Square link in:
  - `components/Navbar.tsx`
  - `components/Hero.tsx`
  - `components/ProductSpotlight.tsx`
  - `components/Footer.tsx`

## Domain
- [ ] Add custom domain in Vercel dashboard → Project Settings → Domains
- [ ] Update `app/layout.tsx` metadata `url` field to match real domain (currently commented out)
- [ ] Add `og:image` meta tag in `app/layout.tsx` once domain and hero image are live

## Social & Contact
- [ ] Update Instagram URL in `components/Footer.tsx` (currently `instagram.com/thecapacitor`)
- [ ] Update TikTok URL in `components/Footer.tsx` (currently `tiktok.com/@thecapacitor`)
- [ ] Update contact email in `components/Footer.tsx` (currently `hello@thecapacitor.com`)

## Email Signup
- [ ] Wire up the email form in `components/EmailSignup.tsx` to a real backend
  - Options: Mailchimp, ConvertKit, Resend, Square Marketing, or a simple API route
  - Currently shows a fake success state after 1.2s delay

## Product / Brand Copy
- [ ] Finalize formula — update spec table in `components/ProductSpotlight.tsx` (Calories row is TBD)
- [ ] Update disclaimer once final ingredients and nutrition facts are confirmed
- [ ] Confirm product name / flavor lineup (currently only "Original Charge")

## Future Sections / Features
- [ ] Add a real Square Web Payments embed button (Square Payments SDK) when ready to sell
- [ ] Add a "Where to Buy" section if stocking retail locations
- [ ] Add a press/media kit section for manufacturers and investors
- [ ] Add a nutrition facts panel image or component
- [ ] Consider adding a flavor lineup section when additional SKUs are ready

## SEO / Analytics
- [ ] Add Vercel Analytics (`@vercel/analytics`) for traffic tracking
- [ ] Add favicon — place `favicon.ico` or `icon.png` in `/app/` folder
- [ ] Add `apple-touch-icon` and `manifest.json` for PWA/mobile home screen

## Misc
- [ ] Remove `public/images/.gitkeep` after all real images are uploaded
- [ ] Remove `node_modules` from any accidental git tracking (already in `.gitignore`)
