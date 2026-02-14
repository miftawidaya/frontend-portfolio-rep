import Image from 'next/image';
import { Section } from '@/components/layouts/section';
import { Logo } from '@/components/ui/logo';
import { STATS_DATA, StatItem } from '@/constants/stats-data';

const About = () => {
  return (
    <Section
      title='Proven Numbers. Real Impact.'
      subtitle='From shipped products to years of experience'
      id='about'
      align='left'
      className='md:space-y-7xl space-y-6'
    >
      <div className='md:gap-6xl flex flex-col gap-4'>
        {STATS_DATA.map((item: StatItem, index: number) => (
          <div key={item.label} className='flex flex-col gap-6 md:gap-0'>
            <div className='flex flex-row items-center justify-between gap-1'>
              {/* Stat Number with Icon */}
              <div className='flex w-30.25 shrink-0 items-center gap-2 md:w-53'>
                <Logo variant='gradient' className='size-7 md:size-11' />
                <span className='display-xl-bold md:display-4xl-bold text-foreground'>
                  {item.number}
                </span>
              </div>

              {/* Label */}
              <div className='w-28 shrink-0 md:w-68'>
                <p className='text-md-medium md:display-md-medium text-foreground whitespace-pre-line'>
                  {item.label}
                </p>
              </div>

              {/* Image */}
              <div className='relative size-20 shrink-0 md:size-30'>
                <Image
                  src={item.image}
                  alt={item.label.replace('\n', ' ')}
                  fill
                  className='border-border rounded-lg border object-cover md:rounded-2xl'
                  sizes='(min-width: 768px) 120px, 80px'
                />
              </div>
            </div>

            {/* Separator - only between items */}
            {index < STATS_DATA.length - 1 && (
              <div className='bg-border mt-6 h-px w-full md:mt-0 md:hidden' />
            )}
            {/* Desktop separator */}
            <div className='bg-border mt-6 hidden h-px w-full md:block' />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default About;
