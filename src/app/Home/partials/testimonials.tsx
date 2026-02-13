'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';
import { Section } from '@/components/layouts/section';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from '@/components/ui/carousel';
import {
  TESTIMONIALS_DATA,
  TESTIMONIALS_SUBTITLE,
  TESTIMONIALS_TITLE,
  type TestimonialItem,
} from '@/constants/testimonials-data';

const Testimonials = () => {
  return (
    <Section
      title={TESTIMONIALS_TITLE}
      subtitle={TESTIMONIALS_SUBTITLE}
      id='testimonials'
    >
      <Carousel opts={{ align: 'start', loop: false }}>
        <CarouselContent>
          {TESTIMONIALS_DATA.map((testimonial) => (
            <CarouselItem key={testimonial.id} className='md:basis-1/3'>
              <TestimonialCard testimonial={testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Desktop: 3 dots (5 snaps mapped to 3 via modulo) */}
        <CarouselDots className='mt-6 hidden md:flex' dotCount={3} />
        {/* Mobile/Tablet: 5 dots (1 per slide) */}
        <CarouselDots className='mt-6 md:hidden' />
      </Carousel>
    </Section>
  );
};

type TestimonialCardProps = Readonly<{
  testimonial: TestimonialItem;
}>;

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <motion.div
      className='card relative flex h-full flex-col overflow-hidden md:p-5'
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {/* Gradient background */}
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

      {/* Content — above gradient layers */}
      <div className='relative z-10 flex grow flex-col justify-between'>
        {/* Top section: logo + rating + quote */}
        <div className='flex flex-col gap-6 md:gap-8'>
          {/* Company logo */}
          <div>
            <Image
              src={testimonial.companyLogo}
              alt={testimonial.companyName}
              width={testimonial.logoWidth}
              height={testimonial.logoHeight}
              className='h-9 w-24 in-[.light]:invert md:h-12 md:w-32'
            />
          </div>

          {/* Star rating */}
          <div className='flex gap-1'>
            {Array.from({ length: testimonial.rating }).map((_, starIndex) => {
              const starKey = `${testimonial.id}-star-${String(starIndex)}`;
              return (
                <Star
                  key={starKey}
                  className='fill-rating text-rating size-6'
                  aria-hidden='true'
                />
              );
            })}
            <span className='sr-only'>
              {`${String(testimonial.rating)} out of 5 stars`}
            </span>
          </div>

          {/* Testimonial quote */}
          <p className='text-md-medium md:text-lg-medium text-foreground'>
            {testimonial.quote}
          </p>
        </div>

        {/* Person info */}
        <div className='mt-6 flex flex-col gap-0.5 md:mt-8'>
          <span className='text-sm-bold md:text-md-bold text-foreground'>
            {testimonial.personName}
          </span>
          <span className='text-sm-regular md:text-md-regular text-neutral-500'>
            {testimonial.personTitle}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;
