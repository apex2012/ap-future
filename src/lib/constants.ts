export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'AP', href: '/ap' },
  { label: 'SAT', href: '/sat' },
  { label: 'University Planning', href: '/university-planning' },
  { label: 'Resources', href: '/resources' },
  { label: 'About', href: '/about' },
] as const;

export const FOOTER_NAV_SECTIONS = [
  {
    title: 'Programs',
    links: [
      { label: 'AP Courses', href: '/ap' },
      { label: 'Digital SAT', href: '/sat' },
      { label: 'University Planning', href: '/university-planning' },
      { label: 'Resources', href: '/resources' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Book a Consultation', href: '/book-a-consultation' },
    ],
  },
] as const;

export const FOOTER_CONTACT = {
  location: 'Vancouver, BC, Canada',
  email: 'hello@apfuture.ca',
  phone: '+1 (604) XXX-XXXX',
  wechatLabel: 'WeChat',
} as const;

export const SITE_NAME = 'AP Future';
export const SITE_TAGLINE = 'Prepare for University with Confidence';
export const SITE_DESCRIPTION =
  'A premium international education platform for AP Courses, Digital SAT Preparation, University Planning, and educational Resources.';
export const COPYRIGHT_YEAR = 2026;
