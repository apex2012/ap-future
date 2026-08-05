import { Link } from 'react-router-dom';
import { Clock, FileText, BookOpen, Download, FlaskConical } from 'lucide-react';
import { type ReactNode } from 'react';

export interface ResourceCardImage {
  src: string;
  alt: string;
}

export interface ResourceCardProps {
  category: string;
  title: string;
  summary: string;
  href: string;
  image?: ResourceCardImage;
  readingTime?: string;
  updatedAt?: string;
  resourceType?: 'article' | 'guide' | 'template' | 'research';
}

const typeIcon: Record<string, ReactNode> = {
  article: <BookOpen size={14} />,
  guide: <FileText size={14} />,
  template: <Download size={14} />,
  research: <FlaskConical size={14} />,
};

const typeLabel: Record<string, string> = {
  article: 'Article',
  guide: 'Guide',
  template: 'Template',
  research: 'Research',
};

export function ResourceCard({
  category,
  title,
  summary,
  href,
  image,
  readingTime,
  updatedAt,
  resourceType,
}: ResourceCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all duration-200 hover:border-primary-300 hover:shadow-md">
      {image && (
        <Link to={href} className="block overflow-hidden" tabIndex={-1} aria-hidden="true">
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className="aspect-[16/9] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </Link>
      )}

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-2">
          {resourceType && (
            <span className="inline-flex items-center gap-1 text-xs font-medium text-primary-600">
              {typeIcon[resourceType]}
              {typeLabel[resourceType]}
            </span>
          )}
          <span className="text-xl font-semibold uppercase tracking-wider text-neutral-500">
            {category}
          </span>
        </div>

        <h3 className="text-lg font-semibold leading-snug text-neutral-900">
          <Link
            to={href}
            className="transition-colors hover:text-primary-600 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
          >
            {title}
          </Link>
        </h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">{summary}</p>

        {(readingTime || updatedAt) && (
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-neutral-400">
            {readingTime && (
              <span className="inline-flex items-center gap-1">
                <Clock size={12} />
                {readingTime}
              </span>
            )}
            {updatedAt && <span>Updated {updatedAt}</span>}
          </div>
        )}
      </div>
    </article>
  );
}
