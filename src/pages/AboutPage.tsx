import { motion } from 'framer-motion';
import {
  Compass,
  Telescope,
  FlaskConical,
  Cpu,
  HeartHandshake,
  ArrowRight,
  BookOpen,
  ClipboardList,
  GraduationCap,
  Library,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Hero } from '@/components/ui/Hero';
import { CTA } from '@/components/ui/CTA';
import { PageContainer } from '@/components/ui/PageContainer';
import { Breadcrumb } from '@/components/ui/Breadcrumb';

const principles = [
  {
    number: '01',
    icon: <Compass size={22} />,
    title: 'Education before admission',
    body: 'A strong application is the byproduct of a strong education, not the goal of one. We teach students to think, write, and solve problems — and the scores, grades, and offers that follow are evidence of that learning, not the purpose of it.',
  },
  {
    number: '02',
    icon: <Telescope size={22} />,
    title: 'Long-term thinking',
    body: 'University admission is not a sprint in Grade 12. It is a multi-year process that begins with the right foundation in Grade 9. We help families plan across years, not weeks, so that each decision builds on the last.',
  },
  {
    number: '03',
    icon: <FlaskConical size={22} />,
    title: 'Evidence-based learning',
    body: 'Our programs are grounded in how people actually learn: spaced repetition, active recall, deliberate practice, and timely feedback. We do not rely on motivation or intensity alone. We build systems that make progress visible and sustainable.',
  },
  {
    number: '04',
    icon: <Cpu size={22} />,
    title: 'Human expertise, enhanced by AI',
    body: 'AI is a powerful tool for explanation, practice, and feedback — but it cannot replace the judgment, mentorship, and accountability of an experienced teacher. We use AI to support our instructors, not to substitute for them.',
  },
  {
    number: '05',
    icon: <HeartHandshake size={22} />,
    title: 'Honesty over pressure',
    body: 'We will not promise outcomes we cannot guarantee, inflate expectations, or use fear to drive enrollment. We tell families what we can do, what we cannot do, and what the student must do themselves. Trust is earned through honesty, not marketing.',
  },
];

const approach = [
  {
    icon: <BookOpen size={24} />,
    title: 'College Board-aligned instruction',
    body: 'Every AP course follows the official College Board framework. Students learn the exact skills and content the exam tests, with no shortcuts or simplified approximations.',
  },
  {
    icon: <ClipboardList size={24} />,
    title: 'Structured, not improvised',
    body: 'Each program has a curriculum, a timeline, and measurable milestones. Students always know what they are working on, why it matters, and what comes next.',
  },
  {
    icon: <GraduationCap size={24} />,
    title: 'Multi-year planning',
    body: 'We help families plan a 2–3 year academic sequence that balances workload, builds progressively, and aligns with university application timelines.',
  },
  {
    icon: <Library size={24} />,
    title: 'Connected programs and resources',
    body: 'AP courses, SAT preparation, university planning, and the knowledge center are not separate products. They are one connected path, each supporting the others.',
  },
];

const journey = [
  {
    step: '01',
    title: 'Consultation',
    body: 'We start with a conversation — understanding the student, their goals, their timeline, and their current academic standing. No pressure, no sales script.',
  },
  {
    step: '02',
    title: 'Planning',
    body: 'Together we build a multi-year plan: which AP courses, when to start SAT preparation, how to build extracurriculars, and what the application timeline looks like.',
  },
  {
    step: '03',
    title: 'Learning',
    body: 'The student enters the right programs and works through structured curricula with instructor support, regular feedback, and visible progress.',
  },
  {
    step: '04',
    title: 'Application',
    body: 'As Grade 12 approaches, university planning shifts to the foreground — school selection, essays, interviews, and the final application strategy.',
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: 'easeOut' as const },
};

