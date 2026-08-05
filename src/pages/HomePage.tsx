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
      'Strategic planning from school selection through application and essay support, tailored to each student’s goals.',
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

      <section className="bg-[#F7F8FA] py-12 sm:py-14" aria-labelledby="intro-heading">
        <PageContainer width="wide">
          <div className="mx-auto max-w-3xl text-center">
            <motion.p
              className="mb-4 text-[18px] font-semibold uppercase tracking-widest text-primary-600"
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
            className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-x-2 gap-y-8 sm:gap-x-0"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            {trustSignals.map((signal, index) => (
              <div
                key={signal.label}
                className={`flex flex-col items-center px-6 sm:px-10 ${
                  index !== 0 ? 'sm:border-l sm:border-neutral-300' : ''
                }`}
              >
                <dt className="sr-only">{signal.label}</dt>
                <dd>
                  <span className="block text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
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
              className="group inline-flex items-center gap-1.5 text-[18px] font-semibold text-primary-600 hover:text-primary-700"
            >
              Learn more about our story
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </PageContainer>
      </section>

      <section className="py-14 sm:py-16" aria-labelledby="services-heading">
        <PageContainer width="wide">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-[18px] font-semibold uppercase tracking-widest text-primary-600">
              What We Do
            </p>
            <h2 id="services-heading" className="text-3xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-4xl">
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
                className="group flex flex-col gap-6 py-7 sm:flex-row sm:items-center sm:gap-10"
              >
                <div className="flex flex-shrink-0 items-center gap-4 sm:w-72">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-neutral-50 text-primary-600 transition-all duration-300 group-hover:bg-primary-50 group-hover:shadow-md">
                    {service.icon}
                  </span>
                  <h3 className="text-xl font-semibold leading-snug text-neutral-900">
                    {service.title}
                  </h3>
                </div>
                <p className="flex-1 text-base leading-relaxed text-neutral-500">
                  {service.description}
                </p>
                <Link
                  to={service.href}
                  className="inline-flex flex-shrink-0 items-center gap-1.5 self-start rounded-full border border-neutral-200 px-5 py-2.5 text-[18px] font-semibold text-neutral-700 transition-all duration-200 hover:border-neutral-300 hover:bg-neutral-50 hover:text-primary-600 sm:self-center"
                >
                  Explore
                  <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </PageContainer>
      </section>

      <section className="bg-[#EEF4FF] py-14 sm:py-16" aria-labelledby="trust-heading">
        <PageContainer width="wide">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-[18px] font-semibold uppercase tracking-widest text-primary-600">
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

          <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {trustPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.08 }}
                className="flex flex-col"
              >
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-primary-600 shadow-sm">
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
