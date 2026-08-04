import { BookOpen, Calculator, Atom, Landmark, Brain, Globe as Globe2, Cpu, Briefcase, Users, HeartPulse, ChartBar, ClipboardList } from 'lucide-react';
import { Hero } from '@/components/ui/Hero';
import { CourseCard } from '@/components/ui/CourseCard';
import { FeatureGrid } from '@/components/ui/FeatureGrid';
import { CTA } from '@/components/ui/CTA';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
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

const mathCourses = [
  { title: 'Precalculus', category: 'Mathematics', description: 'Build the foundational skills in functions, algebra, and trigonometry needed for calculus.', recommendedGrade: 'Grades 9–11', difficulty: 'Intermediate', duration: 'Full year', href: '/ap', icon: <Calculator size={20} /> },
  { title: 'Calculus AB', category: 'Mathematics', description: 'Master limits, derivatives, and integrals in this introductory college-level calculus course.', recommendedGrade: 'Grades 10–12', difficulty: 'Advanced', duration: 'Full year', href: '/ap', icon: <Calculator size={20} /> },
  { title: 'Calculus BC', category: 'Mathematics', description: 'Extend Calculus AB with series, parametric equations, and polar functions for greater depth.', recommendedGrade: 'Grades 11–12', difficulty: 'Advanced', duration: 'Full year', href: '/ap', icon: <Calculator size={20} /> },
  { title: 'Statistics', category: 'Mathematics', description: 'Learn data analysis, probability, and statistical inference through real-world applications.', recommendedGrade: 'Grades 10–12', difficulty: 'Intermediate', duration: 'Full year', href: '/ap', icon: <ChartBar size={20} /> },
];

const physicsCourses = [
  { title: 'Physics 1', category: 'Physics', description: 'Study Newtonian mechanics, waves, and electricity through inquiry-based learning.', recommendedGrade: 'Grades 10–12', difficulty: 'Intermediate', duration: 'Full year', href: '/ap', icon: <Atom size={20} /> },
  { title: 'Physics 2', category: 'Physics', description: 'Explore fluid mechanics, thermodynamics, electromagnetism, and optics at college level.', recommendedGrade: 'Grades 11–12', difficulty: 'Advanced', duration: 'Full year', href: '/ap', icon: <Atom size={20} /> },
  { title: 'Physics C: Mechanics', category: 'Physics', description: 'Calculus-based mechanics covering kinematics, dynamics, and rotational motion in depth.', recommendedGrade: 'Grades 11–12', difficulty: 'Advanced', duration: 'Full year', href: '/ap', icon: <Atom size={20} /> },
  { title: 'Physics C: Electricity & Magnetism', category: 'Physics', description: 'Calculus-based study of electrostatics, circuits, magnetic fields, and electromagnetism.', recommendedGrade: 'Grade 12', difficulty: 'Advanced', duration: 'Full year', href: '/ap', icon: <Atom size={20} /> },
];

const socialScienceCourses = [
  { title: 'Microeconomics', category: 'Social Sciences', description: 'Understand consumer behavior, firm decisions, and market structures at college level.', recommendedGrade: 'Grades 10–12', difficulty: 'Intermediate', duration: 'One semester', href: '/ap', icon: <Landmark size={20} /> },
  { title: 'Macroeconomics', category: 'Social Sciences', description: 'Study national income, price levels, fiscal policy, and international economics.', recommendedGrade: 'Grades 10–12', difficulty: 'Intermediate', duration: 'One semester', href: '/ap', icon: <Landmark size={20} /> },
  { title: 'Human Geography', category: 'Social Sciences', description: 'Explore population, migration, culture, and urbanization through spatial analysis.', recommendedGrade: 'Grades 9–12', difficulty: 'Introductory', duration: 'Full year', href: '/ap', icon: <Globe2 size={20} /> },
  { title: 'Psychology', category: 'Social Sciences', description: 'Investigate the scientific study of behavior, cognition, and mental processes.', recommendedGrade: 'Grades 10–12', difficulty: 'Intermediate', duration: 'Full year', href: '/ap', icon: <Brain size={20} /> },
  { title: 'Comparative Government', category: 'Social Sciences', description: 'Compare political systems, institutions, and policies across major countries.', recommendedGrade: 'Grades 11–12', difficulty: 'Advanced', duration: 'Full year', href: '/ap', icon: <Landmark size={20} /> },
];

const pathways = [
  { title: 'Engineering', description: 'Calculus BC, Physics C, and Chemistry form a strong quantitative foundation for engineering programs.', icon: <Cpu size={22} />, href: '/ap' },
  { title: 'Computer Science', description: 'Calculus AB, Statistics, and Physics C develop the analytical thinking needed for CS programs.', icon: <Cpu size={22} />, href: '/ap' },
  { title: 'Business', description: 'Microeconomics, Macroeconomics, Statistics, and Calculus AB build a competitive business profile.', icon: <Briefcase size={22} />, href: '/ap' },
  { title: 'Social Sciences', description: 'Psychology, Human Geography, Comparative Government, and Macroeconomics prepare future social scientists.', icon: <Users size={22} />, href: '/ap' },
];

const learningOutcomes = [
  { title: 'Conceptual Mastery', description: 'Build deep understanding before memorization so knowledge transfers to new problems.', icon: <BookOpen size={22} /> },
  { title: 'Analytical Thinking', description: 'Develop the reasoning skills needed to break down complex, multi-step problems.', icon: <Brain size={22} /> },
  { title: 'Exam Readiness', description: 'Practice with real AP-style questions and timed mock exams throughout the year.', icon: <ClipboardList size={20} /> },
  { title: 'Academic Confidence', description: 'Grow into an independent learner prepared for the demands of university coursework.', icon: <HeartPulse size={22} /> },
];

