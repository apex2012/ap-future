import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import {
  Clock,
  Video,
  Languages,
  ArrowRight,
  CalendarClock,
  Mail,
  CircleCheck as CheckCircle2,
  MessageCircle,
  Sparkles,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Hero } from '@/components/ui/Hero';
import { PageContainer } from '@/components/ui/PageContainer';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { supabase } from '@/lib/supabase';

const processSteps = [
  {
    step: '01',
    title: 'You send a request',
    body: 'Fill out the form below with a few details about your situation. It takes about two minutes, and there is no obligation.',
  },
  {
    step: '02',
    title: 'We confirm by email',
    body: 'Within one to two business days, we reply by email to schedule a time that works for you. No phone calls unless you ask for one.',
  },
  {
    step: '03',
    title: 'We talk for 30–45 minutes',
    body: 'A relaxed conversation — online or in person — about your goals, questions, and options. You lead the discussion; we listen and advise.',
  },
  {
    step: '04',
    title: 'You receive a brief summary',
    body: 'After the conversation, we send a short summary of what we discussed and any recommended next steps. No follow-up pressure, no enrollment push.',
  },
];

const discussionTopics = [
  'Which AP courses should my child take, and when?',
  'When should we start SAT preparation?',
  'How do we plan a multi-year academic timeline?',
  'Which universities should we consider, and why?',
  'How important are extracurriculars and essays?',
  'Is my child on track for their target schools?',
  'What should we prioritize this year?',
  'How do we reduce anxiety around the process?',
];

const faqItems = [
  {
    question: 'Is there any pressure to enroll after the consultation?',
    answer:
      'None. The consultation is a conversation, not a sales pitch. If our programs are a good fit, we will mention them — but the purpose of the call is to give you clarity, not to close a deal.',
  },
  {
    question: 'How long is the consultation?',
    answer:
      'Most conversations last 30 to 45 minutes. There is no hard limit; we talk for as long as is useful, and we end early if your questions are answered.',
  },
  {
    question: 'What if we are not ready to start any programs yet?',
    answer:
      'That is completely fine. Many families book a consultation a year or more before they plan to begin. Understanding your options early is one of the best things you can do.',
  },
  {
    question: 'Do you work with families outside our city?',
    answer:
      'Yes. We work with families worldwide. Consultations are held online by default, and we can arrange in-person meetings if you are in the same city.',
  },
  {
    question: 'Is there a cost for the consultation?',
    answer:
      'No. The initial consultation is free. It is an opportunity for both of us to understand whether AP Future is the right fit for your family.',
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: 'easeOut' as const },
};

type FormStatus = 'idle' | 'submitting' | 'error';

interface FormData {
  student_name: string;
  grade: string;
  school: string;
  email: string;
  phone: string;
  location: string;
  interests: string;
  message: string;
  preferred_contact: string;
}

const initialForm: FormData = {
  student_name: '',
  grade: '',
  school: '',
  email: '',
  phone: '',
  location: '',
  interests: '',
  message: '',
  preferred_contact: 'email',
};

