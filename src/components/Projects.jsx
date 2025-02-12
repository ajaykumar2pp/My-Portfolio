import React, { useRef } from "react";
import Tilt from "react-parallax-tilt";
import { motion, useInView } from "framer-motion";

// Project Data
const projects = [
  { title: "WhatsApp Clone", tech: "React, Node.js, MongoDB", link: "#", description: "A WhatsApp clone multi-user chat with more privacy" },
  { title: "HRMS Dashboard", tech: "MERN, Vanilla CSS", link: "#", description: "A Human Resource Management System dashboard" },
  { title: "Habit Tracker", tech: "MERN, Vanilla CSS", link: "#", description: "Track your habits and personal progress" },
  { title: "Portfolio", tech: "React, Tailwind CSS", link: "#", description: "My personal portfolio showcasing projects and skills" },
  { title: "E-commerce", tech: "React, Node.js, MongoDB", link: "#", description: "An E-commerce platform for buying and selling products online" },
  { title: "Job Portal", tech: "React, Node.js, MongoDB", link: "#", description: "A Job Portal platform for job seekers and recruiters" },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1, 
    transition: { staggerChildren: 0.2 } 
  },
};

const getRandomDirection = (index) => {
  const directions = [
    { x: -50, y: 30 }, // Left
    { x: 100, y: 50 },  // Right
    { x: 0, y: 100 },   // Bottom
  ];
  return directions[index % directions.length]; // Rotate directions
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} className="py-10 px-6 bg-gray-900 text-gray-100 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Animated Heading */}
        <motion.h2 
          className="text-3xl font-bold mb-10 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Projects
        </motion.h2>

        {/* Animated Project Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              variants={{
                hidden: { opacity: 0, ...getRandomDirection(index) },
                show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
              }}
            >
              <Tilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                scale={1.05}
                transitionSpeed={300}
                className="shadow-lg overflow-hidden rounded-lg p-6 bg-gray-800 border-2 border-transparent hover:border-blue-500 transition-all duration-300 ease-in-out cursor-pointer"
              >
                <div className="p-5 min-h-[200px] flex flex-col justify-between">
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl text-gray-100 font-semibold">
                      {project.title}
                    </h3>
                    {/* GitHub Icon */}
                    <a
                      href="https://github.com/ajaykumar2pp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:scale-110 transition-transform duration-200"
                    >
                      <i className="fab fa-github fa-xl text-white hover:text-blue-300"></i>
                    </a>
                  </div>
                  <p className="mt-2 text-gray-300">{project.tech}</p>
                  <p className="mt-2 text-gray-400">{project.description}</p>
                  <a href={project.link} className="block mt-4 text-blue-400 hover:underline">
                    View Project
                  </a>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
