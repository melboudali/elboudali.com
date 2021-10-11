import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import Index from "../../pages/index";
import * as Gatsby from "gatsby";

beforeEach(() => {
  const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");
  useStaticQuery.mockImplementation(() => ({ allFile: { nodes: [{ publicURL: "file url" }] } }));
});

afterEach(() => {
  cleanup();
});

describe("Testing Index Page", () => {
  it("render social links", () => {
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
});
