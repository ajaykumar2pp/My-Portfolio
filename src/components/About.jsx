import React, { useState } from "react";
import {
  FaDownload,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaCheckCircle,
} from "react-icons/fa";
import ajayKumar from "../assets/ajay.jpg";
import resumePDF from "../assets/Ajay_Resume.pdf";
import Tilt from "react-parallax-tilt";

const About = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);

    // Simulate download (0.8 seconds)
    setTimeout(() => {
      setIsDownloading(false);
      setDownloaded(true);

      // Reset button text after 5 seconds
      setTimeout(() => {
        setDownloaded(false);
      }, 5000);
    }, 800);
  };

  return (
    <div className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-3xl text-center font-bold mb-10 text-yellow-400">
          About Me
        </h2>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left Side */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={ajayKumar}
              alt="Ajay Kumar"
              className="w-72 md:w-96 rounded-lg object-contain"
            />
          </div>

          {/* Right Side  */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <p className="text-lg text-gray-300 leading-relaxed">
              I am a passionate Full Stack Developer with expertise in building
              dynamic, scalable web applications. Skilled in modern technologies
              like React, Node.js, MongoDB, Express.js and Three.js, I focus on
              delivering seamless user experiences. Always exploring new tools
              to enhance performance and creativity in every project.
            </p>

            {/* Social Media Icons */}
            <div className="mt-4 flex justify-center md:justify-start gap-6">
              <a
                href="https://github.com/your-github"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-yellow-400 transition duration-300 text-3xl"
              >
                <FaGithub />
              </a>
              <a
                href="https://instagram.com/your-instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-yellow-400 transition duration-300 text-3xl"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com/in/your-linkedin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-yellow-400 transition duration-300 text-3xl"
              >
                <FaLinkedin />
              </a>
            </div>

            {/* Resume Download Button  */}
            <Tilt
              className="w-full mt-10"
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              perspective={1000}
              transitionSpeed={300}
              scale={1.02}
            >
              <div className="relative group inline-block">
                <a
                  href={resumePDF}
                  download="Ajay_Kumar_Resume.pdf"
                  onClick={handleDownload}
                  className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
                >
                  {/* Gradient Border Effect */}
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

                  {/* Button Content - Fixed */}
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
              </div>
            </Tilt>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
