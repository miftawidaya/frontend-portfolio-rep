import type { Metadata } from 'next';

/** Site-wide identity constants */
export const SITE_AUTHOR = 'Edwin Anderson';
export const SITE_ROLE = 'Frontend Engineer';
export const SITE_TECH_STACK = 'React, Next.js & TypeScript';

const SHORT_DESCRIPTION = `${SITE_ROLE} specializing in ${SITE_TECH_STACK}. Explore projects, skills, and experience.`;
const FULL_DESCRIPTION = `${SITE_ROLE} portfolio of ${SITE_AUTHOR}. Specializing in building high-performance, accessible web interfaces with ${SITE_TECH_STACK}.`;

/** Next.js Metadata object */
export const siteMetadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'
  ),
  title: {
    default: `${SITE_AUTHOR} | ${SITE_ROLE} — ${SITE_TECH_STACK}`,
    template: `%s | ${SITE_AUTHOR}`,
  },
  description: FULL_DESCRIPTION,
  keywords: [
    'Frontend Engineer',
    'Frontend Developer Portfolio',
    'React Developer',
    'Next.js Developer',
    'TypeScript Developer',
    'UI Engineer',
    'Web Performance',
    'Accessible Web Design',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: `${SITE_AUTHOR} Portfolio`,
    title: `${SITE_AUTHOR} | ${SITE_ROLE}`,
    description: SHORT_DESCRIPTION,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${SITE_AUTHOR} — ${SITE_ROLE} Portfolio`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_AUTHOR} | ${SITE_ROLE}`,
    description: SHORT_DESCRIPTION,
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
  },
};
