import React from "react";
import {
  FaDatabase,
  FaNodeJs,
  FaHtml5,
  FaReact,
  FaJava,
  FaAws,
} from "react-icons/fa";

import "./../App.css";

const certificates = [
  {
    name: "DBMS",
    icon: <FaDatabase className="text-yellow-500 hover:text-yellow-300 icon2-size" />,
    link: "https://certificate.codingninjas.com/view/a7e740ff31e26c13",
  },
  {
    name: "Backend Development",
    icon: <FaNodeJs className="text-green-500 hover:text-green-300 icon2-size" />,
    link: "https://certificate.codingninjas.com/view/0fd01555e48468ee",
  },
  {
    name: "Frontend Development",
    icon: <FaHtml5 className="text-orange-500 hover:text-orange-300 icon2-size" />,
    link: "https://certificate.codingninjas.com/view/d82e0c11328229f6",
  },
  {
    name: "React.JS",
    icon: <FaReact className="text-blue-500 hover:text-blue-300 icon2-size" />,
    link: "https://certificate.codingninjas.com/view/a7524c337e450b9d",
  },
  {
    name: "AWS",
    icon: <FaAws className="text-orange-500 hover:text-orange-400 icon2-size" />,
    link: "https://drive.google.com/file/d/1Txbi4w6Fpw5nUEOQRo8qXAw3pGdOQuWR/view?usp=sharing",
  },
  {
    name: "Data Structures in Java",
    icon: <FaJava className="text-pink-500 hover:text-pink-300 icon2-size" />,
    link: "https://certificate.codingninjas.com/view/c40132ae7ea6855b",
  },
];

const Certificate = () => {
  return (
    <section className="py-16 px-6 bg-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-100">Certificates</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12 px-12">
        {certificates.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gray-800 p-8 lg:py-24 rounded-xl shadow-lg flex flex-col items-center transition-transform transform hover:scale-105 hover:bg-gray-700"
          >
            <div className="text-5xl mb-4">{cert.icon}</div>
            <p className="text-lg font-medium text-white">{cert.name}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certificate;
