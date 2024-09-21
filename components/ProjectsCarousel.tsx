import { getPostsData } from "@/utils/api";
import React from "react";
import ProjectCard from "./ProjectCard";

async function ProjectsCarousel() {
  const projects = await getPostsData();

  return (
    <section>
      <header className="bg-main flex items-end justify-between p-xs pt-md sticky border-b-[1px] border-secondary">

        <h2 className="h-fit text-xl leading-xl font-black uppercase">
          selected projects
        </h2>

        <p className="pt-xs text-sm leading-sm font-black">
          00/00
        </p>
      </header>

      <ul className="relative">
        {projects.map((project) => {
          return <ProjectCard {...project}/>
        })}
      </ul>
    </section>
  );
}

export default ProjectsCarousel;
