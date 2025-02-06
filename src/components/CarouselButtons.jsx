import React, { useCallback, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const usePrevNextButtons = (emblaApi) => {
  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  return {
    onPrevButtonClick,
    onNextButtonClick
  };
};

export const PrevButton = ({ onClick }) => {
  return (
    <button
      className="absolute top-1/2 left-2 sm:left-1 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-200 ease-in-out z-10"
      type="button"
      onClick={onClick}
    >
      <FaChevronLeft size={20} />
    </button>
  );
};

export const NextButton = ({ onClick }) => {
  return (
    <button
      className="absolute top-1/2 right-2 sm:right-1 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-200 ease-in-out z-10"
      type="button"
      onClick={onClick}
    >
      <FaChevronRight size={20} />
    </button>
  );
};
