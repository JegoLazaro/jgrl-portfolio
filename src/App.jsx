import React from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/ContactMe";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import HeroSection from "./components/homeComponents/HeroSection";
import Projects from "./components/Projects";
import LogoCloud from "./components/LogoCloud";

const App = () => {
  return (
    <div className=" ">
      <Navbar />
      <HeroSection />
      <Skills />
      <Projects />
      <AboutMe />
      <Contact />
      <LogoCloud />
    </div>
  );
};

export default App;
