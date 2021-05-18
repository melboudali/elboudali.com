import React from "react";
import Layout from "./src/components/layout/Layout";
import { WrapPageElementBrowserArgs } from "gatsby";

// interface wrapPageElementProps {
//   element: React.ReactNode;
//   props: Object;
// }

export const wrapPageElement = ({
  element,
  props,
}: WrapPageElementBrowserArgs) => <Layout {...props}>{element}</Layout>;
