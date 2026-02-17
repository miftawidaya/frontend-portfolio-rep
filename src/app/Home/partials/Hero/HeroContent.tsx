import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { socialMediaData } from '@/constants/social-media-data';

export const HeroContent = () => {
  return (
    <div
      className='absolute inset-x-0 flex flex-wrap items-center justify-between gap-x-12 gap-y-3'
      style={{
        top: 'clamp(14.625rem, calc(-22vw + 31.65rem), 26.0625rem)',
        paddingInlineStart: 'clamp(0rem, calc(6.77vw - 2.03rem), 3.25rem)',
      }}
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
        className='grow basis-148 text-start'
      >
        <h1 className='text-foreground hero-title md:tracking-[-0.02em]'>
          EDWIN
        </h1>
        <h1 className='text-foreground hero-title -mt-1 md:mt-0 md:tracking-[-0.02em]'>
          ANDERSON
        </h1>
      </motion.div>

      {/* About */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 1.1 }}
        className='flex shrink-0 flex-col items-start text-start'
        style={{
          maxWidth: 'clamp(19.5625rem, 25.24vw, 19.6875rem)',
          gap: 'clamp(1.5rem, 3.21vw, 2.5rem)',
        }}
      >
        <div className='flex flex-col gap-1'>
          <h3 className='text-foreground md:text-display-md text-lg font-bold tracking-[0] md:leading-10.5 md:tracking-[-0.04em]'>
            About me
          </h3>
          <p className='text-foreground md:text-md text-sm font-semibold md:tracking-[-0.03em]'>
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
              className='hover:border-primary border-foreground/20 flex size-10 items-center justify-center rounded-full border p-2.5 backdrop-blur-xl hover:bg-black/40 md:size-12 md:border-none md:bg-black/60'
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
