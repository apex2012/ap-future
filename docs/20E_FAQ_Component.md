# AP Future

# 20E · FAQ Component

**Version:** 1.1.0  **Status:** Official  **Owner:** AP Future  **Last Updated:** 2026-08-04

## Purpose

Define the reusable FAQ accordion for program, course, resource, and consultation pages.

## Component ID

`C008 — FAQAccordion`

## Content Rules

Use 5–8 real student or parent questions. Keep answers concise and practical. Avoid repeating the page.

## Interaction

The entire question row is clickable. Support one or multiple open panels, clear states, restrained animation, and reduced motion.

## Suggested API

```typescript
interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

interface FAQAccordionProps {
  items: FAQItem[];
  allowMultiple?: boolean;
}
```

## Accessibility

Use buttons, `aria-expanded`, `aria-controls`, keyboard support, visible focus, and semantic headings.

## SEO

FAQ structured data may be used only when visible content matches the schema.

## Final Principle

FAQs should reduce uncertainty and help users take the next step.
