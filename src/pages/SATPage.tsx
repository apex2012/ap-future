import { motion } from 'framer-motion';
import { BookOpen, PenLine, Calculator, ClipboardList, Timer, ChartLine as LineChart, Sparkles, Target, Compass } from 'lucide-react';
import { Hero } from '@/components/ui/Hero';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { CTA } from '@/components/ui/CTA';
import { PageContainer } from '@/components/ui/PageContainer';
import { Breadcrumb } from '@/components/ui/Breadcrumb';

const heroImage = {
  src: 'https://images.pexels.com/photos/7092524/pexels-photo-7092524.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  alt: 'A student writes notes and uses a laptop at a desk while preparing for an exam',
  width: 940,
  height: 650,
  srcSet:
    'https://images.pexels.com/photos/7092524/pexels-photo-7092524.jpeg?auto=compress&cs=tinysrgb&h=400&w=600 600w, https://images.pexels.com/photos/7092524/pexels-photo-7092524.jpeg?auto=compress&cs=tinysrgb&h=650&w=940 940w, https://images.pexels.com/photos/7092524/pexels-photo-7092524.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400 1400w',
  sizes: '(min-width: 1024px) 45vw, 100vw',
};

const whySAT = [
  {
    icon: <Target size={22} />,
    title: 'Built for the Digital SAT format',
    description:
      'The Digital SAT is shorter, section-adaptive, and taken on a device. Our preparation mirrors the real test interface, question styles, and timing so students face no surprises on test day.',
  },
  {
    icon: <BookOpen size={22} />,
    title: 'Concept-first, not memorization',
    description:
      'We teach the underlying skills the SAT measures — reading comprehension, grammar, algebra, and data analysis — so students can solve unfamiliar questions with confidence.',
  },
  {
    icon: <LineChart size={22} />,
    title: 'Diagnose before you drill',
    description:
      'Every student begins with a diagnostic assessment that identifies strengths and gaps. Study time is then directed where it produces the greatest score improvement.',
  },
  {
    icon: <Compass size={22} />,
    title: 'A plan that fits each student',
    description:
      'We build a personalized study plan around each student’s timeline, target score, and school workload — so preparation stays balanced and sustainable.',
  },
];

const learningAreas = [
  {
    number: '01',
    icon: <PenLine size={22} />,
    title: 'Reading & Writing',
    target: 'For students who need stronger comprehension, grammar, and vocabulary skills.',
    skills: ['Reading comprehension', 'Grammar & usage', 'Vocabulary in context', 'Expression of ideas'],
    rationale:
      'Shorter passages, single-paragraph questions, and precise grammar rules define the Reading & Writing section. We rebuild each skill from the ground up rather than relying on test-day instinct.',
  },
  {
    number: '02',
    icon: <Calculator size={22} />,
    title: 'Mathematics',
    target: 'For students who need stronger algebra, geometry, and data analysis skills.',
    skills: ['Algebra', 'Problem-solving & data analysis', 'Geometry & trigonometry', 'Advanced algebra'],
    rationale:
      'The Math section rewards conceptual fluency over calculation speed. Students learn to translate word problems, reason through multi-step questions, and use the built-in calculator efficiently.',
  },
  {
    number: '03',
    icon: <ClipboardList size={22} />,
    title: 'Study Plan',
    target: 'For students who need structure, pacing, and a clear path to their target score.',
    skills: ['Diagnostic assessment', 'Target score planning', 'Weekly study schedule', 'Error tracking & review'],
    rationale:
      'A strong plan turns effort into results. We help students set a realistic target, sequence their preparation, and build a review habit that turns mistakes into measurable progress.',
  },
];

const approach = [
  {
    icon: <BookOpen size={22} />,
    title: 'Concept-first instruction',
    description:
      'We teach the underlying skill before the test strategy. Students understand why an answer is correct, not just how to guess.',
  },
  {
    icon: <Timer size={22} />,
    title: 'Timed practice',
    description:
      'Full-length and section-level timed practice builds the pacing and stamina the Digital SAT demands, under conditions that match test day.',
  },
  {
    icon: <LineChart size={22} />,
    title: 'Error analysis',
    description:
      'Every practice set is reviewed. We categorize errors by skill and question type so students focus their effort where it moves the score.',
  },
  {
    icon: <Sparkles size={22} />,
    title: 'Responsible AI support',
    description:
      'Students may use AI tools to explain concepts and generate practice questions — always with instructor guidance and human review.',
  },
];

