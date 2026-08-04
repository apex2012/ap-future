# AP Future

# 20F · Resource Card Component

**Version:** 1.1.0  **Status:** Official  **Owner:** AP Future  **Last Updated:** 2026-08-04

## Purpose

Define the reusable card for articles, guides, templates, research, and university resources.

## Component ID

`C005 — ResourceCard`

## Required Content

Category, title, short summary, and link. Optional: image, reading time, last updated, resource type, and download indicator.

## Layout

Desktop: 3 columns. Tablet: 2 columns. Mobile: 1 column.

## Content Limits

Title: 5–14 words. Summary: 20–45 words. Category labels remain short.

## Suggested API

```typescript
interface ResourceCardProps {
  category: string;
  title: string;
  summary: string;
  href: string;
  image?: { src: string; alt: string };
  readingTime?: string;
  updatedAt?: string;
  resourceType?: "article" | "guide" | "template" | "research";
}
```

## Accessibility

Use a semantic article element, descriptive links, alt text, keyboard access, and visible focus.

## Acceptance Criteria

Supports all approved resource types, consistent hierarchy, responsive, and works with or without images.

## Final Principle

Make the educational value clear before the user clicks.
