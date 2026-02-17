import { motion } from 'motion/react';

type HeroScrollIndicatorProps = Readonly<{
  href: string;
}>;

export const HeroScrollIndicator = ({ href }: HeroScrollIndicatorProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.6, duration: 0.8 }}
      className='absolute bottom-0 left-1/2 z-40 -translate-x-1/2'
    >
      <a
        href={href}
        aria-label='Scroll to About section'
        className='border-primary-foreground/20 hover:bg-background/10 flex cursor-pointer items-start justify-center transition-colors'
        style={{
          width: 'clamp(4.63rem, 8.41vw, 6.56rem)',
          height: 'clamp(3.13rem, 8.57vw, 6.69rem)',
          borderWidth: '1px 1px 0px 1px',
          borderStyle: 'solid',
          borderTopLeftRadius: 'clamp(4.38rem, 8.01vw, 6.25rem)',
          borderTopRightRadius: 'clamp(4.38rem, 8.01vw, 6.25rem)',
          paddingTop: 'clamp(1.06rem, 3.45vw, 2.69rem)',
        }}
      >
        <svg
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='text-primary-foreground/20 animate-bounce'
          style={{
            width: 'clamp(1.53rem, 2.8vw, 2.19rem)',
            height: 'clamp(1.53rem, 2.8vw, 2.19rem)',
          }}
        >
          <path
            d='M12 5V19M12 19L5 12M12 19L19 12'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
        <span className='sr-only'>Scroll to About section</span>
      </a>
    </motion.div>
  );
};
