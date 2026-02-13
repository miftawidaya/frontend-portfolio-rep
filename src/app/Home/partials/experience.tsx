'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { Section } from '@/components/layouts/section';
import { Logo } from '@/components/ui/logo';
import {
  EXPERIENCE_DATA,
  EXPERIENCE_SUBTITLE,
  EXPERIENCE_TITLE,
  type ExperienceItem,
} from '@/constants/experience-data';
import { cn } from '@/lib/utils';

const Experience = () => {
  return (
    <Section
      title={EXPERIENCE_TITLE}
      subtitle={EXPERIENCE_SUBTITLE}
      id='experience'
    >
      <div className='flex flex-col'>
        {EXPERIENCE_DATA.map((experience, index) => (
          <ExperienceCard
            key={experience.id}
            experience={experience}
            isFirst={index === 0}
            isLast={index === EXPERIENCE_DATA.length - 1}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
};

type ExperienceCardProps = Readonly<{
  experience: ExperienceItem;
  isFirst: boolean;
  isLast: boolean;
  index: number;
}>;

const ExperienceCard = ({
  experience,
  isFirst,
  isLast,
  index,
}: ExperienceCardProps) => {
  return (
    <motion.div
      className='flex items-stretch gap-3 md:gap-6'
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: 'easeOut',
      }}
    >
      {/* Dot column: dot at top, connector line fills remaining height */}
      <div className='flex flex-col items-center'>
        {/* Timeline dot */}
        <motion.div
          className='bg-primary flex size-6 shrink-0 items-center justify-center rounded-full md:size-8'
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <div className='bg-primary-100 size-3.5 rounded-full md:size-5' />
        </motion.div>

        {/* Connector line — only between cards, not after the last one */}
        {isLast === false && (
          <motion.div
            className='bg-border w-px grow'
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
            style={{ transformOrigin: 'top' }}
            aria-hidden='true'
          />
        )}
      </div>

      {/* Card content */}
      <div
        className={cn(
          'border-accent relative flex grow flex-col gap-4 overflow-hidden rounded-2xl border p-4 md:flex-row md:gap-6 md:p-6',
          isLast === false && 'mb-4'
        )}
      >
        {/* Gradient accent — visible in both themes */}
        {isFirst && (
          <>
            <div
              className='pointer-events-none absolute inset-0'
              style={{
                background:
                  'radial-gradient(38.32% 45.14% at 13.99% -1.51%, #34144C 0%, rgba(52, 20, 76, 0) 100%)',
              }}
              aria-hidden='true'
            />
            {/* Light mode overlay for readability */}
            <div
              className='bg-background/60 pointer-events-none absolute inset-0 hidden in-[.light]:block dark:hidden'
              aria-hidden='true'
            />
          </>
        )}
        {/* Content — relative z-10 to sit above gradient/overlay */}
        <div className='relative z-10 flex grow flex-col gap-4 md:flex-row md:gap-6'>
          {/* Company Info */}
          <div className='flex flex-col gap-2'>
            <h3 className='text-md-bold md:text-lg-bold text-foreground'>
              {experience.role}
            </h3>
            <div className='relative'>
              {/* Default (dark mode) logo */}
              <Image
                src={experience.companyLogo}
                alt={experience.companyName}
                width={experience.logoWidth}
                height={experience.logoHeight}
                className={cn(
                  'md:h-12 md:w-32',
                  experience.companyLogoLight && 'in-[.light]:hidden'
                )}
              />
              {/* Light mode logo variant (only if provided) */}
              {experience.companyLogoLight && (
                <Image
                  src={experience.companyLogoLight}
                  alt={experience.companyName}
                  width={experience.logoWidth}
                  height={experience.logoHeight}
                  className='hidden in-[.light]:block md:h-12 md:w-32 dark:hidden'
                />
              )}
            </div>
          </div>

          {/* Separator: horizontal on mobile, vertical on desktop */}
          <div className='bg-border h-px w-full shrink-0 md:h-auto md:w-px' />

          {/* Responsibilities */}
          <div className='flex grow flex-col gap-4'>
            {experience.responsibilities.map((item) => (
              <div key={item} className='flex items-center gap-2'>
                <Logo variant='gradient' className='size-7.5 shrink-0' />
                <span className='text-sm-regular md:text-md-regular text-foreground'>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
