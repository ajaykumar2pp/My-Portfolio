import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-5 py-3 z-50 shadow-lg">
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
          className={`fixed top-0 left-0 w-3/4 h-full bg-gray-900 p-6 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          <ul className="space-y-6">
            <li className="text-2xl font-semibold">
              <Link
                to="/"
                className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text hover:text-gray-300"
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
        {/* CTA Button */}
        <button className="hidden md:block px-4 py-2 bg-gray-500 text-white font-bold rounded-lg hover:bg-gray-600 transition">
          Hire Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
