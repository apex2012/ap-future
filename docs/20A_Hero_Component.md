# AP Future

# 20A · Hero Component

**Version:** 1.1.0  **Status:** Official  **Owner:** AP Future  **Last Updated:** 2026-08-04

## Purpose

Define the standard Hero used across landing, hub, course, and content pages.

## Component ID

`C002 — Hero`

## Variants

- Split Hero
- Centered Hero
- Course Hero
- Content Hero

## Desktop Layout

Two columns: text 55%, visual 45%. Recommended minimum height: `620px`.

## Mobile Layout

Eyebrow → Headline → Supporting Text → CTA Group → Visual.

## Headline

- 3–10 words preferred
- One clear message
- Outcome-focused
- Desktop: 56–72px
- Mobile: 40–48px
- Line height: 1.0–1.1

## Supporting Text

- 20–45 words
- One concise paragraph
- Desktop: 18–22px
- Mobile: 17–19px

## CTA Rules

- Maximum two CTAs
- One primary action
- Secondary CTA optional
- Avoid urgency and vague labels

## Visual Rules

Prefer real educational photography, research, collaboration, classroom activity, or interface previews. Avoid generic stock photography, random AI faces, and decorative images unrelated to learning.

## Home Hero Copy

Headline: `Prepare for University with Confidence.`

Supporting text: `Expert AP instruction, structured Digital SAT preparation, strategic university planning, and educational resources designed for long-term student success.`

Primary CTA: `Book a Consultation`

Secondary CTA: `Explore Programs`

## Accessibility

One page-level `h1`, keyboard-accessible links and buttons, visible focus states, descriptive alt text, WCAG 2.2 AA, and reduced-motion support.

## Performance

Use WebP or AVIF, responsive image sizes, preserved aspect ratio, LCP <2.5s, and CLS <0.1.

## Suggested API

```typescript
type HeroVariant = "split" | "centered" | "course" | "content";

interface HeroAction {
  label: string;
  href: string;
  variant: "primary" | "secondary";
}

interface HeroProps {
  variant?: HeroVariant;
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: HeroAction[];
  image?: { src: string; alt: string; width: number; height: number };
}
```

## Acceptance Criteria

Shared, responsive, accessible, no duplicated markup, no hard-coded copy, and aligned with Brand Design Language.

## Final Principle

The Hero should communicate confidence through clarity.
