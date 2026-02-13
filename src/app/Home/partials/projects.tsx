import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Section } from '@/components/layouts/section';
import {
  PROJECTS_DATA,
  PROJECTS_SUBTITLE,
  PROJECTS_TITLE,
  type ProjectItem,
} from '@/constants/projects-data';

const Projects = () => {
  return (
    <Section title={PROJECTS_TITLE} subtitle={PROJECTS_SUBTITLE} id='projects'>
      <div className='flex flex-col gap-5 md:flex-row'>
        {PROJECTS_DATA.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
};

type ProjectCardProps = Readonly<{
  project: ProjectItem;
}>;

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className='flex flex-col gap-4 md:flex-1 md:gap-6'>
      {/* Portfolio image */}
      <div className='relative aspect-square overflow-hidden rounded-lg'>
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes='(min-width: 768px) 33vw, 100vw'
          className='object-cover'
        />
      </div>

      {/* Info row: title + year + arrow */}
      <div className='flex items-center gap-4'>
        <div className='flex grow flex-col gap-1'>
          <h3 className='text-xl-bold md:display-sm-bold text-foreground'>
            {project.title}
          </h3>
          <p className='text-sm-regular md:text-md-regular text-muted-foreground'>
            {project.year}
          </p>
        </div>

        <a
          href={project.href}
          aria-label={`View ${project.title}`}
          className='border-border hover:bg-accent flex size-10 shrink-0 items-center justify-center rounded-full border transition-colors'
        >
          <ArrowRight className='text-foreground size-6' />
        </a>
      </div>
    </article>
  );
};

export default Projects;
