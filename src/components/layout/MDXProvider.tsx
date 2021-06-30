import React from "react";
import { MDXProvider } from "@mdx-js/react";
import PageTitle from "../common/PageTitle";
const shortcodes = { PageTitle };

interface MDXProviderProps {
  children: object;
}

export default ({ children }: MDXProviderProps) => <MDXProvider components={shortcodes}>{children}</MDXProvider>;
