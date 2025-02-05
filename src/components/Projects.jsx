import React from "react";
import Tilt from "react-parallax-tilt";

const Projects = () => {
  const projects = [
    {
      title: "WhatsApp Clone",
      tech: "React, Node.js, MongoDB",
      link: "#",
      description: "A WhatsApp clone multi-user chat with more privacy",
    },
    {
      title: "HRMS Dashboard",
      tech: "MERN, Vanilla CSS",
      link: "#",
      description: "A Human Resource Management System dashboard",
    },
    {
      title: "Habit Tracker",
      tech: "MERN, Vanilla CSS",
      link: "#",
      description: "Track your habits and personal progress",
    },
    {
      title: "Portfolio",
      tech: "React, Tailwind CSS",
      link: "#",
      description: "My personal portfolio showcasing projects and skills",
    },
    {
      title: "E-commerce",
      tech: "React, Node.js, MongoDB",
      link: "#",
      description:
        "An E-commerce platform for buying and selling products online",
    },
    {
      title: "Job Portal",
      tech: "React, Node.js, MongoDB",
      link: "#",
      description: "A Job Portal platform for job seekers and recruiters",
    },
  ];

  return (
    <div className="py-16 px-6 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-gray-600 font-bold mb-8 text-center">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Tilt
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              scale={1.05}
              transitionSpeed={300}
              key={index}
              className="shadow-lg overflow-hidden rounded-lg p-6 bg-white border-2 border-transparent hover:border-blue-500 hover:border-opacity-100 transition-all duration-300 ease-in-out cursor-pointer"
            >
              <div className="p-5 h-full flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl text-gray-800 font-semibold">{project.title}</h3>
                  {/* GitHub Icon */}
                  <a
                    href="https://github.com/ajaykumar2pp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github fa-lg text-gray-600 hover:text-blue-500"></i>
                  </a>
                </div>
                <p className="mt-2 text-gray-600">{project.tech}</p>
                <p className="mt-2">{project.description}</p>
                <a
                  href={project.link}
                  className="block mt-4 text-indigo-600 hover:underline"
                >
                  View Project
                </a>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
