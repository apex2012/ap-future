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
    `relative text-lg font-medium transition-colors duration-300 ease-out ${
      isActive
        ? 'text-primary-700'
        : 'text-neutral-500 hover:text-neutral-900'
    } after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:rounded-full after:bg-primary-500 after:transition-all after:duration-300 after:ease-out ${
      isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
    }`;

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'glass-effect shadow-md'
          : 'bg-white/95 backdrop-blur-md border-b border-neutral-100'
      }`}
    >
      <nav
        className="container-wide flex h-[76px] items-center justify-between"
        aria-label="Main navigation"
      >
        <Link
          to="/"
          className="ml-1 text-[28px] font-extrabold tracking-tight text-neutral-900 transition-opacity duration-200 hover:opacity-80"
          onClick={() => setIsOpen(false)}
        >
          <span className="text-gradient-primary">{SITE_NAME}</span>
        </Link>

        <ul className="hidden items-center lg:flex" style={{ gap: '2.25rem' }}>
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
            className="inline-flex items-center rounded-full bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-3 text-lg font-semibold text-white shadow-sm transition-all duration-200 hover:shadow-glow hover:from-primary-700 hover:to-primary-800 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
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
        <div id="mobile-menu" className="fixed inset-0 top-[76px] z-30 bg-white lg:hidden">
          <ul className="container-wide flex flex-col gap-1 py-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-primary-50 text-primary-700'
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
                className="block rounded-full bg-gradient-to-r from-primary-600 to-primary-700 px-5 py-3 text-center text-lg font-semibold text-white shadow-sm transition-all hover:shadow-glow"
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
