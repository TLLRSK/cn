import { getPageData, getImage } from "@/utils/api";
import React from "react";

type HomeData = {
  acf: {
    home_data: {
      name: string;
      positions: Position[];
      location: string;
      home_image: number;
    };
  };
};

type Position = {
  position: string;
};

async function HomePage() {
  const data: HomeData = await getPageData("home");
  const { name, positions, location, home_image } = data.acf.home_data;
  const imageData = home_image ? await getImage(home_image) : null;

  return (
    <section className="h-[calc(100dvh-25px)] p-xs sm:p-sm md:p-md max-w-[1920px] m-auto">
      <article className={articleClasses}>
        <div
          className={imageContainerClasses}
          style={{
            backgroundImage: `url(${imageData.source_url})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <p className="flex-1">00/00/00</p>
          <p className="flex-1 text-center">00:00AM</p>
          <p className="flex-1 text-right uppercase">{location}</p>
        </div>

        <div className="content-end p-xs">
          <h1 className={titleClasses}>{name}</h1>

          <div className="flex justify-between pt-xs">
            {positions.map((item, i) => {
              return (
                <p key={i} className="text-xs leading-xs font-medium uppercase">
                  {item.position}
                </p>
              );
            })}
          </div>
        </div>
      </article>
    </section>
  );
}
const articleClasses =
  "flex flex-col h-full lg:grid lg:grid-cols-2 border border-secondary";
const imageContainerClasses =
  "flex flex-1 items-end p-xs border-b-[1px] border-secondary lg:border-b-none lg:border-r-[1px] [&>p]:text-main [&>p]:text-xs [&>p]:leading-xs [&>p]:font-medium [&>p]:h-fit [&>p]:mix-blend-difference";
const titleClasses =
  "text-title-xs leading-title-xs sm:text-title-sm md:text-title-md lg:text-title-lg md:text-center lg:text-left font-black uppercase";

export default HomePage;
