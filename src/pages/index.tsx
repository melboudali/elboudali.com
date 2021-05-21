import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";

interface indexProps {}

const index = ({}: indexProps) => {
  console.log("mounted");
  return (
    <div>
      This is index Component/Page
      <StaticImage
        src="../assets/images/FB_IMG_1438101555768.jpg"
        alt=""
        placeholder="blurred"
        layout="fixed"
        width={200}
        height={200}
      />
    </div>
  );
};

index.propTypes = {};

export default index;
