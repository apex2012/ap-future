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
  src: '/images/home/home-hero-vancouver.png',
  alt: 'City skyline and mountains beneath a bright sky',
  width: 1536,
  height: 1024,
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
    icon: <BookOpen size={24} />,
    gradient: 'from-primary-500 to-primary-700',
  },
  {
    title: 'Digital SAT Preparation',
    description:
      'Structured preparation for the Digital SAT with adaptive practice, proven strategies, and timed mock exams.',
    href: '/sat',
    icon: <ClipboardList size={24} />,
    gradient: 'from-secondary-400 to-secondary-600',
  },
  {
    title: 'University Planning',
    description:
      'Strategic planning from school selection through application and essay support, tailored to each student\u2019s goals.',
    href: '/university-planning',
    icon: <GraduationCap size={24} />,
    gradient: 'from-accent-400 to-accent-600',
  },
  {
    title: 'Resources',
    description:
      'Guides, templates, and research materials to support every stage of the academic journey.',
    href: '/resources',
    icon: <Library size={24} />,
    gradient: 'from-primary-400 to-secondary-500',
  },
];

const trustPillars = [
  {
    title: 'Expert Instructors',
    description:
      'Experienced educators who understand international curricula and university expectations.',
    icon: <Users size={26} />,
  },
  {
    title: 'Proven Approach',
    description:
      'Structured programs designed for measurable progress, from AP scores to SAT improvements.',
    icon: <ShieldCheck size={26} />,
  },
  {
    title: 'Global Perspective',
    description:
      'Curriculum and guidance built for students applying to universities worldwide.',
    icon: <Globe2 size={26} />,
  },
  {
    title: 'Personalized Guidance',
    description:
      'Every student receives a plan tailored to their goals, timeline, and target universities.',
    icon: <Sparkles size={26} />,
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: 'easeOut' as const },
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

      <section className="relative overflow-hidden bg-gradient-to-b from-primary-50/40 to-white py-12 sm:py-14" aria-labelledby="intro-heading">
        <PageContainer width="wide">
          <div className="mx-auto max-w-3xl text-center">
            <motion.p
              className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-primary-700"
              {...fadeUp}
            >
              Who We Are
            </motion.p>
            <motion.h2
              id="intro-heading"
              className="text-3xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-4xl"
              {...fadeUp}
            >
              An education company built for international university admissions.
            </motion.h2>
            <motion.p
              className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-500"
              {...fadeUp}
            >
              AP Future integrates AP instruction, SAT preparation, university planning, and learning resources
              into a single platform. We help students build academic knowledge, learning skills, and the
              confidence needed for university success and lifelong learning.
            </motion.p>
          </div>

          <motion.dl
            className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-0"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            {trustSignals.map((signal, index) => (
              <div
                key={signal.label}
                className={`flex flex-col items-center px-4 sm:px-2 ${
                  index !== 0 ? 'sm:border-l sm:border-primary-100' : ''
                }`}
              >
                <dt className="sr-only">{signal.label}</dt>
                <dd className="text-center">
                  <span className="block text-3xl font-bold tracking-tight text-gradient-primary sm:text-4xl">
                    {signal.value}
                  </span>
                  <span className="mt-2 block text-sm font-medium text-neutral-400">
                    {signal.label}
                  </span>
                </dd>
              </div>
            ))}
          </motion.dl>

          <motion.div className="mt-8 text-center" {...fadeUp}>
            <Link
              to="/about"
              className="group inline-flex items-center gap-1.5 text-lg font-semibold text-primary-600 hover:text-primary-700"
            >
              Learn more about our story
              <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </PageContainer>
      </section>

      <section className="relative overflow-hidden py-14 sm:py-16" aria-labelledby="services-heading">
        <div className="bg-dot-pattern absolute inset-0 opacity-60" aria-hidden="true" />
        <PageContainer width="wide" className="relative">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-primary-700">
              What We Do
            </p>
            <h2 id="services-heading" className="text-3xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-4xl">
              Four programs, one connected path to university
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.08 }}
              >
                <Link
                  to={service.href}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${service.gradient}`} />
                  <span className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} text-white shadow-md`}>
                    {service.icon}
                  </span>
                  <h3 className="text-xl font-semibold leading-snug text-neutral-900 transition-colors group-hover:text-primary-600">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-base leading-relaxed text-neutral-500">
                    {service.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600">
                    Explore
                    <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </PageContainer>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50/30 py-14 sm:py-16" aria-labelledby="trust-heading">
        <div className="decorative-blob top-[-60px] left-[-60px] h-[250px] w-[250px] bg-primary-100" aria-hidden="true" />
        <PageContainer width="wide" className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-accent-50 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-accent-700">
              Why Families Trust AP Future
            </p>
            <h2 id="trust-heading" className="text-3xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-4xl">
              Education first, trust first
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-neutral-500">
              We are not a traditional tutoring site or a sales-driven admissions agency. Every decision we make
              starts with what helps students learn, grow, and make better educational choices.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {trustPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.08 }}
                className="flex flex-col rounded-2xl border border-white/60 bg-white/80 p-7 shadow-sm backdrop-blur transition-all duration-300 hover:shadow-md"
              >
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-sm">
                  {pillar.icon}
                </span>
                <h3 className="text-lg font-semibold leading-snug text-neutral-900">
                  {pillar.title}
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-neutral-500">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
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
