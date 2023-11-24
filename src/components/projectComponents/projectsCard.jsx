import React, {useState} from "react";
import Card from "./Card";
import assets from "../../assets";

const WebsiteProjects = () => {
  const [activeTab, setActiveTab] = useState("website");
  const websiteProjects = [
    {
      title: "La Parrila de Manila Website",
      imageSrc: assets.la_parrilla,
      demoLink: "https://laparrillademnl.netlify.app/",
      sourceCodeLink: "https://github.com/JegoLazaro/la-parrilla",
    },
    {
      title: "NFT Mini Marketplace Showcase Website",
      imageSrc: assets.nft_showcase,
      demoLink: "https://nft-app-showcase-jgrl.netlify.app",
      sourceCodeLink: "https://github.com/JegoLazaro/nft-showcase-website-react-vite",
    },
    {
      title: "Converge GoFiber Website Clone",
      imageSrc: assets.gofiber,
      demoLink: "https://cnvrg-frontend-ui-jgrl.netlify.app",
      sourceCodeLink: "https://github.com/JegoLazaro/gofiber",
    },
  ];

  const mobileProjects = [
    {
      title: "PROJECT 1",
      imageSrc: assets.la_parrilla,
      demoLink: "https://laparrillademnl.netlify.app/",
      sourceCodeLink: "https://github.com/JegoLazaro/la-parrilla",
    },
    {
      title: "PROJECT 2",
      imageSrc: assets.nft_showcase,
      demoLink: "https://nft-app-showcase-jgrl.netlify.app",
      sourceCodeLink: "https://github.com/JegoLazaro/nft-showcase-website-react-vite",
    },
    {
      title: "PROJECT 3",
      imageSrc: assets.gofiber,
      demoLink: "https://cnvrg-frontend-ui-jgrl.netlify.app",
      sourceCodeLink: "https://github.com/JegoLazaro/gofiber",
    },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const projectsToDisplay = activeTab === "website" ? websiteProjects : mobileProjects;

  return (
    <div className="bg-white py-24 sm:py-2 sm:pb-20">
      <div className="text-lg font-medium text-center text-gray-500 border-b border-gray-200">
        <ul className="flex flex-wrap -mb-px justify-center">
          <li className={`cursor-pointer mr-2 ${activeTab === "website" ? "border-b-2 border-gray-300" : ""}`}>
            <a
              className="inline-block p-4 rounded-t-lg hover:text-gray-600"
              onClick={() => handleTabClick("website")}
            >
              Website Projects
            </a>
          </li>
          <li className={`mr-2 cursor-pointer ${activeTab === "mobile" ? "border-b-2 border-gray-300" : ""}`}>
            <a
              className="inline-block p-4 rounded-t-lg hover:text-gray-600"
              onClick={() => handleTabClick("mobile")}
            >
              Mobile Projects
            </a>
          </li>
        </ul>
      </div>

      <div className="flex flex-wrap justify-center">
        {projectsToDisplay.map((project, index) => (
          <Card key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default WebsiteProjects;
