# AP Future

# Sprint 3 · Information Architecture: Home vs AP

**Version:** 2.0.0
**Status:** Draft — Pending Approval
**Owner:** AP Future
**Last Updated:** 2026-08-05

## Purpose of This Document

Define and compare the information architecture of the Home page and the AP page so that each page solves a different user problem with different storytelling. This document must be approved before any implementation changes.

---

## Side-by-Side Comparison

| Dimension | Home Page | AP Page |
|-----------|-----------|---------|
| **Primary goal** | Introduce AP Future as a company and guide visitors toward consultation | Help parents choose the right AP pathway for their child by providing trust, decision support, and a compact course catalog |
| **Target audience** | First-time visitors — students and parents exploring university preparation options | Parents who already know AP is valuable and need to decide which courses to choose and who to learn with |
| **User questions answered** | Who are we? What services do we provide? Why should families trust AP Future? | Why learn AP with AP Future? How should students choose courses? Which AP courses fit different university goals? What if I still have questions? |
| **Storytelling pattern** | Company narrative — "who we are, what we do, why trust us" | Decision guide — "trust us, here's how to choose, here's the catalog, here are answers" |
| **Page type** | Company landing page | Decision support page with compact catalog |
| **Card density** | Low — trust signals + 4 trust pillars | Medium — collapsible discipline groups (progressive disclosure) |
| **CTA focus** | Book a consultation (general) | Book a consultation (AP-specific) |

---

## Home Page

### Primary Goal

Introduce AP Future as an education company, build trust through measurable signals, and give a high-level overview of each program. The page guides visitors toward a consultation.

### Target Audience

First-time visitors — Grade 8–12 students and parents who are beginning to explore university preparation options and may not yet know which program they need.

### User Questions Answered

1. Who are we?
2. What services do we provide?
3. Why should families trust AP Future?

### Section Order

| # | Section | Why It Exists |
|---|---------|---------------|
| 1 | **Hero** | Company tagline and primary CTA. Sets the tone — confident, professional, education-first. Gives visitors an immediate sense of what AP Future offers and a path to act. |
| 2 | **Who We Are + Trust Signals** | A centered narrative paragraph that answers "Who are we?" in plain language, supplemented by measurable trust signals displayed as a horizontal stat row: years of experience, students taught, AP subjects offered, and university admissions outcomes. This section answers both "Who are we?" and "Why should families trust AP Future?" before the visitor scrolls further. The trust signals provide concrete evidence, not just claims. |
| 3 | **What We Do** | Four programs presented as alternating rows with dividers, each with an icon, description, and individual "Explore" link. This layout avoids the uniform 4-column card grid used on program pages. Each program gets equal weight with a direct link to its dedicated page. |
| 4 | **Why Families Trust Us** | Four trust pillars (Expert Instructors, Proven Approach, Global Perspective, Personalized Guidance). Deepens the trust established by the stat row in section 2 by explaining the qualitative reasons behind the numbers. |
| 5 | **CTA** | Centered call to action for consultation booking. The final step — visitors who have read the company intro, trust signals, and services can now take action. |

### User Journey Rationale

A first-time visitor arrives knowing nothing about AP Future. Their journey is:

1. **Hero** — "What is this site?" → The hero answers in 5 seconds: university admissions preparation company.
2. **Who We Are + Trust Signals** — "Should I keep reading?" → The narrative paragraph explains who AP Future is, and the stat row provides instant credibility. If the visitor is not impressed by the numbers, they leave. If they are, they continue.
3. **What We Do** — "Do they offer what I need?" → The four programs are presented with enough detail to identify a match and a link to dive deeper.
4. **Why Families Trust Us** — "Can I trust them with my child?" → The trust pillars address the emotional dimension that numbers cannot.
5. **CTA** — "What do I do next?" → Book a consultation.

The trust signals in section 2 are placed early because a first-time visitor's first question is not "what services do you offer?" but "are you worth my time?" Measurable evidence answers that faster than a service list.

### Why This Structure

