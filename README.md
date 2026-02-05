# Sleepy Stories 🌙

Free bedtime stories for toddlers and early readers.

## Quick Start

```bash
# Install dependencies
npm install

# Run locally
npm run dev

# Open http://localhost:3000
```

## Deploy to Vercel

### Option 1: GitHub Integration (Recommended)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repo
5. Click "Deploy"

That's it! Vercel auto-deploys on every push.

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## Adding Stories

Stories are defined in `/src/app/stories/[slug]/page.tsx` in the `stories` object.

Each story has:
- `title` — Display title
- `ageLabel` — Age group (e.g., "Ages 2-4")
- `readingTime` — Estimated reading time
- `theme` — Story theme
- `pages` — Array of `{ text, illustration? }` objects

## Adding Illustrations

Replace the placeholder `<div>` elements with `<Image>` components:

```tsx
import Image from 'next/image'

// In the story page component:
<Image
  src="/illustrations/luna-page-1.jpg"
  alt="Luna looking for her blanket"
  width={800}
  height={500}
  className="w-full"
/>
```

Place images in `/public/illustrations/`.

## Tech Stack

- [Next.js 14](https://nextjs.org) — React framework
- [Tailwind CSS](https://tailwindcss.com) — Styling
- [Vercel](https://vercel.com) — Hosting

## Structure

```
src/
├── app/
│   ├── layout.tsx      # Site layout, nav, footer
│   ├── page.tsx        # Homepage with story cards
│   ├── globals.css     # Global styles
│   └── stories/
│       └── [slug]/
│           └── page.tsx # Individual story pages
```

## License

Stories and content © 2026. All rights reserved.
