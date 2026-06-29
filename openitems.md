# THE CAPACITOR — Open Items

## Images
- [ ] Upload `public/images/hero-can.png` or `can.png` — hero product shot (right side of hero, auto-detected)
- [ ] Upload `public/images/can-front.png` or `can-product.png` — Product Spotlight section (auto-detected)
- [ ] Upload `public/images/logo-white.png` — Navbar + Footer (falls back to "TC" monogram)
- [ ] Upload `public/images/logo-black.png` — reserved for light backgrounds

> Drop any of the above into `/public/images/` and push to GitHub — no code changes needed.

## Square Checkout
- [ ] Replace `SQUARE_CHECKOUT_URL` in `lib/constants.ts` (single file — propagates everywhere automatically)

## Domain
- [ ] Add custom domain in Vercel → Project Settings → Domains
- [ ] Update `url` field in `app/layout.tsx` metadata once domain is live
- [ ] Add `og:image` in `app/layout.tsx` once hero image and domain are set

## Social & Contact
- [ ] Update `SOCIAL.instagram`, `SOCIAL.tiktok`, `SOCIAL.twitter`, `SOCIAL.email` in `lib/constants.ts`

## Launch Date
- [ ] Update `LAUNCH_DATE` in `lib/constants.ts` (currently set to Oct 15 2026) — Countdown section reads from this automatically

## Email Signup
- [ ] Wire up `components/EmailSignup.tsx` to a real backend (currently fake success state)
  - Options: Mailchimp, ConvertKit, Resend, Loops, or a Next.js `/api/subscribe` route

## Product / Formula
- [ ] Finalize formula — update Calories row (currently "TBD") in `components/ProductSpotlight.tsx` and `components/ProductSpecs.tsx`
- [ ] Update disclaimer once ingredients and nutrition facts are confirmed
- [ ] Add more flavors to `components/ProductSpotlight.tsx` when additional SKUs are ready

## Future Sections
- [ ] Add Square Web Payments embed button (Square Payments SDK) when ready to transact
- [ ] Add "Where to Buy" section if stocking retail / distributor locations
- [ ] Add press / media kit section for manufacturers and investors
- [ ] Add nutrition facts panel image or component
- [ ] Add flavor lineup / comparison section for future SKUs

## SEO / Analytics
- [ ] Add Vercel Analytics — `npm i @vercel/analytics`, import in `app/layout.tsx`
- [ ] Add favicon — place `favicon.ico` or `icon.png` in `/app/` folder
- [ ] Add `apple-touch-icon` and `manifest.json` for PWA / mobile home screen

## Misc
- [ ] Remove `public/images/.gitkeep` once real images are uploaded