const faqItems = [
  {
    question: 'How many AP courses should a student take?',
    answer: 'There is no universal number. We recommend 3–5 AP courses across subjects aligned with the student\u2019s intended university major, balanced against their overall workload and extracurricular commitments.',
  },
  {
    question: 'When should my child start AP courses?',
    answer: 'Most students begin in Grade 10, though strong students may start in Grade 9 with Human Geography or Precalculus. We help families plan a multi-year AP sequence that fits each student\u2019s readiness.',
  },
  {
    question: 'Are AP courses only for students applying to US universities?',
    answer: 'No. AP scores are recognized by universities in over 60 countries, including the UK, Canada, Australia, and many European institutions. They strengthen applications worldwide.',
  },
  {
    question: 'How are AP courses different from regular high school courses?',
    answer: 'AP courses follow a college-level curriculum set by the College Board and conclude with a standardized exam in May. They cover material in greater depth and require stronger analytical and writing skills.',
  },
  {
    question: 'What if my child is struggling in an AP course?',
    answer: 'Our instructors provide personalized support and identify gaps early. If needed, we can adjust the study plan or recommend additional tutoring sessions to help the student get back on track.',
  },
  {
    question: 'Do you offer AP exam registration?',
    answer: 'We guide families through the College Board exam registration process, but registration itself is handled through the student\u2019s school or an authorized AP test center.',
  },
];

function CourseSection({
  id,
  title,
  description,
  courses,
}: {
  id: string;
  title: string;
  description: string;
  courses: typeof mathCourses;
}) {
  return (
    <div className="mt-12 first:mt-0">
      <div className="mb-6 flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
          {courses[0].icon}
        </span>
        <div>
          <h3 id={id} className="text-xl font-semibold leading-snug text-neutral-900">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-neutral-500">{description}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {courses.map((course) => (
          <CourseCard key={course.title} {...course} />
        ))}
      </div>
    </div>
  );
}

export function APPage() {
  return (
    <>
      <div className="-mt-6 lg:-mt-10">
        <Hero
          variant="split"
          eyebrow="AP Courses"
          title="Master AP Subjects with Expert Guidance."
          description="College-level instruction across Mathematics, Physics, and Social Sciences, designed to build deep understanding and competitive university applications."
          actions={[
            { label: 'Book a Consultation', href: '/book-a-consultation', variant: 'primary' },
            { label: 'Explore Pathways', href: '#pathways', variant: 'secondary' },
          ]}
          image={heroImage}
        />
      </div>

      <section className="py-16 sm:py-20" aria-labelledby="courses-heading">
        <PageContainer>
          <div className="mb-6 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-600">
              Course Catalog
            </p>
            <h2 id="courses-heading" className="text-2xl font-semibold leading-tight text-neutral-900 sm:text-3xl">
              Thirteen AP courses across three disciplines
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-600">
              Each course follows the College Board curriculum and is taught by experienced educators who
              prioritize understanding over memorization.
            </p>
          </div>

          <CourseSection
            id="math-courses"
            title="Mathematics"
            description="Build quantitative reasoning from Precalculus through advanced Calculus and Statistics."
            courses={mathCourses}
          />
          <CourseSection
            id="physics-courses"
            title="Physics"
            description="Develop scientific inquiry skills from introductory mechanics through calculus-based Physics C."
            courses={physicsCourses}
          />
          <CourseSection
            id="social-science-courses"
            title="Social Sciences"
            description="Understand human behavior, economic systems, and political structures through a global lens."
            courses={socialScienceCourses}
          />
        </PageContainer>
      </section>

      <section id="pathways" className="bg-neutral-50 py-16 sm:py-20" aria-labelledby="pathways-heading">
        <PageContainer>
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-600">
              Pathways
            </p>
            <h2 id="pathways-heading" className="text-2xl font-semibold leading-tight text-neutral-900 sm:text-3xl">
              Four pathways to guide your course selection
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-600">
              Recommended course combinations aligned with common university majors. Pathways are flexible and
              can be adjusted to fit each student\u2019s goals.
            </p>
          </div>
          <FeatureGrid items={pathways} columns={4} />
        </PageContainer>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="outcomes-heading">
        <PageContainer>
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-600">
              Learning Outcomes
            </p>
            <h2 id="outcomes-heading" className="text-2xl font-semibold leading-tight text-neutral-900 sm:text-3xl">
              What students gain from AP Future
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-600">
              Beyond exam scores, our courses develop the skills and habits that prepare students for university
              and beyond.
            </p>
          </div>
          <FeatureGrid items={learningOutcomes} columns={4} />
        </PageContainer>
      </section>

      <section className="bg-neutral-50 py-16 sm:py-20" aria-labelledby="faq-heading">
        <PageContainer>
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-600">
              FAQ
            </p>
            <h2 id="faq-heading" className="text-2xl font-semibold leading-tight text-neutral-900 sm:text-3xl">
              Frequently asked questions
            </h2>
          </div>
          <FAQAccordion items={faqItems} />
        </PageContainer>
      </section>

      <CTA
        title="Ready to Start Your AP Journey?"
        description="Book a consultation to discuss your academic goals and build a personalized AP course plan."
        primaryAction={{ label: 'Book a Consultation', href: '/book-a-consultation' }}
        secondaryAction={{ label: 'Explore Programs', href: '/sat' }}
        variant="centered"
      />
    </>
  );
}
