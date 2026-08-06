import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen,
  FileText,
  Download,
  FlaskConical,
  Clock,
  ArrowRight,
  GraduationCap,
  Building2,
  Cpu,
  LayoutTemplate,
  Microscope,
  Sparkles,
} from 'lucide-react';
import { type ReactNode } from 'react';
import { Hero } from '@/components/ui/Hero';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { CTA } from '@/components/ui/CTA';
import { PageContainer } from '@/components/ui/PageContainer';
import { Breadcrumb } from '@/components/ui/Breadcrumb';

type ResourceType = 'guide' | 'template' | 'article' | 'research';

interface ResourceEntry {
  title: string;
  summary: string;
  href: string;
  type: ResourceType;
  readingTime?: string;
  updatedAt?: string;
}

interface ResourceCategory {
  id: string;
  label: string;
  shortLabel: string;
  description: string;
  icon: ReactNode;
  resources: ResourceEntry[];
}

const PREVIEW_COUNT = 3;

const categories: ResourceCategory[] = [
  {
    id: 'academic',
    label: 'Academic Resources',
    shortLabel: 'Academic',
    description: 'Subject guides, study strategies, and course planning materials for AP coursework.',
    icon: <GraduationCap size={18} />,
    resources: [
      {
        title: 'How to Plan a Multi-Year AP Sequence',
        summary: 'A framework for choosing AP courses across Grades 9–12 that balances workload, builds progressively, and aligns with university expectations.',
        href: '/resources',
        type: 'guide',
        readingTime: '12 min',
        updatedAt: 'Jul 2026',
      },
      {
        title: 'AP Calculus AB vs BC: Which Should You Take?',
        summary: 'A comparison of scope, difficulty, and university credit implications to help families make an informed choice.',
        href: '/resources',
        type: 'article',
        readingTime: '8 min',
        updatedAt: 'Jul 2026',
      },
      {
        title: 'AP Exam Preparation Timeline',
        summary: 'A month-by-month preparation calendar from September through the May exam window, with weekly milestones.',
        href: '/resources',
        type: 'template',
        updatedAt: 'Jun 2026',
      },
      {
        title: 'Subject Study Guides',
        summary: 'Downloadable study guides for each AP subject, covering key topics, common pitfalls, and practice strategies.',
        href: '/resources',
        type: 'template',
        updatedAt: 'Jun 2026',
      },
    ],
  },
  {
    id: 'admissions',
    label: 'University Admissions',
    shortLabel: 'Admissions',
    description: 'Timelines, application guides, and decision frameworks for the university admission journey.',
    icon: <Building2 size={18} />,
    resources: [
      {
        title: 'The Complete University Application Timeline',
        summary: 'A grade-by-grade timeline from Grade 8 through Grade 12, showing what to focus on each year and when key milestones occur.',
        href: '/resources',
        type: 'guide',
        readingTime: '15 min',
        updatedAt: 'Jul 2026',
      },
      {
        title: 'How to Build a Balanced University List',
        summary: 'A framework for categorizing target, match, and safety schools — and evaluating fit beyond rankings.',
        href: '/resources',
        type: 'guide',
        readingTime: '10 min',
        updatedAt: 'Jul 2026',
      },
      {
        title: 'Personal Statement Worksheet',
        summary: 'A structured template for drafting the personal statement, with prompts for reflection, structure, and revision.',
        href: '/resources',
        type: 'template',
        updatedAt: 'Jun 2026',
      },
      {
        title: 'Application Requirements by Country',
        summary: 'A reference guide comparing US, UK, Canadian, and Australian application systems, deadlines, and required materials.',
        href: '/resources',
        type: 'article',
        readingTime: '14 min',
        updatedAt: 'May 2026',
      },
      {
        title: 'Interview Preparation Guide',
        summary: 'Common interview questions, frameworks for structuring answers, and a practice checklist for university admissions interviews.',
        href: '/resources',
        type: 'guide',
        readingTime: '11 min',
        updatedAt: 'Jun 2026',
      },
    ],
  },
  {
    id: 'ai-learning',
    label: 'AI Learning',
    shortLabel: 'AI Learning',
    description: 'Guides on using AI tools responsibly to support studying, research, and writing — without replacing the learning.',
    icon: <Cpu size={18} />,
    resources: [
      {
        title: 'How to Use AI as a Study Companion',
        summary: 'Practical approaches for using AI to quiz yourself, explain concepts, and identify knowledge gaps — while doing the thinking yourself.',
        href: '/resources',
        type: 'guide',
        readingTime: '9 min',
        updatedAt: 'Jul 2026',
      },
      {
        title: 'What AI Can and Cannot Do for Your Application',
        summary: 'A clear boundary on where AI assists (brainstorming, editing feedback) and where it harms (generating essays, fabricating experiences).',
        href: '/resources',
        type: 'article',
        readingTime: '7 min',
        updatedAt: 'Jun 2026',
      },
      {
        title: 'AI Ethics for Students',
        summary: 'Understanding plagiarism, academic integrity, and disclosure when using AI tools in academic work.',
        href: '/resources',
        type: 'article',
        readingTime: '8 min',
        updatedAt: 'May 2026',
      },
    ],
  },
  {
    id: 'guides-templates',
    label: 'Study Guides & Templates',
    shortLabel: 'Templates',
    description: 'Downloadable tools, planners, and frameworks to organize studying, writing, and application work.',
    icon: <LayoutTemplate size={18} />,
    resources: [
      {
        title: 'Weekly Study Planner',
        summary: 'A printable weekly planner template for tracking assignments, study sessions, and review cycles across all subjects.',
        href: '/resources',
        type: 'template',
        updatedAt: 'Jul 2026',
      },
      {
        title: 'SAT Study Plan Template',
        summary: 'A customizable study plan framework for the Digital SAT, with daily and weekly goals, practice test scheduling, and progress tracking.',
        href: '/resources',
        type: 'template',
        updatedAt: 'Jun 2026',
      },
      {
        title: 'Portfolio Development Checklist',
        summary: 'A checklist for building a university application portfolio, covering academics, research, competitions, and extracurriculars.',
        href: '/resources',
        type: 'template',
        updatedAt: 'Jun 2026',
      },
      {
        title: 'Research Project Planning Framework',
        summary: 'A step-by-step framework for designing, executing, and presenting an independent research project.',
        href: '/resources',
        type: 'guide',
        readingTime: '13 min',
        updatedAt: 'May 2026',
      },
    ],
  },
  {
    id: 'research-insights',
    label: 'Research & Insights',
    shortLabel: 'Insights',
    description: 'Original analysis on education trends, admissions data, and learning science — for families who want depth.',
    icon: <Microscope size={18} />,
    resources: [
      {
        title: 'AP Score Trends: What the Latest Data Tells Us',
        summary: 'An analysis of recent AP score distributions across subjects, with implications for course selection and university competitiveness.',
        href: '/resources',
        type: 'research',
        readingTime: '16 min',
        updatedAt: 'Jul 2026',
      },
      {
        title: 'How Top Universities Evaluate Extracurriculars',
        summary: 'Research summary on how admissions officers assess sustained commitment, leadership, and impact in extracurricular activities.',
        href: '/resources',
        type: 'research',
        readingTime: '12 min',
        updatedAt: 'Jun 2026',
      },
      {
        title: 'The Science of Effective Studying',
        summary: 'A synthesis of cognitive science research on spaced repetition, active recall, and interleaving — translated into practical study strategies.',
        href: '/resources',
        type: 'research',
        readingTime: '14 min',
        updatedAt: 'May 2026',
      },
    ],
  },
];

