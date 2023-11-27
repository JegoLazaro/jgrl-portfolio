import React from "react";
import SkillCards from "./skillsComponents/skillCards";
import assets from "../assets";

const HeaderComp = ({ title, description, reverse, isCloud }) => {
  return (
    <div
      id="skills"
      className={` ${isCloud ? "-mr-10" : "-mr-4"} fadeTopMini py-20 sm:py-20 `}
      style={{
        backgroundColor: reverse ? "#0071A1" : "#fff",
      }}
    >
      {isCloud ? (
        <div className=" items-center justify-center mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-white">
            Powered by the best technologies
          </h2>
          <div className="mx-auto mt-10 grid max-w-7xl grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 max-h-10 w-full object-contain lg:col-span-1"
              src={assets.figma_cloud}
              alt="Figma"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={assets.react_cloud}
              alt="React JS"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-18 w-full object-contain lg:col-span-1"
              src={assets.tailwindcss_cloud}
              alt="TailwindCSS"
              width={168}
              height={78}
            />
            <img
              className="col-span-2 max-h-8 w-full object-contain sm:col-start-2 lg:col-span-1"
              src={assets.nodejs_cloud}
              alt="NodeJS"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-8 w-full object-contain sm:col-start-auto lg:col-span-1"
              src={assets.git_cloud}
              alt="Git"
              width={158}
              height={48}
            />
          </div>
        </div>
      ) : (
        <div
          className={`mx-auto max-w-7xl px-6 lg:px-8 flex ${
            reverse ? " justify-center" : "justify-start"
          }`}
        >
          <div className="max-w-2xl">
            <h2
              className={`text-3xl font-bold tracking-tight sm:text-4xl flex ${
                reverse ? "justify-center" : "justify-start"
              } `}
              style={{
                color: reverse ? "#fff0ff" : "#0071A1",
              }}
            >
              {title}
            </h2>
            <p className="mt-2 mb-4 text-justify text-lg leading-8"
              style={{
                color: reverse ? "#00FFF0" : "#0071A1"
              }}
            >
              {description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderComp;
