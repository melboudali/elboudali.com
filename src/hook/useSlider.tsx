import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";

const useSlider = (childRef: React.RefObject<HTMLDivElement>, prentRef: React.RefObject<HTMLDivElement>, topicsLength: number) => {
  const [translateValue, setTranslateValue] = useState(0);

  const [widthDiff, setWidthDiff] = useState(childRef.current?.scrollWidth! / prentRef.current?.clientWidth!);

  const [slideButtons, setSlideButtons] = useState({
    prevButton: false,
    nextButton: true,
  });

  const slideRight = () => {
    if (widthDiff && widthDiff > 1) {
      setTranslateValue(prentRef.current?.clientWidth! / 2);
      setWidthDiff(widthDiff - prentRef.current?.clientWidth! / 2);
      setSlideButtons({ ...slideButtons, prevButton: true });
    } else {
      setTranslateValue(prentRef.current?.clientWidth! - childRef.current?.scrollWidth!);
      setSlideButtons({ ...slideButtons, nextButton: true });
    }
  };

  const slideLeft = () => {
    // if (currentIndex.current > slideBy.current) {
    //   setTranslateValue(100);
    //   setSlideButtons({ ...slideButtons, rightButton: true });
    // } else {
    //   setTranslateValue(0);
    //   setSlideButtons({ ...slideButtons, leftButton: false });
    // }
  };
  return { translateValue, slideButtons, slideRight, slideLeft };
};

useSlider.propTypes = {};

export default useSlider;
