import { render, screen } from "@testing-library/react";
import CircleChart from "../app/components/CircleChart";

const caption = "I'm a caption";
const size = 180;
const progress = 80;

it("renders caption", () => {
  render(<CircleChart size={size} progress={progress} caption={caption} />);
  
  const captionFound = screen.getByText(caption);
  expect(captionFound).toBeVisible();
});

it("renders component with correct size", () => {
  render(<CircleChart size={size} progress={progress} caption={caption} />);

  const sizeFound = screen.getByTestId("test-svg-wrapper");
  expect(sizeFound).toHaveStyle({ width: size + "px", height: size + "px" });
});

it("renders percentage with % char", () => {
  render(<CircleChart size={size} progress={progress} caption={caption} />);

  const percentageFound = screen.getByText(progress + "%");
  expect(percentageFound).toBeVisible();
})