import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const LinkStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  &:visited {
    color: black;
  }
`;

const DemoLink = styled.a`
  ${LinkStyle}
  flex: 2 2;
  position: relative;
  background: ${({ theme }) => theme.bodyBackground};
  border-bottom-left-radius: 5px;
  border: 2px solid ${({ theme }) => theme.iconsColorAndButtonBorder};
  svg {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    fill: ${({ theme }) => theme.balackAndWhite};
  }
  span {
    font-weight: bold;
    font-size: 0.9375rem;
    letter-spacing: -0.04em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.balackAndWhite};
  }
  &:hover {
    background-color: #000;
    span {
      color: ${({ theme }) => (theme.balackAndWhite === "white" ? "#000" : "#fff")};
    }
    svg > path {
      fill: ${({ theme }) => (theme.balackAndWhite === "white" ? "#000" : "#fff")};
    }
  }
`;

const GithubLink = styled.a<{ figmaLink?: string }>`
  ${LinkStyle}
  flex: 1 1;
  background-color: ${({ theme }) => theme.iconsColorAndButtonBorder};
  ${({ figmaLink }) => !figmaLink && "border-bottom-right-radius: 5px;"}
`;

const FigmaLink = styled.a`
  flex: 1 1;
  ${LinkStyle}
  background-color: ${({ theme }) => theme.figmaBg};
  border-bottom-right-radius: 5px;
