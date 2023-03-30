import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Header } from "./Header";
import { expect } from "@jest/globals";

jest.mock("next/router", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe("Header component", () => {
  it("displays the correct title", () => {
    const pageTitle = "Bestiary";
    const { getByText } = render(<Header pageTitle={pageTitle} />);
    const titleElement = getByText(pageTitle);
    expect(titleElement).toBeInTheDocument();
  });
});
