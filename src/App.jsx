import React from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/ContactMe";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import HeroSection from "./components/homeComponents/HeroSection";
import Projects from "./components/Projects";
import assets from "./assets";
import { Analytics } from '@vercel/analytics/react';
import HeaderComp from "./components/headerComp";

const App = () => {
  return (
    <div className="flex-1 justify-center lg:-mr-4 -mr-4 ">
      <Navbar />
      <HeroSection />
      <Skills />
      <Projects />
      <AboutMe />
      <Contact />
      <HeaderComp isCloud reverse />
      <div className="mt-6 sm:mt-5 items-center justify-center mx-auto max-w-8xl border-t-2 lg:mr-8 -mr-8 border-cyan-600 lg:pt-16 md:pt-12 sm:mx-20 pb-4  lg:mx-10">
        <footer className="flex justify-between lg:-mt-14 p-4 text-cyan-800">
          <div className="text-left pr-2">
            <p>&copy; 2023 JGRL.dev. All rights reserved.</p>
          </div>
          <div className="text-right flex ">
            <a href="https://github.com/JegoLazaro/" className="mr-2 px-1">
              <img src={assets.GithubLogo} className="w-7" />
            </a>
            <a href="facebook.com" className="mr-2 px-1">
              <img src={assets.FbLogo} className="w-7" />
            </a>
            <a href="https://expo.dev/@jego01" className="mr-2 px-1">
              <img src={assets.ExpoLogo} className="w-6" />
            </a>
            <a href="https://www.linkedin.com/in/jose-gabriel-lazaro-b842a8277/" className="mr-2 px-1">
              <img src={assets.LinkedInLogo} className="w-7" />
            </a>
          </div>
        </footer>
      </div>
      <Analytics />
    </div>
  );
};

export default App;
