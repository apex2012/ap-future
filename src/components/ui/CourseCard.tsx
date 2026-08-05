import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export interface CourseCardProps {
  title: string;
  category: string;
  description: string;
  recommendedGrade?: string;
  difficulty?: string;
  duration?: string;
  href: string;
  icon?: ReactNode;
}

export function CourseCard({
  title,
  category,
  description,
  recommendedGrade,
  difficulty,
  duration,
  href,
  icon,
}: CourseCardProps) {
  return (
    <Link
      to={href}
      className="group flex h-full flex-col rounded-2xl border border-neutral-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-neutral-200 hover:shadow-md focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
    >
      <div className="mb-5 flex items-center gap-3">
        {icon && (
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
            {icon}
          </span>
        )}
        <span className="text-[10px] font-semibold uppercase tracking-widest text-neutral-400">
          {category}
        </span>
      </div>

      <h3 className="text-base font-semibold leading-snug text-neutral-900 transition-colors group-hover:text-primary-600">
        {title}
      </h3>

      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-neutral-500">
        {description}
      </p>

      {(recommendedGrade || difficulty || duration) && (
        <dl className="mt-5 flex flex-wrap gap-x-4 gap-y-1 border-t border-neutral-50 pt-4 text-xs text-neutral-400">
          {recommendedGrade && (
            <div className="flex items-center gap-1">
              <dt className="font-medium text-neutral-300">Grade</dt>
              <dd>{recommendedGrade}</dd>
            </div>
          )}
          {difficulty && (
            <div className="flex items-center gap-1">
              <dt className="font-medium text-neutral-300">Level</dt>
              <dd>{difficulty}</dd>
            </div>
          )}
          {duration && (
            <div className="flex items-center gap-1">
              <dt className="font-medium text-neutral-300">Duration</dt>
              <dd>{duration}</dd>
            </div>
          )}
        </dl>
      )}

      <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary-600">
        Learn More
        <ArrowRight
          size={12}
          className="transition-transform duration-200 group-hover:translate-x-0.5"
        />
      </span>
    </Link>
  );
}
