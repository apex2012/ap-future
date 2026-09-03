import { motion } from 'framer-motion';
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Compass,
  Inbox,
  PencilLine,
  MessageCircle,
  CircleCheck as CheckCircle2,
} from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { PageContainer } from '@/components/ui/PageContainer';

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: 'easeOut' as const },
};

const nextSteps = [
  {
    step: '01',
    title: 'Request received',
    body: 'Your request has landed safely in our system. A real person will read it — not a bot, not a filter.',
  },
  {
    step: '02',
    title: 'Advisor review',
    body: 'We match you with the advisor best suited to your situation, goals, and location.',
  },
  {
    step: '03',
    title: 'Reply within 1–2 business days',
    body: 'Your advisor emails you personally with a few suggested times. No automated emails, no call centers.',
  },
  {
    step: '04',
    title: 'Scheduling',
    body: 'You confirm the time that works best for your family. We send a calendar invite with the meeting link.',
  },
  {
    step: '05',
    title: 'Your conversation',
    body: 'A relaxed 30–45 minute talk — online or in person. You bring your questions; we bring honest guidance.',
  },
];

const whileYouWait = [
  {
    icon: <GraduationCap size={22} />,
    title: 'AP Courses',
    body: 'Explore how AP courses shape your university application and which ones align with your goals.',
    href: '/ap',
    cta: 'Explore AP',
  },
  {
    icon: <Compass size={22} />,
    title: 'University Planning',
    body: 'See how families plan the multi-year journey from early high school to university applications.',
    href: '/university-planning',
    cta: 'See the Plan',
  },
  {
    icon: <BookOpen size={22} />,
    title: 'Resources',
    body: 'Browse guides, articles, and tools that help you prepare — no sign-up required.',
    href: '/resources',
    cta: 'Browse Resources',
  },
];

