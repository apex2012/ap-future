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

      <section className="bg-[#F7F8FA] py-14 sm:py-16" aria-labelledby="intro-heading">
        <PageContainer width="wide">
          <div className="mx-auto max-w-2xl">
            <motion.p
              className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-primary-600"
              {...fadeUp}
            >
              Who We Are
            </motion.p>
            <motion.h2
              id="intro-heading"
              className="text-[34px] font-bold leading-[1.12] tracking-tight text-neutral-900 sm:text-[44px]"
              {...fadeUp}
            >
              An education company built for international university admissions.
            </motion.h2>
            <motion.p
              className="mt-8 max-w-[520px] text-[18px] leading-[1.75] text-neutral-500"
              {...fadeUp}
            >
              AP Future integrates AP instruction, SAT preparation, university planning, and learning resources
              into a single platform. We help students build academic knowledge, learning skills, and the
              confidence needed for university success and lifelong learning.
            </motion.p>
          </div>

          <motion.dl
            className="mx-auto mt-6 grid max-w-5xl grid-cols-2 gap-y-10 sm:grid-cols-4 sm:gap-y-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            {trustSignals.map((signal, index) => (
              <div
                key={signal.label}
                className={`flex flex-col items-center sm:px-8 ${
                  index !== 0 ? 'sm:border-l sm:border-neutral-200/35' : ''
                }`}
              >
                <dt className="sr-only">{signal.label}</dt>
                <dd className="text-center">
                  <span className="block text-[48px] font-bold leading-none tracking-tight text-neutral-900 sm:text-[64px]">
                    {signal.value}
                  </span>
                  <span className="mt-4 block text-[14px] font-medium tracking-wide text-neutral-400">
                    {signal.label}
                  </span>
                </dd>
              </div>
            ))}
          </motion.dl>


        </PageContainer>
      </section>

      <section className="py-20 sm:py-24" aria-labelledby="services-heading">
        <PageContainer width="wide">
          <div className="mb-16 max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary-600">
              What We Do
            </p>
            <h2 id="services-heading" className="text-[34px] font-bold leading-[1.12] tracking-tight text-neutral-900 sm:text-[44px]">
              Four programs, one connected path to university
            </h2>
          </div>

          <div className="divide-y divide-neutral-100">
            {services.map((service) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="group -mx-4 flex flex-col gap-8 rounded-xl px-4 py-12 transition-colors duration-300 hover:bg-neutral-50/70 sm:flex-row sm:items-center sm:gap-0 sm:py-14"
              >
                <div className="flex flex-shrink-0 items-center gap-5 sm:w-72">
                  <span className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-neutral-100/80 text-primary-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-primary-50">
                    {service.icon}
                  </span>
                  <h3 className="text-[19px] font-semibold leading-snug tracking-tight text-neutral-900">
                    {service.title}
                  </h3>
                </div>
                <div className="flex-1 sm:px-10">
                  <p className="max-w-[480px] text-[17px] leading-[1.8] text-neutral-400">
                    {service.description}
                  </p>
                </div>
                <Link
                  to={service.href}
                  className="group/btn inline-flex flex-shrink-0 items-center gap-2 self-start text-[14px] font-medium text-neutral-500 transition-colors duration-200 hover:text-neutral-900 sm:self-center sm:pr-2"
                >
                  <span className="border-b border-neutral-200 pb-px transition-colors duration-200 group-hover/btn:border-neutral-800 group-hover/btn:text-neutral-900">
                    Explore
                  </span>
                  <ArrowRight size={14} className="transition-transform duration-200 group-hover/btn:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </PageContainer>
      </section>

      <section className="bg-[#EEF4FF] py-14 sm:py-16" aria-labelledby="trust-heading">
        <PageContainer width="wide">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xl font-semibold uppercase tracking-wider text-primary-600">
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
