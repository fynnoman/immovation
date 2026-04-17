<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/
page.tsx+4-2
Now update the Suspense fallback in the SearchPage wrapper to use skeletons:

page.tsx+25-4
Now update AnimatedHome.tsx to use real images for featured properties:

AnimatedHome.tsx+1-0
Now replace the featured properties image placeholder with real images:

AnimatedHome.tsx+12-2
Now let me check the files for errors:

Checked page.tsx, page.tsx, AnimatedHome.tsx, HotelCard.tsx, 1 problem found

The DetailFavoriteButton error should resolve once the TypeScript server picks up the new file. Let me verify the file exists:

Read [id]

The file exists. This is just a TypeScript server lag. Let me verify the detail page is clean by checking for unused imports:

Searched text for Heart (**/src/app/hotel/[id]/page.tsx), no results

Good — Heart was removed from the import since we now use DetailFavoriteButton. Let me clean up the import:

page.tsx+0-1
That error will clear on its own (the TS server just needs to detect the new file). Now let me start the dev server to test everything:

Started shell: dev

Got output for shell: dev

Dev server is running on port 3001. Let me check if the pages compile without errors:

docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Immovation – Booking Platform

This is a Next.js 16 booking platform similar to booking.com, built with:

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Date Handling**: date-fns

## Design System

- **Background**: White (#ffffff)
- **Accent Color**: #B8860B (brown-gold)
- **Accent Dark**: #9A7209 (hover states)
- **Text**: Dark gray (#1a1a1a)
- **Language**: German (de)

## Architecture

- `/src/app/` – App Router pages
- `/src/components/` – Reusable UI components
- `/src/data/` – Mock data (hotels, destinations)

## Conventions

- Use `"use client"` directive only when needed (state, effects, event handlers)
- Use Tailwind CSS utility classes for styling
- Use the accent color #00B8D9 consistently for interactive elements
- All user-facing text should be in German
