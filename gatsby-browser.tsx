import React from "react";
import Layout from "./src/components/layout";

interface wrapPageElementInterface {
  element: React.ReactNode;
  props: Object;
}

export const wrapPageElement = ({ element, props }: wrapPageElementInterface) => <Layout {...props}>{element}</Layout>;
