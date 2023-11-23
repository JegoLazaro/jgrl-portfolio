import React from "react";
import assets from "../../assets";
import styles from "../../assets/Globals";

export const FeatureCard = ({ iconUrl, iconText }) => (
  <div className={`${styles.featureCard} m-1`}>
    <img src={iconUrl} alt="icon" className={`${styles.featureImg}`} />
    <p className={`${styles.featureText}`}>{iconText}</p>
  </div>
);

const SkillCards = () => {
  const skillsData = [
    { iconUrl: assets.html_logo, iconText: "HTML 5", link: "" },
    {
      iconUrl: assets.javascript,
      iconText: "Javascript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    { iconUrl: assets.css_logo, iconText: "CSS 3", link: "" },
    {
      iconUrl: assets.react_logo,
      iconText: "React JS",
      link: "https://expo.dev/",
    },

    {
      iconUrl: assets.react,
      iconText: "React Native",
      link: "https://reactnative.dev/",
    },
    { iconUrl: assets.tailwind, iconText: "Tailwind CSS", link: "" },
    { iconUrl: assets.expo02, iconText: "Expo", link: "" },
    { iconUrl: assets.figma_logo, iconText: "Figma", link: "" },

    { iconUrl: assets.git, iconText: "Git", link: "" },
    { iconUrl: assets.nodejs, iconText: "NodeJS", link: "" },
    { iconUrl: assets.python, iconText: "Python", link: "" },
    { iconUrl: assets.react_bootstrap, iconText: "React-Bootstrap", link: "" },
    { iconUrl: assets.bootstrap, iconText: "Bootstrap", link: "" },
    { iconUrl: assets.C_logo, iconText: "C Programming", link: "" },
    { iconUrl: assets.android_studio, iconText: "Java Anroid Studio", link: "" },
    { iconUrl: assets.java, iconText: "Java", link: "" },
    { iconUrl: assets.mongodb, iconText: "MongoDB", link: "" },
    
    // Add more objects as needed
  ];

  return (
    <div>
      <div>
        <div className={`${styles.section} lg:-mt-72 md:-mt-44 sm:-mt-22`}>
          <div className={`${styles.subSection} flex-col text-center`}>
            <div className={styles.flexWrap}>
              {skillsData.map((skill, index) => (
                <a key={index} href={skill.link}>
                  <FeatureCard
                    iconUrl={skill.iconUrl}
                    iconText={skill.iconText}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCards;
