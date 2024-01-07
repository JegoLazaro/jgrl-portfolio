import React, { useState } from "react";
import Card from "./Card";
import assets from "../../assets";

const ProjectsCard = () => {
  const [activeTab, setActiveTab] = useState("website");
  const websiteProjects = [
    {
      title: "Crypto Watch HQ",
      imageSrc: assets.cwhq,
      demoLink: "https://cryptowatch-hq.vercel.app/",
      sourceCodeLink: "https://github.com/JegoLazaro/crypto-watch-hq",
      ios_qr: "",
      andorid_qr:"",
      projectOV: "Track crypto prices seamlessly with our React.js and Tailwind CSS-powered tool. Real-time updates, interactive design, and a sleek interface for effortless crypto tracking."
    },
    {
      title: "La Parrila de Manila Website",
      imageSrc: assets.la_parrilla,
      demoLink: "https://laparrillademnl.netlify.app/",
      sourceCodeLink: "https://github.com/JegoLazaro/la-parrilla",
      ios_qr: "",
      andorid_qr:"",
      projectOV: "Crafted a visually appealing restaurant website with React JS and Tailwind CSS, seamlessly integrating Google Maps API to help customers find the location easily"
    },
    {
      title: "NFT Mini Marketplace Showcase Website",
      imageSrc: assets.nft_showcase,
      demoLink: "https://nft-app-showcase-jgrl.netlify.app",
      sourceCodeLink: "https://github.com/JegoLazaro/nft-showcase-website-react-vite",
      ios_qr: "",
      andorid_qr:"",
      projectOV: "Website showcasing a React Native mobile app for NFT management. Powered by React, Vite, and JavaScript, it delivers a seamless, responsive user experience."
    },
    {
      title: "Converge GoFiber Website Clone",
      imageSrc: assets.gofiber,
      demoLink: "https://cnvrg-frontend-ui-jgrl.netlify.app",
      sourceCodeLink: "https://github.com/JegoLazaro/gofiber",
      ios_qr: "",
      andorid_qr:"",
      projectOV: "Experience an improved user interface with this React.js and React Bootstrap frontend replica of Converge GoFiber.ph. A testament to my internship project's frontend development expertise."
    },
    
  ];

  const mobileProjects = [
    {
      title: "Lazaro Movie App",
      imageSrc: assets.movie_app,
      demoLink: "",
      sourceCodeLink: "https://github.com/JegoLazaro/movie-app",
      ios_qr: assets.movie_ios_qr,
      andorid_qr: assets.movie_android_qr,
      projectOV: "Explore the cinematic world with the React Native Movie App! Unveil movie details, cast info, and TV shows using React Native and Expo, powered by the TMDB API."
    },
    {
      title: "NFT Mini Marketplace",
      imageSrc: assets.nft_marketplace,
      demoLink: "",
      sourceCodeLink: "https://github.com/JegoLazaro/nft-marketplace",
      ios_qr: assets.nft_ios_qr,
      andorid_qr: assets.nft_android_qr,
      projectOV: "Dive into the NFT world with the React Native NFT Mini Marketplace app! Developed using React Native and Expo, it offers a captivating mobile marketplace for seamless exploration and trading of digital assets."
    },
    {
      title: "Crypto Price Tracker",
      imageSrc: assets.crypto_tracker,
      demoLink: "",
      sourceCodeLink: "https://github.com/JegoLazaro/crypto-price-tracker",
      ios_qr: assets.crytpo_ios_qr,
      andorid_qr: assets.crypto_android_qr,
      projectOV: "Explore the world of cryptocurrencies with the React Native Crypto Price Tracker! Track prices and trends using interactive charts, powered by React Native and real-time data from the CoinGecko API."
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

      <div className="flex flex-wrap justify-center items-center mx-auto max-w-7xl">
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
