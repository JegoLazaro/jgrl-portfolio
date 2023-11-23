import React from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/ContactMe";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import HeroSection from "./components/homeComponents/HeroSection";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className=" ">
      <Navbar />
      <HeroSection />
      <Skills />
      <Projects />
      <AboutMe />
      <Contact />
    </div>
  );
};

export default App;
