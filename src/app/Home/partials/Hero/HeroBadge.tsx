import Image from 'next/image';
import { motion } from 'motion/react';

export const HeroBadge = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      className='bg-base-white absolute end-0 z-20 flex items-center justify-center rounded-full shadow-xl'
      style={{
        width: 'clamp(6.06rem, 9.62vw, 7.5rem)', // 97px to 120px @1248
        height: 'clamp(6.06rem, 9.62vw, 7.5rem)',
        top: 'clamp(22.5rem, 31.73vw, 24.75rem)', // 360px to 396px @1248
      }}
    >
      {/* Spinning Text Image */}
      <div
        className='absolute flex items-center justify-center'
        style={{
          width: 'clamp(4.13rem, 6.57vw, 5.13rem)', // 66px to 82px @1248
          height: 'clamp(4.13rem, 6.57vw, 5.13rem)',
        }}
      >
        <Image
          src='/images/hero-badge-text.svg'
          alt='Rotating Badge'
          fill
          className='animate-spin-slow object-contain'
          sizes='(max-width: 768px) 25vw, 10vw'
        />
      </div>

      {/* Static Globe Icon */}
      <div
        className='relative flex items-center justify-center'
        style={{
          width: 'clamp(1.75rem, 3.21vw, 2.5rem)', // 28px to 40px @1248
          height: 'clamp(1.75rem, 3.21vw, 2.5rem)',
        }}
      >
        <Image
          src='/icons/icon-globe.svg'
          alt='Globe'
          fill
          className='object-contain'
        />
      </div>
    </motion.div>
  );
};
