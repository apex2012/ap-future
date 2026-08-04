# AP Future

# 20B · Course Card Component

**Version:** 1.1.0  **Status:** Official  **Owner:** AP Future  **Last Updated:** 2026-08-04

## Purpose

Define the reusable card used for AP and SAT course discovery.

## Component ID

`C004 — CourseCard`

## Required Content

Course title, category, one-sentence description, and CTA. Optional: recommended grade, difficulty, duration, icon or image.

## Layout

Desktop: consistent card height in a 3- or 4-column grid. Tablet: 2 columns. Mobile: 1 column.

## Visual Rules

Light border, 12–16px radius, minimal shadow, clear hover and focus states, no decorative gradients.

## CTA

Preferred label: `Learn More`. The entire card may be clickable if keyboard behavior remains clear.

## Suggested API

```typescript
interface CourseCardProps {
  title: string;
  category: string;
  description: string;
  recommendedGrade?: string;
  difficulty?: string;
  duration?: string;
  href: string;
  icon?: React.ReactNode;
}
```

## Acceptance Criteria

One reusable component for all AP and SAT cards, consistent heights, optional metadata support, and responsive behavior.

## Final Principle

Help users compare courses quickly without information overload.
