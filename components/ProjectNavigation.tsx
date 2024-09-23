import Link from 'next/link';
import React from 'react';
import ArrowForward from './icons/ArrowForward';
import ArrowBackwards from './icons/ArrowBackwards';

interface Project {
  slug: string;
  title: { rendered: string };
}

interface ProjectNavigationProps {
  projects: Project[];
  currentSlug: string;
}

function ProjectNavigation({ projects, currentSlug }: ProjectNavigationProps) {
  const currentIndex = projects.findIndex(project => project.slug === currentSlug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <nav className="flex justify-between items-center p-sm">
      {prevProject ? (
        <Link href={`/projects/${prevProject.slug}`} className="text-secondary text-md leading-md font-black uppercase max-w-[24%]">
          <ArrowBackwards className={"text-secondary lg:w-md lg:h-md"} />
          <span>{prevProject.title.rendered}</span>
        </Link>
      ) : (
        <span></span>
      )}
      {nextProject ? (
        <Link href={`/projects/${nextProject.slug}`} className="text-secondary text-md leading-md font-black uppercase max-w-[24%]">
          <ArrowForward className={"text-secondary lg:w-md lg:h-md"} />
          <span>{nextProject.title.rendered} </span>
        </Link>
      ) : (
        <span></span>
      )}
    </nav>
  );
}

export default ProjectNavigation;
