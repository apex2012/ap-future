import { Link } from 'react-router-dom';
import { FOOTER_NAV_SECTIONS, FOOTER_CONTACT, SITE_NAME, COPYRIGHT_YEAR } from '@/lib/constants';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-[#F7F8FA]">
      <div className="container-wide py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link to="/" className="text-[17px] font-bold tracking-tight text-neutral-900">
              {SITE_NAME}
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-neutral-400">
              Prepare for university with confidence through AP Courses, Digital SAT
              Preparation, University Planning, and educational Resources.
            </p>
          </div>

          {FOOTER_NAV_SECTIONS.map((section) => (
            <div key={section.title} className="lg:col-span-2">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
                {section.title}
              </h2>
              <ul className="mt-5 space-y-3.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-neutral-600 transition-colors hover:text-neutral-900"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-4">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
              Contact
            </h2>
            <ul className="mt-5 space-y-3.5">
              <li className="flex items-center gap-2.5 text-sm text-neutral-600">
                <MapPin size={16} className="flex-shrink-0 text-neutral-400" />
                {FOOTER_CONTACT.location}
              </li>
              <li className="flex items-center gap-2.5 text-sm text-neutral-600">
                <Mail size={16} className="flex-shrink-0 text-neutral-400" />
                {FOOTER_CONTACT.email}
              </li>
              <li className="flex items-center gap-2.5 text-sm text-neutral-600">
                <Phone size={16} className="flex-shrink-0 text-neutral-400" />
                {FOOTER_CONTACT.phone}
              </li>
            </ul>
            <div className="mt-5">
              <span className="text-sm text-neutral-600">{FOOTER_CONTACT.wechatLabel}</span>
              <div className="mt-2 flex aspect-square w-28 items-center justify-center rounded-lg border border-dashed border-neutral-300 bg-white text-xs text-neutral-400">
                QR Code Placeholder
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-neutral-200 pt-8">
          <p className="text-sm text-neutral-400">
            &copy; {COPYRIGHT_YEAR} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
