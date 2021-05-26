import React, { useRef } from "react";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/common/Seo";
import styled from "styled-components";
import useAppearOnScroll from "../hook/useAppearOnScroll";
import IconWithTitle from "../components/about/IconWithTitle";
import Icons from "../components/about/Icons";
import config from "../data/config";
import Button from "../components/about/Button";
import { graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";

const IndexWrapper = styled.div``;

const ShortAboutWrapper = styled.div`
  --flexDirection: column;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: var(--flexDirection);
  gap: 24px;
  @media (min-width: 833px) {
    --flexDirection: row;
  }
`;

const ShortAbout = styled.div`
  --alignItemsValue: center;
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: var(--alignItemsValue);
  flex: 2;
  height: 100%;
  @media (min-width: 833px) {
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

const ProfileName = styled.h1`
  --fontSize: 1.8rem;
  color: ${({ theme }) => theme.titleColor};
  font-size: var(--fontSize);
  font-weight: 700;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  @media (min-width: 375px) {
    --fontSize: 1.875rem;
  }
`;

const ShortAboutText = styled.p`
  --textAlignValue: center;
  color: ${({ theme }) => theme.titleColor};
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 0.1em;
  line-height: 24px;

  text-align: var(--textAlignValue);
  span {
    margin: 0 5px;
    color: var(--red);
  }
  @media (min-width: 833px) {
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

const LongAboutWrapper = styled.div`
  margin-top: 50px;
  p {
    text-align: justify;
    font-weight: 300;
    line-height: 24px;
    font-size: 1rem;
    letter-spacing: 0.1em;
    color: ${({ theme }) => theme.titleColor};
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;

const CertificatesDiplomasAndDegreesWrapper = styled.div``;

const index = () => {
  // const LongAboutWrapperRef = useRef<HTMLDivElement>(null);
  // const { appear } = useAppearOnScroll(LongAboutWrapperRef);
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
          }
        }
      }
    }
  `);

  return (
    <IndexWrapper>
      <Seo title="A B O U T" />
      <ShortAboutWrapper>
        <ImageWrapper>
          <StaticImage src="../static/images/elboudali.jpg" alt="EL BOUDALI" className="my_image" placeholder="blurred" />
        </ImageWrapper>
        <ShortAbout>
          <ProfileName>{config.fullName}</ProfileName>
          <IconWithTitle type="role" />
          <ShortAboutText>
            I<span>❤</span>coding w/ JavaScript, TypeScript, React, Gatsby, Next, graphQL and Express.
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
            <Button url={allFile.edges[0].node.publicURL} />
          </IconsWrapper>
        </ShortAbout>
      </ShortAboutWrapper>
      <LongAboutWrapper>
        <p>
          I'm a self-taught Full Stack Developer, proficient in Front End, with 2+ years of hands-on experience designing, developing, and
          implementing applications and solutions using a range of technologies.
        </p>
        <p>
          Seeking to leverage broad development experience and hands-on technical expertise in a challenging role as a Full Stack or a Front End
          Developer.
        </p>
        <p>I love open source and building side projects using JavaScript tools.</p>
        <p>This website is my digital garden — a compendium of the things I've learned and created over the years.</p>
      </LongAboutWrapper>
      <CertificatesDiplomasAndDegreesWrapper></CertificatesDiplomasAndDegreesWrapper>
    </IndexWrapper>
  );
};

index.propTypes = {};

export default index;