The Home page tells a company story: identity + evidence → services → trust → action. It uses narrative text, a stat row, and alternating rows instead of card grids to create a distinct visual rhythm from program pages. The page stays high-level — it does not list individual courses, exam details, or planning steps. Those belong on the program pages.

---

## AP Page

### Primary Goal

Help parents choose the right AP pathway for their child. The page establishes trust in AP Future's instruction first, then provides decision support for course selection, then offers a compact course catalog for reference.

### Target Audience

Parents of Grade 8–12 students who already know AP is valuable. They do not need to be convinced that AP matters — they need to decide which courses to choose and who to trust for instruction.

### User Questions Answered

1. Why learn AP with AP Future?
2. How should students choose courses?
3. Which AP courses fit different university goals?
4. What if I still have questions?

### Section Order

| # | Section | Why It Exists |
|---|---------|---------------|
| 1 | **Hero** | AP-specific headline focused on the decision parents face. Eyebrow "Advanced Placement", title speaks to choosing the right courses. Two CTAs: Book a Consultation (primary) and "How to Choose" (secondary, scrolls to the How to Choose section). This is not a company tagline — it is a decision prompt. |
| 2 | **Why AP Future** | Establishes trust in AP Future's AP instruction before asking parents to invest time in a long catalog. Focuses on teaching approach: experienced instructors, structured curriculum aligned with College Board standards, personalized support, and exam preparation. This section answers "Why learn AP with AP Future?" It is intentionally distinct from the Home page's "Why Families Trust Us" — the Home page trust pillars are company-level, while this section is AP-specific and focused on instructional quality. Layout: two-column comparison or narrative with inline highlights, not a 4-column card grid. |
| 3 | **How to Choose Your AP Pathway** | The core of the page. Recommended course combinations aligned with common university majors: Engineering, Computer Science, Business, Social Sciences. Each pathway lists the recommended courses and explains why. This section answers "How should students choose courses?" and "Which AP courses fit different university goals?" simultaneously — the pathways show which courses fit which goals. Layout: numbered or stepped layout, not a 4-column card grid. |
| 4 | **Course Catalog** (compact) | All 13 AP courses organized into three collapsible discipline groups: Mathematics, Physics, Social Sciences. Each group is collapsed by default, showing only the discipline name, course count, and a brief description. Parents expand a group to see the CourseCards within it. This provides progressive disclosure — parents who found their pathway in section 3 can verify the specific courses, without scrolling through 13 cards they do not need. Section header notes that courses follow the College Board curriculum. |
| 5 | **FAQ** | Six common questions parents and students ask about AP: how many courses to take, when to start, whether AP is only for US universities, how AP differs from regular courses, what to do if struggling, and exam registration. Provides reassurance and practical guidance for parents who have read the pathways but still have concerns. |
| 6 | **CTA** | AP-specific call to action: "Ready to Start Your AP Journey?" with Book a Consultation (primary) and Explore SAT (secondary). The final step for parents who have decided on a pathway and are ready to act. |

### User Journey Rationale

A parent arrives on the AP page already knowing AP is valuable. Their journey is:

1. **Hero** — "Can this page help me decide?" → The hero confirms they are in the right place: this page is about choosing AP courses, not about what AP is.
2. **Why AP Future** — "Should I trust this company to teach my child AP?" → This is the first gate. If the parent does not trust AP Future's instruction, the catalog and pathways are irrelevant. Trust must come before the catalog because the catalog is long and demands investment. If trust is not established, the parent will not scroll through 13 courses.
3. **How to Choose Your AP Pathway** — "Which courses should my child take?" → This is the core question. The parent has trusted AP Future and now wants decision support. The pathways section gives them a recommended combination based on their child's university goals, without requiring them to evaluate 13 individual courses.
4. **Course Catalog** (compact) — "What are the specific courses in my child's pathway?" → The parent has identified a pathway and now wants to verify the details. The collapsible catalog lets them expand only the relevant discipline group, keeping the page manageable. Parents who want to browse all courses can expand all three groups.
5. **FAQ** — "What about edge cases and concerns?" → The parent has a pathway in mind but still has practical questions: when to start, how many courses, what if their child struggles. The FAQ addresses these without requiring a consultation.
6. **CTA** — "What do I do next?" → Book a consultation to get personalized guidance.

