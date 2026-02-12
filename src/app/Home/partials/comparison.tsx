import Image from 'next/image';
import { X } from 'lucide-react';
import { Section } from '@/components/layouts/section';
import { Logo } from '@/components/ui/logo';
import {
  COMPARISON_ITEMS,
  COMPARISON_SUBTITLE,
  COMPARISON_TITLE,
} from '@/constants/comparison-data';
import { cn } from '@/lib/utils';

const Comparison = () => {
  return (
    <Section
      title={COMPARISON_TITLE}
      subtitle={COMPARISON_SUBTITLE}
      id='comparison'
    >
      <div className='flex flex-col gap-5 md:flex-row md:gap-5'>
        {/* With Me */}
        <div
          className={cn('card relative overflow-hidden border-none md:flex-1')}
        >
          {/* Background Decorative Image */}
          <div className='absolute inset-0 opacity-80'>
            <Image
              src='/images/bg-comparison.jpg'
              alt='Decorative background'
              fill
              className='object-cover'
              priority
            />
          </div>

          {/* Light mode specific overlay for readability */}
          <div className='bg-background/20 absolute inset-0 hidden in-[.light]:block dark:hidden' />

          <div className='relative z-10 flex h-full flex-col gap-3 md:gap-4'>
            <h3 className='text-lg-semibold md:display-xs-semibold text-foreground'>
              With Me
            </h3>

            <div className='flex flex-col gap-2'>
              {COMPARISON_ITEMS.map((item) => (
                <div
                  key={item}
                  className='bg-card/40 flex h-14 items-center gap-2 rounded-lg px-3 backdrop-blur-xl md:px-4'
                >
                  <Logo
                    variant='default'
                    className='text-foreground size-7.5'
                  />
                  <span className='text-sm-regular md:text-md-regular text-foreground'>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Other Card */}
        <div className={cn('card md:flex-1')}>
          <div className='flex h-full flex-col gap-3 md:gap-4'>
            <h3 className='text-lg-semibold md:display-xs-semibold text-foreground'>
              Other
            </h3>

            <div className='flex flex-col gap-2'>
              {COMPARISON_ITEMS.map((item) => (
                <div
                  key={item}
                  className='bg-muted flex h-14 items-center gap-2 rounded-lg px-3 md:px-4'
                >
                  <div className='flex size-6 items-center justify-center'>
                    <X className='text-error' />
                  </div>
                  <span className='text-sm-regular md:text-md-regular text-muted-foreground'>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Comparison;
