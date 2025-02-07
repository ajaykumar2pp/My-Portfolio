import hacker3D from "../assets/hacker3D.png"; 
import Tilt from "react-parallax-tilt"; 
import Typewriter from "typewriter-effect";

const Hero = () => (
  <div className="min-h-screen bg-gradient-to-b from-gray-800 to-black text-white flex flex-col lg:flex-row items-center justify-center px-6 pt-24 lg:pt-24 gap-10">
    
    {/* Text Section */}
    <div className="w-full text-center px-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-500 animate-pulse transform transition-transform duration-300 hover:scale-105 cursor-pointer">
        Hi, I'm Ajay Kumar
      </h1>

      {/* Typewriter Effect for Roles */}
      <p className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
        <span className="text-green-400 animate-pulse">✨ </span>
        <Typewriter
          options={{
            strings: [
              "Full Stack Web Developer & Designer",
              "Frontend Web Developer",
              "Backend Developer",
              "AWS Cloud Practitioner",
            ],
            autoStart: true,
            loop: true,
            delay: 50,
            deleteSpeed: 25,
          }}
        />
      </p>
        {/* Call to Action Button */}
        <button className="mt-6 px-6 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition">
        Let's Connect
      </button>
    </div>

    {/* Image Section with Tilt Effect */}
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      scale={1.02}
      transitionSpeed={400}
      className="w-full flex justify-center"
    >
      <img
        src={hacker3D}
        alt="hacker"
        draggable="false"
        className="max-w-xs sm:max-w-md transform hover:scale-105 transition duration-300 drop-shadow-xl cursor-pointer"
        
      />
    </Tilt>
  </div>
);

export default Hero;
