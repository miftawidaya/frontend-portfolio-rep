import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        {
          text: [
            (value: string) =>
              /^(display-)?(3xl|2xl|xl|lg|md|sm|xs)-(regular|medium|semibold|bold|extrabold)$/.test(
                value
              ),
          ],
        },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs));
}
