# AP Future

# 20C · Feature Grid Component

**Version:** 1.1.0  **Status:** Official  **Owner:** AP Future  **Last Updated:** 2026-08-04

## Purpose

Define a reusable grid for programs, advantages, planning areas, and resource categories.

## Component ID

`C006 — FeatureGrid`

## Use Cases

Home programs, Why AP Future, University Planning areas, Resource categories, and Consultation topics.

## Grid Rules

Desktop: 3 or 4 columns. Tablet: 2 columns. Mobile: 1 column.

## Item Structure

Optional icon, title, short description, and optional link.

## Content Limits

Title: 2–6 words. Description: 15–35 words. One clear idea per item.

## Suggested API

```typescript
interface FeatureItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
  href?: string;
}

interface FeatureGridProps {
  items: FeatureItem[];
  columns?: 2 | 3 | 4;
}
```

## Acceptance Criteria

Reusable, no page-specific forks, equal visual rhythm, and responsive.

## Final Principle

A feature grid should organize ideas, not decorate a page.
