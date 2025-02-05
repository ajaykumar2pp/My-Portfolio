import hacke3D from "../assets/hacker3D.png";
import { Tilt } from "react-tilt";
import Typewriter from "typewriter-effect";

const Hero = () => (
  <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col sm:flex-col md:flex-col lg:flex-row items-center justify-center px-6 py-10 sm:py-12 gap-8">
    
    {/* Text Section */}
    <div className="w-full text-center sm:text-center px-4 sm:order-first md:order-first">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 animate-pulse transform transition-transform duration-300 hover:scale-105">
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
            delay: 40,
            deleteSpeed: 30,
          }}
        />
      </p>
    </div>

    {/* Image Section with Tilt Effect */}
    <Tilt
      options={{ max: 15, scale: 1.05, speed: 400 }}
      className="w-full flex justify-center sm:order-last md:order-last"
    >
      <img
        src={hacke3D}
        alt="hacker"
        draggable="false"
        className="cursor-pointer max-w-xs sm:max-w-lg transform transition-transform duration-300 hover:scale-105 drop-shadow-lg"
      />
    </Tilt>
  </div>
);

export default Hero;
