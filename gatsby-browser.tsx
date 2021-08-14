import "prismjs/themes/prism-tomorrow.css";
import React from "react";
import Layout from "./src/components/layout";

interface wrapPageElementInterface {
  element: React.ReactNode;
  props: object;
}

export const registerServiceWorker = () => true;

export const wrapPageElement = ({ element, props }: wrapPageElementInterface) => <Layout {...props}>{element}</Layout>;
