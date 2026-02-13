export type TestimonialItem = Readonly<{
  id: string;
  companyLogo: string;
  companyName: string;
  logoWidth: number;
  logoHeight: number;
  rating: number;
  quote: string;
  personName: string;
  personTitle: string;
}>;

export const TESTIMONIALS_TITLE = 'Trusted by Teams, Valued by Clients';

export const TESTIMONIALS_SUBTITLE =
  'A few kind words from the people behind the projects Edwin helped bring to life.';

export const TESTIMONIALS_DATA: readonly TestimonialItem[] = [
  {
    id: 'testimonial-airbnb',
    companyLogo: '/icons/icon-company-airbnb.svg',
    companyName: 'Airbnb',
    logoWidth: 128,
    logoHeight: 48,
    rating: 5,
    quote:
      '"Edwin delivered clean and efficient code that made our app load faster and feel smoother. He\'s a pleasure to work with."',
    personName: 'Sarah Liem',
    personTitle: 'Product Manager at Techlynk',
  },
  {
    id: 'testimonial-coinbase',
    companyLogo: '/icons/icon-company-coinbase.svg',
    companyName: 'Coinbase',
    logoWidth: 128,
    logoHeight: 48,
    rating: 5,
    quote:
      '"His attention to detail and deep understanding of frontend architecture helped us ship features twice as fast."',
    personName: 'Marcus Chen',
    personTitle: 'Engineering Lead at Coinbase',
  },
  {
    id: 'testimonial-webflow',
    companyLogo: '/icons/icon-company-webflow.svg',
    companyName: 'Webflow',
    logoWidth: 128,
    logoHeight: 48,
    rating: 5,
    quote:
      '"Edwin turned our complex designs into pixel-perfect, responsive interfaces. The results exceeded expectations."',
    personName: 'Olivia Park',
    personTitle: 'Design Director at Webflow',
  },
  {
    id: 'testimonial-docker',
    companyLogo: '/icons/icon-company-docker.svg',
    companyName: 'Docker',
    logoWidth: 128,
    logoHeight: 48,
    rating: 5,
    quote:
      '"Working with Edwin felt effortless. He consistently delivered high-quality code with clear documentation."',
    personName: 'James Rodriguez',
    personTitle: 'VP of Engineering at Docker',
  },
  {
    id: 'testimonial-spotify',
    companyLogo: '/icons/icon-company-spotify.svg',
    companyName: 'Spotify',
    logoWidth: 128,
    logoHeight: 48,
    rating: 5,
    quote:
      '"His ability to create smooth animations and micro-interactions elevated the entire user experience of our platform."',
    personName: 'Emma Lindqvist',
    personTitle: 'UX Lead at Spotify',
  },
] as const;
