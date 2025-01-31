import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { PrevButton, NextButton, usePrevNextButtons } from "./CarouselButtons";
import {FaReact,FaNodeJs,FaDatabase,FaCss3Alt,FaHtml5,FaAws,FaGithub,FaBootstrap} from "react-icons/fa";
import { SiExpress, SiRedux, SiFigma, SiCanva, SiGraphql, SiTailwindcss,SiTypescript} from "react-icons/si";

import "./../App.css";

const Skills = () => {
  // Embla Carousel initialization with required options
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true, // Enables infinite looping
      slidesToScroll: 1, // Scroll one slide at a time
      dragFree: true, // Allows slides to stop anywhere while dragging
      containScroll: "trim", // Prevents excessive spacing
      slidesToShow: window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })] // Autoplay plugin with 3-second delay
  );



  const techStack = [
    { icon: <FaReact className="text-blue-500 icon-size" />, name: "React.js" },
    { icon: <FaNodeJs className="text-green-500 icon-size" />, name: "Node.js" },
    { icon: <FaDatabase className="text-yellow-500 icon-size" />, name: "MongoDB" },
    { icon: <FaCss3Alt className="text-blue-600 icon-size" />, name: "CSS3" },
    { icon: <FaHtml5 className="text-orange-500 icon-size" />, name: "HTML5" },
    { icon: <SiTypescript className="text-blue-600 icon-size" />, name: "TypeScript" },
    { icon: <SiExpress className="text-gray-800 icon-size" />, name: "Express.js" },
    { icon: <SiRedux className="text-purple-500 icon-size" />, name: "Redux" },
    { icon: <FaAws className="text-orange-400 icon-size" />, name: "AWS" },
    { icon: <SiFigma className="text-pink-500 icon-size" />, name: "Figma" },
    { icon: <SiCanva className="text-blue-400 icon-size" />, name: "Canva" },
    { icon: <SiGraphql className="text-pink-400 icon-size" />, name: "GraphQL" },
    { icon: <SiTailwindcss className="text-blue-400 icon-size" />, name: "Tailwind CSS" },
    { icon: <FaGithub className="text-gray-900 icon-size" />, name: "GitHub" },
    { icon: <FaBootstrap className="text-indigo-500 icon-size" />, name: "Bootstrap" },
  ];

  // Handling autoplay reset/stop on button interaction
  const onNavButtonClick = useCallback(() => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, [emblaApi]);

  // Custom hook for managing button states and click actions
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick);

  return (
    <section className="my-12 px-4">
      <div className="text-center mb-8">
        <h2 className="text-4xl text-yellow-700 font-bold">
        My Technology Stack
        </h2>
      </div>
      {/* Slider */}
      <div className="embla relative max-w-full md:max-w-4xl lg:max-w-6xl mx-auto my-20">
        {/* Embla Container */}
        <div className="embla__viewport overflow-hidden mx-auto w-full" ref={emblaRef}>
          <div className="embla__container flex gap-8">
            {techStack.map((tech, index) => (
              <div
                className="embla__slide cursor-pointer bg-white border-2 border-gray-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-grey-500 flex flex-col items-center justify-center rounded-lg min-w-[120px] max-w-[260px] sm:min-w-[150px] md:min-w-[200px] p-4 "
                key={index}
              >
                {/* Centered Icon */}
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                  {tech.icon}
                </div>

                {/* Centered Text */}
                <p className="mt-3 text-sm sm:text-base md:text-lg font-bold text-center text-gray-800">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
