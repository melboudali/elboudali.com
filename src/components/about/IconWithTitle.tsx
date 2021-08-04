import React from "react";
import styled from "styled-components";
import about from "../../data/about";
import PropTypes from "prop-types";

const IconWithTitleWrapper = styled.div<{ type: "role" | "location" }>`
  display: flex;
  align-items: center;
  gap: 5px;
  h2 {
    margin: 1px 0 0 0;
    font-size: inherit;
    font-weight: 300;
    letter-spacing: 0.1em;
    text-transform: capitalize;
    line-height: 19px;
    color: var(--secondaryColor);
  }
  svg > path {
    ${({ type }) => (type === "role" ? "fill: var(--secondaryColor);" : "stroke: var(--secondaryColor);")}
  }
`;

interface IconWithTitleProps {
  type: "role" | "location";
}

const IconWithTitle = ({ type }: IconWithTitleProps) => {
  return (
    <IconWithTitleWrapper type={type}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        {type === "role" ? (
          <path d="M10.0781 13.1445C10.0781 13.2305 10.1445 13.3008 10.2246 13.3008H13.8379C13.918 13.3008 13.9844 13.2305 13.9844 13.1445V12.207C13.9844 12.1211 13.918 12.0508 13.8379 12.0508H10.2246C10.1445 12.0508 10.0781 12.1211 10.0781 12.207V13.1445ZM6.27148 13.2637L10.0215 10.1191C10.0957 10.0566 10.0957 9.94141 10.0215 9.87891L6.27148 6.73633C6.24885 6.71708 6.22116 6.70473 6.19171 6.70074C6.16226 6.69676 6.13229 6.70131 6.10535 6.71385C6.07841 6.7264 6.05564 6.74641 6.03973 6.77151C6.02383 6.79661 6.01546 6.82575 6.01562 6.85547V8.08008C6.01562 8.12695 6.03516 8.16992 6.07227 8.19922L8.2168 10L6.07227 11.8008C6.05481 11.8154 6.04071 11.8336 6.03093 11.8542C6.02116 11.8747 6.01594 11.8972 6.01562 11.9199V13.1445C6.01562 13.2773 6.16992 13.3496 6.27148 13.2637ZM17.1875 2.1875H2.8125C2.4668 2.1875 2.1875 2.4668 2.1875 2.8125V17.1875C2.1875 17.5332 2.4668 17.8125 2.8125 17.8125H17.1875C17.5332 17.8125 17.8125 17.5332 17.8125 17.1875V2.8125C17.8125 2.4668 17.5332 2.1875 17.1875 2.1875ZM16.4062 16.4062H3.59375V3.59375H16.4062V16.4062Z" />
        ) : (
          <path
            d="M10 18.3333C10 18.3333 3.33334 13.3333 3.33334 8.33329C3.33334 4.16663 6.66668 1.66663 10 1.66663C13.3333 1.66663 16.6667 4.16663 16.6667 8.33329C16.6667 13.3333 10 18.3333 10 18.3333ZM10 10.8333C11.3808 10.8333 12.5 9.71413 12.5 8.33329C12.5 6.95246 11.3808 5.83329 10 5.83329C8.61918 5.83329 7.50001 6.95246 7.50001 8.33329C7.50001 9.71413 8.61918 10.8333 10 10.8333Z"
            strokeWidth="1.5"
          />
        )}
      </svg>
      <h2>{type === "role" ? about.role : about.location}</h2>
    </IconWithTitleWrapper>
  );
};

IconWithTitle.propTypes = { type: PropTypes.string.isRequired };

export default IconWithTitle;
