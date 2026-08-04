export interface NavItem {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: NavItem[];
}

export type HeroVariant = 'split' | 'centered' | 'course' | 'content';

export interface HeroAction {
  label: string;
  href: string;
  variant: 'primary' | 'secondary';
}

export interface HeroImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
  href?: string;
}

export interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

export interface CTAAction {
  label: string;
  href: string;
}

export type ResourceType = 'article' | 'guide' | 'template' | 'research';
