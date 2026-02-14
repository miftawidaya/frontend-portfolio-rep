import Image from 'next/image';
import { Section } from '@/components/layouts/section';
import { Button } from '@/components/ui/button';
import {
  SKILLS_DATA,
  SKILL_QUOTE,
  type SkillItem,
} from '@/constants/skills-data';
import { cn } from '@/lib/utils';

const Skills = () => {
  return (
    <Section
      title='Experienced in Web & App Development'
      subtitle='I create user-focused websites that look good, work well, and feel right.'
      id='skills'
    >
      <div className='flex flex-col gap-4 md:flex-row md:items-stretch md:gap-4.25'>
        {/* Tech Stack Grid */}
        <div className='grid grid-cols-2 gap-4 md:flex-[674_1_0%] md:grid-cols-3 md:gap-4 md:gap-y-4.25'>
          {SKILLS_DATA.map((skill: SkillItem) => (
            <div
              key={skill.id}
              className='border-border bg-card flex h-43 flex-col items-center justify-center gap-2 rounded-2xl border p-2 text-center md:h-53.5'
            >
              {/* Tech Icon Wrapper */}
              <div className='flex size-22.5 items-center justify-center p-3.75'>
                <div className='relative flex items-center justify-center'>
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={skill.iconWidth}
                    height={skill.iconHeight}
                    className='object-contain'
                  />
                </div>
              </div>
              {/* Tech Name */}
              <span className='text-md-regular md:text-lg-medium text-foreground'>
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* Quote Card */}
        <div
          className={cn(
            'card relative flex h-75.75 flex-col justify-between overflow-hidden md:h-111.25 md:flex-[509_1_0%]'
          )}
        >
          {/* Background Image */}
          <Image
            src={SKILL_QUOTE.background}
            alt='Skill background'
            fill
            className='object-cover'
            sizes='(max-width: 768px) 100vw, 509px'
          />

          {/* Light mode specific overlay */}
          <div className='bg-background/30 absolute inset-0 hidden in-[.light]:block dark:hidden' />

          {/* Content Overlay */}
          <div className='relative z-10 flex h-full flex-col justify-between'>
            <div className='flex flex-col gap-3 md:mx-auto md:w-full'>
              <h3 className='text-xl-bold md:display-md-bold text-foreground tracking-[-0.04em]'>
                {SKILL_QUOTE.text}
              </h3>
              <p className='text-md-regular text-foreground/80'>
                {SKILL_QUOTE.author}
              </p>
            </div>

            <Button
              variant='secondary'
              size='lg'
              className='text-sm-semibold md:text-md-semibold md:mx-auto md:w-full'
              asChild
            >
              <a href='#contact'>{SKILL_QUOTE.cta}</a>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
