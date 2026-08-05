import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  BookOpen,
  ClipboardList,
  GraduationCap,
  Library,
  ArrowRight,
  ShieldCheck,
  Users,
  Globe as Globe2,
  Sparkles,
} from 'lucide-react';
import { Hero } from '@/components/ui/Hero';
import { CTA } from '@/components/ui/CTA';
import { PageContainer } from '@/components/ui/PageContainer';

const heroImage = {
  src: 'https://images.pexels.com/photos/37758609/pexels-photo-37758609.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  alt: 'Students collaborating in a classroom, engaged in study and discussion',
  width: 940,
  height: 650,
  srcSet:
    'https://images.pexels.com/photos/37758609/pexels-photo-37758609.jpeg?auto=compress&cs=tinysrgb&h=400&w=600 600w, https://images.pexels.com/photos/37758609/pexels-photo-37758609.jpeg?auto=compress&cs=tinysrgb&h=650&w=940 940w, https://images.pexels.com/photos/37758609/pexels-photo-37758609.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400 1400w',
  sizes: '(min-width: 1024px) 45vw, 100vw',
};

const trustSignals = [
  { value: '13', label: 'AP subjects offered' },
  { value: '4', label: 'Connected programs' },
  { value: '3', label: 'Core disciplines' },
  { value: '60+', label: 'Countries recognize AP' },
];

const services = [
  {
    title: 'AP Courses',
    description:
      'Thirteen college-level courses across Mathematics, Physics, and Social Sciences, with guided pathways for each university major.',
    href: '/ap',
    icon: <BookOpen size={18} />,
    index: '01',
  },
  {
    title: 'Digital SAT Preparation',
    description:
      'Structured preparation for the Digital SAT with adaptive practice, proven strategies, and timed mock exams.',
    href: '/sat',
    icon: <ClipboardList size={18} />,
    index: '02',
  },
  {
    title: 'University Planning',
    description:
      "Strategic planning from school selection through application and essay support, tailored to each student's goals.",
    href: '/university-planning',
    icon: <GraduationCap size={18} />,
    index: '03',
  },
  {
    title: 'Resources',
    description:
      'Guides, templates, and research materials to support every stage of the academic journey.',
    href: '/resources',
    icon: <Library size={18} />,
    index: '04',
  },
];

const trustPillars = [
  {
    title: 'Expert Instructors',
    description:
      'Experienced educators who understand international curricula and university expectations.',
    icon: <Users size={20} />,
  },
  {
    title: 'Proven Approach',
    description:
      'Structured programs designed for measurable progress, from AP scores to SAT improvements.',
    icon: <ShieldCheck size={20} />,
  },
  {
    title: 'Global Perspective',
    description:
      'Curriculum and guidance built for students applying to universities worldwide.',
    icon: <Globe2 size={20} />,
  },
  {
    title: 'Personalized Guidance',
    description:
      'Every student receives a plan tailored to their goals, timeline, and target universities.',
    icon: <Sparkles size={20} />,
  },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as unknown as string } },
};

