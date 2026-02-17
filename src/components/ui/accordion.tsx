'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronUp } from 'lucide-react';

import { cn } from '@/lib/utils';

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot='accordion' {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot='accordion-item'
      className={cn('border-border border-b', className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className='flex'>
      <AccordionPrimitive.Trigger
        data-slot='accordion-trigger'
        className={cn(
          'group/trigger hover:text-primary flex w-full cursor-pointer items-center gap-3 py-4 text-start transition-colors md:gap-4 md:py-8',
          className
        )}
        {...props}
      >
        <ChevronUp
          className='text-foreground group-hover/trigger:text-primary size-6 shrink-0 transition-transform duration-300 group-data-[state=closed]/trigger:rotate-180'
          aria-hidden='true'
        />
        <span className='text-lg-semibold md:display-sm-semibold text-foreground group-hover/trigger:text-primary grow'>
          {children}
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot='accordion-content'
      className='data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden'
      {...props}
    >
      <div
        className={cn(
          'text-sm-regular md:text-md-regular text-muted-foreground ps-9 pb-4 md:ps-10 md:pb-8 md:tracking-[-0.03em]',
          className
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
