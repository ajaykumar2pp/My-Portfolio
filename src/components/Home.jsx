import React from "react";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Skills from "./Skills";
import Education from "./Education";
import Map from "./Map"
import Certificate from "./Certificate";
// import Tech from "./Tech"

// import Map3D from "./Map3D";



const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      {/* <Tech /> */}
      <Education />
      <Certificate />
      <Projects />
      <Contact />
      {/* <Map3D /> */}
      <Map />
    </div>
  );
};

export default Home;
