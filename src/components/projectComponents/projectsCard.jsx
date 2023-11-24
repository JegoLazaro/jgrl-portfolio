import React, { useState } from "react";
import Card from "./Card";
import assets from "../../assets";

const ProjectsCard = () => {
  const [activeTab, setActiveTab] = useState("website");
  const websiteProjects = [
    // ... (your website projects data)
  ];

  const mobileProjects = [
    // ... (your mobile projects data)
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
          <Card
            key={index}
            {...project}
            cardClassName={activeTab === "mobile" ? "max-w-xs" : "max-w-xs"} // Apply different max-width based on project type
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsCard;