const featuredResource: ResourceEntry = {
  title: 'The Complete University Application Timeline',
  summary:
    'The single most important document for any family starting the university admission journey. A grade-by-grade timeline from Grade 8 through Grade 12, showing exactly what to focus on each year, when key milestones occur, and how AP courses, SAT preparation, and extracurricular planning connect together.',
  href: '/resources',
  type: 'guide',
  readingTime: '15 min',
  updatedAt: 'Jul 2026',
};

const typeIcon: Record<ResourceType, ReactNode> = {
  guide: <FileText size={15} />,
  template: <Download size={15} />,
  article: <BookOpen size={15} />,
  research: <FlaskConical size={15} />,
};

const typeLabel: Record<ResourceType, string> = {
  guide: 'Guide',
  template: 'Template',
  article: 'Article',
  research: 'Research',
};

const integration = [
  {
    title: 'AP Courses',
    description: 'Subject study guides, course planning frameworks, and exam preparation materials.',
    href: '/ap',
  },
  {
    title: 'Digital SAT',
    description: 'SAT study plan templates, preparation timelines, and practice strategies.',
    href: '/sat',
  },
  {
    title: 'University Planning',
    description: 'Application timelines, personal statement worksheets, and portfolio checklists.',
    href: '/university-planning',
  },
];

