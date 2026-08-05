import { Link } from 'react-router-dom';
import { FOOTER_NAV_SECTIONS, FOOTER_CONTACT, SITE_NAME, COPYRIGHT_YEAR } from '@/lib/constants';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-[#F7F8FA]">
      <div className="container-wide py-16 sm:py-20">
        {/* Top tier: brand + navigation columns */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Link to="/" className="text-[17px] font-bold font-bold tracking-tight text-neutral-900">
              {SITE_NAME}
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-neutral-400">
              Prepare for university with confidence through AP Courses, Digital SAT
              Preparation, University Planning, and educational Resources.
            </p>
          </div>

          {FOOTER_NAV_SECTIONS.map((section) => (
            <div key={section.title} className="lg:col-span-3">
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
        </div>

        {/* Bottom tier: contact info (left, ~60%) + WeChat QR (right, ~40%) in one unified row */}
        <div className="mt-14 border-t border-neutral-200 pt-10">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10">
            <div className="sm:w-3/5">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
                Contact
              </h2>
              <ul className="mt-5 space-y-4">
                <li className="flex items-center gap-3 text-sm text-neutral-600">
                  <MapPin size={16} className="flex-shrink-0 text-neutral-400" />
                  {FOOTER_CONTACT.location}
                </li>
                <li className="flex items-center gap-3 text-sm text-neutral-600">
                  <Mail size={16} className="flex-shrink-0 text-neutral-400" />
                  {FOOTER_CONTACT.email}
                </li>
                <li className="flex items-center gap-3 text-sm text-neutral-600">
                  <Phone size={16} className="flex-shrink-0 text-neutral-400" />
                  {FOOTER_CONTACT.phone}
                </li>
              </ul>
            </div>

            <div className="sm:w-2/5">
              <div className="flex flex-col items-start">
                <div className="flex aspect-square w-32 items-center justify-center rounded-lg border border-dashed border-neutral-300 bg-white text-[11px] text-neutral-400">
                  QR Code
                </div>
                <span className="mt-3 text-sm text-neutral-600">{FOOTER_CONTACT.wechatLabel}</span>
                <p className="mt-1 text-xs text-neutral-400">
                  Scan to connect with our advisors.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-neutral-200 pt-8">
          <p className="text-sm text-neutral-400">
            &copy; {COPYRIGHT_YEAR} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
