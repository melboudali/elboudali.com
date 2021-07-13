import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";

const useSlider = (childRef: React.RefObject<HTMLDivElement>, parentRef: React.RefObject<HTMLDivElement>, topicsLength: number) => {
  let slideBy = parentRef.current?.clientWidth! / 2;
  let widthDiff = useRef(childRef.current?.scrollWidth! / parentRef.current?.clientWidth!);
  let DefaultWidthDiff = childRef.current?.scrollWidth! / parentRef.current?.clientWidth!;
  const [translateValue, setTranslateValue] = useState(0);

  const [slideButtons, setSlideButtons] = useState({
    prevButton: false,
    nextButton: true,
  });

  useEffect(() => {
    widthDiff.current = childRef.current?.scrollWidth! / parentRef.current?.clientWidth!;
    DefaultWidthDiff = childRef.current?.scrollWidth! / parentRef.current?.clientWidth!;
    slideBy = parentRef.current?.clientWidth! / 2;
  }, []);

  const slideRight = () => {
    console.log("rightFirst:", { widthDiff: widthDiff.current, DefaultWidthDiff });
    if (widthDiff.current >= 1) {
      setTranslateValue(slideBy);
      setSlideButtons({ ...slideButtons, prevButton: true });
      slideBy += parentRef.current?.clientWidth! / 2;
      widthDiff.current--;
    } else {
      setTranslateValue(childRef.current?.scrollWidth! - parentRef.current?.clientWidth!);
      setSlideButtons({ ...slideButtons, nextButton: false });
    }
    console.log("rightEnd:", { widthDiff: widthDiff.current, DefaultWidthDiff });
  };

  const slideLeft = () => {
    console.log("leftFirst:", { widthDiff: widthDiff.current, DefaultWidthDiff });
    if (widthDiff.current === DefaultWidthDiff) {
      setTranslateValue(0);
      setSlideButtons({ ...slideButtons, prevButton: false });
    } else {
      widthDiff.current++;
      slideBy -= parentRef.current?.clientWidth! / 2;
      setTranslateValue(slideBy);
      setSlideButtons({ ...slideButtons, nextButton: true });
    }
    console.log("leftEnd:", { widthDiff: widthDiff.current, DefaultWidthDiff });
  };
  return { translateValue, slideButtons, slideRight, slideLeft };
};

useSlider.propTypes = {};

export default useSlider;
