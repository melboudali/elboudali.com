import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/common/Seo";
import styled from "styled-components";
import PropTypes from "prop-types";

const IndexWrapper = styled.div``;

const ShortAboutWrapper = styled.div``;

const ImageWrapper = styled.div`
  width: 256px;
  height: 256px;
  overflow: hidden;
  border-radius: 50%;
  .my_image {
    transform: scale(1.9);
    transform-origin: 35% 15%;
  }
`;

const LongAboutWrapper = styled.div``;

const CertificatesDiplomasAndDegreesWrapper = styled.div``;

interface indexProps {}

const index = ({}: indexProps) => {
  console.log("mounted");
  return (
    <IndexWrapper>
      <Seo title="A B O U T" />
      <ShortAboutWrapper>
        <ImageWrapper>
          <StaticImage
            src="../static/images/FB_IMG_1438101555768.jpg"
            alt="EL BOUDALI"
            className="my_image"
            placeholder="blurred"
          />
        </ImageWrapper>
      </ShortAboutWrapper>
      <LongAboutWrapper></LongAboutWrapper>
      <CertificatesDiplomasAndDegreesWrapper></CertificatesDiplomasAndDegreesWrapper>
    </IndexWrapper>
  );
};

index.propTypes = {};

export default index;
