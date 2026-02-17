import Image from 'next/image';
import { motion } from 'motion/react';
import { Logo } from '@/components/ui/logo';
import { HeroBadge } from './HeroBadge';

export const HeroPortrait = () => {
  return (
    <div
      className='absolute left-1/2 z-10 -translate-x-1/2'
      style={{
        width: 'clamp(22.56rem, 35.1vw, 27.38rem)',
        top: 'clamp(3.5625rem, calc(6.08vw + 2.07rem), 6.8125rem)',
        height: 'clamp(28.5625rem, calc(7.02vw + 26.84rem), 32.3125rem)',
        marginInlineStart: 'clamp(0rem, calc(3.22vw - 0.79rem), 1.72rem)',
      }}
    >
      {/* Profile Photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className='absolute top-0 isolate transform-gpu overflow-hidden rounded-t-full bg-white shadow-2xl'
        style={{
          width: 'clamp(19.95rem, 30.69vw, 23.94rem)',
          left: 'clamp(0rem, calc(-2.46vw + 1.92rem), 1.3125rem)',
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
        className='absolute end-2 z-20'
        style={{
          top: 'clamp(0.9375rem, calc(1.87vw + 0.48rem), 1.9375rem)',
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
