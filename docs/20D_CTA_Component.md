# AP Future

# 20D · CTA Component

**Version:** 1.1.0  **Status:** Official  **Owner:** AP Future  **Last Updated:** 2026-08-04

## Purpose

Define the standard call-to-action section used near the end of pages.

## Component ID

`C009 — CTA`

## Required Content

Headline, short supporting text, and primary CTA. Secondary CTA and subtle visual treatment are optional.

## Standard Copy Direction

Examples: `Let’s Build Your Academic Plan Together.`, `Ready to Start Your AP Journey?`, and `Start Planning with Confidence.`

Primary CTA: `Book a Consultation`

## Layout Variants

Centered, split, and inline.

## Visual Rules

High contrast, generous whitespace, one dominant action, no urgency banners, countdowns, or false scarcity.

## Suggested API

```typescript
interface CTAProps {
  title: string;
  description?: string;
  primaryAction: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
  variant?: "centered" | "split" | "inline";
}
```

## Acceptance Criteria

One primary action, clear relationship to the page, responsive, and reused sitewide.

## Final Principle

The CTA should guide, not pressure.
