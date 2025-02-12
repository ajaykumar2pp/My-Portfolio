import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaBriefcase } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className="fixed top-0 left-0 w-full bg-gray-900 text-white px-6 py-3 z-50 shadow-lg"
    >
      <div className="flex justify-between items-center">
        {/* Logo or Brand Name */}
        <div className="text-2xl font-semibold">
          <Link to="/" className="hover:text-gray-300">
            Ajay Kumar
          </Link>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden cursor-pointer z-50" onClick={toggleMenu}>
          {isOpen ? (
            <FaTimes className="text-white text-2xl" />
          ) : (
            <FaBars className="text-white text-2xl" />
          )}
        </div>

        {/* Mobile Menu with Smooth Slide Animation */}
        <div
          className={`fixed top-0 left-0 w-3/4 h-full bg-gray-900 px-6 py-3 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          <ul className="space-y-6">
            <li className="text-2xl font-semibold">
              <Link
                to="/"
                className="text-green-500  bg-clip-text hover:text-gray-300"
                onClick={toggleMenu}
              >
                Ajay Kumar
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-gray-300" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-gray-300"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="hover:text-gray-300"
                onClick={toggleMenu}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-gray-300"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-gray-300">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-300">
              Contact
            </Link>
          </li>
        </ul>
        {/* Hire Me Button */}
        <a 
        href="mailto:ajay2kumarpp@gmail.com"
        className="cursor-pointer hidden md:inline-flex group/button relative items-center justify-center overflow-hidden rounded-md bg-gray-800/30 backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl  border border-white/20">
          <FaBriefcase className="text-xl me-3" />
          <span className="text-lg cursor-pointer"> Hire Me</span>
          <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
            <div className="relative h-full w-10 bg-white/20"></div>
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
