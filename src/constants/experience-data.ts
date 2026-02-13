export type ExperienceItem = Readonly<{
  id: string;
  role: string;
  companyLogo: string;
  companyLogoLight?: string;
  companyName: string;
  logoWidth: number;
  logoHeight: number;
  responsibilities: readonly string[];
}>;

export const EXPERIENCE_TITLE = 'Years of Building, Learning, and Shipping';

export const EXPERIENCE_SUBTITLE =
  'Each role has sharpened my ability to build better digital experiences, faster.';

export const EXPERIENCE_DATA: readonly ExperienceItem[] = [
  {
    id: 'airbnb',
    role: '2025 - Present',
    companyLogo: '/icons/icon-exp-airbnb.svg',
    companyName: 'Airbnb',
    logoWidth: 85,
    logoHeight: 32,
    responsibilities: [
      'Develop responsive and user-friendly web interfaces using modern frontend technologies.',
      'Collaborate with UI/UX designers to turn design mockups into functional components.',
      'Optimize web applications for maximum speed and scalability.',
      'Ensure cross-browser and cross-platform compatibility.',
      'Implement reusable code and component libraries for future use.',
    ],
  },
  {
    id: 'coinbase',
    role: '2025 - Present',
    companyLogo: '/icons/icon-exp-coinbase.svg',
    companyName: 'Coinbase',
    logoWidth: 85,
    logoHeight: 32,
    responsibilities: [
      'Develop responsive and user-friendly web interfaces using modern frontend technologies.',
      'Collaborate with UI/UX designers to turn design mockups into functional components.',
      'Optimize web applications for maximum speed and scalability.',
      'Ensure cross-browser and cross-platform compatibility.',
      'Implement reusable code and component libraries for future use.',
    ],
  },
  {
    id: 'webflow',
    role: '2025 - Present',
    companyLogo: '/icons/icon-exp-webflow.svg',
    companyLogoLight: '/icons/icon-exp-webflow-light.svg',
    companyName: 'Webflow',
    logoWidth: 85,
    logoHeight: 32,
    responsibilities: [
      'Develop responsive and user-friendly web interfaces using modern frontend technologies.',
      'Collaborate with UI/UX designers to turn design mockups into functional components.',
      'Optimize web applications for maximum speed and scalability.',
      'Ensure cross-browser and cross-platform compatibility.',
      'Implement reusable code and component libraries for future use.',
    ],
  },
] as const;
