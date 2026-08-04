import { Link } from 'react-router-dom';
import { FOOTER_NAV_SECTIONS, SITE_NAME, COPYRIGHT_YEAR } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="container-wide py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link to="/" className="text-lg font-bold tracking-tight text-neutral-900">
              {SITE_NAME}
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-neutral-500">
              Prepare for university with confidence through AP Courses, Digital SAT
              Preparation, University Planning, and educational Resources.
            </p>
          </div>

          {FOOTER_NAV_SECTIONS.map((section) => (
            <div key={section.title}>
              <h2 className="text-sm font-semibold text-neutral-900">{section.title}</h2>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-neutral-500 transition-colors hover:text-primary-600"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-neutral-200 pt-6">
          <p className="text-sm text-neutral-500">
            &copy; {COPYRIGHT_YEAR} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
