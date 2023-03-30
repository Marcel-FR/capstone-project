import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import SpellsPage from "./index";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("SpellsPage", () => {
  const spells = [
    {
      index: "acid-arrow",
      name: "Acid Arrow",
      level: 2,
      school: {
        name: "Evocation",
      },
    },
    {
      index: "fireball",
      name: "Fireball",
      level: 3,
      school: {
        name: "Evocation",
      },
    },
    {
      index: "magic-missile",
      name: "Magic Missile",
      level: 1,
      school: {
        name: "Evocation",
      },
    },
  ];

  it("renders the correct spell names", () => {
    render(<SpellsPage spells={spells} />);

    const acidArrow = screen.queryByText(/Acid Arrow/i);
    const fireball = screen.queryByText(/Fireball/i);
    const magicMissile = screen.queryByText(/Magic Missile/i);

    expect(acidArrow).toBeInTheDocument();
    expect(fireball).toBeInTheDocument();
    expect(magicMissile).toBeInTheDocument();
  });

  it("navigates to the correct spell page when a spell name is clicked", () => {
    const pushMock = jest.fn();
    useRouter.mockImplementation(() => ({
      push: pushMock,
    }));

    render(<SpellsPage spells={spells} />);

    const fireball = screen.getByText(/Fireball/i);
    fireEvent.click(fireball);

    expect(pushMock).toHaveBeenCalledWith("/spells/fireball");
  });
});
