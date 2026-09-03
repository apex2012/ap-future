import { Link } from 'react-router-dom';

export interface CTAAction {
  label: string;
  href: string;
}

export interface CTAProps {
  title: string;
  description?: string;
  primaryAction: CTAAction;
  secondaryAction?: CTAAction;
  variant?: 'centered' | 'split' | 'inline';
}

export function CTA({
  title,
  description,
  primaryAction,
  secondaryAction,
  variant = 'centered',
}: CTAProps) {
  if (variant === 'inline') {
    return (
      <div className="flex flex-col items-start justify-between gap-5 rounded-2xl border border-primary-100 bg-gradient-to-r from-primary-50 to-white p-7 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-lg font-semibold text-neutral-900">{title}</h2>
          {description && (
            <p className="mt-1.5 text-sm leading-relaxed text-neutral-500">{description}</p>
          )}
        </div>
        <div className="flex flex-shrink-0 flex-wrap items-center gap-3">
          {secondaryAction && (
            <Link
              to={secondaryAction.href}
              className="inline-flex items-center justify-center rounded-full border border-neutral-200 px-5 py-2.5 text-lg font-semibold text-neutral-700 transition-colors hover:border-neutral-300 hover:bg-neutral-50 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              {secondaryAction.label}
            </Link>
          )}
          <Link
            to={primaryAction.href}
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary-600 to-primary-700 px-5 py-2.5 text-lg font-semibold text-white shadow-sm transition-all hover:shadow-glow focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
          >
            {primaryAction.label}
          </Link>
        </div>
      </div>
    );
  }

  if (variant === 'split') {
    return (
      <section className="py-14 sm:py-16">
        <div className="container-wide">
          <div className="relative grid grid-cols-1 items-center gap-10 overflow-hidden rounded-3xl bg-gradient-to-br from-primary-700 via-primary-800 to-primary-950 px-10 py-14 sm:px-14 sm:py-16 lg:grid-cols-2">
            <div className="decorative-blob top-[-40px] right-[-40px] h-[200px] w-[200px] bg-primary-400" aria-hidden="true" />
            <div className="relative">
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                {title}
              </h2>
              {description && (
                <p className="mt-4 text-lg leading-relaxed text-primary-100">{description}</p>
              )}
            </div>
            <div className="relative flex flex-wrap items-center gap-4 lg:justify-end">
              {secondaryAction && (
                <Link
                  to={secondaryAction.href}
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-lg font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/10 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {secondaryAction.label}
                </Link>
              )}
              <Link
                to={primaryAction.href}
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-lg font-semibold text-primary-700 transition-all hover:bg-neutral-100 hover:shadow-lg focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {primaryAction.label}
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-800 to-primary-950 py-16 sm:py-20">
      <div className="decorative-blob top-[-80px] left-[-40px] h-[250px] w-[250px] bg-primary-400" aria-hidden="true" />
      <div className="decorative-blob bottom-[-60px] right-[-40px] h-[200px] w-[200px] bg-accent-400" aria-hidden="true" />
      <div className="container-page relative text-center">
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-primary-100">
            {description}
          </p>
        )}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {secondaryAction && (
            <Link
              to={secondaryAction.href}
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3 text-lg font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/10 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {secondaryAction.label}
            </Link>
          )}
          <Link
            to={primaryAction.href}
            className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-lg font-semibold text-primary-700 transition-all duration-200 hover:bg-neutral-100 hover:shadow-lg focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {primaryAction.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
