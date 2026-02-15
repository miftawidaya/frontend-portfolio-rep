import Image from 'next/image';

export const HeroBackground = () => {
  return (
    <div className='pointer-events-none absolute inset-0 z-0 select-none'>
      {/* Mobile Background */}
      <div className='absolute inset-0 block md:hidden'>
        <Image
          src='/images/bg-hero-mobile.jpg'
          alt='Hero background'
          fill
          priority
          className='object-cover object-top'
          sizes='(max-width: 768px) 100vw, 0vw'
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
          sizes='(min-width: 768px) 100vw, 0vw'
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
      <div className='bg-background/30 absolute inset-0 hidden in-[.light]:block dark:hidden' />
    </div>
  );
};
