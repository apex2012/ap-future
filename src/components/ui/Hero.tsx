import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export type HeroVariant = 'split' | 'centered' | 'course' | 'content';

export interface HeroAction {
  label: string;
  href: string;
  variant: 'primary' | 'secondary';
}

export interface HeroImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface HeroProps {
  variant?: HeroVariant;
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: HeroAction[];
  image?: HeroImage;
}

const actionClass = (variant: 'primary' | 'secondary'): string =>
  variant === 'primary'
    ? 'bg-primary-600 text-white hover:bg-primary-700'
    : 'bg-transparent border border-neutral-300 text-neutral-700 hover:border-neutral-400 hover:bg-neutral-50';

function HeroActions({ actions }: { actions: HeroAction[] }) {
  if (!actions || actions.length === 0) return null;
  return (
    <div className="flex flex-wrap items-center gap-4">
      {actions.slice(0, 2).map((action) => (
        <Link
          key={action.href}
          to={action.href}
          className={`inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-medium transition-colors duration-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 ${actionClass(
            action.variant,
          )}`}
        >
          {action.label}
        </Link>
      ))}
    </div>
  );
}

function HeroImageBlock({ image }: { image: HeroImage }) {
  return (
    <div className="relative overflow-hidden rounded-2xl">
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading="eager"
        className="h-full w-full object-cover"
      />
    </div>
  );
}

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' as const },
};

export function Hero({
  variant = 'split',
  eyebrow,
  title,
  description,
  actions,
  image,
}: HeroProps) {
  if (variant === 'centered') {
    return (
      <section className="relative overflow-hidden bg-neutral-50 py-20 sm:py-28">
        <div className="container-wide">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial="initial"
            animate="animate"
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            {eyebrow && (
              <motion.p
                className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-600"
                variants={fadeUp}
              >
                {eyebrow}
              </motion.p>
            )}
            <motion.h1
              className="text-4xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl"
              variants={fadeUp}
            >
              {title}
            </motion.h1>
            {description && (
              <motion.p
                className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600"
                variants={fadeUp}
              >
                {description}
              </motion.p>
            )}
            {actions && (
              <motion.div className="mt-8" variants={fadeUp}>
                <HeroActions actions={actions} />
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    );
  }

  if (variant === 'content') {
    return (
      <section className="border-b border-neutral-200 bg-neutral-50 py-12 sm:py-16">
        <div className="container-wide">
          <motion.div
            className="max-w-3xl"
            initial="initial"
            animate="animate"
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            {eyebrow && (
              <motion.p
                className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-600"
                variants={fadeUp}
              >
                {eyebrow}
              </motion.p>
            )}
            <motion.h1
              className="text-3xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl"
              variants={fadeUp}
            >
              {title}
            </motion.h1>
            {description && (
              <motion.p
                className="mt-4 text-lg leading-relaxed text-neutral-600"
                variants={fadeUp}
              >
                {description}
              </motion.p>
            )}
          </motion.div>
        </div>
      </section>
    );
  }

  const isCourse = variant === 'course';

  return (
    <section
      className={`relative overflow-hidden ${isCourse ? 'bg-neutral-50' : 'bg-white'}`}
    >
      <div className="container-wide grid min-h-[420px] grid-cols-1 items-center gap-12 py-16 lg:grid-cols-[55%_45%] lg:min-h-[620px] lg:py-20">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeUp}
          transition={{ duration: 0.5 }}
        >
          {eyebrow && (
            <motion.p
              className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-600"
              variants={fadeUp}
            >
              {eyebrow}
            </motion.p>
          )}
          <motion.h1
            className="text-4xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl"
            variants={fadeUp}
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-600"
              variants={fadeUp}
            >
              {description}
            </motion.p>
          )}
          {actions && (
            <motion.div className="mt-8" variants={fadeUp}>
              <HeroActions actions={actions} />
            </motion.div>
          )}
        </motion.div>

        {image && (
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <HeroImageBlock image={image} />
          </motion.div>
        )}
      </div>
    </section>
  );
}
