'use client';

import { HeroBackground } from './HeroBackground';
import { HeroContent } from './HeroContent';
import { HeroPortrait } from './HeroPortrait';
import { HeroScrollIndicator } from './HeroScrollIndicator';
import { HeroWatermark } from './HeroWatermark';

const Hero = () => {
  return (
    <section
      id='home'
      className='bg-primary relative flex h-screen w-full flex-col overflow-hidden'
      style={{ minHeight: 'clamp(53.25rem, calc(10.76vw + 50.61rem), 59rem)' }}
    >
      <HeroBackground />

      {/* Main Stage */}
      <div className='custom-container relative z-10 flex flex-1 flex-col items-center justify-start'>
        <div
          className='h-container-stage relative flex w-full items-center justify-center'
          style={{ marginTop: 'clamp(3.125rem, 12.75vw, 9.9375rem)' }}
        >
          {/* Middle Composition */}
          <div className='absolute inset-0'>
            <HeroWatermark />
            <HeroPortrait />
          </div>

          {/* Info Content */}
          <div className='relative z-30 h-full w-full'>
            <HeroContent />
          </div>
        </div>
      </div>

      <HeroScrollIndicator href='#about' />
    </section>
  );
};

export default Hero;
