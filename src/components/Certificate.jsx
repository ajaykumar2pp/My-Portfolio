import React from "react";
import {
  FaDatabase,
  FaNodeJs,
  FaHtml5,
  FaReact,
  FaJava,
  FaAws,
} from "react-icons/fa";
import HeroBgAnimation from "./HeroBgAnimation";
import { motion } from "framer-motion";
import "./../App.css";

const certificates = [
  {
    name: "DBMS",
    icon: (
      <FaDatabase className="text-yellow-500 hover:text-yellow-300 icon2-size" />
    ),
    link: "https://certificate.codingninjas.com/view/a7e740ff31e26c13",
  },
  {
    name: "Backend Development",
    icon: (
      <FaNodeJs className="text-green-500 hover:text-green-300 icon2-size" />
    ),
    link: "https://certificate.codingninjas.com/view/0fd01555e48468ee",
  },
  {
    name: "Frontend Development",
    icon: (
      <FaHtml5 className="text-orange-500 hover:text-orange-300 icon2-size" />
    ),
    link: "https://certificate.codingninjas.com/view/d82e0c11328229f6",
  },
  {
    name: "React.JS",
    icon: <FaReact className="text-blue-500 hover:text-blue-300 icon2-size" />,
    link: "https://certificate.codingninjas.com/view/a7524c337e450b9d",
  },
  {
    name: "AWS",
    icon: (
      <FaAws className="text-orange-500 hover:text-orange-400 icon2-size" />
    ),
    link: "https://drive.google.com/file/d/1Txbi4w6Fpw5nUEOQRo8qXAw3pGdOQuWR/view?usp=sharing",
  },
  {
    name: "Data Structures in Java",
    icon: <FaJava className="text-pink-500 hover:text-pink-300 icon2-size" />,
    link: "https://certificate.codingninjas.com/view/c40132ae7ea6855b",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: (index) => ({
    opacity: 0,
    x: index % 2 === 0 ? -100 : 100,
    y: 50,
  }),
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Certificate = () => {
  return (
    <section className="relative py-10 px-6 bg-gray-900 text-center">
      {/* <HeroBgAnimation /> */}
      <motion.h2
        className="text-3xl font-bold mb-10 text-gray-100"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Certificates
      </motion.h2>

       {/* Animated Certificate Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12 px-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
        {certificates.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gray-800 p-8 lg:py-24 rounded-xl shadow-lg flex flex-col items-center transition-transform transform hover:scale-105 hover:bg-gray-800 border-2 border-gray-500 hover:border-rose-500 focus:outline-none focus:ring-4 focus:ring-rose-500 focus:ring-opacity-100"
            variants={cardVariants}
            custom={index}
          >
            <motion.div
              className="text-5xl mb-4"
              whileHover={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {cert.icon}
            </motion.div>
            <p
              className="text-lg font-medium text-white"
              whileHover={{ scale: 1.1, color: "#facc15" }}
              transition={{ duration: 0.2 }}
            >
              {cert.name}
            </p>
          </a>
        ))}
      </motion.div>
    </section>
  );
};

export default Certificate;
