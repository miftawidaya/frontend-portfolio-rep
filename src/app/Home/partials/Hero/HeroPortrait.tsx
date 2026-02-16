import Image from 'next/image';
import { motion } from 'motion/react';
import { Logo } from '@/components/ui/logo';
import { HeroBadge } from './HeroBadge';

export const HeroPortrait = () => {
  return (
    <div
      className='absolute top-14.25 left-1/2 z-10 h-114.25 -translate-x-1/2 md:top-27.25 md:ms-[27.5px] md:h-129.25'
      style={{ width: 'clamp(22.56rem, 35.1vw, 27.38rem)' }}
    >
      {/* Profile Photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className='absolute top-0 left-5.25 isolate transform-gpu overflow-hidden rounded-t-full bg-white shadow-2xl md:left-0'
        style={{
          width: 'clamp(19.95rem, 30.69vw, 23.94rem)',
          aspectRatio: '383/497',
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
        className='absolute end-2 top-3.75 z-20 md:top-7.75'
        style={{
          width: 'clamp(5.06rem, 10.1vw, 7.88rem)',
          height: 'clamp(5.06rem, 10.1vw, 7.88rem)',
        }}
      >
        <Logo className='size-full text-white drop-shadow-lg' />
      </div>

      {/* Badge */}
      <HeroBadge />
    </div>
  );
};
