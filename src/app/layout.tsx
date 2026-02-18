import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';
import Footer from '@/components/layouts/footer';
import Navbar from '@/components/layouts/navbar';
import { ThemeSwitcher } from '@/components/dev';
import { siteMetadata } from '@/constants/site-metadata';

const raleway = Raleway({
  variable: '--font-raleway',
  subsets: ['latin'],
});

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

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
      {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
    </html>
  );
}
