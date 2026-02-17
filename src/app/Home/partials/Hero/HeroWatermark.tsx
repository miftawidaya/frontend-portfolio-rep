import { motion } from 'motion/react';

export const HeroWatermark = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className='absolute left-1/2 z-0 -translate-x-1/2 py-5'
      style={{
        width: 'clamp(20.44rem, 66.91vw, 52.19rem)',
        top: 0,
      }}
    >
      <div className='flex w-full items-center justify-center'>
        <h2 className='text-center text-[clamp(3.47rem,11.35vw,8.85rem)] leading-tight font-bold tracking-[-0.05em] text-[#D9D9D9]/10 select-none [-webkit-text-stroke:1px_rgba(255,255,255,0.15)]'>
          PORTOFOLIO
        </h2>
      </div>
    </motion.div>
  );
};
