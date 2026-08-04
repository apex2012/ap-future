import { BookOpen, ClipboardList, GraduationCap, Library, Users, ShieldCheck, Globe as Globe2, Sparkles } from 'lucide-react';
import { Hero } from '@/components/ui/Hero';
import { CourseCard } from '@/components/ui/CourseCard';
import { FeatureGrid } from '@/components/ui/FeatureGrid';
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

const programs = [
  {
    title: 'AP Courses',
    category: 'Advanced Placement',
    description: 'Expert-led instruction across AP subjects, built for deep mastery and exam success.',
    href: '/ap',
    icon: <BookOpen size={20} />,
    recommendedGrade: 'Grades 9–12',
    difficulty: 'Advanced',
    duration: 'Full year',
  },
  {
    title: 'Digital SAT Preparation',
    category: 'Test Preparation',
    description: 'Structured Digital SAT prep with adaptive practice and proven score-raising strategies.',
    href: '/sat',
    icon: <ClipboardList size={20} />,
    recommendedGrade: 'Grades 10–12',
    difficulty: 'Intermediate',
    duration: '12–16 weeks',
  },
  {
    title: 'University Planning',
    category: 'Admissions',
    description: 'Strategic university planning from school selection to application and essay support.',
    href: '/university-planning',
    icon: <GraduationCap size={20} />,
    recommendedGrade: 'Grades 9–12',
    difficulty: 'All levels',
    duration: 'Ongoing',
  },
  {
    title: 'Resources',
    category: 'Learning Library',
    description: 'Guides, templates, and research materials to support every stage of your academic journey.',
    href: '/resources',
    icon: <Library size={20} />,
  },
];

const whyItems = [
  {
    title: 'Expert Instructors',
    description: 'Learn from experienced educators who understand international curricula and university expectations.',
    icon: <Users size={22} />,
  },
  {
    title: 'Proven Results',
    description: 'Structured programs designed for measurable progress, from AP scores to SAT improvements.',
    icon: <ShieldCheck size={22} />,
  },
  {
    title: 'Global Perspective',
    description: 'Curriculum and guidance built for students applying to universities worldwide.',
    icon: <Globe2 size={22} />,
  },
  {
    title: 'Personalized Guidance',
    description: 'Every student receives a plan tailored to their goals, timeline, and target universities.',
    icon: <Sparkles size={22} />,
  },
];

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

      <section className="py-16 sm:py-20" aria-labelledby="programs-heading">
        <PageContainer>
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-600">
              Programs
            </p>
            <h2 id="programs-heading" className="text-2xl font-semibold leading-tight text-neutral-900 sm:text-3xl">
              Four pathways to university success
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-600">
              Each program is designed to build mastery, confidence, and a competitive edge for university applications.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((program) => (
              <CourseCard key={program.title} {...program} />
            ))}
          </div>
        </PageContainer>
      </section>

      <section className="bg-neutral-50 py-16 sm:py-20" aria-labelledby="why-heading">
        <PageContainer>
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-600">
              Why AP Future
            </p>
            <h2 id="why-heading" className="text-2xl font-semibold leading-tight text-neutral-900 sm:text-3xl">
              Built for long-term student success
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-600">
              We combine expert instruction, structured planning, and personalized guidance to help students reach their full potential.
            </p>
          </div>
          <FeatureGrid items={whyItems} columns={4} />
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
