import React, { useState } from "react";
import Card from "./Card";
import assets from "../../assets";

const ProjectsCard = () => {
  const [activeTab, setActiveTab] = useState("website");
  const websiteProjects = [
    {
      title: "La Parrila de Manila Website",
      imageSrc: assets.la_parrilla,
      demoLink: "https://laparrillademnl.netlify.app/",
      sourceCodeLink: "https://github.com/JegoLazaro/la-parrilla",
      ios_qr: "",
      andorid_qr:""
    },
    {
      title: "NFT Mini Marketplace Showcase Website",
      imageSrc: assets.nft_showcase,
      demoLink: "https://nft-app-showcase-jgrl.netlify.app",
      sourceCodeLink: "https://github.com/JegoLazaro/nft-showcase-website-react-vite",
      ios_qr: "",
      andorid_qr:""
    },
    {
      title: "Converge GoFiber Website Clone",
      imageSrc: assets.gofiber,
      demoLink: "https://cnvrg-frontend-ui-jgrl.netlify.app",
      sourceCodeLink: "https://github.com/JegoLazaro/gofiber",
      ios_qr: "",
      andorid_qr:""
    },
    
  ];

  const mobileProjects = [
    {
      title: "Lazaro Movie App",
      imageSrc: assets.movie_app,
      demoLink: "",
      sourceCodeLink: "https://github.com/JegoLazaro/movie-app",
      ios_qr: assets.movie_ios_qr,
      andorid_qr: assets.movie_android_qr
    },
    {
      title: "NFT Mini Marketplace",
      imageSrc: assets.nft_marketplace,
      demoLink: "",
      sourceCodeLink: "https://github.com/JegoLazaro/nft-marketplace",
      ios_qr: assets.nft_ios_qr,
      andorid_qr: assets.nft_android_qr
    },
    {
      title: "Crypto Price Tracker",
      imageSrc: assets.crypto_tracker,
      demoLink: "",
      sourceCodeLink: "https://github.com/JegoLazaro/crypto-price-tracker",
      ios_qr: assets.crytpo_ios_qr,
      andorid_qr: assets.crypto_android_qr
    },
  ];


  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const projectsToDisplay = activeTab === "website" ? websiteProjects : mobileProjects;

  return (
    <div className="bg-white py-24 sm:py-1 sm:pb-20">
      <div className="text-lg font-medium text-center text-gray-500 border-b ">
        <ul className="flex flex-wrap -mb-px justify-center">
          <li className={`cursor-pointer mr-2 ${activeTab === "website" ? "text-cyan-900 border-b-2 border-cyan-800" : ""}`}>
            <a
              className="inline-block p-4 rounded-t-lg hover:text-gray-400 "
              onClick={() => handleTabClick("website")}
            >
              Website Projects
            </a>
          </li>
          <li className={`mr-2 cursor-pointer ${activeTab === "mobile" ? "text-cyan-900 border-b-2 border-cyan-800" : ""}`}>
            <a
              className="inline-block p-4 rounded-t-lg hover:text-gray-400"
              onClick={() => handleTabClick("mobile")}
            >
              Mobile Projects
            </a>
          </li>
        </ul>
      </div>

      <div className="flex flex-wrap justify-center">
        {projectsToDisplay.map((project, index) => (
          <Card
            key={index}
            {...project}
            cardClassName={activeTab === "mobile" ? "max-w-xs" : "max-w-lg"} 
            IosQR={project.ios_qr}
            AndroidQR={project.andorid_qr}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsCard;
