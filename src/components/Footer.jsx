import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-8 ">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:flex md:space-x-2">
            <p className="text-center sm:text-left text-sm text-white">
              © 2025 All rights reserved.
            </p>
            <p className="text-center sm:text-left text-sm text-white">
              Made with 💻 by Ajay Kumar
            </p>
          </div>

          <div className="flex space-x-6 mt-4 md:mt-0">
            {/* LinkedIn Icon */}
            <Link
              to="https://www.linkedin.com/in/ajay-kumar-6a041b1ba"
              target="_blank"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <i className="fab fa-linkedin fa-2x"></i>
            </Link>

            {/* Instagram Icon */}
            <Link
              to="https://www.instagram.com"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <i className="fab fa-instagram fa-2x"></i>
            </Link>

            {/* GitHub Icon */}
            <Link
              to="https://github.com/ajaykumar2pp"
              target="_blank"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <i className="fab fa-github fa-2x"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
