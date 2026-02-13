'use client';

import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from 'embla-carousel-react';
import * as React from 'react';
import { cn } from '@/lib/utils';

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = Readonly<{
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: 'horizontal' | 'vertical';
  setApi?: (api: CarouselApi) => void;
}>;

type CarouselContextProps = Readonly<{
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  selectedIndex: number;
  scrollSnapCount: number;
}> &
  CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (context === null) {
    throw new Error('useCarousel must be used within a <Carousel />');
  }

  return context;
}

function Carousel({
  orientation = 'horizontal',
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}: React.ComponentProps<'div'> & CarouselProps) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === 'horizontal' ? 'x' : 'y',
    },
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnapCount, setScrollSnapCount] = React.useState(0);

  const onSelect = React.useCallback((emblaApi: CarouselApi) => {
    if (emblaApi === undefined) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );

  React.useEffect(() => {
    if (api === undefined || setApi === undefined) return;
    setApi(api);
  }, [api, setApi]);

  const updateSnapCount = React.useCallback((emblaApi: CarouselApi) => {
    if (emblaApi === undefined) return;
    setScrollSnapCount(emblaApi.scrollSnapList().length);
  }, []);

  React.useEffect(() => {
    if (api === undefined) return;
    onSelect(api);
    updateSnapCount(api);
    api.on('reInit', onSelect);
    api.on('reInit', updateSnapCount);
    api.on('select', onSelect);

    return () => {
      api.off('select', onSelect);
      api.off('reInit', onSelect);
      api.off('reInit', updateSnapCount);
    };
  }, [api, onSelect, updateSnapCount]);

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api,
        opts,
        orientation:
          orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
        selectedIndex,
        scrollSnapCount,
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        className={cn('relative', className)}
        role='region'
        aria-roledescription='carousel'
        data-slot='carousel'
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

function CarouselContent({ className, ...props }: React.ComponentProps<'div'>) {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div
      ref={carouselRef}
      className='cursor-grab overflow-hidden active:cursor-grabbing'
      data-slot='carousel-content'
    >
      <div
        className={cn(
          'flex',
          orientation === 'horizontal' ? '-ms-5' : '-mt-5 flex-col',
          className
        )}
        {...props}
      />
    </div>
  );
}

function CarouselItem({ className, ...props }: React.ComponentProps<'div'>) {
  const { orientation } = useCarousel();

  return (
    <div
      role='group'
      aria-roledescription='slide'
      data-slot='carousel-item'
      className={cn(
        'min-w-0 shrink-0 grow-0 basis-full md:basis-1/2 lg:basis-1/3',
        orientation === 'horizontal' ? 'ps-5' : 'pt-5',
        className
      )}
      {...props}
    />
  );
}

/**
 * Dot-style navigation indicators for the carousel.
 * Active dot is wider (pill shape) with primary color.
 * Inactive dots are smaller circles with accent color.
 */
type CarouselDotsProps = Readonly<{
  /** Override dot count instead of using Embla snap count */
  dotCount?: number;
}> &
  React.ComponentProps<'div'>;

/**
 * Dot-style navigation indicators.
 * When dotCount is provided, renders that many dots regardless of Embla snap count.
 * This is useful when all slides are visible on desktop but dots are still needed.
 */
function CarouselDots({ className, dotCount, ...props }: CarouselDotsProps) {
  const { api, selectedIndex, scrollSnapCount } = useCarousel();

  const count = dotCount ?? scrollSnapCount;
  if (count <= 1) return null;

  /** Normalize selectedIndex to wrap within dotCount range */
  const activeIndex = selectedIndex % count;

  return (
    <div
      className={cn('flex items-center justify-center gap-1.5', className)}
      aria-label='Carousel navigation'
      {...props}
    >
      {Array.from({ length: count }).map((_, dotIndex) => {
        const isActive = dotIndex === activeIndex;
        const dotKey = `dot-${String(dotIndex)}`;
        return (
          <button
            key={dotKey}
            type='button'
            aria-label={`Go to slide ${String(dotIndex + 1)}`}
            aria-current={isActive ? 'step' : undefined}
            className={cn(
              'h-2 cursor-pointer rounded-full transition-all duration-300 md:h-3',
              isActive ? 'bg-primary w-6 md:w-12' : 'bg-accent w-3 md:w-6'
            )}
            onClick={() => api?.scrollTo(dotIndex)}
          />
        );
      })}
    </div>
  );
}

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
  useCarousel,
};