const faqItems = [
  {
    question: 'Are these resources free?',
    answer:
      'Yes. All guides, templates, and articles in the knowledge center are freely available. We believe educational resources should be accessible to every family navigating university admissions.',
  },
  {
    question: 'Do I need to be enrolled in a course to use these resources?',
    answer:
      'No. The knowledge center is open to everyone. Many families use these resources independently, while enrolled students use them alongside their courses for additional structure and support.',
  },
  {
    question: 'How often are resources updated?',
    answer:
      'We review and update resources regularly — typically every few months — to reflect changes in exam formats, admissions policies, and educational research. Each resource shows its last updated date.',
  },
  {
    question: 'Can I download the templates?',
    answer:
      'Yes. Templates are designed to be downloaded, printed, or copied into your own documents. They are formatted for practical use, not just reading.',
  },
  {
    question: 'Do you cover resources for non-US university applications?',
    answer:
      'Yes. Our university admissions category includes resources for US, UK, Canadian, and Australian application systems. We are continually expanding coverage for other countries.',
  },
  {
    question: 'How do I know which resources are right for my child?',
    answer:
      'Start with the category that matches your current question. If your child is in Grade 8 or 9, begin with Academic Resources and the University Application Timeline. For Grade 11–12 families, focus on University Admissions and Study Guides & Templates.',
  },
];

function ResourceRow({ resource }: { resource: ResourceEntry }) {
  return (
    <a
      href={resource.href}
      className="group flex items-start gap-4 border-b border-neutral-100 py-4 transition-colors last:border-b-0 hover:bg-neutral-50/60 -mx-3 px-3 rounded-lg"
    >
      <span className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-neutral-500 group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors">
        {typeIcon[resource.type]}
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-2.5">
          <h3 className="text-base font-semibold leading-snug text-neutral-900 group-hover:text-primary-700 transition-colors">
            {resource.title}
          </h3>
          <span className="hidden text-[11px] font-semibold uppercase tracking-widest text-neutral-400 sm:inline">
            {typeLabel[resource.type]}
          </span>
        </div>
        <p className="mt-1.5 text-sm leading-relaxed text-neutral-500">
          {resource.summary}
        </p>
        <div className="mt-2 flex items-center gap-3 text-xs text-neutral-400">
          {resource.readingTime && (
            <span className="inline-flex items-center gap-1">
              <Clock size={12} />
              {resource.readingTime}
            </span>
          )}
          {resource.updatedAt && <span>Updated {resource.updatedAt}</span>}
        </div>
      </div>
      <ArrowRight
        size={16}
        className="mt-1.5 flex-shrink-0 text-neutral-300 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-primary-500"
      />
    </a>
  );
}

function CategorySection({
  category,
  expanded,
  onToggle,
}: {
  category: ResourceCategory;
  expanded: boolean;
  onToggle: () => void;
}) {
  const preview = category.resources.slice(0, PREVIEW_COUNT);
  const hasMore = category.resources.length > PREVIEW_COUNT;
  const shown = expanded ? category.resources : preview;

  return (
    <section id={category.id} className="scroll-mt-24">
      <div className="mb-2 flex items-center gap-3">
        <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
          {category.icon}
        </span>
        <h2 className="text-lg font-bold tracking-tight text-neutral-900 sm:text-xl">
          {category.label}
        </h2>
        <span className="text-sm text-neutral-400">{category.resources.length}</span>
      </div>
      <p className="mb-4 pl-12 text-sm leading-relaxed text-neutral-500">
        {category.description}
      </p>
      <div>
        {shown.map((resource) => (
          <ResourceRow key={resource.title} resource={resource} />
        ))}
      </div>
      {hasMore && (
        <button
          type="button"
          onClick={onToggle}
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700"
        >
          {expanded ? 'Show less' : `View all ${category.resources.length}`}
          <ArrowRight
            size={15}
            className={`transition-transform duration-200 ${expanded ? 'rotate-90' : ''}`}
          />
        </button>
      )}
    </section>
  );
}

