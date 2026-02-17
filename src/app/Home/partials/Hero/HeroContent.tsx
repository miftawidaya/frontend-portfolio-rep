import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { socialMediaData } from '@/constants/social-media-data';

export const HeroContent = () => {
  return (
    <div
      className='md:h-container-stage flex h-full w-full flex-col items-start gap-y-3 pt-104.25 md:flex-row md:items-center md:justify-between md:gap-x-12 md:pt-9'
      style={{
        paddingInlineStart: 'clamp(0rem, calc(6.77vw - 2.03rem), 3.25rem)',
      }}
    >
      {/* Left Block: Heading Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        className='flex flex-col items-start text-start'
      >
        <h1 className='text-foreground hero-title md:tracking-[-0.02em]'>
          EDWIN
        </h1>
        <h1 className='text-foreground hero-title -mt-1 md:mt-0 md:tracking-[-0.02em]'>
          ANDERSON
        </h1>
      </motion.div>

      {/* Right Block: About + Socials */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
        className='flex flex-col items-start text-start'
        style={{
          maxWidth: 'clamp(19.5625rem, 25.24vw, 19.6875rem)',
          gap: 'clamp(1.5rem, 3.21vw, 2.5rem)',
        }}
      >
        <div className='flex flex-col gap-1'>
          <h3 className='text-foreground md:text-display-md text-lg font-bold tracking-[0] md:leading-10.5 md:tracking-[-0.04em]'>
            About me
          </h3>
          <p className='text-neutral-25 md:text-md text-sm font-semibold md:tracking-[-0.03em]'>
            Passionate about frontend development, I focus on crafting digital
            products.
          </p>
        </div>

        <div className='flex items-center gap-3'>
          {socialMediaData.map((social) => (
            <Link
              key={social.id}
              href={social.href}
              target='_blank'
              rel='noopener noreferrer'
              className='hover:border-primary border-foreground/20 flex size-10 items-center justify-center rounded-full border bg-black/60 p-2.5 backdrop-blur-md md:size-12 md:border-none'
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
  );
};
