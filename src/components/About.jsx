import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaDownload,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaCheckCircle,
} from "react-icons/fa";
import ajayKumar from "../assets/ninja.png";
import resumePDF from "../assets/Ajay_Resume.pdf";
import Tilt from "react-parallax-tilt";
import StarsBackground from "./StarsBackground"

const socialVariants = {
  initial: { x: 200, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.3 },
  },
};

const About = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      setDownloaded(true);
      setTimeout(() => {
        setDownloaded(false);
      }, 5000);
    }, 800);
  };

  return (
    <div ref={ref} className="relative py-12 bg-gray-900 text-white">
      {/* <StarsBackground /> */}
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl font-bold text-white">About Me</h2>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <img
              src={ajayKumar}
              alt="Ajay Kumar"
              className="w-72 md:w-96 rounded-lg object-contain"
            />
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <p className="text-xl text-gray-300 leading-relaxed">
              I am a passionate Full Stack Developer with expertise in building
              dynamic, scalable web applications. Skilled in modern technologies
              like React, Node.js, MongoDB, Express.js, and Three.js, I focus on
              delivering seamless user experiences. Always exploring new tools
              to enhance performance and creativity in every project.
            </p>

            {/* Social Media Icons */}
            <motion.div
              variants={socialVariants}
              initial="initial"
              animate="animate"
              className="mt-4 flex justify-center md:justify-start gap-6"
            >
              <motion.a
                variants={socialVariants}
                href="https://github.com/ajaykumar2pp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-yellow-400 transition duration-300 text-3xl"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                variants={socialVariants}
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-yellow-400 transition duration-300 text-3xl"
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                variants={socialVariants}
                href="https://www.linkedin.com/in/ajay-kumar-6a041b1ba"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-yellow-400 transition duration-300 text-3xl"
              >
                <FaLinkedin />
              </motion.a>
            </motion.div>

            {/* Resume Download Button */}
            <Tilt
              className="w-full mt-10"
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              perspective={1000}
              transitionSpeed={300}
              scale={1.02}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.9 }
                }
                transition={{ duration: 0.5, delay: 0.6 }}
                className="relative group inline-block"
              >
                <a
                  href={resumePDF}
                  download="Ajay_Kumar_Resume.pdf"
                  onClick={handleDownload}
                  className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
                >
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                  <span className="relative z-10 inline-flex items-center px-6 py-3 rounded-xl bg-gray-900 space-x-2">
                    {isDownloading ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 6v6l4 2" />
                        </svg>
                        <span className="transition-all duration-500 group-hover:translate-x-1">
                          Downloading...
                        </span>
                      </>
                    ) : downloaded ? (
                      <>
                        <FaCheckCircle className="h-5 w-5" />
                        <span className="transition-all duration-500 group-hover:translate-x-1">
                          Downloaded
                        </span>
                      </>
                    ) : (
                      <>
                        <FaDownload className="h-5 w-5" />
                        <span className="transition-all duration-500 group-hover:translate-x-1">
                          My Resume
                        </span>
                      </>
                    )}
                  </span>
                </a>
              </motion.div>
            </Tilt>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
