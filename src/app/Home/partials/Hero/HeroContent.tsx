import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { socialMediaData } from '@/constants/social-media-data';

export const HeroContent = () => {
  return (
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
              className='hover:border-primary flex size-10 items-center justify-center rounded-full bg-black/60 p-2.5 backdrop-blur-md transition-all hover:scale-110 md:size-12'
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
