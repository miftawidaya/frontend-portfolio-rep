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

      {/* 2. Figure Group */}
      <div className='absolute top-[calc(50%)] left-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center'>
        <HeroWatermark />
        <HeroPortrait />
      </div>

      {/* 3. Text/Copy Layer*/}
      <div className='hero-container pt-header relative z-30 flex h-full w-full flex-col justify-between pb-12 md:pb-24'>
        <HeroContent />
        <HeroScrollIndicator />
      </div>
    </section>
  );
};

export default Hero;
