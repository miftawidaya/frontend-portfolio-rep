'use client';

import React from 'react';
import { Menu, XIcon } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Logo } from '@/components/ui/logo';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from '@/components/ui/sheet';

import {
  navigationData,
  BRAND_NAME,
  CTA_LABEL,
  CTA_HREF,
} from '@/constants/navigation-data';

const Navbar = () => {
  const [mounted, setMounted] = React.useState(false);

  const { scrollY } = useScroll();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.5]);
  const borderOpacity = useTransform(scrollY, [0, 100], [0, 0.1]);
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(10px)']
  );

  return (
    <motion.header
      style={{ backdropFilter: backdropBlur }}
      className='fixed top-0 z-50 w-full'
    >
      {/* Theme-aware background layer */}
      <motion.div
        className='bg-background absolute inset-0 -z-10'
        style={{ opacity: bgOpacity }}
      />
      {/* Subtle border on scroll */}
      <motion.div
        className='bg-foreground absolute bottom-0 h-px w-full'
        style={{ opacity: borderOpacity }}
      />

      <div className='custom-container h-header flex items-center justify-between'>
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 1.7 }}
        >
          <Link
            href='/'
            className='text-foreground hover:text-primary flex items-center gap-2 transition-colors'
          >
            <Logo className='size-6 md:size-10.75' />
            <span className='text-xl leading-7 font-bold tracking-tight'>
              {BRAND_NAME}
            </span>
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <nav className='hidden md:block'>
          <ul className='gap-nav-gap flex items-center px-6'>
            {navigationData.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: 'easeOut',
                  delay: 2.1 + index * 0.15,
                }}
              >
                <Link
                  href={item.href}
                  className='text-md text-foreground hover:text-primary block p-2 leading-7.5 font-medium tracking-tight transition-colors'
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 2.8 }}
          className='hidden md:block'
        >
          <Button asChild variant='secondary' className='min-w-41.75'>
            <Link href={CTA_HREF}>{CTA_LABEL}</Link>
          </Button>
        </motion.div>

        {/* Mobile Nav */}
        {mounted ? (
          <Sheet>
            <SheetTrigger asChild>
              <motion.button
                type='button'
                aria-label='Open navigation menu'
                className='text-foreground hover:text-primary flex size-8 cursor-pointer items-center justify-center transition-colors md:hidden'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 1.8 }}
                >
                  <Menu className='text-foreground size-6' />
                </motion.div>
              </motion.button>
            </SheetTrigger>
            <SheetContent
              side='right'
              className='bg-background w-full border-none p-0'
            >
              <div className='custom-container h-header flex items-center justify-between'>
                <SheetClose asChild>
                  <Link
                    href='/'
                    className='text-foreground hover:text-primary flex items-center gap-2 transition-colors'
                  >
                    <Logo className='size-6 md:size-10.75' />
                    <span className='text-xl leading-7 font-bold tracking-tight'>
                      {BRAND_NAME}
                    </span>
                  </Link>
                </SheetClose>

                <SheetClose asChild>
                  <motion.button
                    className='text-foreground hover:text-primary flex size-8 cursor-pointer items-center justify-center transition-colors'
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label='Close menu'
                  >
                    <motion.div
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <XIcon className='size-6' />
                    </motion.div>
                  </motion.button>
                </SheetClose>
              </div>

              <div className='flex flex-col gap-6 px-4'>
                <nav>
                  <ul className='flex flex-col gap-2'>
                    {navigationData.map((item) => (
                      <li key={item.id}>
                        <SheetClose asChild>
                          <Link
                            href={item.href}
                            className='text-md text-foreground hover:text-primary block p-2 leading-7.5 font-medium tracking-tight transition-colors'
                          >
                            {item.label}
                          </Link>
                        </SheetClose>
                      </li>
                    ))}
                  </ul>
                </nav>

                <SheetClose asChild>
                  <Button asChild variant='secondary' className='w-full'>
                    <Link href={CTA_HREF}>{CTA_LABEL}</Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <button
            type='button'
            aria-label='Open navigation menu'
            className='cursor-pointer md:hidden'
          >
            <Menu className='text-foreground size-6' />
          </button>
        )}
      </div>
    </motion.header>
  );
};

export default Navbar;
