import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import Index from "../../pages/index";
import * as Gatsby from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

beforeEach(() => {
  const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");
  useStaticQuery.mockImplementation(() => ({ allFile: { nodes: [{ publicURL: "file url" }] } }));
});

afterEach(() => {
  cleanup();
});

describe("Testing Index Page", () => {
  it("should render social links", () => {
    render(<Index />);
    expect(screen.getByTitle("Email")).toHaveAttribute("href", "mailto:contact@elboudali.com");
    expect(screen.getByTitle("Linkedin")).toHaveAttribute("href", "https://www.linkedin.com/in/elboudali");
    expect(screen.getByTitle("Github")).toHaveAttribute("href", "https://github.com/melboudali");
    expect(screen.getByTitle("Twitter")).toHaveAttribute("href", "https://twitter.com/moelboudali");
    expect(screen.getByTitle("Freecodecamp")).toHaveAttribute(
      "href",
      "https://www.freecodecamp.org/elboudali"
    );
    expect(screen.getByTitle("Hackerrank")).toHaveAttribute("href", "https://www.hackerrank.com/med_sneaky");
  });

  it("should check certifs links", () => {
    render(<Index />);
    expect(screen.getAllByRole("link", { name: "certification" })[0]).toHaveAttribute(
      "href",
      "https://www.freecodecamp.org/certification/elboudali/front-end-libraries"
    );
    expect(screen.getAllByRole("link", { name: "certification" })[1]).toHaveAttribute(
      "href",
      "https://www.freecodecamp.org/certification/elboudali/javascript-algorithms-and-data-structures"
    );
    expect(screen.getAllByRole("link", { name: "certification" })[2]).toHaveAttribute(
      "href",
      "https://www.freecodecamp.org/certification/elboudali/responsive-web-design"
    );
  });

  //   it("should render rwd", () => {
  //     Object.defineProperty(window, "matchMedia", {
  //       writable: true,
  //       value: jest.fn().mockImplementation((query) => ({
  //         matches: false,
  //         media: query,
  //         onchange: null,
  //         addListener: jest.fn(), // Deprecated
  //         removeListener: jest.fn(), // Deprecated
  //         addEventListener: jest.fn(),
  //         removeEventListener: jest.fn(),
  //         dispatchEvent: jest.fn(),
  //       })),
  //     });
  //     window.matchMedia("(min-width: 850px)").matches;
  //     render(<Index />);
  //     expect(screen.getByTestId("ShortAboutWrappertid")).toHaveStyle({ "flex-direction": "row" });
  //   });
});
