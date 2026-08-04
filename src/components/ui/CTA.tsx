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
      <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-lg font-semibold text-neutral-900">{title}</h2>
          {description && (
            <p className="mt-1 text-sm leading-relaxed text-neutral-600">{description}</p>
          )}
        </div>
        <div className="flex flex-shrink-0 flex-wrap items-center gap-3">
          {secondaryAction && (
            <Link
              to={secondaryAction.href}
              className="inline-flex items-center justify-center rounded-lg border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-700 transition-colors hover:border-neutral-400 hover:bg-neutral-50 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              {secondaryAction.label}
            </Link>
          )}
          <Link
            to={primaryAction.href}
            className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
          >
            {primaryAction.label}
          </Link>
        </div>
      </div>
    );
  }

  if (variant === 'split') {
    return (
      <section className="py-16 sm:py-20">
        <div className="container-wide">
          <div className="grid grid-cols-1 items-center gap-8 rounded-3xl bg-neutral-900 p-10 sm:p-14 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold leading-tight text-white sm:text-3xl">
                {title}
              </h2>
              {description && (
                <p className="mt-4 text-base leading-relaxed text-neutral-300">{description}</p>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-4 lg:justify-end">
              {secondaryAction && (
                <Link
                  to={secondaryAction.href}
                  className="inline-flex items-center justify-center rounded-lg border border-neutral-600 px-6 py-3 text-base font-medium text-white transition-colors hover:border-neutral-400 hover:bg-neutral-800 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {secondaryAction.label}
                </Link>
              )}
              <Link
                to={primaryAction.href}
                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-medium text-neutral-900 transition-colors hover:bg-neutral-100 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
    <section className="py-16 sm:py-20">
      <div className="container-page text-center">
        <h2 className="text-2xl font-semibold leading-tight text-neutral-900 sm:text-3xl">
          {title}
        </h2>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-neutral-600">
            {description}
          </p>
        )}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {secondaryAction && (
            <Link
              to={secondaryAction.href}
              className="inline-flex items-center justify-center rounded-lg border border-neutral-300 px-6 py-3 text-base font-medium text-neutral-700 transition-colors hover:border-neutral-400 hover:bg-neutral-50 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              {secondaryAction.label}
            </Link>
          )}
          <Link
            to={primaryAction.href}
            className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-primary-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
          >
            {primaryAction.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
