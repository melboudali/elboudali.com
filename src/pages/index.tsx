import React, { useRef } from "react";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/common/Seo";
import styled from "styled-components";
import useAppearOnScroll from "../hook/useAppearOnScroll";
import PropTypes from "prop-types";
import IconWithTitle from "../components/about/IconWithTitle";
import Icons from "../components/about/Icons";
import config from "../data/config";
import Button from "../components/about/Button";
import { graphql } from "gatsby";

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
  color: ${({ theme }) => theme.titleColor};
  font-size: 1.875rem;
  font-weight: 700;
  letter-spacing: -0.04em;
  text-transform: uppercase;
`;

const ShortAboutText = styled.p`
  --textAlignValue: center;
  color: ${({ theme }) => theme.titleColor};
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 0.1em;
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
  margin-top: 500px;
`;

const CertificatesDiplomasAndDegreesWrapper = styled.div``;

interface indexProps {
  data: any;
}

const index = ({ data }: indexProps) => {
  // const LongAboutWrapperRef = useRef<HTMLDivElement>(null);
  // const { appear } = useAppearOnScroll(LongAboutWrapperRef);
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
            <Button url={data.allFile.edges[0].node.publicURL} />
          </IconsWrapper>
        </ShortAbout>
      </ShortAboutWrapper>
      <LongAboutWrapper></LongAboutWrapper>
      <CertificatesDiplomasAndDegreesWrapper></CertificatesDiplomasAndDegreesWrapper>
    </IndexWrapper>
  );
};

index.propTypes = {};

export default index;

export const query = graphql`
  query($extention: String = "pdf") {
    allFile(filter: { extension: { eq: $extention } }) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`;
