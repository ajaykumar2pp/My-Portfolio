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
} from "react-icons/fa";
import "./../App.css";

const Skills = () => {
  // Embla Carousel initialization with required options
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true, // Enables infinite looping
      slidesToScroll: 1, // Scroll one slide at a time
      dragFree: true, // Allows slides to stop anywhere while dragging
      containScroll: "trim", // Prevents excessive spacing
      slidesToShow: 3, // Show 3 slides at a time
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })] // Autoplay plugin with 3-second delay
  );



  const techStack = [
    { icon: <FaReact size={50} />, name: "React.js" },
    { icon: <FaNodeJs size={50} />, name: "Node.js" },
    { icon: <FaDatabase size={50} />, name: "MongoDB" },
    { icon: <FaCss3Alt size={50} />, name: "CSS3" },
    { icon: <FaHtml5 size={50} />, name: "HTML5" },
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
    <section className="my-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl text-yellow-700 font-bold">
          Technologies We Work On
        </h2>
      </div>
      {/* Slider */}
      <div className="embla">
        {/* Embla Container */}
        <div className="embla__viewport mx-auto flex justify-center items-center  " ref={emblaRef}>
          <div className="embla__container ">
            {techStack.map((tech, index) => (
              <div
                className="embla__slide  cursor-pointer bg-white border-2 border-grey-300 shadow-md flex flex-col items-center justify-center  rounded-lg"
                key={index}
              >
                {/* Centered Icon */}
                <div className=" text-6xl text-pink-400">
                  {tech.icon}
                </div>

                {/* Centered Text */}
                <p className="mt-2 text-lg font-semibold text-center text-gray-800">
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
