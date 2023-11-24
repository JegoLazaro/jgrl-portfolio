import React from "react";
import Card from "./Card";
import assets from "../../assets";

const WebsiteProjects = () => {
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
    // Add more projects as needed
  ];

  return (
    <div className="bg-white py-24 sm:py-2 sm:pb-20">
      <div className="text-lg font-medium text-center text-gray-500 border-b border-gray-200">
        <ul className="flex flex-wrap -mb-px justify-center">
          <li className="cursor-pointer mr-2">
            <a className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300">
              Website Projects
            </a>
          </li>
          <li className="mr-2 cursor-pointer">
            <a
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"
              aria-current="page"
            >
              Mobile Projects
            </a>
          </li>
        </ul>
      </div>

      <div className="flex flex-wrap justify-center">
        {websiteProjects.map((project, index) => (
          <Card key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default WebsiteProjects;
