import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import './globals.css';
import Footer from '@/components/layouts/footer';
import Navbar from '@/components/layouts/navbar';
import { ThemeSwitcher } from '@/components/dev';

const raleway = Raleway({
  variable: '--font-raleway',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'
  ),
  title: {
    default: 'Portfolio Rep | Software Engineer & Web Developer',
    template: '%s | Portfolio Rep',
  },
  description:
    'Professional portfolio showcasing expertise in modern web development, React, Next.js, and TypeScript. Explore projects, skills, and technical experience.',
  keywords: [
    'Software Engineer',
    'Web Development',
    'React Developer',
    'Next.js Portfolio',
    'TypeScript',
    'Frontend Engineer',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Portfolio Rep',
    title: 'Portfolio Rep | Software Engineer',
    description:
      'Professional portfolio showcasing expertise in modern web development.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Portfolio Rep Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio Rep | Software Engineer',
    description:
      'Professional portfolio showcasing expertise in modern web development.',
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${raleway.variable} antialiased`}
        suppressHydrationWarning
      >
        <Navbar />
        {children}
        <Footer />
        <ThemeSwitcher position='right' />
      </body>
    </html>
  );
}
