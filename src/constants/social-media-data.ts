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
    icon: '/icons/icon-social-facebook.svg',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: '/icons/icon-social-instagram.svg',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: '/icons/icon-social-linkedin.svg',
  },
  {
    id: 'tiktok',
    name: 'Tiktok',
    href: 'https://tiktok.com',
    icon: '/icons/icon-social-tiktok.svg',
  },
];
