import React from "react";
import HeaderComp from "./headerComp";
import SkillCards from "./skillsComponents/skillCards";

const Skills = () => {
  return (
    <div id="skills" className="">
      <HeaderComp clear title={"Programming Languages, Technologies, and Tools"} description={""} />
      <SkillCards />
    </div>
  );
};

export default Skills;
