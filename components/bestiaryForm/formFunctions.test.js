import { toBeInTheDocument } from "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { AC, HP, Speed } from "./formFunctions";

describe("AC component", () => {
  it("renders an input field with correct props", () => {
    render(<AC />);

    const inputField = screen.getByPlaceholderText("e.g. 10 (dex)");

    expect(inputField).toBeInTheDocument();
    expect(inputField).toHaveAttribute("type", "text");
    expect(inputField).toHaveAttribute("name", "armor_class");
    expect(inputField).toBeRequired();
    expect(inputField).toHaveAttribute("maxlength", "15");
  });
});

describe("HP component", () => {
  it("renders an input field with correct props", () => {
    render(<HP />);

    const inputField = screen.getByPlaceholderText("e.g. 9 (2d8)");

    expect(inputField).toBeInTheDocument();
    expect(inputField).toHaveAttribute("type", "text");
    expect(inputField).toHaveAttribute("name", "hit_points");
    expect(inputField).toBeRequired();
    expect(inputField).toHaveAttribute("maxlength", "15");
  });
});

describe("Speed component", () => {
  it("renders an input field with correct props", () => {
    render(<Speed />);

    const inputField = screen.getByPlaceholderText(
      "e.g. 30ft., fly 60ft., ..."
    );

    expect(inputField).toBeInTheDocument();
    expect(inputField).toHaveAttribute("type", "text");
    expect(inputField).toHaveAttribute("name", "speed");
    expect(inputField).toBeRequired();
    expect(inputField).toHaveAttribute("maxlength", "25");
  });
});
