import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <div className="py-10 px-6 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center text-white">
          Education
        </h2>

        {/* Timeline */}
        <div className="relative border-l-4 border-green-400 ml-4">
          {/* Full Stack Web Development - Coding Ninjas */}
          <div className="mb-12 ml-6">
            <div className="flex items-center space-x-4">
              {/* SVG Logo for Coding Ninjas */}
              <div className="bg-black text-white p-3 rounded-full shadow-lg flex items-center justify-center">
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                >
                  <path
                    d="M8.96596 5.75631H18.4375V1.26233H8.98112C7.47156 1.1725 5.96249 1.57624 4.67494 2.38274C3.56489 3.14433 2.72136 4.21982 2.27783 5.47448C1.78932 6.95323 1.5233 8.47689 1.56731 10.0001C1.52281 11.5237 1.78932 13.0918 2.27783 14.5256C2.72185 15.7803 3.56538 16.8558 4.67494 17.6174C5.96249 18.4239 7.47205 18.8271 8.98112 18.7378H18.437V13.7453H8.96596C7.76545 13.7453 6.92045 13.3865 6.38694 12.7132C5.85344 12.04 5.54194 11.0528 5.54194 9.7508C5.54194 7.10278 6.65345 5.75631 8.96596 5.75631Z"
                    fill="url(#paint0_linear_1698_1295)"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.31177 9.05469L11.7514 9.91054C11.7514 9.91104 8.49516 13.3271 7.31177 9.05469Z"
                    fill="currentColor"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.7226 9.06848L13.4183 9.96975C13.4183 9.97024 17.146 13.3502 17.7226 9.06848Z"
                    fill="currentColor"
                  ></path>
                  <defs>
                    <linearGradient
                      id="paint0_linear_1698_1295"
                      x1="1.56223"
                      y1="10.0006"
                      x2="18.4371"
                      y2="10.0006"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#ED722F" />
                      <stop offset="0.2694" stopColor="#ED8225" />
                      <stop offset="0.7101" stopColor="#EE9719" />
                      <stop offset="1" stopColor="#EE9F14" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Content */}
              <div>
                <h3 className="sm:text-xl md:lg lg:text-2xl font-semibold">
                  Full Stack Web Development
                </h3>
                <p className=" text-lg text-gray-300">Coding Ninjas</p>

                {/* Date with Calendar Icon */}
                <p className="flex items-center space-x-3">
                  <span className="text-md">📅</span>
                  <span className="text-gray-400">2022 - 2024</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative border-l-4 border-green-400 ml-4">
          {/* Bachelor of Science - Gurukul Kangri University */}
          <div className="mb-12 ml-6">
            <div className="flex items-center space-x-4">
              {/* Icon */}
              <div className="bg-green-500 text-white p-3 rounded-full shadow-lg flex items-center justify-center">
                <FaGraduationCap size={24} />
              </div>

              {/* Content */}
              <div>
                <h3 className="sm:text-xl md:lg lg:text-2xl font-semibold">Bachelor of Science</h3>
                <p className=" text-lg text-gray-300">Gurukul Kangri University</p>

                {/* Date with Calendar Icon */}
                <p className="flex items-center space-x-3">
                  <span className="text-md">📅</span>
                  <span className="text-gray-400">2017 - 2020</span>
                </p>

                <p className="text-gray-400">
                  Percentage:{" "}
                  <span className="text-green-300 font-semibold">71%</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