export function HomePage() {
  return (
    <>
      <Hero
        variant="split"
        eyebrow="University Admissions"
        title="Prepare for University with Confidence."
        description="Expert AP instruction, structured Digital SAT preparation, strategic university planning, and educational resources designed for long-term student success."
        actions={[
          { label: 'Book a Consultation', href: '/book-a-consultation', variant: 'primary' },
          { label: 'Explore Programs', href: '/ap', variant: 'secondary' },
        ]}
        image={heroImage}
      />

      {/* ── Who We Are ─────────────────────────────────────────────────────── */}
      <section className="border-y border-neutral-100 bg-[#F8F9FB] py-20 sm:py-28" aria-labelledby="intro-heading">
        <PageContainer width="wide">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1px_1fr] lg:gap-0">

            {/* Left: editorial statement */}
            <motion.div
              className="flex flex-col justify-center lg:pr-16"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              variants={stagger}
            >
              <motion.p variants={fadeUp} className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary-600">
                Who We Are
              </motion.p>
              <motion.h2
                id="intro-heading"
                variants={fadeUp}
                className="text-[32px] font-bold leading-[1.12] tracking-tight text-neutral-900 sm:text-[42px]"
              >
                An education company built for international university admissions.
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-6 text-[17px] leading-[1.8] text-neutral-500">
                AP Future integrates AP instruction, SAT preparation, university planning, and learning
                resources into a single, coherent platform — helping students build academic knowledge,
                learning skills, and the confidence needed for university success.
              </motion.p>
            </motion.div>

            {/* Divider */}
            <div className="hidden w-px bg-neutral-200 lg:block" />

            {/* Right: stats */}
            <motion.dl
              className="grid grid-cols-2 gap-x-8 gap-y-10 lg:pl-16"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              variants={stagger}
            >
              {trustSignals.map((signal) => (
                <motion.div key={signal.label} variants={fadeUp} className="flex flex-col">
                  <dt className="sr-only">{signal.label}</dt>
                  <dd>
                    <span className="block text-[52px] font-bold leading-none tracking-tight text-neutral-900">
                      {signal.value}
                    </span>
                    <span className="mt-3 block text-[13px] font-medium leading-snug text-neutral-400">
                      {signal.label}
                    </span>
                  </dd>
                </motion.div>
              ))}
            </motion.dl>

          </div>
        </PageContainer>
      </section>

      {/* ── What We Do ─────────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32" aria-labelledby="services-heading">
        <PageContainer width="wide">

          {/* Section header */}
          <div className="mb-16 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary-600">
                What We Do
              </p>
              <h2
                id="services-heading"
                className="max-w-sm text-[30px] font-bold leading-[1.12] tracking-tight text-neutral-900 sm:text-[36px]"
              >
                Four programs, one connected path to university
              </h2>
            </div>
          </div>

          {/* Program list */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
          >
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                className={`group grid grid-cols-[auto_1fr_auto] items-start gap-8 py-10 sm:items-center sm:py-12 ${
                  i === 0 ? 'border-t border-neutral-150' : ''
                } border-b border-neutral-150`}
                style={{ borderColor: 'rgb(235 235 235)' }}
              >
                {/* Index + icon cluster */}
                <div className="flex flex-col items-center gap-3 pt-0.5">
                  <span className="text-[11px] font-semibold tabular-nums tracking-widest text-neutral-300">
                    {service.index}
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-50 text-neutral-400 transition-colors duration-200 group-hover:bg-primary-50 group-hover:text-primary-500">
                    {service.icon}
                  </span>
                </div>

                {/* Text block */}
                <div>
                  <h3 className="text-[18px] font-semibold leading-snug tracking-tight text-neutral-900">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 max-w-[520px] text-[15px] leading-[1.75] text-neutral-500">
                    {service.description}
                  </p>
                </div>

                {/* Explore link */}
                <Link
                  to={service.href}
                  aria-label={`Explore ${service.title}`}
                  className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-neutral-200 text-neutral-400 transition-all duration-200 hover:border-primary-300 hover:bg-primary-50 hover:text-primary-600"
                >
                  <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

        </PageContainer>
      </section>

      {/* ── Why Families Trust AP Future ───────────────────────────────────── */}
      <section className="border-y border-neutral-100 bg-neutral-950 py-24 sm:py-32" aria-labelledby="trust-heading">
        <PageContainer width="wide">

          <motion.div
            className="mb-16"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary-400">
              Why Families Trust AP Future
            </motion.p>
            <motion.h2
              id="trust-heading"
              variants={fadeUp}
              className="max-w-md text-[30px] font-bold leading-[1.12] tracking-tight text-white sm:text-[36px]"
            >
              Education first, trust first.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-5 max-w-lg text-[16px] leading-[1.8] text-neutral-400">
              We are not a traditional tutoring site or a sales-driven admissions agency. Every decision
              we make starts with what genuinely helps students learn, grow, and choose wisely.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-px bg-neutral-800 sm:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            {trustPillars.map((pillar) => (
              <motion.div
                key={pillar.title}
                variants={fadeUp}
                className="flex flex-col bg-neutral-950 px-8 py-10"
              >
                <span className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-800 text-primary-400">
                  {pillar.icon}
                </span>
                <h3 className="text-[15px] font-semibold leading-snug text-white">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-[1.7] text-neutral-400">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </PageContainer>
      </section>

      <CTA
        title="Let's Build Your Academic Plan Together."
        description="Book a consultation to discuss your goals, timeline, and how AP Future can support your university journey."
        primaryAction={{ label: 'Book a Consultation', href: '/book-a-consultation' }}
        secondaryAction={{ label: 'Explore Programs', href: '/ap' }}
        variant="centered"
      />
    </>
  );
}
