import { motion } from 'framer-motion';
import {
  Compass,
  Microscope,
  Trophy,
  Presentation,
  FolderOpen,
  PenLine,
  FileText,
  MessageSquare,
  ArrowRight,
} from 'lucide-react';
import { Hero } from '@/components/ui/Hero';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { CTA } from '@/components/ui/CTA';
import { PageContainer } from '@/components/ui/PageContainer';
import { Breadcrumb } from '@/components/ui/Breadcrumb';

const timeline = [
  {
    grade: 'Grade 8',
    phase: 'Exploration',
    summary: 'Students discover interests, build habits, and begin to see learning as something they own.',
    areas: [
      { icon: <Compass size={18} />, title: 'Academic Planning', detail: 'Map early course choices and identify emerging strengths.' },
    ],
  },
  {
    grade: 'Grade 9',
    phase: 'Planning',
    summary: 'A multi-year academic plan takes shape, aligned with university expectations and the student\'s interests.',
    areas: [
      { icon: <Compass size={18} />, title: 'Academic Planning', detail: 'Lock in a course sequence for Grades 10–12 and set academic targets.' },
      { icon: <Microscope size={18} />, title: 'Research Projects', detail: 'Begin guided research to develop inquiry and analytical skills.' },
      { icon: <Trophy size={18} />, title: 'Competitions', detail: 'Identify subject-area competitions that match the student\'s profile.' },
    ],
  },
  {
    grade: 'Grade 10',
    phase: 'Building',
    summary: 'Students turn plans into action — projects, competitions, and evidence of sustained commitment.',
    areas: [
      { icon: <Microscope size={18} />, title: 'Research Projects', detail: 'Deepen research with a defined question and a mentor.' },
      { icon: <Trophy size={18} />, title: 'Competitions', detail: 'Compete in chosen events and build a record of results.' },
      { icon: <Presentation size={18} />, title: 'Exhibitions & Conferences', detail: 'Present work publicly to build confidence and visibility.' },
      { icon: <FolderOpen size={18} />, title: 'Portfolio Development', detail: 'Begin collecting evidence of growth across academics and activities.' },
    ],
  },
  {
    grade: 'Grade 11',
    phase: 'Assembling',
    summary: 'The portfolio matures, essays take shape, and the university list narrows to a thoughtful shortlist.',
    areas: [
      { icon: <FolderOpen size={18} />, title: 'Portfolio Development', detail: 'Curate a portfolio that tells a coherent story across years.' },
      { icon: <PenLine size={18} />, title: 'Personal Statement', detail: 'Draft and refine the personal statement with structured feedback.' },
      { icon: <FileText size={18} />, title: 'University Applications', detail: 'Research universities, build a balanced list, and prepare application materials.' },
    ],
  },
  {
    grade: 'Grade 12',
    phase: 'Applying',
    summary: 'Applications are submitted, interviews are prepared, and the student enters university ready.',
    areas: [
      { icon: <FileText size={18} />, title: 'University Applications', detail: 'Finalize and submit applications with attention to deadlines and detail.' },
      { icon: <MessageSquare size={18} />, title: 'Interview Preparation', detail: 'Practice interviews with mock sessions and structured feedback.' },
    ],
  },
];

const integration = [
  {
    title: 'AP Courses',
    description: 'Academic planning begins with the right AP sequence. We align course selection with each student\'s target universities and intended major.',
    href: '/ap',
  },
  {
    title: 'Digital SAT',
    description: 'SAT preparation is scheduled within the planning timeline — not as a separate scramble — so it fits alongside coursework and applications.',
    href: '/sat',
  },
  {
    title: 'Resources',
    description: 'Guides, templates, and research materials support every phase, from early exploration to final application submission.',
    href: '/resources',
  },
];

const faqItems = [
  {
    question: 'When should university planning begin?',
    answer:
      'Ideally in Grade 8, when students can explore broadly and build strong habits. But families who start later — in Grade 10 or 11 — can still benefit significantly. We adjust the plan to fit the time remaining.',
  },
  {
    question: 'Is this the same as tutoring or test preparation?',
    answer:
      'No. Tutoring and test preparation address specific subjects or exams. University Planning addresses the full admissions journey — academics, research, competitions, portfolios, essays, applications, and interviews — and coordinates them over several years.',
  },
  {
    question: 'Do you guarantee university admission?',
    answer:
      'No. No one can honestly guarantee admission. What we do is help students build the strongest possible application through sustained, genuine development — and help families make informed choices about where to apply.',
  },
  {
    question: 'Can my child join mid-way through high school?',
    answer:
      'Yes. We assess where the student is today and build a plan that makes the most of the remaining time. Some areas — like essay development and interview preparation — can begin in Grade 11 or 12 and still produce strong results.',
  },
  {
    question: 'How does University Planning connect to AP and SAT preparation?',
    answer:
      'Planning is the frame that holds everything together. We schedule AP courses and SAT preparation within the multi-year plan so they support — rather than compete with — research, competitions, and application work.',
  },
  {
    question: 'Do you work with students applying outside the US?',
    answer:
      'Yes. We support students applying to universities in the US, UK, Canada, Australia, and other countries. The planning framework adapts to each country\'s application requirements and timelines.',
  },
];