export function AboutPage() {
  return (
    <>
      <Hero
        variant="centered"
        eyebrow="About AP Future"
        title="Education is the point. Admission is the evidence."
        description="AP Future exists to help families navigate the university admission journey without losing sight of why education matters in the first place."
        heroClassName="py-20 sm:py-28"
      />

      {/* Mission */}
      <section className="bg-white py-14 sm:py-20" aria-labelledby="mission-heading">
        <PageContainer>
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'About' }]} />
          <div className="mx-auto max-w-3xl">
            <motion.p
              className="mb-5 text-lg font-semibold uppercase tracking-wider text-primary-600"
              {...fadeUp}
            >
              Our Mission
            </motion.p>
            <motion.h2
              id="mission-heading"
              className="text-3xl font-bold leading-[1.15] tracking-tight text-neutral-900 sm:text-4xl"
              {...fadeUp}
            >
              We believe the university admission process has lost its way — and we are building something different.
            </motion.h2>
            <motion.div
              className="mt-7 space-y-5 text-lg leading-relaxed text-neutral-500"
              {...fadeUp}
            >
              <p>
                For many families, the journey to university has become a source of anxiety rather than
                growth. Students are pushed toward scores and rankings before they have had the chance
                to develop the skills and curiosity that make those outcomes meaningful.
              </p>
              <p>
                AP Future was founded on a different premise: that a strong university application is
                the natural result of a strong education. When students learn deeply and receive honest
                guidance, the scores, essays, and offers that follow are earned, not manufactured.
              </p>
              <p>
                Our role is not to guarantee admission to a particular university. It is to help each
                student become the kind of learner that competitive universities want to admit.
              </p>
            </motion.div>
          </div>
        </PageContainer>
      </section>

      {/* Education Principles — the intellectual heart */}
      <section className="bg-[#FAFAF9] py-14 sm:py-20" aria-labelledby="principles-heading">
        <PageContainer>
          <div className="mx-auto max-w-3xl">
            <motion.p
              className="mb-5 text-lg font-semibold uppercase tracking-wider text-primary-600"
              {...fadeUp}
            >
              Education Principles
            </motion.p>
            <motion.h2
              id="principles-heading"
              className="text-3xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-4xl"
              {...fadeUp}
            >
              Five beliefs that shape every decision we make.
            </motion.h2>
            <motion.p
              className="mt-5 text-lg leading-relaxed text-neutral-500"
              {...fadeUp}
            >
              These are not marketing points. They are the principles we use to decide what we teach,
              how we teach it, and what we will never do — even when it would be easier or more
              profitable.
            </motion.p>
          </div>

          <div className="mt-12 space-y-3">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.number}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.35, ease: 'easeOut', delay: index * 0.05 }}
                className="group flex flex-col gap-4 rounded-2xl border border-neutral-150 bg-white p-7 transition-all duration-300 hover:border-primary-200 hover:shadow-sm sm:flex-row sm:gap-8 sm:p-9"
              >
                <div className="flex flex-shrink-0 items-center gap-4 sm:w-64">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-colors duration-300 group-hover:bg-primary-100">
                    {principle.icon}
                  </span>
                  <span className="text-sm font-semibold text-neutral-300 transition-colors duration-300 group-hover:text-neutral-400">
                    {principle.number}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold leading-snug tracking-tight text-neutral-900">
                    {principle.title}
                  </h3>
                  <p className="mt-2.5 max-w-2xl text-base leading-relaxed text-neutral-500">
                    {principle.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Learning Approach */}
      <section className="bg-white py-14 sm:py-20" aria-labelledby="approach-heading">
        <PageContainer>
          <div className="mx-auto max-w-3xl">
            <motion.p
              className="mb-5 text-lg font-semibold uppercase tracking-wider text-primary-600"
              {...fadeUp}
            >
              How We Work
            </motion.p>
            <motion.h2
              id="approach-heading"
              className="text-3xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-4xl"
              {...fadeUp}
            >
              Philosophy becomes method.
            </motion.h2>
            <motion.p
              className="mt-5 text-lg leading-relaxed text-neutral-500"
              {...fadeUp}
            >
              Principles only matter if they change how you work. Here is what our beliefs look like
              in practice — in the classroom, in the curriculum, and in the way we guide families.
            </motion.p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {approach.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.06 }}
                className="flex gap-5"
              >
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-neutral-50 text-primary-600">
                  {item.icon}
                </span>
                <div>
                  <h3 className="text-lg font-semibold leading-snug text-neutral-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-neutral-500">
                    {item.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Journey */}
      <section className="bg-[#FAFAF9] py-14 sm:py-20" aria-labelledby="journey-heading">
        <PageContainer>
          <div className="mx-auto max-w-3xl">
            <motion.p
              className="mb-5 text-lg font-semibold uppercase tracking-wider text-primary-600"
              {...fadeUp}
            >
              The Journey
            </motion.p>
            <motion.h2
              id="journey-heading"
              className="text-3xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-4xl"
              {...fadeUp}
            >
              From first conversation to university admission.
            </motion.h2>
            <motion.p
              className="mt-5 text-lg leading-relaxed text-neutral-500"
              {...fadeUp}
            >
              Every family's path is different, but the structure is the same. We walk through it
              together, one stage at a time.
            </motion.p>
          </div>

          <div className="mt-12 relative">
            {/* Connector line */}
            <div className="hidden lg:block absolute top-[7px] left-0 right-0 h-px bg-gradient-to-r from-primary-200 via-primary-300 to-primary-200" aria-hidden="true" />
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {journey.map((stage, index) => (
                <motion.div
                  key={stage.step}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.08 }}
                  className="relative"
                >
                  <span className="relative z-10 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-white ring-4 ring-[#FAFAF9]">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
                  </span>
                  <span className="mt-4 block text-sm font-bold text-primary-500">
                    {stage.step}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold leading-snug text-neutral-900">
                    {stage.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                    {stage.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="mt-12 flex flex-wrap items-center gap-3"
            {...fadeUp}
          >
            <Link
              to="/book-a-consultation"
              className="group inline-flex items-center gap-1.5 text-base font-semibold text-primary-600 hover:text-primary-700"
            >
              Start with a consultation
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
            <span className="text-neutral-300">·</span>
            <Link
              to="/ap"
              className="group inline-flex items-center gap-1.5 text-base font-semibold text-neutral-600 hover:text-primary-600"
            >
              Explore our programs
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </PageContainer>
      </section>

      <CTA
        title="The right education leads to the right university."
        description="Book a consultation to discuss your goals, timeline, and how AP Future can support your university journey."
        primaryAction={{ label: 'Book a Consultation', href: '/book-a-consultation' }}
        secondaryAction={{ label: 'Explore Programs', href: '/ap' }}
        variant="centered"
      />
    </>
  );
}
