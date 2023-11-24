import React, {useState} from "react";
import assets from "../../assets";
import styles from "../../assets/Globals";

export const FeatureCard = ({ iconUrl, iconText, shadow_Color }) => {
  const [hover,setHover] = useState(false);

  return (
    <div className={`${styles.featureCard}  `}
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
    style={{
        // backgroundColor: hover ? "#0071A1" :"#fff",
        // color: !hover ? "#000" :"#000"
        boxShadow: hover? `1px 3px 20px 2px ${shadow_Color}` :"0px 0px 0px #000"
        // shadowColor: hover ? "#D64D00" : "#000",
    }}
    >
      <img 
        src={iconUrl} 
        alt="icon" 
        className={`${styles.featureImg}`} 
        
      />
      <p className={`${styles.featureText}`}>{iconText}</p>
  </div>
  )
  
  };

const SkillCards = () => {
  const skillsData = [
    { iconUrl: assets.html_logo, iconText: "HTML 5", link: "", shadowColor: "#E55638" },
    {
      iconUrl: assets.javascript,
      iconText: "Javascript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      shadowColor: "#FFD600"
    },
    { iconUrl: assets.css_logo, iconText: "CSS 3", link: "",  shadowColor: "#214CE5"
  },
    {
      iconUrl: assets.react_logo,
      iconText: "React JS",
      link: "https://expo.dev/",
      shadowColor: "#61DBFB"
    },

    {
      iconUrl: assets.react,
      iconText: "React Native",
      link: "https://reactnative.dev/",
      shadowColor: "#61DBFB"
    },
    { iconUrl: assets.tailwind, iconText: "Tailwind CSS", link: "",shadowColor: "#16BECB" },
    { iconUrl: assets.expo02, iconText: "Expo", link: "", shadowColor: "#000"},
    { iconUrl: assets.figma_logo, iconText: "Figma", link: "", shadowColor:"#A359FF" },

    { iconUrl: assets.git, iconText: "Git", link: "", shadowColor:"#F05033" },
    { iconUrl: assets.nodejs, iconText: "NodeJS", link: "", shadowColor: "#529F41"},
    { iconUrl: assets.python, iconText: "Python", link: "", shadowColor:"#3270A0" },
    { iconUrl: assets.react_bootstrap, iconText: "React-Bootstrap", link: "", shadowColor: "#61DBFB" },
    { iconUrl: assets.bootstrap, iconText: "Bootstrap", link: "",shadowColor:"#7611F6" },
    { iconUrl: assets.C_logo, iconText: "C Programming", link: "", shadowColor: "#00589C"},
    {
      iconUrl: assets.android_studio,
      iconText: "Java Anroid Studio",
      link: "",
      shadowColor:"#89BB52"
    },
    { iconUrl: assets.java, iconText: "Java", link: "", shadowColor:"#E76F00" },
    { iconUrl: assets.mui, iconText: "MaterialUI", link: "", shadowColor:"#00589C" },

  ];

  return (
    <div className={`${styles.section}  lg:-mt-28 md:-mt-20 sm:-mt-12`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div className={styles.flexWrap} >
          {
          skillsData.map((skill, index) => (
            
            <a key={index} href=''>
              <FeatureCard iconUrl={skill.iconUrl} iconText={skill.iconText} shadow_Color={skill.shadowColor}/>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCards;
