import { getPostsData } from "@/utils/api";
import React from "react";
import ProjectCard from "./ProjectCard";

async function ProjectsCarousel() {
  const projects = await getPostsData();

  return (
    <section className="relative">
      <header className="grid grid-cols-6 bg-main items-end justify-between px-sm md:px-md py-xs pt-[52px] md:pt-[64px] border-b-[1px] border-secondary sticky top-0 z-20">

        <h2 className="col-span-5 h-fit text-lg lg:text-xl leading-md lg:leading-xl font-black uppercase">
          selected projects
        </h2>

        <div>
          <p className="text-xs lg:text-md leading-xs lg:leading-md font-medium text-right">
            Pr.
          </p>
          <p className="text-xs lg:text-md leading-xs lg:leading-md font-medium text-right">
            1/9
          </p>
        </div>
      </header>

      <ul className="relative">
        {projects.map((project) => {
          return <ProjectCard key={project.id} {...project}/>
        })}
      </ul>
    </section>
  );
}

export default ProjectsCarousel;
