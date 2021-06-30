import React, { useRef } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import about from "../data/about";
import Seo from "../components/common/Seo";
import useAppearOnScroll from "../hook/useAppearOnScroll";
import IconWithTitle from "../components/about/IconWithTitle";
import Icons from "../components/about/Icons";
import Button from "../components/about/Button";
import SchoolDegree from "../components/about/SchoolDegree";
import styled from "styled-components";
import PageTitle from "../components/common/PageTitle";
import { AllFileQuery } from "../../gatsby-graphql";

const IndexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const ShortAboutWrapper = styled.section`
  --flexDirection: column;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: var(--flexDirection);
  gap: 24px;
  @media (min-width: 850px) {
    --flexDirection: row;
  }
`;

const ShortAbout = styled.div`
  --alignItemsValue: center;
  display: flex;
  align-items: var(--alignItemsValue);
  flex-direction: column;
  gap: 10px;
  flex: 2;
  height: 100%;
  @media (min-width: 850px) {
    --alignItemsValue: flex-start;
  }
`;

const ImageWrapper = styled.div`
  max-width: 256px;
  max-height: 256px;
  overflow: hidden;
  border-radius: 50%;
  .my_image {
    transform: scale(1.9);
    transform-origin: 35% 15%;
  }
`;

const ShortAboutText = styled.p`
  --textAlignValue: center;
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 0.1em;
  line-height: 24px;
  text-align: var(--textAlignValue);
  color: ${({ theme }) => theme.titleColor};
  margin: 0;
  span {
    margin: 0 5px;
    color: var(--red);
  }
  @media (min-width: 850px) {
    --textAlignValue: left;
  }
`;

