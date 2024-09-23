import { getImage } from "@/utils/api";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ArrowForward from "./icons/ArrowForward";

async function ProjectCard(project) {
  const { featured_media } = project;
  const { year, client, type } = project.acf.details_group;
  const imageData = await getImage(featured_media);
  // console.log(project);
  return (
    <article className="relative h-[80dvh] flex items-end">
      <Image
        key={project.id}
        src={imageData.source_url}
        alt=""
        className="z-0 object-cover object-center relative"
        priority
        fill
      />
      <div className="w-full grid bg-main z-10 border-t-[1px] border-b-[1px] border-secondary">
        <h3 className="text-lg leading-lg lg:text-xl lg:leading-xl font-black uppercase px-sm md:px-md py-xs border-b-[1px] border-secondary">
          {project.title.rendered}
        </h3>

        <div
          className={`${detailsContainerClasses} ${detailBlockClasses} ${detailSpanClasses} ${detailTextClasses}`}
        >
          <div className="md:col-span-1 md:px-md border-b-[1px] border-secondary md:border-b-0 md:border-r-[1px] px-0 lg:px-md">
            <span>yr</span>
            <p className="sm:text-sm font-medium leading-xs sm:leading-sm">
              {year}
            </p>
          </div>

          <div className="md:col-span-2 border-b-[1px] border-secondary md:border-b-0 md:border-r-[1px]">
            <span>cl</span>
            <p className="sm:text-sm font-medium leading-xs sm:leading-sm">
              {client}
            </p>
          </div>

          <div className="md:col-span-3">
            <span>tp</span>
            <p className="sm:text-sm font-medium leading-xs sm:leading-sm">
              {type}
            </p>
          </div>

          <Link
            href={`/projects/${project.slug}`}
            className="absolute bottom-0 right-0 md:top-0 flex items-center justify-end px-sm py-xs  gap-[4px] border-secondary md:border-l-[1px] uppercase"
          >
            <span className="text-sm font-black leading-sm lg:text-md">
              view
            </span>
            <ArrowForward className={"text-secondary lg:w-md lg:h-md"} />
          </Link>
        </div>
      </div>
    </article>
  );
}

const detailsContainerClasses = "relative grid md:grid-cols-6";
const detailBlockClasses =
  "[&>div]:px-sm [&>div]:py-xs [&>div:first-child]:md:px-md [&>div]:flex";
const detailSpanClasses =
  "[&>div>span]:w-[8vw] [&>div>span]:md:w-[4vw] [&>div>span]:text-xs [&>div>span]:lg:text-sm [&>div>span]:font-medium [&>div>span]:leading-xs";
const detailTextClasses =
  "[&>div>p]:text-sm [&>div>p]:leading-sm [&>div>p]:lg:text-md [&>div>p]:lg:leading-md [&>div>p]:uppercase";

export default ProjectCard;
