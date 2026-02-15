import Image from 'next/image';
import { aspectRatio, motion } from 'motion/react';
import { Logo } from '@/components/ui/logo';
import { HeroBadge } from './HeroBadge';

export const HeroPortrait = () => {
  return (
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

      {/* Star Logo */}
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

      {/* Rotating Badge */}
      <HeroBadge />
    </div>
  );
};
