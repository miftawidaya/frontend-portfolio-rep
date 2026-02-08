'use client';

import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type ThemeSwitcherProps = Readonly<{
  /** Horizontal position of the floating button */
  position?: 'left' | 'center' | 'right';
}>;

/**
 * Floating Theme Switcher component for development and testing.
 * Automatically toggles the 'light' class on the document root.
 */
export function ThemeSwitcher({ position = 'right' }: ThemeSwitcherProps) {
  const [isLight, setIsLight] = useState(false);

  // Sync with document class
  useEffect(() => {
    if (isLight) {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, [isLight]);

  // Map position prop to Tailwind classes
  const positionClasses = {
    left: 'start-xl',
    center: 'inset-x-0 mx-auto w-fit',
    right: 'end-xl',
  };

  return (
    <div
      className={cn(
        'bottom-xl animate-in fade-in slide-in-from-bottom-4 fixed z-50 transition-all duration-300',
        positionClasses[position]
      )}
    >
      <Button
        variant='outline'
        size='lg'
        onClick={() => setIsLight(!isLight)}
        className='gap-sm border-border bg-background/80 hover:bg-accent hover:text-accent-foreground rounded-full border shadow-lg backdrop-blur-md'
      >
        {isLight ? (
          <>
            <Moon className='size-5' />
            <span className='text-sm-semibold'>Night Mode</span>
          </>
        ) : (
          <>
            <Sun className='size-5' />
            <span className='text-sm-semibold'>Day Mode</span>
          </>
        )}
      </Button>
    </div>
  );
}
