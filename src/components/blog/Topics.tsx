import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Topic from "./Topic";
import styled, { css } from "styled-components";
import useSlider from "../../hook/useSlider";
import PropTypes from "prop-types";

const TopicsWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const PrevAndNext = css`
  position: absolute;
  display: flex;
  align-items: center;
  width: 50px;
  height: 100%;
  top: 50%;
  transform: translate(0, -50%);
  z-index: 1;
`;

const Prev = styled.button`
  ${PrevAndNext}
  left: 0;
  justify-content: flex-start;
  ${({ theme }) => `background: linear-gradient(to right,${theme.bodyBackground}  20%, rgba(0, 0, 0, 0) 80%)`};
`;

const Next = styled.button`
  ${PrevAndNext}
  right: 0;
  justify-content: flex-end;
  ${({ theme }) => `background: linear-gradient(to left,${theme.bodyBackground}  20%, rgba(0, 0, 0, 0) 80%)`};
`;

const TopicsContainer = styled.div`
  overflow: hidden;
`;

const TopicsSlider = styled.div<{ translateValue: number }>`
  display: flex;
  align-items: center;
  gap: 20px;
  transform: ${({ translateValue }) => `translateX(-${translateValue}px)`};
  transition: transform 500ms cubic-bezier(0.215, 0.61, 0.355, 1);
`;

interface TopicsProps {}

const Topics = ({}: TopicsProps) => {
  const childRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);
  const slideBy = useRef(0);
  const [translateValue, setTranslateValue] = useState(0);
  const widthDiff = useRef(0);

  const [slideButtons, setSlideButtons] = useState({
    prevButton: false,
    nextButton: true,
  });

  useEffect(() => {
    if (childRef && parentRef) {
      widthDiff.current = childRef.current?.scrollWidth! / parentRef.current?.clientWidth!;
      slideBy.current = parentRef.current?.clientWidth! / 2;
    }
  }, []);

  const slideRight = () => {
    if (widthDiff.current >= 1) {
      setTranslateValue(slideBy.current);
      widthDiff.current -= 1;
      slideBy.current += parentRef.current?.clientWidth! / 2;
      setSlideButtons({ ...slideButtons, prevButton: true });
    } else {
      setTranslateValue(childRef.current?.scrollWidth! - parentRef.current?.clientWidth!);
      setSlideButtons({ ...slideButtons, nextButton: false });
    }
    console.log("child:", childRef.current?.scrollWidth!);
    console.log("parent", parentRef.current?.clientWidth!);
    console.log(widthDiff);
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

  return (
    <TopicsWrapper>
      {slideButtons.prevButton && (
        <Prev type="button" onClick={slideLeft} aria-label="previous">
          <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 2L2 9L9 16" stroke="#A5A5A5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Prev>
      )}
      <TopicsContainer ref={parentRef}>
        <TopicsSlider translateValue={translateValue} ref={childRef}>
          <Topic topic="HTML" />
          <Topic topic="CSS" />
          <Topic topic="SASS" />
          <Topic topic="JavaScript" />
          <Topic topic="TypeScript" />
          <Topic topic="Gatsby" />
          <Topic topic="Next" />
          <Topic topic="StyledComponents" />
          <Topic topic="GraphQL" />
          <Topic topic="Figma" />
          <Topic topic="Express" />
          <Topic topic="PostgreSQL" />
          <Topic topic="HTML" />
          <Topic topic="CSS" />
          <Topic topic="SASS" />
          <Topic topic="JavaScript" />
          <Topic topic="TypeScript" />
          <Topic topic="Gatsby" />
          <Topic topic="Next" />
          <Topic topic="StyledComponents" />
          <Topic topic="GraphQL" />
          <Topic topic="Figma" />
          <Topic topic="Express" />
          <Topic topic="PostgreSQL" />
        </TopicsSlider>
      </TopicsContainer>
      {slideButtons.nextButton && (
        <Next type="button" onClick={slideRight} aria-label="next">
          <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.00676 2L9.00085 9L2.00676 16" stroke="#A5A5A5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Next>
      )}
    </TopicsWrapper>
  );
};

Topics.propTypes = {};

export default Topics;
