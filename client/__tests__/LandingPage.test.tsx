// __tests__/LandingPage.test.tsx

import { render, screen } from "@testing-library/react";
import LandingPage from "../src/app/page";

describe("LandingPage", () => {
  it('renders the main hero text "Space Explorer"', () => {
    render(<LandingPage />);
    // Since your hero text is “Space Explorer”
    expect(screen.getByText("Space Explorer")).toBeInTheDocument();
  });

  it('renders the "Launch" button', () => {
    render(<LandingPage />);
    // We look for the button text or role
    expect(screen.getByRole("button", { name: "Launch" })).toBeInTheDocument();
  });

  it('renders the planet image with alt text "Planet"', () => {
    render(<LandingPage />);
    // We can query by alt text
    const planetImg = screen.getByAltText("Planet");
    expect(planetImg).toBeInTheDocument();
  });

  it('renders the rocket image with alt text "Rocket"', () => {
    render(<LandingPage />);
    // Similar approach for the rocket
    const rocketImg = screen.getByAltText("Rocket");
    expect(rocketImg).toBeInTheDocument();
  });
});