export function BookConsultationPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!form.student_name.trim()) newErrors.student_name = 'Please enter the student name';
    if (!form.grade.trim()) newErrors.grade = 'Please select a grade';
    if (!form.email.trim()) {
      newErrors.email = 'Please enter an email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!form.location.trim()) newErrors.location = 'Please enter your city or country';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('submitting');
    const { error } = await supabase.from('consultation_requests').insert({
      student_name: form.student_name.trim(),
      grade: form.grade,
      school: form.school.trim() || null,
      email: form.email.trim(),
      phone: form.phone.trim() || null,
      location: form.location.trim(),
      interests: form.interests.trim() || null,
      message: form.message.trim() || null,
      preferred_contact: form.preferred_contact,
    });
    if (error) {
      setStatus('error');
      return;
    }
    const firstName = form.student_name.trim().split(' ')[0];
    setForm(initialForm);
    navigate('/thank-you', { state: { firstName }, replace: true });
  };

  const fieldBase =
    'w-full rounded-xl border bg-white px-4 py-3 text-base text-neutral-900 placeholder:text-neutral-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500';
  const fieldOk = 'border-neutral-200 hover:border-neutral-300';
  const fieldErr = 'border-red-300 bg-red-50/30';

  return (
    <>
      <Hero
        variant="centered"
        eyebrow="Book a Consultation"
        title="Let's start with a conversation."
        description="No scripts, no sales pitch. Just a thoughtful conversation about your goals, questions, and options — with an experienced education advisor who listens first."
        heroClassName="py-20 sm:py-28"
      />

      {/* What Happens — reducing uncertainty first */}
      <section className="relative overflow-hidden bg-white py-14 sm:py-20" aria-labelledby="process-heading">
        <div className="decorative-blob top-[-60px] left-[-60px] h-[250px] w-[250px] bg-primary-100" aria-hidden="true" />
        <PageContainer>
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Book a Consultation' }]} />
          <div className="mx-auto max-w-3xl">
            <motion.p
              className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-primary-700"
              {...fadeUp}
            >
              What Happens
            </motion.p>
            <motion.h2
              id="process-heading"
              className="text-3xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-4xl"
              {...fadeUp}
            >
              Four simple steps — and no surprises.
            </motion.h2>
            <motion.p
              className="mt-5 text-lg leading-relaxed text-neutral-500"
              {...fadeUp}
            >
              Knowing what to expect is half the anxiety. Here is exactly what happens from the
              moment you send a request to the moment our conversation ends.
            </motion.p>
          </div>

          <div className="mt-12 relative">
            <div
              className="hidden lg:block absolute top-[7px] left-0 right-0 h-px bg-gradient-to-r from-primary-200 via-primary-300 to-primary-200"
              aria-hidden="true"
            />
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.08 }}
                  className="relative"
                >
                  <span className="relative z-10 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-white ring-4 ring-primary-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
                  </span>
                  <span className="mt-4 block text-sm font-bold text-primary-500">
                    {step.step}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold leading-snug text-neutral-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                    {step.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Discussion Topics — a checklist, not feature cards */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-50/30 to-white py-14 sm:py-20" aria-labelledby="topics-heading">
        <div className="decorative-blob bottom-[-60px] right-[-60px] h-[250px] w-[250px] bg-primary-100" aria-hidden="true" />
        <PageContainer>
          <div className="mx-auto max-w-3xl">
            <motion.p
              className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-primary-700"
              {...fadeUp}
            >
              What We Can Talk About
            </motion.p>
            <motion.h2
              id="topics-heading"
              className="text-3xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-4xl"
              {...fadeUp}
            >
              Come with questions — or just come to listen.
            </motion.h2>
            <motion.p
              className="mt-5 text-lg leading-relaxed text-neutral-500"
              {...fadeUp}
            >
              You do not need to prepare anything. But if it helps, here are some of the questions
              families often bring to a consultation.
            </motion.p>
          </div>

          <motion.ul
            className="mx-auto mt-10 max-w-3xl space-y-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            {discussionTopics.map((topic, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.3, ease: 'easeOut', delay: index * 0.04 }}
                className="flex items-start gap-3 rounded-xl border border-neutral-100 bg-white px-5 py-4 transition-all duration-200 hover:border-primary-200 hover:shadow-sm"
              >
                <span className="mt-0.5 flex-shrink-0 text-primary-500">
                  <CheckCircle2 size={18} />
                </span>
                <span className="text-base leading-relaxed text-neutral-700">{topic}</span>
              </motion.li>
            ))}
          </motion.ul>
        </PageContainer>
      </section>

      {/* Form + Reassurance Panel — two-column */}
      <section className="bg-white py-14 sm:py-20" aria-labelledby="form-heading">
        <PageContainer>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_20rem] lg:gap-16">
            {/* Form */}
            <div>
              <motion.p
                className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-primary-700"
                {...fadeUp}
              >
                Request a Consultation
              </motion.p>
              <motion.h2
                id="form-heading"
                className="text-3xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-4xl"
                {...fadeUp}
              >
                Tell us a little about you.
              </motion.h2>
              <motion.p
                className="mt-4 text-base leading-relaxed text-neutral-500"
                {...fadeUp}
              >
                Only the fields marked with an asterisk are required. Everything else is optional —
                share what you are comfortable sharing.
              </motion.p>

              {status === 'error' && (
                <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
                  Something went wrong on our end. Please try again, or email us directly at{' '}
                  <a href="mailto:hello@apfuture.com" className="font-semibold underline">
                    hello@apfuture.com
                  </a>
                  .
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-8 space-y-10" noValidate>
                {/* About You */}
                <fieldset>
                  <legend className="mb-5 text-lg font-bold tracking-tight text-neutral-900">
                    About You
                  </legend>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="student_name" className="mb-1.5 block text-sm font-medium text-neutral-700">
                        Student name <span className="text-primary-500">*</span>
                      </label>
                      <input
                        id="student_name"
                        type="text"
                        value={form.student_name}
                        onChange={(e) => handleChange('student_name', e.target.value)}
                        className={`${fieldBase} ${errors.student_name ? fieldErr : fieldOk}`}
                        placeholder="e.g. Alex Chen"
                      />
                      {errors.student_name && (
                        <p className="mt-1.5 text-sm text-red-600">{errors.student_name}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="grade" className="mb-1.5 block text-sm font-medium text-neutral-700">
                        Current grade <span className="text-primary-500">*</span>
                      </label>
                      <select
                        id="grade"
                        value={form.grade}
                        onChange={(e) => handleChange('grade', e.target.value)}
                        className={`${fieldBase} ${errors.grade ? fieldErr : fieldOk} cursor-pointer`}
                      >
                        <option value="">Select a grade</option>
                        <option value="Grade 8 or below">Grade 8 or below</option>
                        <option value="Grade 9">Grade 9</option>
                        <option value="Grade 10">Grade 10</option>
                        <option value="Grade 11">Grade 11</option>
                        <option value="Grade 12">Grade 12</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.grade && (
                        <p className="mt-1.5 text-sm text-red-600">{errors.grade}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="school" className="mb-1.5 block text-sm font-medium text-neutral-700">
                        School <span className="text-sm font-normal text-neutral-400">(optional)</span>
                      </label>
                      <input
                        id="school"
                        type="text"
                        value={form.school}
                        onChange={(e) => handleChange('school', e.target.value)}
                        className={`${fieldBase} ${fieldOk}`}
                        placeholder="e.g. Shanghai High School"
                      />
                    </div>
                    <div>
                      <label htmlFor="location" className="mb-1.5 block text-sm font-medium text-neutral-700">
                        City / Country <span className="text-primary-500">*</span>
                      </label>
                      <input
                        id="location"
                        type="text"
                        value={form.location}
                        onChange={(e) => handleChange('location', e.target.value)}
                        className={`${fieldBase} ${errors.location ? fieldErr : fieldOk}`}
                        placeholder="e.g. Shanghai, China"
                      />
                      {errors.location && (
                        <p className="mt-1.5 text-sm text-red-600">{errors.location}</p>
                      )}
                    </div>
                  </div>
                </fieldset>

                {/* Contact */}
                <fieldset>
                  <legend className="mb-5 text-lg font-bold tracking-tight text-neutral-900">
                    Contact
                  </legend>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-neutral-700">
                        Email <span className="text-primary-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className={`${fieldBase} ${errors.email ? fieldErr : fieldOk}`}
                        placeholder="you@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-sm text-red-600">{errors.email}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-neutral-700">
                        Phone / WeChat <span className="text-sm font-normal text-neutral-400">(optional)</span>
                      </label>
                      <input
                        id="phone"
                        type="text"
                        value={form.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className={`${fieldBase} ${fieldOk}`}
                        placeholder="e.g. +86 138 0000 0000"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="mb-1.5 block text-sm font-medium text-neutral-700">
                        Preferred contact method
                      </label>
                      <div className="flex flex-wrap gap-3">
                        {[
                          { value: 'email', label: 'Email' },
                          { value: 'phone', label: 'Phone' },
                          { value: 'wechat', label: 'WeChat' },
                        ].map((opt) => (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => handleChange('preferred_contact', opt.value)}
                            className={`rounded-lg border px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                              form.preferred_contact === opt.value
                                ? 'border-primary-500 bg-primary-50 text-primary-700'
                                : 'border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300'
                            }`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </fieldset>

                {/* Tell Us About Your Goals */}
                <fieldset>
                  <legend className="mb-5 text-lg font-bold tracking-tight text-neutral-900">
                    Tell Us About Your Goals
                  </legend>
                  <div className="space-y-5">
                    <div>
                      <label htmlFor="interests" className="mb-1.5 block text-sm font-medium text-neutral-700">
                        Areas of interest <span className="text-sm font-normal text-neutral-400">(optional)</span>
                      </label>
                      <input
                        id="interests"
                        type="text"
                        value={form.interests}
                        onChange={(e) => handleChange('interests', e.target.value)}
                        className={`${fieldBase} ${fieldOk}`}
                        placeholder="e.g. AP courses, SAT preparation, university planning"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-neutral-700">
                        What would you like to discuss? <span className="text-sm font-normal text-neutral-400">(optional)</span>
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={form.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        className={`${fieldBase} ${fieldOk} resize-none`}
                        placeholder="Share anything that would help us prepare for our conversation — your questions, concerns, or what you hope to get out of the consultation."
                      />
                    </div>
                  </div>
                </fieldset>

                <div className="flex flex-col items-start gap-4">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary-600 to-primary-700 px-8 py-3.5 text-lg font-semibold text-white transition-all duration-200 hover:shadow-glow focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === 'submitting' ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Request
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>
                  <p className="text-sm text-neutral-400">
                    We reply within 1–2 business days. No spam, no mailing list, no pressure.
                  </p>
                </div>
              </form>
            </div>

            {/* Reassurance Panel */}
            <aside className="lg:sticky lg:top-8 lg:self-start">
              <div className="rounded-2xl border border-primary-100 bg-gradient-to-b from-primary-50/40 to-white p-7">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-600">
                  Before You Book
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                  A few things worth knowing, so you know exactly what to expect.
                </p>
                <dl className="mt-6 space-y-6">
                  <div className="flex gap-4">
                    <dt className="flex-shrink-0">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-sm">
                        <Clock size={20} />
                      </span>
                    </dt>
                    <dd>
                      <p className="text-sm font-semibold text-neutral-900">Response time</p>
                      <p className="mt-1 text-sm leading-relaxed text-neutral-500">
                        We reply by email within 1–2 business days.
                      </p>
                    </dd>
                  </div>
                  <div className="flex gap-4">
                    <dt className="flex-shrink-0">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-sm">
                        <CalendarClock size={20} />
                      </span>
                    </dt>
                    <dd>
                      <p className="text-sm font-semibold text-neutral-900">Consultation length</p>
                      <p className="mt-1 text-sm leading-relaxed text-neutral-500">
                        30–45 minutes, online or in person. No hard time limit.
                      </p>
                    </dd>
                  </div>
                  <div className="flex gap-4">
                    <dt className="flex-shrink-0">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-sm">
                        <Video size={20} />
                      </span>
                    </dt>
                    <dd>
                      <p className="text-sm font-semibold text-neutral-900">Online or in person</p>
                      <p className="mt-1 text-sm leading-relaxed text-neutral-500">
                        Video call by default. In person where available.
                      </p>
                    </dd>
                  </div>
                  <div className="flex gap-4">
                    <dt className="flex-shrink-0">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-sm">
                        <Languages size={20} />
                      </span>
                    </dt>
                    <dd>
                      <p className="text-sm font-semibold text-neutral-900">Languages</p>
                      <p className="mt-1 text-sm leading-relaxed text-neutral-500">
                        English and Mandarin. Let us know if you need another language.
                      </p>
                    </dd>
                  </div>
                  <div className="flex gap-4">
                    <dt className="flex-shrink-0">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-sm">
                        <Sparkles size={20} />
                      </span>
                    </dt>
                    <dd>
                      <p className="text-sm font-semibold text-neutral-900">What happens next</p>
                      <p className="mt-1 text-sm leading-relaxed text-neutral-500">
                        We match you with an advisor, suggest a few times, and send a calendar
                        invite. That is it.
                      </p>
                    </dd>
                  </div>
                </dl>
              </div>
            </aside>
          </div>
        </PageContainer>
      </section>

      {/* Alternative Contacts */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-50/30 to-white py-14 sm:py-20" aria-labelledby="alt-heading">
        <div className="decorative-blob top-[-60px] right-[-60px] h-[250px] w-[250px] bg-primary-100" aria-hidden="true" />
        <PageContainer>
          <div className="mx-auto max-w-3xl">
            <motion.p
              className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-primary-700"
              {...fadeUp}
            >
              Prefer to Reach Out Directly?
            </motion.p>
            <motion.h2
              id="alt-heading"
              className="text-3xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-4xl"
              {...fadeUp}
            >
              You do not have to fill out a form to start a conversation.
            </motion.h2>
            <motion.p
              className="mt-5 text-lg leading-relaxed text-neutral-500"
              {...fadeUp}
            >
              If you would rather reach us directly first, we are happy to hear from you. Send us an
              email or a message on WeChat, and we will take it from there.
            </motion.p>
          </div>

          <motion.div
            className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-5 sm:grid-cols-2"
            {...fadeUp}
          >
            <a
              href="mailto:hello@apfuture.com"
              className="group flex items-center gap-4 rounded-2xl border border-neutral-100 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-sm"
            >
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-sm">
                <Mail size={24} />
              </span>
              <div>
                <p className="text-sm font-semibold text-neutral-900">Email</p>
                <p className="mt-0.5 text-sm text-neutral-500">hello@apfuture.com</p>
              </div>
              <ArrowRight
                size={18}
                className="ml-auto text-neutral-300 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-primary-500"
              />
            </a>
            <a
              href="#"
              className="group flex items-center gap-4 rounded-2xl border border-neutral-100 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-sm"
            >
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-sm">
                <MessageCircle size={24} />
              </span>
              <div>
                <p className="text-sm font-semibold text-neutral-900">WeChat</p>
                <p className="mt-0.5 text-sm text-neutral-500">Add us: APFutureOfficial</p>
              </div>
              <ArrowRight
                size={18}
                className="ml-auto text-neutral-300 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-primary-500"
              />
            </a>
          </motion.div>
        </PageContainer>
      </section>

      {/* FAQ */}
      <section className="bg-white py-14 sm:py-20" aria-labelledby="faq-heading">
        <PageContainer>
          <div className="mx-auto max-w-3xl">
            <motion.p
              className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-primary-700"
              {...fadeUp}
            >
              Common Questions
            </motion.p>
            <motion.h2
              id="faq-heading"
              className="text-3xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-4xl"
              {...fadeUp}
            >
              Things families often wonder about.
            </motion.h2>
          </div>
          <motion.div
            className="mx-auto mt-10 max-w-3xl"
            {...fadeUp}
          >
            <FAQAccordion items={faqItems} />
          </motion.div>
        </PageContainer>
      </section>
    </>
  );
}
