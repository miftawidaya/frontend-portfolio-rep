export type StatItem = Readonly<{
  number: string;
  label: string;
  image: string;
}>;

export const STATS_DATA: readonly StatItem[] = [
  {
    number: '2+',
    label: 'Years\nExperience',
    image: '/images/proven-image-1.jpg',
  },
  {
    number: '99%',
    label: 'Client\nSatisfaction',
    image: '/images/proven-image-2.jpg',
  },
  {
    number: '12+',
    label: 'Project\nDelivered',
    image: '/images/proven-image-3.jpg',
  },
] as const;
