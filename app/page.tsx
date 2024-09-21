import Hero from "@/components/Hero";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import React from "react";

async function HomePage() {
  return (
    <>
      <Hero />
      <ProjectsCarousel />
    </>
  );
}

export default HomePage;
