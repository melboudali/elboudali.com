import React from "react";
import { render } from "@testing-library/react";
import { useStaticQuery } from "gatsby";

import Helmet from "react-helmet";
import SEO from "../../components/common/Seo";

beforeAll(() => {
  (useStaticQuery as jest.Mock).mockReturnValue({
    site: {
      siteMetadata: {
        title: "EL BOUDALI",
        description: "A Digital Garden And A Compendium Of My Projects",
        siteUrl: "https://elboudali.com",
      },
    },
  });
});

const renderSeo = () => {
  render(<SEO title="test title" description="test description" image="/testing-image.png" />);
  const { title, metaTags } = Helmet.peek();
  return { title, metaTags };
};

describe("Testing SEO component", () => {
  it("should render the title", () => {
    const { title, metaTags } = renderSeo();
    expect(title).toBe("Mohamed EL BOUDALI | test title");
    expect(metaTags[4].content).toBe("Mohamed EL BOUDALI | test title");
    expect(metaTags[10].content).toBe("Mohamed EL BOUDALI | test title");
  });

  it("should render the description", () => {
    const { metaTags } = renderSeo();

    expect(metaTags[0].content).toBe("test description");
    expect(metaTags[5].content).toBe("test description");
    expect(metaTags[11].content).toBe("test description");
  });

  it("should render image", () => {
    const { metaTags } = renderSeo();

    expect(metaTags[6].content).toBe("https://elboudali.com/testing-image.png");
    expect(metaTags[12].content).toBe("https://elboudali.com/testing-image.png");
  });

  it("should render website type and metatags length", () => {
    const { metaTags } = renderSeo();

    expect(metaTags[3].content).toBe("website");
    expect(metaTags.length).toBe(13);
  });
});
