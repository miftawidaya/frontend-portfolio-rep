import { cn } from '@/lib/utils';

type SectionProps = Readonly<{
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  id?: string;
  className?: string;
  align?: 'center' | 'left';
}>;

/**
 * Layout wrapper providing custom-container, optional heading, and content spacing.
 * Use for page sections with consistent padding and max-width.
 */
export const Section = ({
  children,
  title,
  subtitle,
  id,
  className,
  align = 'center',
}: SectionProps) => {
  const hasHeading = title !== undefined || subtitle !== undefined;

  return (
    <section
      className={cn('custom-container py-10 md:py-20', className)}
      id={id}
    >
      {hasHeading && (
        <div className={cn(align === 'center' ? 'text-center' : 'text-start')}>
          {title && (
            <h2 className='display-sm-bold md:display-2xl-bold text-foreground'>
              {title}
            </h2>
          )}
          {subtitle && (
            <p className='text-md-regular md:text-xl-regular text-muted-foreground mt-2 md:mt-4'>
              {subtitle}
            </p>
          )}
        </div>
      )}

      {hasHeading ? <div className='mt-6 md:mt-16'>{children}</div> : children}
    </section>
  );
};
