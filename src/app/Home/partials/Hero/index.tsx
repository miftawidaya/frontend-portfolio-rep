'use client';

import { HeroBackground } from './HeroBackground';
import { HeroContent } from './HeroContent';
import { HeroPortrait } from './HeroPortrait';
import { HeroScrollIndicator } from './HeroScrollIndicator';
import { HeroWatermark } from './HeroWatermark';

const Hero = () => {
  return (
    <section className='bg-background relative flex h-screen min-h-213 w-full flex-col overflow-hidden md:min-h-236'>
      <HeroBackground />

      {/* Main Stage */}
      <div className='hero-container relative z-10 flex flex-1 flex-col items-center justify-center'>
        <div className='h-container-stage-mobile md:h-container-stage relative flex w-full items-center justify-center'>
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

      <HeroScrollIndicator />
    </section>
  );
};

export default Hero;
