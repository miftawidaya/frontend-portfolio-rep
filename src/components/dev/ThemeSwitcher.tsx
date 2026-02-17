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
  const [mounted, setMounted] = useState(false);

  // Sync with document class
  useEffect(() => {
    if (isLight) {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, [isLight]);

  // Handle entrance delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 3400);
    return () => clearTimeout(timer);
  }, []);

  // Map position prop to Tailwind classes
  const positionClasses = {
    left: 'start-4',
    center: 'inset-x-0 mx-auto w-fit',
    right: 'end-4',
  };

  if (!mounted) return null;

  return (
    <div
      className={cn(
        'animate-in fade-in slide-in-from-bottom-8 fixed bottom-4 z-100 transition-all duration-700',
        positionClasses[position]
      )}
    >
      <Button
        variant='outline'
        size='icon'
        onClick={() => setIsLight(!isLight)}
        className='border-border bg-background/80 hover:bg-accent hover:text-accent-foreground size-9 rounded-full border shadow-lg backdrop-blur-md'
        title={isLight ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
      >
        {isLight ? <Moon className='size-4' /> : <Sun className='size-4' />}
      </Button>
    </div>
  );
}