The key shift from v1 of this IA: trust is established before the catalog, not after. A parent who does not trust AP Future will not invest time in a 13-course catalog. By placing "Why AP Future" second, we earn the right to ask for their attention. By placing "How to Choose" third, we deliver the core value before the catalog. The catalog becomes a reference tool for parents who have already made a decision, not a wall of cards that overwhelms them before they start.

### Why This Structure

The AP page tells a decision story: trust → guide → reference → reassure → act. It leads with trust because parents already know AP is valuable — they do not need to be educated on AP itself. The "How to Choose" section is the core of the page, not the catalog. The catalog is compact and collapsible to avoid overwhelming parents who have already found their pathway. "Why AP Future" is AP-specific instructional quality, not a repeat of the company-level trust pillars on the Home page.

---

## How the Pages Differ

| Dimension | Home Page | AP Page |
|-----------|-----------|---------|
| **Opening section after Hero** | Who We Are + Trust Signals — company intro with measurable stats | Why AP Future — AP-specific instructional trust |
| **Main content type** | Service overview (alternating rows) | Pathways (stepped layout) + compact catalog (collapsible groups) |
| **Card usage** | Minimal — trust signals stat row + 4 trust pillars | Medium — collapsible discipline groups with CourseCards inside |
| **Decision support** | None — each service links to its own page | Pathways by university major (core section) |
| **Trust section** | Company-level: stat row + Expert Instructors, Proven Approach, Global Perspective, Personalized Guidance | AP-specific: teaching approach, curriculum structure, exam preparation, instructor expertise |
| **FAQ** | None | Yes — 6 AP-specific questions |
| **Storytelling rhythm** | Identity + evidence → services → trust → action | Trust → guide → reference → reassure → act |
| **Visual rhythm** | Narrative + stat row + alternating rows + pillar grid | Comparison layout + stepped layout + collapsible groups + accordion |
| **Catalog presentation** | None | Collapsible discipline groups with progressive disclosure |

---

## Component Usage Plan

### Home Page

- Hero (split) — existing component, unchanged
- CTA (centered) — existing component, unchanged
- PageContainer (wide) — existing component, unchanged
- Trust signals stat row — page-specific inline layout within HomePage.tsx (not a new component)
- No CourseCard, no FeatureGrid, no FAQAccordion

### AP Page

- Hero (split) — existing component, unchanged
- CourseCard — existing component, used inside collapsible groups (unchanged)
- FeatureGrid — used for "How to Choose" pathways section (existing component, unchanged)
- FAQAccordion — FAQ section (existing component, unchanged)
- CTA (centered) — existing component, unchanged
- PageContainer — section wrapper (existing component, unchanged)
- "Why AP Future" section uses a custom inline layout (not an existing card component) to create visual distinction from the Home page
- Collapsible discipline groups use native HTML `<details>`/`<summary>` elements styled with Tailwind — page-specific inline markup within APPage.tsx, not a new reusable component

No new reusable components are created. No existing components are modified. Custom layouts are page-specific markup within the page files, not new components.

---

## Acceptance Criteria

- [ ] Home page and AP page have different section orders
- [ ] Home page and AP page have different storytelling patterns
- [ ] AP page answers all four user questions (Why AP Future? How to choose? Which courses? What if I have questions?)
- [ ] AP page does not repeat Home page messaging or structure
- [ ] All 13 AP courses remain grouped into Mathematics, Physics, Social Sciences
- [ ] Course catalog uses collapsible discipline groups (progressive disclosure), not 13 cards displayed at once
- [ ] Home page "Who We Are" section includes measurable trust signals (stat row)
- [ ] "Why AP Future" appears before the course catalog on the AP page
- [ ] "How to Choose" appears before the course catalog on the AP page
- [ ] No existing reusable components are modified or removed
- [ ] No new reusable components are created
- [ ] Build passes with no errors
