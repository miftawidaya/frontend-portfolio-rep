export type SocialMedia = {
  id: string;
  name: string;
  href: string;
  icon: string;
};

export const socialMediaData: SocialMedia[] = [
  {
    id: 'facebook',
    name: 'Facebook',
    href: 'https://facebook.com',
    icon: '/icons/icon-facebook.svg',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: '/icons/icon-instagram.svg',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: '/icons/icon-linkedin.svg',
  },
  {
    id: 'tiktok',
    name: 'Tiktok',
    href: 'https://tiktok.com',
    icon: '/icons/icon-tiktok.svg',
  },
];
