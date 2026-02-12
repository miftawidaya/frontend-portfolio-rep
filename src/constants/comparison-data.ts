export const COMPARISON_TITLE = 'Choose Wisely, Get Quality Results';
export const COMPARISON_SUBTITLE =
  'Make the right choice for interfaces that are fast, reliable, and visually sharp.';

export const COMPARISON_ITEMS = [
  'React Expert',
  'Pixel Perfect',
  'TypeScript Proficiency',
  'Clean, Maintainable Code',
  'Performance Optimization',
  'Responsive Website',
  'UI Design Proficiency (Figma)',
] as const;

export type ComparisonItem = (typeof COMPARISON_ITEMS)[number];
