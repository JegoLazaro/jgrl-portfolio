import React, { useState } from "react";
import assets from "../../assets";
import { Typewriter, Cursor } from "react-simple-typewriter";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const AboutMeContainer = () => {
  const aboutMe = "Hello! I'm Jego Lazaro, a dedicated React JS and React Native developer. I earned my BS in Computer Science from DLSU-Manila, specializing in Software Technology. Fueled by a love for innovation and creativity, I thrive on transforming ideas into seamless digital experiences. Let's embark on a journey to bring your projects to life!";
  const [hover, setHover] = useState(false);
  const [hoverDownload, setHoverDownload] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div>
      <div className="relative isolate px-6 lg:px-8 -mt-32 mb-10">
        <div
          className="absolute inset-x-2 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="mt-52 relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.128rem] -translate-x-1/3 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-41 sm:left-[calc(50%-5rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        
        <div className="flex flex-col lg:flex-row items-center justify-start mx-auto max-w-5xl py-10 sm:py-10 lg:py-2">
        <div className="lg:w-1/2">
            <img
              className="img_mockup w-full"
              src={assets.mockup2}
              alt="Mockup"
            />
          </div>
          <div className="lg:w-1/2 pl-12">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Hello, I'm Jego Lazaro!
            </h1>
            <h1
              className="text-xl pt-3 text-justify font-semibold tracking-wide sm:text-2xl"
              style={{
                color: "#0071A1",
                 textShadow: "1px 2px 3px #fff",
              }}
            >
              A dedicated React JS and React Native developer. I earned my BS in Computer Science from DLSU-Manila, specializing in Software Technology. Fueled by a love for innovation and creativity, I thrive on transforming ideas into seamless digital experiences. Let's embark on a journey to bring your projects to life!
            </h1>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AboutMeContainer;


