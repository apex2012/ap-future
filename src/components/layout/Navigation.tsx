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
    `relative text-[18px] font-semibold transition-colors duration-200 ease-out ${
      isActive
        ? 'text-neutral-900'
        : 'text-neutral-500 hover:text-neutral-800'
    } after:absolute after:-bottom-[22px] after:left-0 after:right-0 after:mx-auto after:h-[2px] after:rounded-full after:bg-neutral-900 after:transition-all after:duration-200 after:ease-out ${
      isActive ? 'after:w-4' : 'after:w-0 hover:after:w-4'
    }`;

  return (
    <header
      className={`sticky top-0 z-40 bg-white/95 backdrop-blur-md transition-shadow duration-200 ${
        scrolled ? 'shadow-[0_1px_3px_rgba(0,0,0,0.04)]' : 'border-b border-neutral-100'
      }`}
    >
      <nav
        className="container-wide flex h-[74px] items-center justify-between"
        aria-label="Main navigation"
      >
        <Link
          to="/"
          className="-ml-4 text-[26px] font-extrabold tracking-tight text-neutral-900 transition-opacity duration-200 hover:opacity-80 lg:-ml-2"
          onClick={() => setIsOpen(false)}
        >
          {SITE_NAME}
        </Link>

        <ul className="hidden items-center lg:flex" style={{ gap: '2.75rem' }}>
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <NavLink to={item.href} className={linkClass} end={item.href === '/'}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="mr-10 hidden lg:block">
          <Link
            to="/book-a-consultation"
            className="inline-flex items-center rounded-xl bg-neutral-900 px-8 py-2.5 text-[15px] font-semibold text-white transition-all duration-200 hover:bg-neutral-700 hover:shadow-md focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
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
        <div id="mobile-menu" className="fixed inset-0 top-[74px] z-30 bg-white lg:hidden">
          <ul className="container-wide flex flex-col gap-1 py-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-3 text-base font-medium transition-colors duration-200 ${
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
                className="block rounded-xl bg-neutral-900 px-5 py-3 text-center text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-neutral-700"
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
