import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { PrevButton, NextButton, usePrevNextButtons } from "./CarouselButtons";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCss3Alt,
  FaHtml5,
  FaAws,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiExpress,
  SiRedux,
  SiFigma,
  SiCanva,
  SiGraphql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import "./../App.css";

const Skills = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true, // Enables infinite looping
      slidesToScroll: 1, // Scroll one slide at a time
      dragFree: true, // Allows slides to stop anywhere while dragging
      containScroll: "trim", // Prevents excessive spacing
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const techStack = [
    { icon: <FaReact className="text-blue-500 icon-size" />, name: "React.js", bgColor: "bg-blue-50" },
    { icon: <FaNodeJs className="text-green-500 icon-size" />, name: "Node.js", bgColor: "bg-green-50" },
    { icon: <FaDatabase className="text-yellow-500 icon-size" />, name: "MongoDB", bgColor: "bg-yellow-50" },
    { icon: <FaCss3Alt className="text-blue-600 icon-size" />, name: "CSS3", bgColor: "bg-blue-50" },
    { icon: <FaHtml5 className="text-orange-500 icon-size" />, name: "HTML5", bgColor: "bg-orange-50" },
    { icon: <SiTypescript className="text-blue-600 icon-size" />, name: "TypeScript", bgColor: "bg-blue-50" },
    { icon: <SiExpress className="text-gray-800 icon-size" />, name: "Express.js", bgColor: "bg-gray-50" },
    { icon: <SiRedux className="text-purple-500 icon-size" />, name: "Redux", bgColor: "bg-purple-50" },
    { icon: <FaAws className="text-orange-400 icon-size" />, name: "AWS", bgColor: "bg-orange-50" },
    { icon: <SiFigma className="text-pink-500 icon-size" />, name: "Figma", bgColor: "bg-pink-50" },
    { icon: <SiCanva className="text-blue-400 icon-size" />, name: "Canva", bgColor: "bg-blue-50" },
    { icon: <SiGraphql className="text-pink-400 icon-size" />, name: "GraphQL", bgColor: "bg-pink-50" },
    { icon: <SiTailwindcss className="text-blue-400 icon-size" />, name: "Tailwind CSS", bgColor: "bg-blue-50" },
    { icon: <FaGithub className="text-gray-900 icon-size" />, name: "GitHub", bgColor: "bg-gray-200" },
    { icon: <FaBootstrap className="text-indigo-500 icon-size" />, name: "Bootstrap", bgColor: "bg-indigo-50" },
  ];

  const handleMouseEnter = () => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (autoplay) autoplay.stop();
  };

  const handleMouseLeave = () => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (autoplay) autoplay.play();
  };

  const onNavButtonClick = useCallback(() => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;
    autoplay.reset(); // Always reset autoplay
  }, [emblaApi]);

  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <section className="py-12 px-4 bg-gray-800">
      <div className="text-center mb-8">
        <h2 className="text-3xl text-white font-bold">My Technology Stack</h2>
      </div>
      <div className="embla relative max-w-full md:max-w-4xl lg:max-w-6xl mx-auto my-20">
        <div className="embla__viewport overflow-hidden mx-auto w-full" ref={emblaRef}>
          <div className="embla__container flex gap-8">
            {techStack.map((tech, index) => (
              <div
                className={`embla__slide cursor-pointer ${tech.bgColor} border-2 border-gray-300 shadow-md hover:shadow-lg hover:border-pink-300 focus:border-pink-500 focus:ring-4 focus:ring-pink-300 flex flex-col items-center justify-center rounded-lg min-w-[120px] max-w-[260px] sm:min-w-[150px] md:min-w-[200px] p-4`}
                key={index}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                  {tech.icon}
                </div>
                <p className="mt-3 text-sm sm:text-base md:text-lg font-bold text-center text-gray-800">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <PrevButton
            onClick={() => {
              onPrevButtonClick();
              onNavButtonClick();
            }}
          />
          <NextButton
            onClick={() => {
              onNextButtonClick();
              onNavButtonClick();
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
