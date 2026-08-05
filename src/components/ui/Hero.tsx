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
  srcSet?: string;
  sizes?: string;
}

export interface HeroProps {
  variant?: HeroVariant;
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: HeroAction[];
  image?: HeroImage;
}

const actionClass = (v: 'primary' | 'secondary'): string =>
  v === 'primary'
    ? 'bg-neutral-900 text-white hover:bg-neutral-800 shadow-sm'
    : 'bg-white border border-neutral-200 text-neutral-800 hover:border-neutral-300 hover:bg-neutral-50 shadow-sm';

function HeroActions({ actions }: { actions: HeroAction[] }) {
  if (!actions || actions.length === 0) return null;
  return (
    <div className="flex flex-wrap items-center gap-3">
      {actions.slice(0, 2).map((action) => (
        <Link
          key={action.href}
          to={action.href}
          className={`inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold tracking-tight transition-all duration-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 ${actionClass(action.variant)}`}
        >
          {action.label}
        </Link>
      ))}
    </div>
  );
}

function HeroImageBlock({ image }: { image: HeroImage }) {
  return (
    <div className="relative overflow-hidden rounded-3xl shadow-xl">
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading="eager"
        srcSet={image.srcSet}
        sizes={image.sizes ?? '(min-width: 1024px) 45vw, 100vw'}
        className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
      />
    </div>
  );
}

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as unknown as string },
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
      <section className="relative overflow-hidden bg-white py-16 sm:py-20">
        <div className="container-wide">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial="initial"
            animate="animate"
            variants={fadeUp}
            transition={{ duration: 0.55 }}
          >
            {eyebrow && (
              <motion.p
                className="mb-5 text-xs font-semibold uppercase tracking-widest text-primary-600"
                variants={fadeUp}
              >
                {eyebrow}
              </motion.p>
            )}
            <motion.h1
              className="text-5xl font-bold leading-[1.1] tracking-tight text-neutral-900 sm:text-6xl"
              variants={fadeUp}
            >
              {title}
            </motion.h1>
            {description && (
              <motion.p
                className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-neutral-500"
                variants={fadeUp}
              >
                {description}
              </motion.p>
            )}
            {actions && (
              <motion.div className="mt-10" variants={fadeUp}>
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
      <section className="border-b border-neutral-100 bg-neutral-50 py-14 sm:py-18">
        <div className="container-wide">
          <motion.div
            className="max-w-3xl"
            initial="initial"
            animate="animate"
            variants={fadeUp}
            transition={{ duration: 0.55 }}
          >
            {eyebrow && (
              <motion.p
                className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary-600"
                variants={fadeUp}
              >
                {eyebrow}
              </motion.p>
            )}
            <motion.h1
              className="text-4xl font-bold leading-[1.1] tracking-tight text-neutral-900 sm:text-5xl"
              variants={fadeUp}
            >
              {title}
            </motion.h1>
            {description && (
              <motion.p
                className="mt-5 text-xl leading-relaxed text-neutral-500"
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
    <section className={`relative overflow-hidden ${isCourse ? 'bg-neutral-50' : 'bg-white'}`}>
      <div className="container-wide grid min-h-[440px] grid-cols-1 items-center gap-12 py-16 lg:grid-cols-[55%_45%] lg:min-h-[600px] lg:py-20">
        <motion.div
          className="max-w-xl"
          initial="initial"
          animate="animate"
          variants={fadeUp}
          transition={{ duration: 0.55 }}
        >
          {eyebrow && (
            <motion.p
              className="mb-5 text-xs font-semibold uppercase tracking-widest text-primary-600"
              variants={fadeUp}
            >
              {eyebrow}
            </motion.p>
          )}
          <motion.h1
            className="text-5xl font-bold leading-[1.1] tracking-tight text-neutral-900 sm:text-6xl lg:text-[64px]"
            variants={fadeUp}
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              className="mt-6 text-xl leading-relaxed text-neutral-500"
              variants={fadeUp}
            >
              {description}
            </motion.p>
          )}
          {actions && (
            <motion.div className="mt-10" variants={fadeUp}>
              <HeroActions actions={actions} />
            </motion.div>
          )}
        </motion.div>

        {image && (
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.97, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <HeroImageBlock image={image} />
          </motion.div>
        )}
      </div>
    </section>
  );
}