export function UniversityPlanningPage() {
  return (
    <>
      <Hero
        variant="centered"
        eyebrow="University Planning"
        title="We help families design a complete university admission journey."
        description="Not tutoring. Not test prep. A multi-year strategy that weaves academics, research, competitions, portfolios, essays, and interviews into one coherent path — from Grade 8 to university acceptance."
        actions={[
          { label: 'Book a Consultation', href: '/book-a-consultation', variant: 'primary' },
          { label: 'See the Journey', href: '#timeline', variant: 'secondary' },
        ]}
      />

      <section className="py-16 sm:py-20" aria-labelledby="philosophy-heading">
        <PageContainer>
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'University Planning' }]} />

          <div className="mx-auto max-w-3xl">
            <p className="mb-4 text-lg font-semibold uppercase tracking-wider text-accent-600">
              Our Philosophy
            </p>
            <h2 id="philosophy-heading" className="text-3xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-4xl">
              Admissions is not a sprint. It is a five-year design problem.
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-neutral-600">
              <p>
                Competitive universities do not admit transcripts. They admit people — students who
                have grown intellectually, committed to interests over time, and can reflect on that
                growth in their own voice.
              </p>
              <p>
                That kind of profile cannot be manufactured in a few months. It is built deliberately,
                year by year, through real work: a research project that starts as a question and becomes
                a paper, a competition that starts as curiosity and becomes a result, a portfolio that
                starts as scattered evidence and becomes a story.
              </p>
              <p>
                University Planning is how we help families build that story — not by adding more
                tutoring, but by designing a journey where every year has a purpose and every effort
                connects to the next.
              </p>
            </div>
          </div>
        </PageContainer>
      </section>

      <section id="timeline" className="bg-[#FAFAF9] py-16 sm:py-20" aria-labelledby="timeline-heading">
        <PageContainer>
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-3 text-lg font-semibold uppercase tracking-wider text-accent-600">
              The Journey
            </p>
            <h2 id="timeline-heading" className="text-3xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-4xl">
              Five years, eight areas, one path
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-neutral-500">
              Each grade has a focus. Each focus draws on the planning areas that matter most at that
              stage. The result is a profile that grows with the student.
            </p>
          </div>

          <div className="relative mx-auto max-w-3xl">
            <div className="absolute left-[27px] top-2 bottom-2 w-px bg-neutral-200 sm:left-[31px]" aria-hidden="true" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.grade}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.05 }}
                className="relative mb-12 last:mb-0"
              >
                <div className="flex gap-5 sm:gap-6">
                  <div className="relative z-10 flex flex-shrink-0 flex-col items-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-accent-300 bg-white text-sm font-bold text-accent-700 shadow-sm sm:h-16 sm:w-16 sm:text-base">
                      {item.grade.replace('Grade ', 'G')}
                    </span>
                  </div>

                  <div className="flex-1 pt-1">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl">
                        {item.grade}
                      </h3>
                      <span className="text-sm font-semibold uppercase tracking-wider text-accent-600">
                        {item.phase}
                      </span>
                    </div>
                    <p className="mt-2 text-base leading-relaxed text-neutral-500">
                      {item.summary}
                    </p>

                    <div className="mt-5 space-y-3">
                      {item.areas.map((area) => (
                        <div
                          key={area.title}
                          className="flex gap-3 rounded-xl border border-neutral-100 bg-white p-4 shadow-sm"
                        >
                          <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                            {area.icon}
                          </span>
                          <div>
                            <h4 className="text-sm font-semibold text-neutral-900">
                              {area.title}
                            </h4>
                            <p className="mt-0.5 text-sm leading-relaxed text-neutral-500">
                              {area.detail}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </PageContainer>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="approach-heading">
        <PageContainer>
          <div className="mx-auto max-w-3xl">
            <p className="mb-4 text-lg font-semibold uppercase tracking-wider text-accent-600">
              How It Fits Together
            </p>
            <h2 id="approach-heading" className="text-3xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-4xl">
              Planning is the frame. Everything else fits inside it.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-neutral-600">
              AP courses, SAT preparation, and learning resources are powerful on their own — but they
              work best when they are scheduled and sequenced as part of a larger plan. University Planning
              is that plan.
            </p>
          </div>

          <div className="mt-12 space-y-px overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200">
            {integration.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-4 bg-white p-7 sm:flex-row sm:items-center sm:gap-8"
              >
                <div className="sm:w-56 sm:flex-shrink-0">
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

      <section className="bg-[#FAFAF9] py-16 sm:py-20" aria-labelledby="faq-heading">
        <PageContainer>
          <div className="mb-8 max-w-2xl">
            <p className="mb-3 text-lg font-semibold uppercase tracking-wider text-accent-600">
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
        title="Let's Design Your Child's Journey."
        description="Book a consultation to discuss your child's goals, timeline, and how a multi-year plan can help them build a university application that reflects who they are."
        primaryAction={{ label: 'Book a Consultation', href: '/book-a-consultation' }}
        secondaryAction={{ label: 'Explore AP Courses', href: '/ap' }}
        variant="centered"
      />
    </>
  );
}
