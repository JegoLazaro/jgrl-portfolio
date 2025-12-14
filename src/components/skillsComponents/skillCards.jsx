import React, { useState } from "react";
import assets from "../../assets";
import styles from "../../assets/Globals";
import { CardTilt } from "./CardTilt";

export const FeatureCard = ({ iconUrl, iconText, shadow_Color }) => {
  const [hover, setHover] = useState(false);

  return (
    <CardTilt shadow_Color={shadow_Color}
      className={`${styles.featureCard} overflow-hidden transition-transform transform `}
      
    >
      <img src={iconUrl} alt="icon" className={`${styles.featureImg}`} />
      <p className={`${styles.featureText}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          color: hover
            ?  `${shadow_Color}`
            :  "#000",
          textShadow: !hover? "none" :"1px 0px 0.5px 0px #000"
        }}
      >
        {iconText}
      </p>
    </CardTilt>
  );
};

const SkillCards = () => {
  const skillsData = [
    {
      iconUrl: assets.html_logo,
      iconText: "HTML 5",
      link: "",
      shadowColor: "#E55638",
    },
    {
      iconUrl: assets.javascript,
      iconText: "Javascript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      shadowColor: "#FFD600",
    },
    {
      iconUrl: assets.css_logo,
      iconText: "CSS 3",
      link: "",
      shadowColor: "#214CE5",
    },
    {
      iconUrl: assets.react_logo,
      iconText: "React JS",
      link: "https://expo.dev/",
      shadowColor: "#61DBFB",
    },
    { iconUrl: assets.git, iconText: "Git", link: "", shadowColor: "#F05033" },
    {
      iconUrl: assets.nextjs,
      iconText: "Next JS",
      link: "",
      shadowColor: "#000",
    },
    {
      iconUrl: assets.fastapi,
      iconText: "FastAPI",
      link: "",
      shadowColor: "#06998b",
    },
    {
      iconUrl: assets.mongodb,
      iconText: "MongoDB",
      link: "",
      shadowColor: "#06998b",
    },
    {
      iconUrl: assets.mysql,
      iconText: "MySQL",
      link: "",
      shadowColor: "#156d90",
    },
    {
      iconUrl: assets.n8n,
      iconText: "n8n",
      link: "",
      shadowColor: "#ea4a71",
    },
    {
      iconUrl: assets.postman,
      iconText: "Postman",
      link: "",
      shadowColor: "#fd6c35",
    },
    {
      iconUrl: assets.typescript,
      iconText: "Typescript",
      link: "",
      shadowColor: "#2d78c7",
    },
    {
      iconUrl: assets.vercel,
      iconText: "Vercel",
      link: "",
      shadowColor: "#000",
    },
     {
      iconUrl: assets.gcp,
      iconText: "Google Cloud Platform",
      link: "",
      shadowColor: "#2d78c7",
    },
    {
      iconUrl: assets.tailwind,
      iconText: "Tailwind CSS",
      link: "",
      shadowColor: "#16BECB",
    },
    {
      iconUrl: assets.figma_logo,
      iconText: "Figma",
      link: "",
      shadowColor: "#A359FF",
    },

    {
      iconUrl: assets.nodejs,
      iconText: "NodeJS",
      link: "",
      shadowColor: "#529F41",
    },
    {
      iconUrl: assets.python,
      iconText: "Python",
      link: "",
      shadowColor: "#3270A0",
    },
    {
      iconUrl: assets.bootstrap,
      iconText: "Bootstrap",
      link: "",
      shadowColor: "#7611F6",
    },
    {
      iconUrl: assets.C_logo,
      iconText: "C Programming",
      link: "",
      shadowColor: "#00589C",
    },
    {
      iconUrl: assets.java,
      iconText: "Java",
      link: "",
      shadowColor: "#E76F00",
    },
    {
      iconUrl: assets.mui,
      iconText: "MaterialUI",
      link: "",
      shadowColor: "#00589C",
    },
    {
      iconUrl: assets.react,
      iconText: "React Native",
      link: "https://reactnative.dev/",
      shadowColor: "#61DBFB",
    },

    { iconUrl: assets.expo02, iconText: "Expo", link: "", shadowColor: "#000" },
  ];

  return (
    <div className={`${styles.section}`}>
      <div className={`${styles.subSection} items-center justify-start mx-auto max-w-7xl flex-col text-center `}>
        <div className={styles.flexWrap}>
          {skillsData.map((skill, index) => (
            <a key={index} className="cursor-pointer">
              <FeatureCard
                iconUrl={skill.iconUrl}
                iconText={skill.iconText}
                shadow_Color={skill.shadowColor}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCards;
