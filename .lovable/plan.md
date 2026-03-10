
# Solo Travel Platform

## Pages & Layout

### Global Layout
- **Sticky glassmorphism header** with backdrop-blur, semi-transparent background
- **Top utility bar**: Language switcher (EN/ES/FR/DE) + Dark/Light mode toggle
- **Main nav**: Multi-level dropdown menus for Destinations (Asia, Europe, Americas), Travel Guides (Budget, Luxury, Safety), Community
- **Footer**: Newsletter signup form with email input + subscribe button, social links, site links

### Home Page (Single Page)

**Section 1 – Hero Video**
- Full-width section with looping background video (using a free stock video URL as placeholder)
- Dark gradient overlay with centered text: "The World is Yours to Wander"
- Sub-headline + animated "Start Your Journey" CTA button

**Section 2 – Image Carousel**
- Full-width image slider using Embla Carousel (already installed)
- Fade/slide transitions, dot indicators, auto-play
- Placeholder travel landscape images

**Section 3 – Featured Solo Trips**
- 3-column responsive grid of trip cards
- Each card: image, destination name, duration, price badge, brief description
- Rounded-2xl cards with hover scale/shadow transitions

**Section 4 – Safety Tips (Bento Box)**
- Asymmetric bento-grid layout (mix of large and small cards)
- Tips like "Share Your Itinerary," "Stay Connected," "Trust Your Instincts"
- Lucide icons per tip, clean minimal style

**Section 5 – Newsletter Footer**
- Full-width colored section with heading, subtext, email input + CTA
- Below: footer links and copyright

## Design System
- Dark/Light mode via `next-themes` (already installed)
- Glassmorphism: `bg-white/70 dark:bg-black/50 backdrop-blur-lg`
- Rounded-2xl corners, generous padding/whitespace
- Smooth hover transitions (`transition-all duration-300`)
- Lucide icons throughout
- Fully responsive (mobile-first with Tailwind breakpoints)

## Components to Build
1. **Header** – with language switcher, theme toggle, multi-level nav dropdowns
2. **HeroVideo** – video background + overlay content
3. **ImageCarousel** – Embla-based full-width slider
4. **FeaturedTrips** – grid of trip cards
5. **SafetyTips** – bento-box layout
6. **NewsletterFooter** – signup + footer links

All data will be hardcoded/mock (no backend needed for this phase).
