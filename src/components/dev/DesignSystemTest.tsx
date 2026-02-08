'use client';

/**
 * DesignSystemTest Component
 *
 * Test component to verify design system tokens from globals.css.
 * This component displays typography, colors, spacing, and radius tokens visually.
 */

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/layouts/section';

/** Neutral color swatches from globals.css */
const NEUTRAL_SWATCHES = [
  { shade: '25', bgClass: 'bg-neutral-25' },
  { shade: '50', bgClass: 'bg-neutral-50' },
  { shade: '100', bgClass: 'bg-neutral-100' },
  { shade: '200', bgClass: 'bg-neutral-200' },
  { shade: '300', bgClass: 'bg-neutral-300' },
  { shade: '400', bgClass: 'bg-neutral-400' },
  { shade: '500', bgClass: 'bg-neutral-500' },
  { shade: '600', bgClass: 'bg-neutral-600' },
  { shade: '700', bgClass: 'bg-neutral-700' },
  { shade: '800', bgClass: 'bg-neutral-800' },
  { shade: '900', bgClass: 'bg-neutral-900' },
  { shade: '950', bgClass: 'bg-neutral-950' },
] as const;

/** Primary color spectrum from globals.css */
const PRIMARY_SWATCHES = [
  { shade: '100', bgClass: 'bg-primary-100' },
  { shade: '200', bgClass: 'bg-primary-200' },
] as const;

/** Status and functional color swatches from globals.css */
const STATUS_SWATCHES = [
  { name: 'Error', bgClass: 'bg-error' },
  { name: 'Success', bgClass: 'bg-success' },
  { name: 'Warning', bgClass: 'bg-warning' },
  { name: 'Rating', bgClass: 'bg-rating' },
] as const;

/** Spacing scale tokens */
const SPACING_TOKENS = [
  { name: 'xxs', cssValue: '0.125rem', widthClass: 'w-xxs' },
  { name: 'xs', cssValue: '0.25rem', widthClass: 'w-xs' },
  { name: 'sm', cssValue: '0.375rem', widthClass: 'w-sm' },
  { name: 'md', cssValue: '0.5rem', widthClass: 'w-md' },
  { name: 'lg', cssValue: '0.75rem', widthClass: 'w-lg' },
  { name: 'xl', cssValue: '1rem', widthClass: 'w-xl' },
  { name: '2xl', cssValue: '1.25rem', widthClass: 'w-2xl' },
  { name: '3xl', cssValue: '1.5rem', widthClass: 'w-3xl' },
  { name: '4xl', cssValue: '2rem', widthClass: 'w-4xl' },
  { name: '5xl', cssValue: '2.5rem', widthClass: 'w-5xl' },
  { name: '6xl', cssValue: '3rem', widthClass: 'w-6xl' },
] as const;

/** Border radius tokens */
const RADIUS_TOKENS = [
  { name: 'xxs', radiusClass: 'rounded-xxs' },
  { name: 'xs', radiusClass: 'rounded-xs' },
  { name: 'sm', radiusClass: 'rounded-sm' },
  { name: 'md', radiusClass: 'rounded-md' },
  { name: 'lg', radiusClass: 'rounded-lg' },
  { name: 'xl', radiusClass: 'rounded-xl' },
  { name: '2xl', radiusClass: 'rounded-2xl' },
  { name: '3xl', radiusClass: 'rounded-3xl' },
  { name: '4xl', radiusClass: 'rounded-4xl' },
] as const;

