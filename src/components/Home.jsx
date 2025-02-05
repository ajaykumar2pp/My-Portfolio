import React from "react";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Skills from "./Skills";
import Education from "./Education";
import Map from "./Map"
import Tech from "./Tech"



const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Tech />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Map />
    </div>
  );
};

export default Home;
