import hacker3D from "../assets/hacker3D.png";
import Tilt from "react-parallax-tilt";
import Typewriter from "typewriter-effect";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import StarsBackground from "./StarsBackground"

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div
      ref={ref}
      className="min-h-screen bg-gray-900 text-white flex flex-col lg:flex-row items-center justify-center px-6 pt-24 lg:pt-24 gap-6 lg:gap-10 overflow-hidden"
    >
      {/* <StarsBackground /> */}
      {/* Text Section (LEFT) */}
      <motion.div
        className="w-full text-center lg:text-center px-4 overflow-hidden"
        variants={textVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-500 animate-pulse transform transition-transform duration-300 hover:scale-105 cursor-pointer">
          Hi, I'm Ajay Kumar
        </h1>

        {/* Typewriter Effect for Roles */}
        <div className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
          <span className="text-green-400 animate-pulse">✨ </span>
          <Typewriter
            options={{
              strings: [
                "Full Stack Web Developer & Designer",
                "Frontend Web Developer",
                "Backend Developer",
                "AWS Cloud Practitioner",
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 25,
            }}
          />
        </div>

        {/* Call to Action Button */}
        <motion.button
          className="mt-6 px-6 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 hover:scale-110 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Let's Connect
        </motion.button>
      </motion.div>

      {/* Image Section (RIGHT) */}
      <motion.div
        className="w-full flex justify-center lg:justify-end overflow-hidden"
        variants={imageVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02} transitionSpeed={400} className="drop-shadow-xl">
          <img
            src={hacker3D}
            alt="hacker"
            draggable="false"
            className="max-w-xs sm:max-w-md w-full transform hover:scale-105 transition duration-300 cursor-pointer"
            style={{ overflow: "hidden" }}
          />
        </Tilt>
      </motion.div>
    </div>
  );
};

export default Hero;
