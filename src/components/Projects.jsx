import React from "react";
import HeaderComp from './headerComp'
import ProjectCards from "./projectComponents/projectsCard";


const Projects = () => {
  return (
    <div id="projects" className="">
      <HeaderComp title={"Personal Projects"} description={"Immersive digital experiences with React JS and React Native mobile apps. Elevating user engagement through innovative design and seamless functionality."} />
      <ProjectCards />
    </div>
  );
};

export default Projects;
