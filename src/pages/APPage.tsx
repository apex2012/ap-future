import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Calculator,
  Atom,
  Landmark,
  Brain,
  Globe as Globe2,
  Cpu,
  Briefcase,
  Users,
  ChartBar,
  ChevronDown,
  BookOpen,
  Target,
  Clock,
  Heart,
} from 'lucide-react';
import { Hero } from '@/components/ui/Hero';
import { CourseCard } from '@/components/ui/CourseCard';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { CTA } from '@/components/ui/CTA';
import { PageContainer } from '@/components/ui/PageContainer';

const heroImage = {
  src: 'https://images.pexels.com/photos/249360/pexels-photo-249360.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  alt: 'A student writes mathematical notes in a notebook using a pen',
  width: 940,
  height: 650,
  srcSet:
    'https://images.pexels.com/photos/249360/pexels-photo-249360.jpeg?auto=compress&cs=tinysrgb&h=400&w=600 600w, https://images.pexels.com/photos/249360/pexels-photo-249360.jpeg?auto=compress&cs=tinysrgb&h=650&w=940 940w, https://images.pexels.com/photos/249360/pexels-photo-249360.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400 1400w',
  sizes: '(min-width: 1024px) 45vw, 100vw',
};

const whyAPFuture = [
  {
    icon: <BookOpen size={22} />,
    title: 'College Board-aligned curriculum',
    description:
      'Every course follows the official College Board framework. Students learn the exact skills and content the AP exam tests, not a simplified approximation.',
  },
  {
    icon: <Target size={22} />,
    title: 'Exam preparation, not just content',
    description:
      'We teach test strategy, time management, and free-response writing alongside subject material. Students walk into May exams knowing what to expect.',
  },
  {
    icon: <Clock size={22} />,
    title: 'Structured multi-year planning',
    description:
      'We help families plan a 2–3 year AP sequence that balances workload, builds progressively, and aligns with university application timelines.',
  },
  {
    icon: <Heart size={22} />,
    title: 'Personalized support when it matters',
    description:
      'Small classes, instructor access outside of class hours, and early intervention when a student falls behind. No one slips through quietly.',
  },
];

const pathways = [
  {
    number: '01',
    icon: <Cpu size={22} />,
    title: 'Engineering',
    target: 'For students aiming at mechanical, electrical, or civil engineering programs.',
    courses: ['Calculus BC', 'Physics C: Mechanics', 'Physics C: Electricity & Magnetism'],
    rationale: 'Calculus-based physics and advanced calculus demonstrate the quantitative depth engineering programs expect.',
  },
  {
    number: '02',
    icon: <Cpu size={22} />,
    title: 'Computer Science',
    target: 'For students targeting CS, data science, or software engineering degrees.',
    courses: ['Calculus AB', 'Statistics', 'Physics C: Mechanics'],
    rationale: 'Strong analytical foundations in calculus and statistics, plus a quantitative science, match CS admissions expectations.',
  },
  {
    number: '03',
    icon: <Briefcase size={22} />,
    title: 'Business & Economics',
    target: 'For students planning to study business, finance, or economics.',
    courses: ['Microeconomics', 'Macroeconomics', 'Statistics', 'Calculus AB'],
    rationale: 'A combination of economic theory and quantitative skills signals readiness for business school coursework.',
  },
  {
    number: '04',
    icon: <Users size={22} />,
    title: 'Social Sciences & Humanities',
    target: 'For students interested in psychology, political science, geography, or law.',
    courses: ['Psychology', 'Human Geography', 'Comparative Government', 'Macroeconomics'],
    rationale: 'A broad social science profile shows intellectual curiosity and writing ability valued by liberal arts programs.',
  },
];

