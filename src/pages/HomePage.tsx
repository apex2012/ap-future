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
  { value: '10+', label: 'Years of experience' },
  { value: '2,000+', label: 'Students taught' },
  { value: '13', label: 'AP subjects offered' },
  { value: '95%', label: 'University admission rate' },
];

const services = [
  {
    title: 'AP Courses',
    description:
      'Thirteen college-level courses across Mathematics, Physics, and Social Sciences, with guided pathways for each university major.',
    href: '/ap',
    icon: <BookOpen size={24} />,
  },
  {
    title: 'Digital SAT Preparation',
    description:
      'Structured preparation for the Digital SAT with adaptive practice, proven strategies, and timed mock exams.',
    href: '/sat',
    icon: <ClipboardList size={24} />,
  },
  {
    title: 'University Planning',
    description:
      'Strategic planning from school selection through application and essay support, tailored to each student\u2019s goals.',
    href: '/university-planning',
    icon: <GraduationCap size={24} />,
  },
  {
    title: 'Resources',
    description:
      'Guides, templates, and research materials to support every stage of the academic journey.',
    href: '/resources',
    icon: <Library size={24} />,
  },
];

const trustPillars = [
  {
    title: 'Expert Instructors',
    description:
      'Experienced educators who understand international curricula and university expectations.',
    icon: <Users size={22} />,
  },
  {
    title: 'Proven Approach',
    description:
      'Structured programs designed for measurable progress, from AP scores to SAT improvements.',
    icon: <ShieldCheck size={22} />,
  },
  {
    title: 'Global Perspective',
    description:
      'Curriculum and guidance built for students applying to universities worldwide.',
    icon: <Globe2 size={22} />,
  },
  {
    title: 'Personalized Guidance',
    description:
      'Every student receives a plan tailored to their goals, timeline, and target universities.',
    icon: <Sparkles size={22} />,
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
      <div className="-mt-6 lg:-mt-10">
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
      </div>

      <section className="py-16 sm:py-20" aria-labelledby="intro-heading">
        <PageContainer width="wide">
          <div className="mx-auto max-w-3xl text-center">
            <motion.p
              className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-600"
              {...fadeUp}
            >
              Who We Are
            </motion.p>
            <motion.h2
              id="intro-heading"
              className="text-2xl font-semibold leading-tight text-neutral-900 sm:text-3xl"
              {...fadeUp}
            >
              An education company built for international university admissions.
            </motion.h2>
            <motion.p
              className="mt-6 text-lg leading-relaxed text-neutral-600"
              {...fadeUp}
            >
              AP Future integrates AP instruction, SAT preparation, university planning, and learning resources
              into a single platform. We help students build academic knowledge, learning skills, and the
              confidence needed for university success and lifelong learning.
            </motion.p>
          </div>

          <motion.dl
            className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200 lg:grid-cols-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            {trustSignals.map((signal) => (
              <div key={signal.label} className="bg-white px-6 py-8 text-center">
                <dt className="sr-only">{signal.label}</dt>
                <dd>
                  <span className="block text-3xl font-bold tracking-tight text-primary-600 sm:text-4xl">
                    {signal.value}
                  </span>
                  <span className="mt-2 block text-sm font-medium text-neutral-500">
                    {signal.label}
                  </span>
                </dd>
              </div>
            ))}
          </motion.dl>

          <motion.div className="mt-8 text-center" {...fadeUp}>
            <Link
              to="/about"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 hover:text-primary-700"
            >
              Learn more about our story
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </PageContainer>
      </section>

      <section className="bg-neutral-50 py-16 sm:py-20" aria-labelledby="services-heading">
        <PageContainer width="wide">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-600">
              What We Do
            </p>
            <h2 id="services-heading" className="text-2xl font-semibold leading-tight text-neutral-900 sm:text-3xl">
              Four programs, one connected path to university
            </h2>
          </div>

          <div className="space-y-0 divide-y divide-neutral-200">
            {services.map((service) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="group flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:gap-10"
              >
                <div className="flex flex-shrink-0 items-center gap-4 sm:w-72">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-primary-600 shadow-sm transition-colors duration-200 group-hover:bg-primary-50">
                    {service.icon}
                  </span>
                  <h3 className="text-xl font-semibold leading-snug text-neutral-900">
                    {service.title}
                  </h3>
                </div>
                <p className="flex-1 text-base leading-relaxed text-neutral-600">
                  {service.description}
                </p>
                <Link
                  to={service.href}
                  className="inline-flex flex-shrink-0 items-center gap-1.5 self-start rounded-lg border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-700 transition-colors duration-200 hover:border-primary-300 hover:text-primary-600 sm:self-center"
                >
                  Explore
                  <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </PageContainer>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="trust-heading">
        <PageContainer width="wide">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-600">
              Why Families Trust AP Future
            </p>
            <h2 id="trust-heading" className="text-2xl font-semibold leading-tight text-neutral-900 sm:text-3xl">
              Education first, trust first
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-neutral-600">
              We are not a traditional tutoring site or a sales-driven admissions agency. Every decision we make
              starts with what helps students learn, grow, and make better educational choices.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trustPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.08 }}
                className="rounded-2xl border border-neutral-200 bg-white p-6"
              >
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                  {pillar.icon}
                </span>
                <h3 className="text-base font-semibold leading-snug text-neutral-900">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
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
