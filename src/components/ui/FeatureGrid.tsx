import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';

export interface FeatureItem {
  title: string;
  description: string;
  icon?: ReactNode;
  href?: string;
}

export interface FeatureGridProps {
  items: FeatureItem[];
  columns?: 2 | 3 | 4;
}

const columnsClass: Record<2 | 3 | 4, string> = {
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-2 lg:grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-4',
};

export function FeatureGrid({ items, columns = 3 }: FeatureGridProps) {
  return (
    <div className={`grid grid-cols-1 gap-6 ${columnsClass[columns]}`}>
      {items.map((item) => {
        const content = (
          <>
            {item.icon && (
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-sm">
                {item.icon}
              </span>
            )}
            <h3 className="text-base font-semibold leading-snug text-neutral-900">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
              {item.description}
            </p>
            {item.href && (
              <span className="mt-3 inline-flex items-center text-sm font-medium text-primary-600">
                Learn More
              </span>
            )}
          </>
        );

        if (item.href) {
          return (
            <Link
              key={item.title}
              to={item.href}
              className="group flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary-300 hover:shadow-md focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              {content}
            </Link>
          );
        }

        return (
          <div
            key={item.title}
            className="flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
          >
            {content}
          </div>
        );
      })}
    </div>
  );
}
