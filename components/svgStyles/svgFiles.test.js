import { render, screen, fireEvent } from "@testing-library/react";
import { useRouter } from "next/router";
import { SpellBackArrowIcon, AddIcon, CloseIcon } from "./svgFiles";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("SpellBackArrowIcon", () => {
  it("navigates to '/' route when clicked", () => {
    const pushMock = jest.fn();
    useRouter.mockReturnValue({ push: pushMock });

    render(<SpellBackArrowIcon />);

    const backArrow = screen.getByTestId("back-arrow");
    fireEvent.click(backArrow);

    expect(pushMock).toHaveBeenCalledWith("/");
  });
});

describe("AddIcon", () => {
  it("navigates to '/bestiary/monsterCreation' route when clicked", () => {
    const pushMock = jest.fn();
    useRouter.mockReturnValue({ push: pushMock });

    render(<AddIcon />);

    const addIcon = screen.getByTestId("add-icon");
    fireEvent.click(addIcon);

    expect(pushMock).toHaveBeenCalledWith("/bestiary/monsterCreation");
  });
});

describe("CloseIcon", () => {
  it("navigates to '/bestiary' route when clicked", () => {
    const pushMock = jest.fn();
    useRouter.mockReturnValue({ push: pushMock });

    render(<CloseIcon />);

    const closeIcon = screen.getByTestId("close-icon");
    fireEvent.click(closeIcon);

    expect(pushMock).toHaveBeenCalledWith("/bestiary");
  });
});
