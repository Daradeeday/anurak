# Monster Landing (Next.js 14 + Tailwind + Framer Motion)

A responsive, animated landing page inspired by your mock. It uses your group photo as the background and a bold yellow/black theme. The **Get Started** button links to your Google Drive folder.

## ✨ Features
- Next.js 14 (App Router) — Vercel‑ready
- Tailwind CSS — clean, modern styling
- Framer Motion — subtle + delightful animations
- Fully responsive for **mobile, tablet (iPad), and desktop**
- Optimized `next/image` background, prefetch hints, and lightweight assets
- Accessible focus styles and keyboard navigation

## 🚀 Quick Start

```bash
pnpm i        # or: npm i  |  yarn
pnpm dev      # or: npm run dev
# open http://localhost:3000
```

## 📦 Build & Deploy (Vercel)
1. Push this folder to your Git repository (GitHub/GitLab).
2. Go to **Vercel → New Project → Import** your repo.
3. Framework preset: *Next.js* (auto-detected).
4. Environment variables: none required.
5. Click **Deploy**.

> Static assets (images, CSS) are cached by Vercel’s CDN for scale. The page uses no server-side dynamic code, so it scales to very high traffic.

## 🔗 Change the Destination Link
Open `components/Card.tsx` and update `DRIVE_URL` if needed.

## 🎨 Customize
- Colors: `tailwind.config.ts` under `theme.extend.colors.brand`
- Text & Labels: `components/Card.tsx` and `app/page.tsx`
- Background: replace `public/hero.jpg` with another photo (same filename).

## 🧪 Checklist for production
- [ ] Set project to **Edge Network** on Vercel (default for Next.js)
- [ ] Enable **Image Optimization** (default) for `next/image`
- [ ] Add a custom domain if you have one
- [ ] Run `pnpm build` locally to catch any type errors

---

© 2025 DDECH PRODUCTION — crafted for high performance and a great first impression.
