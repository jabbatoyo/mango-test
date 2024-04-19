import Sizes from "@/app/ui/components/Sizes";
import { render, screen } from "@testing-library/react";

describe("Test Range component", () => {
  beforeEach(() => {
    render(<Sizes />);
  });

  test("This range is render", () => {
    const container = screen.getByTestId("size-container");
    expect(container).toBeTruthy();
  });

  test("Render 5 checkbox.", () => {
    const checkbox = screen.getAllByTestId("input-checkbox-size-element");
    expect(checkbox).toHaveLength(5);
  });
});
