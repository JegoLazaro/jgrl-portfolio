import React from "react";
import HeaderComp from "./headerComp";
import SkillCards from "./skillsComponents/skillCards";


const Skills = () => {
  return (
    <div id="skills" className="">
      <HeaderComp title={"Skills/Expertise"} description={"Versatile developer with a knack for seamless user experiences and robust solutions. Proficient in various technologies, ensuring innovative project deliveries."} />

      <SkillCards />
    </div>
  );
};

export default Skills;
