import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { useRouter } from "next/router";
import BestiaryIdPage from "./[id]";
import { expect } from "@jest/globals";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("BestiaryIdPage", () => {
  const monsterData = [
    {
      index: "aboleth",
      name: "Aboleth",
    },
    {
      index: "acolyte",
      name: "Acolyte",
    },
    {
      index: "adult-black-dragon",
      name: "Adult Black Dragon",
    },
  ];

  it("renders the correct monster data for aboleth", () => {
    useRouter.mockImplementation(() => ({
      query: { id: "aboleth" },
    }));

    render(<BestiaryIdPage monsterData={monsterData} />);

    const monsterName = screen.getByText(/Aboleth/i);
    expect(monsterName).toBeInTheDocument();
  });

  it("renders the correct monster data for acolyte", () => {
    useRouter.mockImplementation(() => ({
      query: { id: "acolyte" },
    }));

    render(<BestiaryIdPage monsterData={monsterData} />);

    const monsterName = screen.getByText(/Acolyte/i);
    expect(monsterName).toBeInTheDocument();
  });

  it("renders the correct monster data for adult black dragon", () => {
    useRouter.mockImplementation(() => ({
      query: { id: "adult-black-dragon" },
    }));

    render(<BestiaryIdPage monsterData={monsterData} />);

    const monsterName = screen.getByText(/Adult Black Dragon/i);
    expect(monsterName).toBeInTheDocument();
  });
});
