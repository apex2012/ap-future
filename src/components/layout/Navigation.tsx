import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, SITE_NAME } from '@/lib/constants';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors duration-200 ${
      isActive ? 'text-neutral-900' : 'text-neutral-500 hover:text-neutral-900'
    }`;

  return (
    <header
      className={`sticky top-0 z-40 bg-white/95 backdrop-blur-md transition-shadow duration-200 ${
        scrolled ? 'shadow-sm' : 'border-b border-neutral-100'
      }`}
    >
      <nav
        className="container-wide flex h-[68px] items-center justify-between"
        aria-label="Main navigation"
      >
        <Link
          to="/"
          className="text-[17px] font-bold tracking-tight text-neutral-900 transition-opacity hover:opacity-80"
          onClick={() => setIsOpen(false)}
        >
          {SITE_NAME}
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <NavLink to={item.href} className={linkClass} end={item.href === '/'}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link
            to="/book-a-consultation"
            className="inline-flex items-center rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-neutral-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          >
            Book a Consultation
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-neutral-600 transition-colors hover:bg-neutral-100 lg:hidden"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isOpen && (
        <div id="mobile-menu" className="fixed inset-0 top-[68px] z-30 bg-white lg:hidden">
          <ul className="container-wide flex flex-col gap-1 py-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-neutral-100 text-neutral-900'
                        : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
                    }`
                  }
                  end={item.href === '/'}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li className="mt-4 px-4">
              <Link
                to="/book-a-consultation"
                className="block rounded-full bg-neutral-900 px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-neutral-700"
                onClick={() => setIsOpen(false)}
              >
                Book a Consultation
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
