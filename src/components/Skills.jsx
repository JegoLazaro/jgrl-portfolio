import React from "react";
import HeaderComp from "./headerComp";
import SkillCards from "./skillsComponents/skillCards";


const Skills = () => {
  return (
    <div id="skills">
      <HeaderComp title={"Skills/Expertise"} description={"SKILL CARDS HERE"} />

      <SkillCards />
    </div>
  );
};

export default Skills;