const disciplineGroups = [
  {
    id: 'math-courses',
    title: 'Mathematics',
    description: 'Build quantitative reasoning from Precalculus through advanced Calculus and Statistics.',
    courseCount: 4,
    courses: [
      { title: 'Precalculus', category: 'Mathematics', description: 'Build the foundational skills in functions, algebra, and trigonometry needed for calculus.', recommendedGrade: 'Grades 9–11', difficulty: 'Intermediate', duration: 'Full year', href: '/ap', icon: <Calculator size={20} /> },
      { title: 'Calculus AB', category: 'Mathematics', description: 'Master limits, derivatives, and integrals in this introductory college-level calculus course.', recommendedGrade: 'Grades 10–12', difficulty: 'Advanced', duration: 'Full year', href: '/ap', icon: <Calculator size={20} /> },
      { title: 'Calculus BC', category: 'Mathematics', description: 'Extend Calculus AB with series, parametric equations, and polar functions for greater depth.', recommendedGrade: 'Grades 11–12', difficulty: 'Advanced', duration: 'Full year', href: '/ap', icon: <Calculator size={20} /> },
      { title: 'Statistics', category: 'Mathematics', description: 'Learn data analysis, probability, and statistical inference through real-world applications.', recommendedGrade: 'Grades 10–12', difficulty: 'Intermediate', duration: 'Full year', href: '/ap', icon: <ChartBar size={20} /> },
    ],
  },
  {
    id: 'physics-courses',
    title: 'Physics',
    description: 'Develop scientific inquiry skills from introductory mechanics through calculus-based Physics C.',
    courseCount: 4,
    courses: [
      { title: 'Physics 1', category: 'Physics', description: 'Study Newtonian mechanics, waves, and electricity through inquiry-based learning.', recommendedGrade: 'Grades 10–12', difficulty: 'Intermediate', duration: 'Full year', href: '/ap', icon: <Atom size={20} /> },
      { title: 'Physics 2', category: 'Physics', description: 'Explore fluid mechanics, thermodynamics, electromagnetism, and optics at college level.', recommendedGrade: 'Grades 11–12', difficulty: 'Advanced', duration: 'Full year', href: '/ap', icon: <Atom size={20} /> },
      { title: 'Physics C: Mechanics', category: 'Physics', description: 'Calculus-based mechanics covering kinematics, dynamics, and rotational motion in depth.', recommendedGrade: 'Grades 11–12', difficulty: 'Advanced', duration: 'Full year', href: '/ap', icon: <Atom size={20} /> },
      { title: 'Physics C: Electricity & Magnetism', category: 'Physics', description: 'Calculus-based study of electrostatics, circuits, magnetic fields, and electromagnetism.', recommendedGrade: 'Grade 12', difficulty: 'Advanced', duration: 'Full year', href: '/ap', icon: <Atom size={20} /> },
    ],
  },
  {
    id: 'social-science-courses',
    title: 'Social Sciences',
    description: 'Understand human behavior, economic systems, and political structures through a global lens.',
    courseCount: 5,
    courses: [
      { title: 'Microeconomics', category: 'Social Sciences', description: 'Understand consumer behavior, firm decisions, and market structures at college level.', recommendedGrade: 'Grades 10–12', difficulty: 'Intermediate', duration: 'One semester', href: '/ap', icon: <Landmark size={20} /> },
      { title: 'Macroeconomics', category: 'Social Sciences', description: 'Study national income, price levels, fiscal policy, and international economics.', recommendedGrade: 'Grades 10–12', difficulty: 'Intermediate', duration: 'One semester', href: '/ap', icon: <Landmark size={20} /> },
      { title: 'Human Geography', category: 'Social Sciences', description: 'Explore population, migration, culture, and urbanization through spatial analysis.', recommendedGrade: 'Grades 9–12', difficulty: 'Introductory', duration: 'Full year', href: '/ap', icon: <Globe2 size={20} /> },
      { title: 'Psychology', category: 'Social Sciences', description: 'Investigate the scientific study of behavior, cognition, and mental processes.', recommendedGrade: 'Grades 10–12', difficulty: 'Intermediate', duration: 'Full year', href: '/ap', icon: <Brain size={20} /> },
      { title: 'Comparative Government', category: 'Social Sciences', description: 'Compare political systems, institutions, and policies across major countries.', recommendedGrade: 'Grades 11–12', difficulty: 'Advanced', duration: 'Full year', href: '/ap', icon: <Landmark size={20} /> },
    ],
  },
];

const faqItems = [
  {
    question: 'How many AP courses should a student take?',
    answer:
      'There is no universal number. We recommend 3–5 AP courses across subjects aligned with the student’s intended university major, balanced against their overall workload and extracurricular commitments.',
  },
  {
    question: 'When should my child start AP courses?',
    answer:
      'Most students begin in Grade 10, though strong students may start in Grade 9 with Human Geography or Precalculus. We help families plan a multi-year AP sequence that fits each student’s readiness.',
  },
  {
    question: 'Are AP courses only for students applying to US universities?',
    answer:
      'No. AP scores are recognized by universities in over 60 countries, including the UK, Canada, Australia, and many European institutions. They strengthen applications worldwide.',
  },
  {
    question: 'How are AP courses different from regular high school courses?',
    answer:
      'AP courses follow a college-level curriculum set by the College Board and conclude with a standardized exam in May. They cover material in greater depth and require stronger analytical and writing skills.',
  },
  {
    question: 'What if my child is struggling in an AP course?',
    answer:
      'Our instructors provide personalized support and identify gaps early. If needed, we can adjust the study plan or recommend additional tutoring sessions to help the student get back on track.',
  },
  {
    question: 'Do you offer AP exam registration?',
    answer:
      'We guide families through the College Board exam registration process, but registration itself is handled through the student’s school or an authorized AP test center.',
  },
];