`;

interface LinksProps {
  link?: string;
  figmaLink?: string;
  githubLink?: string;
}

const Links = ({ link, figmaLink, githubLink }: LinksProps) => {
  return (
    <ButtonsWrapper>
      <DemoLink href={link} target="_blank">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.21 13.1295L9.987 20.3235C9.018 21.1725 7.5 20.4825 7.5 19.194V4.80597C7.49975 4.51761 7.58263 4.23528 7.73871 3.99281C7.89479 3.75033 8.11746 3.55798 8.38004 3.4388C8.64262 3.31962 8.934 3.27865 9.21927 3.3208C9.50454 3.36295 9.77161 3.48644 9.9885 3.67647L18.2085 10.8705C18.3696 11.0113 18.4987 11.1849 18.5872 11.3797C18.6757 11.5745 18.7215 11.786 18.7215 12C18.7215 12.2139 18.6757 12.4254 18.5872 12.6202C18.4987 12.8151 18.3696 12.9887 18.2085 13.1295H18.21Z" />
        </svg>
        <span>live demo</span>
      </DemoLink>
      <GithubLink href={githubLink} target="_blank" figmaLink={figmaLink}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.15156 18.6281C8.15156 18.7219 8.04375 18.7969 7.90781 18.7969C7.75312 18.8109 7.64531 18.7359 7.64531 18.6281C7.64531 18.5344 7.75313 18.4594 7.88906 18.4594C8.02969 18.4453 8.15156 18.5203 8.15156 18.6281ZM6.69375 18.4172C6.66094 18.5109 6.75469 18.6187 6.89531 18.6469C7.01719 18.6937 7.15781 18.6469 7.18594 18.5531C7.21406 18.4594 7.125 18.3516 6.98438 18.3094C6.8625 18.2766 6.72656 18.3234 6.69375 18.4172ZM8.76562 18.3375C8.62969 18.3703 8.53594 18.4594 8.55 18.5672C8.56406 18.6609 8.68594 18.7219 8.82656 18.6891C8.9625 18.6562 9.05625 18.5672 9.04219 18.4734C9.02812 18.3844 8.90156 18.3234 8.76562 18.3375ZM11.85 0.375C5.34844 0.375 0.375 5.31094 0.375 11.8125C0.375 17.0109 3.64688 21.4594 8.32031 23.025C8.92031 23.1328 9.13125 22.7625 9.13125 22.4578C9.13125 22.1672 9.11719 20.5641 9.11719 19.5797C9.11719 19.5797 5.83594 20.2828 5.14688 18.1828C5.14688 18.1828 4.6125 16.8187 3.84375 16.4672C3.84375 16.4672 2.77031 15.7312 3.91875 15.7453C3.91875 15.7453 5.08594 15.8391 5.72812 16.9547C6.75469 18.7641 8.475 18.2437 9.14531 17.9344C9.25313 17.1844 9.55781 16.6641 9.89531 16.3547C7.275 16.0641 4.63125 15.6844 4.63125 11.175C4.63125 9.88594 4.9875 9.23906 5.7375 8.41406C5.61562 8.10938 5.21719 6.85312 5.85938 5.23125C6.83906 4.92656 9.09375 6.49688 9.09375 6.49688C10.0312 6.23438 11.0391 6.09844 12.0375 6.09844C13.0359 6.09844 14.0438 6.23438 14.9813 6.49688C14.9813 6.49688 17.2359 4.92188 18.2156 5.23125C18.8578 6.85781 18.4594 8.10938 18.3375 8.41406C19.0875 9.24375 19.5469 9.89062 19.5469 11.175C19.5469 15.6984 16.7859 16.0594 14.1656 16.3547C14.5969 16.725 14.9625 17.4281 14.9625 18.5297C14.9625 20.1094 14.9484 22.0641 14.9484 22.4484C14.9484 22.7531 15.1641 23.1234 15.7594 23.0156C20.4469 21.4594 23.625 17.0109 23.625 11.8125C23.625 5.31094 18.3516 0.375 11.85 0.375ZM4.93125 16.5422C4.87031 16.5891 4.88438 16.6969 4.96406 16.7859C5.03906 16.8609 5.14687 16.8938 5.20781 16.8328C5.26875 16.7859 5.25469 16.6781 5.175 16.5891C5.1 16.5141 4.99219 16.4812 4.93125 16.5422ZM4.425 16.1625C4.39219 16.2234 4.43906 16.2984 4.53281 16.3453C4.60781 16.3922 4.70156 16.3781 4.73438 16.3125C4.76719 16.2516 4.72031 16.1766 4.62656 16.1297C4.53281 16.1016 4.45781 16.1156 4.425 16.1625ZM5.94375 17.8312C5.86875 17.8922 5.89687 18.0328 6.00469 18.1219C6.1125 18.2297 6.24844 18.2437 6.30937 18.1688C6.37031 18.1078 6.34219 17.9672 6.24844 17.8781C6.14531 17.7703 6.00469 17.7563 5.94375 17.8312ZM5.40938 17.1422C5.33437 17.1891 5.33437 17.3109 5.40938 17.4188C5.48438 17.5266 5.61094 17.5734 5.67188 17.5266C5.74687 17.4656 5.74687 17.3438 5.67188 17.2359C5.60625 17.1281 5.48438 17.0813 5.40938 17.1422Z"
            fill="white"
          />
        </svg>
      </GithubLink>
      {figmaLink && (
        <FigmaLink href={figmaLink} target="_blank">
          <svg width="18" height="26" viewBox="0 0 18 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0)">
              <path
                d="M4.5009 25.9999C6.9844 25.9999 9 24.0586 9 21.6666V17.3333H4.5009C2.0174 17.3333 0.00180054 19.2746 0.00180054 21.6666C0.00180054 24.0586 2.0174 25.9999 4.5009 25.9999Z"
                fill="#0ACF83"
              />
              <path
                d="M0.00180054 13.0001C0.00180054 10.6081 2.0174 8.66675 4.5009 8.66675H9V17.3334H4.5009C2.0174 17.3334 0.00180054 15.3921 0.00180054 13.0001Z"
                fill="#A259FF"
              />
              <path
                d="M0.00408936 4.33333C0.00408936 1.94133 2.01969 0 4.50319 0H9.0023V8.66667H4.50319C2.01969 8.66667 0.00408936 6.72533 0.00408936 4.33333Z"
                fill="#F24E1E"
              />
              <path d="M9 0H13.4991C15.9826 0 17.9982 1.94133 17.9982 4.33333C17.9982 6.72533 15.9826 8.66667 13.4991 8.66667H9V0Z" fill="#FF7262" />
              <path
                d="M17.9982 13.0001C17.9982 15.3921 15.9826 17.3334 13.4991 17.3334C11.0156 17.3334 9 15.3921 9 13.0001C9 10.6081 11.0156 8.66675 13.4991 8.66675C15.9826 8.66675 17.9982 10.6081 17.9982 13.0001Z"
                fill="#1ABCFE"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="18" height="26" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </FigmaLink>
      )}
    </ButtonsWrapper>
  );
};

Links.propTypes = {};

export default Links;
