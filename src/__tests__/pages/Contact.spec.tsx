import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { useStaticQuery } from "gatsby";
import Contact from "../../pages/contact";

beforeEach(() => {
  (useStaticQuery as jest.Mock).mockReturnValue(() => ({
    site: {
      siteMetadata: {
        title: `Default Starter`,
      },
    },
  }));
});

afterEach(() => {
  cleanup();
});

describe("Testing contact form inputs", () => {
  it("expects a disabled button", () => {
    render(<Contact />);
    expect(screen.getByRole("button", { name: /submit/i })).toBeDisabled();
  });

  it("expects an enabled submit button after entring Name, Email, and Message", () => {
    render(<Contact />);

    fireEvent.change(screen.getByLabelText("your name"), { target: { value: "John Doe" } });
    fireEvent.change(screen.getByLabelText("your email"), { target: { value: "jhon_doe@email.com" } });
    fireEvent.change(screen.getByLabelText("your message"), {
      target: {
        value:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum dolores natus saepe quidem voluptatem aspernatur quasi possimus, rem voluptate, autem animi cumque accusantium facere optio debitis vitae mollitia. Labore, exercitationem.",
      },
    });

    expect(screen.getByLabelText("your name")).toHaveValue("John Doe");
    expect(screen.getByLabelText("your email")).toHaveValue("jhon_doe@email.com");
    expect(screen.getByLabelText("your message")).toHaveValue(
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum dolores natus saepe quidem voluptatem aspernatur quasi possimus, rem voluptate, autem animi cumque accusantium facere optio debitis vitae mollitia. Labore, exercitationem."
    );

    expect(screen.getByRole("button", { name: /submit/i })).toBeEnabled();
  });
});

describe("Testing contact form submit", () => {
  it("returns an error if name value length less or equal to 4", () => {
    render(<Contact />);

    fireEvent.change(screen.getByLabelText("your name"), { target: { value: "John" } });
    fireEvent.change(screen.getByLabelText("your email"), { target: { value: "j" } });
    fireEvent.change(screen.getByLabelText("your message"), {
      target: {
        value: "L.",
      },
    });

    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(screen.getByLabelText("your name")).toHaveValue("John");
    expect(screen.getByText("name field length should be greater than 4."));
  });

  it("returns an error if email value length less or equal to 10", () => {
    render(<Contact />);

    fireEvent.change(screen.getByLabelText("your name"), { target: { value: "John Doe" } });
    fireEvent.change(screen.getByLabelText("your email"), { target: { value: "j" } });
    fireEvent.change(screen.getByLabelText("your message"), {
      target: {
        value: "L.",
      },
    });

    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(screen.getByLabelText("your email")).toHaveValue("j");
    expect(screen.getByText("email field length should be greater than 10."));
  });

  it("returns an error if email value length less or equal to 10", () => {
    render(<Contact />);

    fireEvent.change(screen.getByLabelText("your name"), { target: { value: "John Doe" } });
    fireEvent.change(screen.getByLabelText("your email"), { target: { value: "jhon_doe@email.com" } });
    fireEvent.change(screen.getByLabelText("your message"), {
      target: {
        value: "L.",
      },
    });

    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(screen.getByLabelText("your message")).toHaveValue("L.");
    expect(screen.getByText("message field length should be greater than 20."));
  });

  it("should test if the global fetch has been called", async () => {
    render(<Contact />);

    global.fetch = jest.fn().mockImplementation();

    fireEvent.change(screen.getByLabelText("your name"), { target: { value: "John Doe" } });
    fireEvent.change(screen.getByLabelText("your email"), { target: { value: "jhon_doe@email.com" } });
    fireEvent.change(screen.getByLabelText("your message"), {
      target: {
        value:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum dolores natus saepe quidem voluptatem aspernatur quasi possimus, rem voluptate, autem animi cumque accusantium facere optio debitis vitae mollitia. Labore, exercitationem.",
      },
    });

    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(global.fetch).toBeCalled();
    (global.fetch as jest.Mock).mockClear();
  });
});
