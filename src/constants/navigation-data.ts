interface NavigationItem {
  readonly id: string;
  readonly label: string;
  readonly href: string;
}

export const navigationData: readonly NavigationItem[] = [
  {
    id: 'home',
    label: 'Home',
    href: '#home',
  },
  {
    id: 'about',
    label: 'About',
    href: '#about',
  },
  {
    id: 'skill',
    label: 'Skill',
    href: '#skill',
  },
  {
    id: 'projects',
    label: 'Projects',
    href: '#projects',
  },
  {
    id: 'faq',
    label: 'FAQ',
    href: '#faq',
  },
] as const;

export const BRAND_NAME = 'Edwin';
export const CTA_LABEL = 'Get in Touch';
export const CTA_HREF = '#contact';