const faqItems = [
  {
    question: 'What is the Digital SAT and how is it different from the old SAT?',
    answer:
      'The Digital SAT is shorter (about two hours), taken on a laptop or tablet, and section-adaptive — meaning the difficulty of later questions adjusts to the student’s earlier answers. It replaces long reading passages with shorter ones and allows a calculator throughout the Math section.',
  },
  {
    question: 'When should my child start preparing for the SAT?',
    answer:
      'Most students begin structured preparation in Grade 11, about three to four months before their first test date. Students who want to build foundational skills earlier can start with vocabulary and algebra review in Grade 10.',
  },
  {
    question: 'How long does SAT preparation usually take?',
    answer:
      'A typical plan runs 8–12 weeks of focused study, with two to four hours of practice per week. Students aiming for a significant score increase or starting further from their target may benefit from a longer timeline.',
  },
  {
    question: 'Do you provide official SAT practice materials?',
    answer:
      'We use official College Board practice questions and full-length tests as the core of our preparation, supplemented by instructor-created materials that target specific skills and question types.',
  },
  {
    question: 'How is the SAT used in university admissions?',
    answer:
      'SAT scores are one part of a holistic application. Many universities in the US, Canada, and other countries accept or require them, and a strong score can strengthen an application — but it does not replace grades, rigor, and the personal statement.',
  },
  {
    question: 'Do you offer SAT score guarantees?',
    answer:
      'No. We do not believe in score guarantees. Honest preparation focuses on real skill growth, consistent practice, and a plan built around each student’s starting point and goals.',
  },
];

export function SATPage() {
  return (
    <>
      <Hero
        variant="split"
        eyebrow="Digital SAT"
        title="Prepare for the Digital SAT with Confidence."
        description="Structured preparation across Reading & Writing, Mathematics, and Study Planning — built around the digital format, grounded in real skills, and guided by experienced educators."
        actions={[
          { label: 'Book a Consultation', href: '/book-a-consultation', variant: 'primary' },
          { label: 'Explore the Approach', href: '#approach', variant: 'secondary' },
        ]}
        image={heroImage}
      />

      <section className="bg-[#F7F8FA] py-14 sm:py-16" aria-labelledby="why-sat-heading">
        <PageContainer width="wide">
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'SAT' }]} />

          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xl font-semibold uppercase tracking-wider text-primary-600">
              Why AP Future
            </p>
            <h2 id="why-sat-heading" className="text-3xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-4xl">
              SAT preparation designed for the digital format
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-neutral-500">
              Generic test prep ignores how the Digital SAT actually works. We prepare students for the
              real test — its adaptive structure, its shorter passages, and its calculator-active math
              section — while building skills that last beyond exam day.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {whySAT.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.08 }}
                className="flex gap-5 rounded-2xl border border-neutral-100 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                  {item.icon}
                </span>
                <div>
                  <h3 className="text-base font-semibold leading-snug text-neutral-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </PageContainer>
      </section>

      <section id="learning-areas" className="py-14 sm:py-16" aria-labelledby="learning-areas-heading">
        <PageContainer width="wide">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xl font-semibold uppercase tracking-wider text-primary-600">
              Learning Areas
            </p>
            <h2 id="learning-areas-heading" className="text-3xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-4xl">
              Three areas that cover the full Digital SAT
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-neutral-500">
              Each area maps directly to a section of the exam or to the planning that makes preparation
              effective. Together they form a complete preparation path.
            </p>
          </div>

          <div className="mt-10 space-y-5">
            {learningAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.08 }}
                className="grid grid-cols-1 gap-6 rounded-2xl border border-neutral-100 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-md sm:grid-cols-[auto_1fr] sm:items-center lg:p-8"
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold tracking-tight text-primary-200">
                    {area.number}
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                    {area.icon}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-semibold leading-snug text-neutral-900">
                    {area.title}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-400">{area.target}</p>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                    {area.rationale}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {area.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </PageContainer>
      </section>

      <section id="approach" className="bg-[#EEF4FF] py-14 sm:py-16" aria-labelledby="approach-heading">
        <PageContainer width="wide">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-xl font-semibold uppercase tracking-wider text-primary-600">
              Our Approach
            </p>
            <h2 id="approach-heading" className="text-3xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-4xl">
              How we prepare students for the Digital SAT
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-neutral-500">
              Preparation follows four connected stages. Each stage builds on the last, turning isolated
              practice into a clear, repeatable path to a higher score.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.08 }}
                className="flex h-full flex-col rounded-2xl border border-neutral-100 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                  {item.icon}
                </span>
                <h3 className="text-base font-semibold leading-snug text-neutral-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </PageContainer>
      </section>

      <section className="py-14 sm:py-16" aria-labelledby="faq-heading">
        <PageContainer>
          <div className="mb-8 max-w-2xl">
            <p className="mb-3 text-xl font-semibold uppercase tracking-wider text-primary-600">
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
        title="Ready to Build Your SAT Study Plan?"
        description="Book a consultation to discuss your target score, timeline, and a preparation plan built around your goals."
        primaryAction={{ label: 'Book a Consultation', href: '/book-a-consultation' }}
        secondaryAction={{ label: 'Explore AP Courses', href: '/ap' }}
        variant="centered"
      />
    </>
  );
}