function FeaturedResource({ resource }: { resource: ResourceEntry }) {
  return (
    <a
      href={resource.href}
      className="group relative block overflow-hidden rounded-2xl border border-neutral-200 bg-gradient-to-br from-neutral-50 to-white p-7 transition-all duration-300 hover:border-primary-200 hover:shadow-md sm:p-9"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-8">
        <div className="flex-1">
          <div className="mb-4 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary-600">
              <Sparkles size={13} />
              Featured
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-neutral-400">
              {typeIcon[resource.type]}
              {typeLabel[resource.type]}
            </span>
          </div>
          <h2 className="max-w-2xl text-2xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-3xl">
            {resource.title}
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-neutral-500">
            {resource.summary}
          </p>
          <div className="mt-5 flex items-center gap-4 text-sm">
            <span className="inline-flex items-center gap-1.5 font-semibold text-primary-600 transition-colors group-hover:text-primary-700">
              Read the guide
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </span>
            <div className="flex items-center gap-3 text-xs text-neutral-400">
              {resource.readingTime && (
                <span className="inline-flex items-center gap-1">
                  <Clock size={12} />
                  {resource.readingTime}
                </span>
              )}
              {resource.updatedAt && <span>Updated {resource.updatedAt}</span>}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

  const visibleCategories = activeCategory === 'all'
    ? categories
    : categories.filter((c) => c.id === activeCategory);

  const totalResources = categories.reduce((sum, c) => sum + c.resources.length, 0);

  const toggleCategory = (id: string) => {
    setExpandedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <>
      <Hero
        variant="centered"
        eyebrow="Resources"
        title="A knowledge center for the university admission journey."
        description="Guides, templates, and research materials organized by purpose — not by date. Find the right tool for the question in front of you."
      />

      <section className="bg-white pb-4 pt-2" aria-label="Category navigation">
        <PageContainer>
          <div className="inline-flex flex-wrap items-center gap-1 rounded-xl bg-neutral-100 p-1">
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-200 ${
                activeCategory === 'all'
                  ? 'bg-white text-neutral-900 shadow-sm'
                  : 'text-neutral-500 hover:text-neutral-800'
              }`}
            >
              All
              <span className="ml-1.5 text-xs opacity-50">{totalResources}</span>
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-white text-neutral-900 shadow-sm'
                    : 'text-neutral-500 hover:text-neutral-800'
                }`}
              >
                {cat.shortLabel}
                <span className="ml-1.5 text-xs opacity-50">{cat.resources.length}</span>
              </button>
            ))}
          </div>
        </PageContainer>
      </section>

      {activeCategory === 'all' && (
        <section className="bg-white py-6" aria-label="Featured resource">
          <PageContainer>
            <FeaturedResource resource={featuredResource} />
          </PageContainer>
        </section>
      )}

      <section className="bg-white pb-14 pt-4 sm:pb-16">
        <PageContainer>
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Resources' }]} />

          {activeCategory === 'all' ? (
            <div className="space-y-12">
              {visibleCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.3, ease: 'easeOut', delay: index * 0.03 }}
                >
                  <CategorySection
                    category={category}
                    expanded={expandedCategories.has(category.id)}
                    onToggle={() => toggleCategory(category.id)}
                  />
                </motion.div>
              ))}
            </div>
          ) : (
            <div>
              {visibleCategories.map((category) => (
                <CategorySection
                  key={category.id}
                  category={category}
                  expanded={expandedCategories.has(category.id)}
                  onToggle={() => toggleCategory(category.id)}
                />
              ))}
            </div>
          )}
        </PageContainer>
      </section>

      <section className="bg-[#FAFAF9] py-14 sm:py-16" aria-labelledby="integration-heading">
        <PageContainer>
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 text-lg font-semibold uppercase tracking-wider text-primary-600">
              How Resources Connect
            </p>
            <h2 id="integration-heading" className="text-3xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-4xl">
              Every resource supports a program
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-neutral-500">
              The knowledge center is not separate from our programs. Each category maps to a stage of
              the admission journey and connects directly to the relevant program.
            </p>
          </div>

          <div className="mt-10 space-y-px overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200">
            {integration.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-3 bg-white p-6 sm:flex-row sm:items-center sm:gap-8"
              >
                <div className="sm:w-52 sm:flex-shrink-0">
                  <h3 className="text-lg font-semibold leading-snug text-neutral-900">
                    {item.title}
                  </h3>
                </div>
                <p className="flex-1 text-base leading-relaxed text-neutral-500">
                  {item.description}
                </p>
                <a
                  href={item.href}
                  className="group inline-flex flex-shrink-0 items-center gap-1.5 self-start text-sm font-semibold text-primary-600 hover:text-primary-700 sm:self-center"
                >
                  Explore
                  <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      <section className="bg-white py-14 sm:py-16" aria-labelledby="faq-heading">
        <PageContainer>
          <div className="mb-8 max-w-2xl">
            <p className="mb-3 text-lg font-semibold uppercase tracking-wider text-primary-600">
              FAQ
            </p>
            <h2 id="faq-heading" className="text-3xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-4xl">
              Frequently asked questions
            </h2>
          </div>
          <FAQAccordion items={faqItems} allowMultiple />
        </PageContainer>
      </section>

      <CTA
        title="Can't Find What You're Looking For?"
        description="Book a consultation and we'll help you identify the right resources, plan, or program for your child's stage of the admission journey."
        primaryAction={{ label: 'Book a Consultation', href: '/book-a-consultation' }}
        secondaryAction={{ label: 'Explore Programs', href: '/ap' }}
        variant="centered"
      />
    </>
  );
}
