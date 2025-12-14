import React, { useState } from "react";
import assets from "../../assets";
import { Typewriter, Cursor } from "react-simple-typewriter";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; 
    link.download = "LAZARO RESUME-2026.pdf";
    link.click();
  };

  return (
    <div id="home" className="bg-slate-200 px-2">
      <div className="relative isolate">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-45 sm:left-[calc(50%-32rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#1f6ac0] to-[#c6006a] opacity-40 sm:left-[calc(50%-1rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-start mx-auto max-w-5xl py-32 sm:py-36 lg:py-28">
          <div className={`lg:w-1/2 pr-8 fadeLeftMini`}>
            <h1 className="text-4xl font-thin tracking-tight text-gray-900 sm:text-5xl">
              Hello, My name is Jego Lazaro!
            </h1>
            <h1 className="text-3xl pt-3 font-light tracking-tight -mr-20 text-black sm:text-4xl">
              Skilled<span className="ml-5">
                <Typewriter
                  words={[
                    "<Software Engineer ",
                    "<Full-Stack Engineer ",
                    "<Frontend Developer ",
                    "<Backend Developer ",
                  ]}
                  loop={false}
                  cursor
                  cursorStyle="/>"
                  typeSpeed={85}
                  deleteSpeed={50}
                  delaySpeed={2200}
                />
              </span>
            </h1>
            {/* <p className="mt-6 text-md font-semibold leading-8 text-gray-600">
              🌐 Frontend Excellence: Translating visions into interactive &
              responsive web experiences.
            </p>
            <p className="mt-2 text-md font-semibold leading-8 text-gray-600">
              📱 Mobile Magic: Building sleek and powerful mobile apps that
              redefine user expectations.
            </p>
            <p className="mt-2 text-md font-semibold leading-8 text-gray-600">
              💻 Software Wizardry: Crafting robust, scalable software solutions
              that stand the test of time.
            </p>
            <p className="mt-2 text-md font-semibold leading-8 text-gray-600">
              ✨ Design Elegance: Merging form and function to create visually
              stunning and user-friendly interfaces.
            </p> */}

            <div className="cursor-pointer flex mt-10 items-start justify-start gap-x-6">
              <ScrollLink
                to="skills"
                className="rounded-md px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
                style={{
                  backgroundColor: hover ? "#4E93B0" : "#0071A1",
                  color: !hover ? "#fff" : "#fff",
                }}
              >
                Get to Know Me
              </ScrollLink>
              <button
                className="rounded-md px-3.5 z-50 cursor-pointer py-2.5 text-lg font-semibold text-white shadow-sm bg-[#0071A1] hover:bg-[#4E93B0]"
                onClick={handleDownload}
              >
                Download CV
              </button>
            </div>
          </div>
          <div className="fadeRightMini lg:w-1/2">
            <img
              className="img_mockup w-full"
              src={assets.mockup1}
              alt="Mockup"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