export function ThankYouPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const firstName = (location.state as { firstName?: string } | null)?.firstName;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const greeting = firstName
    ? `Hi ${firstName}, your request is in good hands. A real advisor — not an automated system — will read it and reply to you personally within one to two business days. Until then, here is exactly what to expect.`
    : 'Your request is in good hands. A real advisor — not an automated system — will read it and reply to you personally within one to two business days. Until then, here is exactly what to expect.';

  return (
    <>
      {/* Confirmation Hero */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-28">
        <div className="decorative-blob top-[-80px] left-[-80px] h-[300px] w-[300px] bg-primary-100" aria-hidden="true" />
        <div className="decorative-blob bottom-[-60px] right-[-60px] h-[250px] w-[250px] bg-primary-100" aria-hidden="true" />
        <PageContainer>
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-md"
            >
              <CheckCircle2 size={36} />
            </motion.div>
            <motion.h1
              className="text-4xl font-bold leading-[1.1] tracking-tight text-neutral-900 sm:text-5xl"
              {...fadeUp}
            >
              Thank you. We're looking forward to meeting you.
            </motion.h1>
            <motion.p
              className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-500"
              {...fadeUp}
            >
              {greeting}
            </motion.p>
          </div>
        </PageContainer>
      </section>

      {/* What Happens Next — Timeline */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-50/30 to-white py-14 sm:py-20" aria-labelledby="next-heading">
        <div className="decorative-blob bottom-[-60px] left-[-60px] h-[250px] w-[250px] bg-primary-100" aria-hidden="true" />
        <PageContainer>
          <div className="mx-auto max-w-3xl">
            <motion.p
              className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-primary-700"
              {...fadeUp}
            >
              What Happens Next
            </motion.p>
            <motion.h2
              id="next-heading"
              className="text-3xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-4xl"
              {...fadeUp}
            >
              From your request to our conversation — five quiet steps.
            </motion.h2>
            <motion.p
              className="mt-5 text-lg leading-relaxed text-neutral-500"
              {...fadeUp}
            >
              No black boxes, no waiting in limbo. Here is the path from today to our talk.
            </motion.p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl">
            {nextSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.06 }}
                className="relative flex gap-6 pb-10 last:pb-0"
              >
                {/* Vertical connector */}
                {index < nextSteps.length - 1 && (
                  <div
                    className="absolute left-[15px] top-8 bottom-0 w-px bg-gradient-to-b from-primary-200 to-primary-100"
                    aria-hidden="true"
                  />
                )}
                {/* Node */}
                <div className="relative z-10 flex-shrink-0">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary-300 bg-white text-xs font-bold text-primary-700 ring-4 ring-primary-100">
                    {step.step}
                  </span>
                </div>
                {/* Content */}
                <div className="pt-0.5">
                  <h3 className="text-lg font-semibold leading-snug text-neutral-900">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-base leading-relaxed text-neutral-500">
                    {step.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* While You Wait */}
      <section className="bg-white py-14 sm:py-20" aria-labelledby="wait-heading">
        <PageContainer>
          <div className="mx-auto max-w-3xl">
            <motion.p
              className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-primary-700"
              {...fadeUp}
            >
              While You Wait
            </motion.p>
            <motion.h2
              id="wait-heading"
              className="text-3xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-4xl"
              {...fadeUp}
            >
              A few pages worth reading before we talk.
            </motion.h2>
            <motion.p
              className="mt-5 text-lg leading-relaxed text-neutral-500"
              {...fadeUp}
            >
              You do not need to prepare anything for our conversation. But if you are curious,
              these pages will give you a head start.
            </motion.p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {whileYouWait.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.08 }}
              >
                <Link
                  to={item.href}
                  className="group flex h-full flex-col rounded-2xl border border-neutral-100 bg-gradient-to-b from-primary-50/30 to-white p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-md"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-sm transition-colors duration-300 group-hover:from-primary-600 group-hover:to-primary-800">
                    {item.icon}
                  </span>
                  <h3 className="mt-5 text-lg font-semibold leading-snug text-neutral-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-500">
                    {item.body}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600">
                    {item.cta}
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Update Your Request */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-50/30 to-white py-14 sm:py-20" aria-labelledby="update-heading">
        <div className="decorative-blob top-[-60px] right-[-60px] h-[250px] w-[250px] bg-primary-100" aria-hidden="true" />
        <PageContainer>
          <div className="mx-auto max-w-3xl">
            <motion.p
              className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-primary-700"
              {...fadeUp}
            >
              Need to Update Your Request?
            </motion.p>
            <motion.h2
              id="update-heading"
              className="text-3xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-4xl"
              {...fadeUp}
            >
              Plans change. We understand.
            </motion.h2>
            <motion.p
              className="mt-5 text-lg leading-relaxed text-neutral-500"
              {...fadeUp}
            >
              If your situation changes before we reply — a new question, a different timeline,
              or you simply want to add more detail — you have two options.
            </motion.p>
          </div>

          <motion.div
            className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-5 sm:grid-cols-2"
            {...fadeUp}
          >
            <div className="flex items-start gap-4 rounded-2xl border border-neutral-100 bg-white p-6">
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-sm">
                <PencilLine size={22} />
              </span>
              <div>
                <h3 className="text-base font-semibold text-neutral-900">
                  Send us an update
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-neutral-500">
                  Reply to this page's confirmation or email{' '}
                  <a
                    href="mailto:hello@apfuture.com"
                    className="font-semibold text-primary-600 underline"
                  >
                    hello@apfuture.com
                  </a>{' '}
                  with your name and what has changed.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl border border-neutral-100 bg-white p-6">
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-sm">
                <Inbox size={22} />
              </span>
              <div>
                <h3 className="text-base font-semibold text-neutral-900">
                  Reach us directly
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-neutral-500">
                  Prefer to talk sooner? Message us on WeChat at{' '}
                  <span className="font-semibold text-neutral-700">APFutureOfficial</span> or
                  email us directly — we check both daily.
                </p>
              </div>
            </div>
          </motion.div>
        </PageContainer>
      </section>

      {/* Calm Closing Message */}
      <section className="bg-white py-16 sm:py-24">
        <PageContainer>
          <motion.div
            className="mx-auto max-w-2xl text-center"
            {...fadeUp}
          >
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-sm">
              <MessageCircle size={24} />
            </div>
            <p className="text-2xl font-medium leading-relaxed tracking-tight text-neutral-900 sm:text-3xl">
              Every university journey begins with one conversation.
            </p>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-neutral-500">
              You have taken the first step. We will take the next one together — soon.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-3 text-lg font-semibold text-white transition-all duration-200 hover:shadow-glow"
              >
                Back to Home
              </Link>
              <button
                type="button"
                onClick={() => navigate('/book-a-consultation')}
                className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-200 px-6 py-3 text-lg font-semibold text-neutral-700 transition-all duration-200 hover:border-neutral-300 hover:bg-neutral-50"
              >
                Book Another Consultation
                <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        </PageContainer>
      </section>
    </>
  );
}
