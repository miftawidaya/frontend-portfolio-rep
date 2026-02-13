export type ProjectItem = Readonly<{
  id: string;
  title: string;
  year: string;
  image: string;
  href: string;
}>;

export const PROJECTS_TITLE = 'Frontend in Action';

export const PROJECTS_SUBTITLE =
  'These are hands-on projects where I delivered clean, responsive user interfaces.';

export const PROJECTS_DATA: readonly ProjectItem[] = [
  {
    id: 'project-portfolio-1',
    title: 'Portofolio 1',
    year: '2025',
    image: '/images/img-portfolio-1.jpg',
    href: '#',
  },
  {
    id: 'project-portfolio-2',
    title: 'Portofolio 2',
    year: '2025',
    image: '/images/img-portfolio-2.jpg',
    href: '#',
  },
  {
    id: 'project-portfolio-3',
    title: 'Portofolio 3',
    year: '2025',
    image: '/images/img-portfolio-3.jpg',
    href: '#',
  },
] as const;
