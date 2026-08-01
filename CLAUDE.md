# Personal Portfolio — Claude Handoff

Context for resuming the portfolio revamp for **Aadarsh Ravi** (targeting **SDE + AI Engineer + Data Engineer** roles).

## Goal

Rebuild the portfolio to closely emulate the **"Majd" Framer template** (`majd-portfolio.framer.website`): minimal, **monochrome, warm cream + film grain**, oversized editorial typography, generous whitespace, motion-forward — while staying fully **coded** (no Framer, no paid CMS). Add real **per-project case-study pages** that double as **interview walkthroughs**.

## Stack & how to run

- Next.js 15 (App Router), React 18, TypeScript, Tailwind v3, Framer Motion 12.
- **The app lives in `portfolio/`** (not repo root).
- Run: `cd portfolio && npm run dev` → http://localhost:4000
- Build (SSG for `/work/*`): `cd portfolio && npm run build`
- **Next.js pinned to `15.5.22`** (real, consistent release). Do NOT use `15.5.11` — it's a broken publish with no matching `@next/swc` binaries, which 404s the Vercel Linux build. Never hand-pin `@next/swc*` in `optionalDependencies`; let Next manage it.
- **Vercel note:** the app is in `portfolio/`, so the Vercel project's **Root Directory must be `portfolio`**.
- If dev server misbehaves: kill port 4000, `rm -rf portfolio/.next`, restart.

## Design system

- **Light-first monochrome.** Tokens in `portfolio/app/globals.css`: `--bg #f1ede6` (warm cream), `--fg #0f0e0c`, `--muted`, `--border`, `--accent`; `.dark` inverts. Use Tailwind `bg-background / text-foreground / text-muted / border-border` — **never hardcode hex.**
- **Film grain** overlay via `body::before` (SVG turbulence), strength = `--grain-opacity`.
- **Fonts** (`portfolio/app/lib/fonts.js`): **Geist** (display + sans, local woff in `app/fonts/`), **Geist Mono**, **Playfair Display** (serif — used for write-ups / italic accents).
- **Section labels:** mono uppercase `(0X) Name`. Numbering: `(01) Expertise`, `(02) Work`, `(03) Experience`, `(04) Contact`.
- Light/dark **toggle kept** (default light); no-flash inline script in `app/layout.tsx` + `app/context/ThemeContext.tsx`.
- **Aesthetic rule the user cares about:** stay monochrome — do NOT introduce multiple box colors; create emphasis via **inverted (dark) tiles**, not color.

## Architecture

- **Project data = single source of truth:** `portfolio/app/lib/projects.ts`. `Project` fields: slug, title, tagline, description, role, year, tech[], cover, links[], metrics[], demoEmbedUrl, architectureImage, body[] (`CaseStudySection` supports `heading`, `body`, `points[]`, `image`). **Swap/add projects by editing this file only** — no component/routing changes.
- **Routing:** `/work/[slug]` SSG detail pages (`generateStaticParams` + `generateMetadata`) + `not-found`; `/work` index. Renderers: `ProjectDetail.tsx` (client; metrics, tech pills, demo iframe, architecture diagram with click-to-zoom lightbox, two-column editorial body, prev/next), `ProjectCard.tsx`.
- **Motion primitives:** `portfolio/app/components/motion/` — `Reveal`, `TextReveal`, `ParallaxImage`, `TiltCard`, `StickySection` + `config`. All respect `prefers-reduced-motion`.

## Section status

- **Hero** ✅ — centered cycling first word **SOFTWARE → AI → DATA** + fixed "ENGINEER"; rounded-rect portrait (`portfolio-picture.jpeg`, cropped); Playfair italic "Hey, I'm Aadarsh Ravi" + intro; Resume / View Work pills (sans).
- **Navbar** ✅ — floating pill (dark, inverts w/ theme); logo + desktop inline links + theme pill; mobile `...` expands to card menu; Esc/aria.
- **Expertise** ✅ — **bento grid** of category cards; **Gen AI / LLMs** is the big inverted feature tile (with blurb); pills fill on hover; skills market-researched for the 3 roles. (A masonry "category cards" variant also exists in history; bento was chosen.)
- **Projects** ✅ (layout) — Majd-style: "Featured Projects" heading + "View All Work" (→ `/work`) + 2-col image cards.
- **Experience** ⚠️ minimal only (added `(03)` label + left-align). Still uses **hover-to-reveal bullets** (flagged UX issue — recruiters won't see achievements), colored logos, Work/Education tabs. **User deferred a redesign.**
- **Contact** ✅ — centered "LET'S TALK" + email **aadarsh.ravi13@gmail.com** + socials.
- **Footer** ✅ — monochrome, dynamic year.

## Projects content

- **PodcastIQ = project #1, FULLY built.** AI/data flagship. Real cover (`public/images/podcastiq.jpg` 1920×1280), tech, **GitHub + Slide Deck** links, metrics (286 / 13.8K / 9 / 27.8K), **demo video** (Google Drive `/preview` embed), **architecture SVG** (`public/images/podcastiq-architecture.svg`, click-to-zoom), deck (`public/podcastiq-deck.html`). Body flow: Problem → What I Built → Key Decisions → Architecture → Challenges → Results → What's Next.
  - **Source material:** `D:\Projects\PodcastIQ` (README.md, `PodcastIQ_Presentation_Script.md`, `docs/project_log.md`, `docs/system_architecture_v2.html`).
  - **VERIFY before interviews:** the **Key Decisions** section was inferred — confirm the "why"s are true. **Challenges** are sourced from deck Slide 27 (accurate).
  - **Demo caveat:** the Drive video MUST be shared **"Anyone with the link – Viewer"** or interviewers see an access error.
- **Remaining placeholders** (still fake title/tagline/image/body): `costco-quant-analysis`, `openbid`, `healthhub-360`. Need real repos + images/covers like PodcastIQ.

## Pending / next ideas

- Swap the 3 remaining projects with real content (repo + cover image + case study).
- Experience deep-dive: make bullets visible by default; consider editorial year-left/details-right redesign; grayscale logos.
- Delete now-unused `portfolio/public/icons/*` (old tech logos — Expertise no longer uses them).
- Consider cleaner demo hosting (YouTube unlisted) instead of Drive; add `metadataBase` + OG images (build warns it's unset).

## Working style the user likes

Iterates visually, section by section; likes being shown **options/previews** before committing; wants it **very close to Majd**; case studies must read as **interview walkthroughs**.

**Plan file:** `C:\Users\aadar\.claude\plans\https-www-framer-com-community-marketpla-resilient-iverson.md`
