import EndBlock from "@/components/EndBlock";
import Hero from "@/components/Hero";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import { getPostsData } from "@/utils/api";
import React from "react";

async function HomePage() {
  return (
    <>
      <Hero />
      <ProjectsCarousel />
      <EndBlock />
    </>
  );
}

export default HomePage;