export function DesignSystemTest() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <header className='relative flex min-h-screen items-center overflow-hidden bg-neutral-950 py-20'>
        {mounted && (
          <>
            <Image
              src='/images/bg-hero.jpg'
              alt='Hero background'
              fill
              priority
              quality={80}
              className='pointer-events-none z-0 object-cover object-center'
              sizes='(max-width: 1920px) 100vw, 1920px'
            />

            {/* Overlay with subtle gradient for better text legibility without killing the image */}
            <div
              className='absolute inset-0 z-0 bg-linear-to-b from-black/20 via-black/40 to-black/60'
              aria-hidden='true'
            />
          </>
        )}

        <div className='custom-container relative z-10'>
          <div className='space-y-md mx-auto text-center'>
            <h1 className='display-3xl-extrabold text-foreground animate-in fade-in slide-in-from-bottom-6 duration-1000'>
              Design System Test
            </h1>
            <p className='text-xl-regular text-muted-foreground animate-in fade-in slide-in-from-bottom-8 delay-200 duration-1000'>
              Verifying design tokens and premium components from{' '}
              <code className='rounded-xs bg-white/10 px-1.5 py-0.5 backdrop-blur-sm'>
                globals.css
              </code>
            </p>
          </div>
        </div>
      </header>

      <Section className='space-y-6xl'>
        {/* Typography */}
        <div className='space-y-4xl' aria-labelledby='typography-heading'>
          <h2
            id='typography-heading'
            className='display-sm-bold text-foreground'
          >
            Typography (Compound Utilities)
          </h2>

          <div className='card space-y-3xl'>
            <div className='space-y-xl'>
              <h3 className='text-muted-foreground text-lg-semibold'>
                Display Sizes
              </h3>
              <div className='space-y-lg'>
                <p className='display-3xl-extrabold text-card-foreground'>
                  Display 3XL (3.75rem) - Extrabold
                </p>
                <p className='display-2xl-bold text-card-foreground'>
                  Display 2XL (3rem) - Bold
                </p>
                <p className='display-xl-bold text-card-foreground'>
                  Display XL (2.5rem) - Bold
                </p>
                <p className='display-lg-semibold text-card-foreground'>
                  Display LG (2.25rem) - Semibold
                </p>
                <p className='display-md-semibold text-card-foreground'>
                  Display MD (2rem) - Semibold
                </p>
                <p className='display-sm-medium text-card-foreground'>
                  Display SM (1.75rem) - Medium
                </p>
                <p className='display-xs-medium text-card-foreground'>
                  Display XS (1.5rem) - Medium
                </p>
              </div>
            </div>

            <div className='space-y-xl'>
              <h3 className='text-muted-foreground text-lg-semibold'>
                Body Sizes
              </h3>
              <div className='space-y-lg'>
                <p className='text-xl-regular text-card-foreground'>
                  Text XL (1.25rem)
                </p>
                <p className='text-lg-regular text-card-foreground'>
                  Text LG (1.125rem)
                </p>
                <p className='text-md-regular text-card-foreground'>
                  Text MD (1rem) - Default
                </p>
                <p className='text-sm-regular text-card-foreground'>
                  Text SM (0.875rem)
                </p>
                <p className='text-xs-regular text-card-foreground'>
                  Text XS (0.75rem)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Colors */}
        <div className='space-y-4xl' aria-labelledby='colors-heading'>
          <h2 id='colors-heading' className='display-sm-bold text-foreground'>
            Colors
          </h2>

          <div className='card space-y-3xl'>
            <div className='space-y-xl'>
              <h3 className='text-muted-foreground text-lg-semibold'>
                Primary Palette
              </h3>
              <div className='gap-md flex flex-wrap'>
                {PRIMARY_SWATCHES.map((swatch) => (
                  <figure key={swatch.shade} className='text-center'>
                    <div className={cn('size-16 rounded-lg', swatch.bgClass)} />
                    <figcaption className='mt-xs text-muted-foreground text-xs-regular'>
                      {swatch.shade}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>

            <div className='space-y-xl'>
              <h3 className='text-muted-foreground text-lg-semibold'>
                Neutral Scale
              </h3>
              <div className='gap-md flex flex-wrap'>
                {NEUTRAL_SWATCHES.map((swatch) => (
                  <figure key={swatch.shade} className='text-center'>
                    <div
                      className={cn(
                        'border-border size-16 rounded-lg border',
                        swatch.bgClass
                      )}
                    />
                    <figcaption className='mt-xs text-muted-foreground text-xs-regular'>
                      {swatch.shade}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>

            <div className='space-y-xl'>
              <h3 className='text-muted-foreground text-lg-semibold'>
                Semantic and Status
              </h3>
              <div className='gap-lg flex flex-wrap'>
                <figure className='text-center'>
                  <div className='bg-primary size-16 rounded-lg' />
                  <figcaption className='mt-xs text-muted-foreground text-xs-regular'>
                    Primary (Semantic)
                  </figcaption>
                </figure>
                {STATUS_SWATCHES.map((swatch) => (
                  <figure key={swatch.name} className='text-center'>
                    <div className={cn('size-16 rounded-lg', swatch.bgClass)} />
                    <figcaption className='mt-xs text-muted-foreground text-xs-regular'>
                      {swatch.name}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Spacing */}
        <div className='space-y-4xl' aria-labelledby='spacing-heading'>
          <h2 id='spacing-heading' className='display-sm-bold text-foreground'>
            Spacing
          </h2>

          <div className='card space-y-3xl'>
            <div className='space-y-lg'>
              {SPACING_TOKENS.map((spacing) => (
                <div key={spacing.name} className='gap-xl flex items-center'>
                  <span className='text-muted-foreground text-sm-regular w-16'>
                    {spacing.name}
                  </span>
                  <div className={cn('bg-primary h-4', spacing.widthClass)} />
                  <span className='text-muted-foreground text-xs-regular'>
                    {spacing.cssValue}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Radius */}
        <div className='space-y-4xl' aria-labelledby='radius-heading'>
          <h2 id='radius-heading' className='display-sm-bold text-foreground'>
            Border Radius
          </h2>

          <div className='card space-y-3xl'>
            <div className='gap-xl flex flex-wrap'>
              {RADIUS_TOKENS.map((radius) => (
                <figure key={radius.name} className='text-center'>
                  <div
                    className={cn('bg-primary size-16', radius.radiusClass)}
                  />
                  <figcaption className='mt-xs text-muted-foreground text-xs-regular'>
                    {radius.name}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className='space-y-4xl' aria-labelledby='buttons-heading'>
          <div className='flex items-center justify-between'>
            <h2
              id='buttons-heading'
              className='display-sm-bold text-foreground'
            >
              Buttons & Brand Branding
            </h2>
            <div className='gap-md flex items-center'>
              <span className='text-sm-semibold text-primary'>
                text-primary (Brand Purple)
              </span>
              <span className='bg-primary h-4 w-12 rounded-full' />
            </div>
          </div>

          <div className='card space-y-3xl'>
            <div className='gap-xl flex flex-wrap items-center'>
              <div className='space-y-sm text-center'>
                <Button variant='default'>Primary Button</Button>
                <p className='text-xs-regular text-muted-foreground'>
                  Brand Purple (#9839A2)
                </p>
              </div>
              <div className='space-y-sm text-center'>
                <Button variant='secondary'>Secondary / Portfolio</Button>
                <p className='text-xs-regular text-muted-foreground'>
                  White in Dark / Black in Light
                </p>
              </div>
              <div className='space-y-sm text-center'>
                <Button variant='destructive'>Destructive</Button>
                <p className='text-xs-regular text-muted-foreground'>#EE1D52</p>
              </div>
              <div className='space-y-sm text-center'>
                <Button variant='outline'>Outline</Button>
                <p className='text-xs-regular text-muted-foreground'>
                  Semantic Border
                </p>
              </div>
              <div className='space-y-sm text-center'>
                <Button variant='ghost'>Ghost</Button>
                <p className='text-xs-regular text-muted-foreground'>
                  Transparent
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
