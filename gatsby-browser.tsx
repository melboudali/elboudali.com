import React from "react";
import Layout from "./src/components/layout/layout";

interface wrapPageElementProps {
  element: React.ReactNode;
  props: Object;
}

export const wrapPageElement = ({ element, props }: wrapPageElementProps) => {
  console.log(typeof props);
  return <Layout {...props}>{element}</Layout>;
};
