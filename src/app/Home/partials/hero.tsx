'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { socialMediaData } from '@/constants/social-media-data';
import { Logo } from '@/components/ui/logo';

const Hero = () => {
  return (
    <section className='bg-background relative flex h-screen min-h-213 w-full flex-col overflow-hidden md:min-h-236'>
      {/* Static Background */}
      <div className='pointer-events-none absolute inset-0 z-0 select-none'>
        {/* Mobile Background */}
        <div className='absolute inset-0 block md:hidden'>
          <Image
            src='/images/bg-hero-mobile.jpg'
            alt='Hero background'
            fill
            priority
            className='object-cover object-top'
            sizes='100vw'
          />
        </div>
        {/* Desktop Background */}
        <div className='absolute inset-0 hidden md:block'>
          <Image
            src='/images/bg-hero.jpg'
            alt='Hero background'
            fill
            priority
            className='object-cover object-top'
            sizes='100vw'
          />
        </div>
        {/* Mesh Grid Overlay */}
        <div
          className='absolute inset-0 z-1 transform-[matrix(1,0,0,-1,0,0)] bg-size-[22px_22px] mix-blend-overlay md:bg-size-[48px_48px]'
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255, 255, 255, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.3) 1px, transparent 1px)',
            maskImage:
              'radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, rgba(255, 255, 255, 0.2) 100%)',
            WebkitMaskImage:
              'radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, rgba(255, 255, 255, 0.2) 100%)',
          }}
        />
        {/* Light mode specific overlay */}
        <div className='absolute inset-0 hidden bg-white/30 in-[.light]:block dark:hidden' />
      </div>

      {/* 2. Figure Group */}
      <div className='absolute top-[calc(50%)] left-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center'>
        {/* Backdrop "PORTOFOLIO" Text */}
        <div
          className='absolute left-1/2 z-0 -translate-x-1/2'
          style={{
            width: 'clamp(20.4375rem, 69.58vw, 52.1875rem)',
            top: 'clamp(-9.375rem, -15vh, -3.125rem)',
          }}
        >
          <div className='flex w-full items-center justify-center py-4 md:py-10'>
            <h2 className='text-center text-[clamp(2.5rem,11.75vw,8.8125rem)] leading-none font-bold tracking-[-0.05em] text-[#D9D9D9]/10 select-none [-webkit-text-stroke:1px_rgba(255,255,255,0.15)]'>
              PORTOFOLIO
            </h2>
          </div>
        </div>

        {/* Main Portrait Group */}
        <div className='-mt-[clamp(2.125rem, 8vh, 5.625rem)] relative z-10'>
          {/* Main Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className='relative isolate transform-gpu overflow-hidden rounded-t-full bg-white shadow-2xl'
            style={{
              width: 'clamp(20rem, 31.83vw, 23.875rem)',
              aspectRatio: '382/496',
              WebkitMaskImage: '-webkit-radial-gradient(white, black)',
            }}
          >
            <Image
              src='/images/hero-image.jpg'
              alt='Edwin Anderson'
              fill
              className='rounded-t-full object-cover object-top'
              priority
              sizes='(max-width: 768px) 100vw, 33vw'
            />
          </motion.div>

          {/* Star Logo (Figma Relative Position) */}
          <div
            className='absolute z-20'
            style={{
              top: '6.25%',
              left: '79.5%',
              width: 'clamp(5rem, 10.5vw, 7.875rem)',
              aspectRatio: '1/1',
            }}
          >
            <Logo className='size-full text-white drop-shadow-lg' />
          </div>

          {/* Rotating Badge (Figma Relative Position) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className='absolute z-20 translate-x-[25%] translate-y-[25%]'
            style={{
              top: '72.5%',
              left: '72.5%',
              width: 'clamp(6rem, 10vw, 7.5rem)',
              aspectRatio: '1/1',
            }}
          >
            <Image
              src='/images/hero-badge.png'
              alt='Rotating Badge'
              fill
              className='animate-spin-slow object-contain drop-shadow-xl'
              sizes='(max-width: 768px) 25vw, 10vw'
            />
          </motion.div>
        </div>
      </div>

      {/* 3. Text/Copy Layer*/}
      <div className='hero-container pt-header relative z-30 flex h-full w-full flex-col justify-between pb-12 md:pb-24'>
        <div className='flex h-full w-full flex-col items-start gap-8 pt-[clamp(20rem,45vh,25rem)] md:flex-row md:items-center md:justify-between md:gap-12 md:pt-0'>
          {/* Left Block: Heading */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className='flex flex-col items-start text-start'
          >
            <h1 className='text-foreground display-xl-bold tracking-[-0.05em] lg:text-[5rem] lg:leading-[1.1]'>
              EDWIN
            </h1>
            <h1 className='text-foreground display-xl-bold tracking-[-0.05em] lg:-mt-2 lg:text-[5rem] lg:leading-[1.1]'>
              ANDERSON
            </h1>
          </motion.div>

          {/* Right Block: About + Socials */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
            className='flex max-w-78.25 flex-col items-start gap-6 text-start md:gap-10'
          >
            <div className='flex flex-col gap-2'>
              <h3 className='text-foreground display-md-bold'>About me</h3>
              <p className='text-neutral-25 text-md-semibold leading-7.5 tracking-[-0.03em]'>
                Passionate about frontend development, I focus on crafting
                digital products.
              </p>
            </div>

            <div className='flex items-center gap-3'>
              {socialMediaData.map((social) => (
                <Link
                  key={social.id}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:border-primary flex size-10 items-center justify-center rounded-full border border-white/20 bg-black/60 p-2.5 backdrop-blur-md transition-all hover:scale-110 md:size-12'
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={20}
                    height={20}
                    className='size-full max-h-5 max-w-5 object-contain opacity-80 transition-opacity hover:opacity-100 md:max-h-6 md:max-w-6'
                  />
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 4. Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className='absolute bottom-0 left-1/2 z-40 -translate-x-1/2'
          style={{
            marginBottom: 'clamp(-3.75rem, -5vh, -3rem)',
          }}
        >
          <div
            className='flex cursor-pointer items-start justify-center rounded-full border border-white/20 bg-black/10 pt-6 transition-colors hover:bg-white/5 md:pt-12'
            style={{
              width: 'clamp(4.625rem, 8.75vw, 6.5625rem)',
              aspectRatio: '105/156',
            }}
          >
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='animate-bounce text-white/40 md:size-9'
            >
              <path
                d='M12 5V19M12 19L5 12M12 19L19 12'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