const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
`;

const LongAboutWrapper = styled.section`
  p {
    font-size: 1rem;
    font-weight: 300;
    line-height: 24px;
    letter-spacing: 0.1em;
    text-align: justify;
    color: ${({ theme }) => theme.titleColor};
    margin: 0;
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;

const CertificatesDiplomasAndDegreesWrapper = styled.section`
  --alignSelf: center;
  display: flex;
  flex-direction: column;
  align-self: var(--alignSelf);
  gap: 25px;
  @media (min-width: 750px) {
    --alignSelf: flex-start;
  }
`;

const CDADTitle = styled.h1`
  --fontSize: 1.05rem;
  display: flex;
  align-items: center;
  gap: 15px;
  font-weight: 700;
  font-size: var(--fontSize);
  text-align: justify;
  margin: 0;
  svg > path {
    fill: ${({ theme }) => theme.titleColor};
  }
  span {
    color: ${({ theme }) => theme.titleColor};
    letter-spacing: -0.04em;
    text-transform: capitalize;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-start;
    width: 15px;
    height: 15px;
    transform: translateX(-10px);
    font-size: 0.6875rem;
    border-radius: 4px;
    background-color: var(--secondaryColor);
  }
  @media (min-width: 375px) {
    --fontSize: 1.25rem;
  }
`;

const Index = () => {
  // const LongAboutWrapperRef = useRef<HTMLDivElement>(null);
  // const { appear } = useAppearOnScroll(LongAboutWrapperRef);
  const { allFile }: AllFileQuery = useStaticQuery(graphql`
    query allFile {
      allFile(filter: { extension: { eq: "pdf" } }) {
        nodes {
          publicURL
        }
      }
    }
  `);

  return (
    <IndexWrapper>
      <Seo title="A B O U T" />
      <ShortAboutWrapper>
        <ImageWrapper>
          <StaticImage src="../assets/images/image/elboudali.jpg" alt="EL BOUDALI" className="my_image" />
        </ImageWrapper>
        <ShortAbout>
          <PageTitle>{about.fullName}</PageTitle>
          <IconWithTitle type="role" />
          <ShortAboutText>
            {about.summary.short[0]}
            <span>{about.summary.short[1]}</span>
            {about.summary.short[2]}
          </ShortAboutText>
          <IconWithTitle type="location" />
          <IconsWrapper>
            <Icons />
            <Icons name="Linkedin" />
            <Icons name="Github" />
            <Icons name="Twitter" />
            <Icons name="Freecodecamp" />
            <Icons name="Hackerrank" />
            <Icons name="Reddit" />
            <Button url={allFile.nodes[0].publicURL!} />
          </IconsWrapper>
        </ShortAbout>
      </ShortAboutWrapper>
      <LongAboutWrapper>
        {about.summary.long.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </LongAboutWrapper>
      <CertificatesDiplomasAndDegreesWrapper>
        <CDADTitle>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 21.5624C14.8368 21.5624 14.6764 21.5198 14.5348 21.4388L6.32813 16.7483C6.25682 16.7072 6.17592 16.6855 6.09358 16.6855C6.01124 16.6856 5.93036 16.7073 5.85908 16.7485C5.7878 16.7897 5.72863 16.849 5.68754 16.9204C5.64645 16.9917 5.62488 17.0726 5.625 17.155V21.5624C5.62486 21.7297 5.66951 21.894 5.7543 22.0383C5.8391 22.1825 5.96096 22.3015 6.10723 22.3827L14.5447 27.0702C14.684 27.1476 14.8407 27.1882 15 27.1882C15.1593 27.1882 15.316 27.1476 15.4553 27.0702L23.8928 22.3827C24.039 22.3015 24.1609 22.1825 24.2457 22.0383C24.3305 21.894 24.3751 21.7297 24.375 21.5624V17.155C24.3751 17.0726 24.3535 16.9917 24.3125 16.9204C24.2714 16.849 24.2122 16.7897 24.1409 16.7485C24.0696 16.7073 23.9888 16.6856 23.9064 16.6855C23.8241 16.6855 23.7432 16.7072 23.6719 16.7483L15.4652 21.4388C15.3236 21.5198 15.1632 21.5624 15 21.5624Z" />
            <path d="M29.0578 11.1621V11.1556C29.0426 11.007 28.9922 10.8642 28.9107 10.739C28.8291 10.6139 28.7189 10.51 28.589 10.4361L15.464 2.93608C15.3224 2.8551 15.162 2.8125 14.9988 2.8125C14.8356 2.8125 14.6753 2.8551 14.5336 2.93608L1.40858 10.4361C1.26513 10.5181 1.14591 10.6366 1.06299 10.7795C0.980073 10.9224 0.936401 11.0847 0.936401 11.2499C0.936401 11.4152 0.980073 11.5775 1.06299 11.7204C1.14591 11.8633 1.26513 11.9818 1.40858 12.0638L14.5336 19.5638C14.6753 19.6448 14.8356 19.6874 14.9988 19.6874C15.162 19.6874 15.3224 19.6448 15.464 19.5638L27.0117 12.9656C27.0296 12.9553 27.0498 12.9499 27.0704 12.9499C27.091 12.9499 27.1113 12.9553 27.1291 12.9657C27.1469 12.976 27.1617 12.9909 27.172 13.0088C27.1822 13.0266 27.1876 13.0469 27.1875 13.0675V21.5361C27.1875 22.0406 27.5754 22.4736 28.0799 22.4988C28.2066 22.5049 28.3333 22.4852 28.4522 22.4409C28.5712 22.3966 28.6798 22.3286 28.7717 22.2411C28.8636 22.1535 28.9367 22.0482 28.9867 21.9316C29.0367 21.8149 29.0625 21.6894 29.0625 21.5624V11.2499C29.0624 11.2206 29.0609 11.1913 29.0578 11.1621Z" />
          </svg>
          <span>Certificates, Diplomas, and Degrees</span>
          <div>{about.schoolDegrees.length}</div>
        </CDADTitle>
        <SchoolDegree />
      </CertificatesDiplomasAndDegreesWrapper>
    </IndexWrapper>
  );
};

export default Index;