function DisciplineGroup({
  group,
  defaultOpen = false,
}: {
  group: (typeof disciplineGroups)[number];
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="overflow-hidden rounded-2xl border border-primary-100 bg-white shadow-sm">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-7 py-6 text-left transition-colors hover:bg-primary-50/50 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-primary-600"
      >
        <div className="flex items-center gap-4">
          <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
            {group.courses[0].icon}
          </span>
          <div>
            <h3 className="text-lg font-semibold leading-snug text-neutral-900">
              {group.title}
            </h3>
            <p className="mt-0.5 text-sm text-neutral-400">
              {group.courseCount} courses &middot; {group.description}
            </p>
          </div>
        </div>
        <div className="flex flex-shrink-0 items-center gap-3">
          <span className="hidden text-sm font-semibold text-primary-600 sm:block">
            {open ? 'Hide courses' : 'View courses'}
          </span>
          <ChevronDown
            size={20}
            className={`flex-shrink-0 text-neutral-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          />
        </div>
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="overflow-hidden"
        >
          <div className="grid grid-cols-1 gap-4 border-t border-primary-100 p-7 sm:grid-cols-2 lg:grid-cols-3">
            {group.courses.map((course) => (
              <CourseCard key={course.title} {...course} />
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}

export function APPage() {
  return (
    <>
      <Hero
        variant="split"
        eyebrow="Advanced Placement"
        title="Choose the Right AP Courses for Your Goals."
        description="Thirteen college-level AP courses across Mathematics, Physics, and Social Sciences, with guided pathways to help students build a competitive university application."
        actions={[
          { label: 'Book a Consultation', href: '/book-a-consultation', variant: 'primary' },
          { label: 'How to Choose', href: '#pathways', variant: 'secondary' },
        ]}
        image={heroImage}
      />

      <section className="bg-[#F7F8FA] py-14 sm:py-16" aria-labelledby="why-future-heading">
        <PageContainer width="wide">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary-600">
              Why AP Future
            </p>
            <h2 id="why-future-heading" className="text-3xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-4xl">
              AP instruction designed for university admissions
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-neutral-500">
              Self-study and school-only AP courses leave students unprepared for the exam format and the
              multi-year planning that competitive universities expect. We close that gap.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {whyAPFuture.map((item, index) => (
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

      <section id="pathways" className="py-14 sm:py-16" aria-labelledby="pathways-heading">
        <PageContainer width="wide">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary-600">
              How to Choose
            </p>
            <h2 id="pathways-heading" className="text-3xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-4xl">
              Four pathways to guide your course selection
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-neutral-500">
              Recommended course combinations aligned with common university majors. Pathways are flexible
              and can be adjusted to fit each student’s goals and timeline.
            </p>
          </div>

          <div className="mt-10 space-y-5">
            {pathways.map((pathway, index) => (
              <motion.div
                key={pathway.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.08 }}
                className="grid grid-cols-1 gap-6 rounded-2xl border border-neutral-100 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-md sm:grid-cols-[auto_1fr_auto] sm:items-center lg:p-8"
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold tracking-tight text-primary-200">
                    {pathway.number}
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                    {pathway.icon}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-semibold leading-snug text-neutral-900">
                    {pathway.title}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-400">{pathway.target}</p>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                    {pathway.rationale}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {pathway.courses.map((course) => (
                      <span
                        key={course}
                        className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </PageContainer>
      </section>

      <section className="bg-[#EEF4FF] py-14 sm:py-16" aria-labelledby="catalog-heading">
        <PageContainer width="wide">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary-600">
              Course Catalog
            </p>
            <h2 id="catalog-heading" className="text-3xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-4xl">
              Thirteen AP courses across three disciplines
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-neutral-500">
              Each course follows the College Board curriculum and is taught by experienced educators who
              prioritize understanding over memorization. Expand a discipline to see the courses within.
            </p>
          </div>

          <div className="space-y-4">
            {disciplineGroups.map((group) => (
              <DisciplineGroup key={group.id} group={group} />
            ))}
          </div>
        </PageContainer>
      </section>

      <section className="py-14 sm:py-16" aria-labelledby="faq-heading">
        <PageContainer>
          <div className="mb-8 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary-600">
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
        title="Ready to Start Your AP Journey?"
        description="Book a consultation to discuss your academic goals and build a personalized AP course plan."
        primaryAction={{ label: 'Book a Consultation', href: '/book-a-consultation' }}
        secondaryAction={{ label: 'Explore SAT', href: '/sat' }}
        variant="centered"
      />
    </>
  );
}
