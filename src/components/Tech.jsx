import React, { useState } from "react";
import { FaPalette, FaCode, FaTools } from "react-icons/fa";

const Tech = () => {
  const [activeChart, setActiveChart] = useState("Designing");

  const handleClick = (chartType) => {
    setActiveChart(chartType);
  };

  return (
    <div className="bg-gray-800 py-16 px-6  border-white">
      {/* section title */}
      <h2 className="text-3xl font-bold text-white text-center mb-8">
        Ours Skills
      </h2>

      {/* Main Container */}
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {/* Left section */}
        <div className="flex flex-row md:flex-col w-full sm:w-auto md:w-1/3 border-2 text-center border-white gap-4 ">
          {/* Designing Skills */}
          <div
            className="flex flex-col md:flex-row items-center text-white p-4 rounded-lg cursor-pointer transition-all duration-300 hover:text-blue-500 hover:bg-white/10 mb-4"
            onClick={() => handleClick("Designing")}
          >
            <FaPalette className="text-3xl text-white mb-2 md:mb-0 md:mr-2" />
            <h3 className="font-semibold text-lg">Designing Skills</h3>
          </div>

          {/* Coding Skills */}
          <div
            className="flex flex-col md:flex-row items-center text-white p-4 rounded-lg cursor-pointer transition-all duration-300 hover:text-blue-500 hover:bg-white/10 mb-4"
            onClick={() => handleClick("Coding")}
          >
            <FaCode className="text-3xl text-white mb-2 md:mb-0 md:mr-2" />
            <h3 className="font-semibold text-lg">Coding Skills</h3>
          </div>

          {/* Other Skills */}
          <div
            className="flex flex-col md:flex-row items-center text-white p-4 rounded-lg cursor-pointer transition-all duration-300 hover:text-blue-500 hover:bg-white/10"
            onClick={() => handleClick("Other")}
          >
            <FaTools className="text-3xl text-white mb-2 md:mb-0 md:mr-2" />
            <h3 className="font-semibold text-lg">Other Skills</h3>
          </div>
        </div>

        {/* Right section */}
        <div className="w-full sm:w-auto md:w-2/5  border-2 border-white ">
          <div className="space-y-6 relative">
            {/* Render Bar Chart based on activeChart */}
            {activeChart && (
              <div className="text-center">
                <h3 className="text-white text-xl mb-4">
                  {activeChart} Skills Bar Chart
                </h3>
              </div>
            )}
                     
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
