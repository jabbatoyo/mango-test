import Range from "@/app/ui/components/Range";
import { render, screen } from "@testing-library/react";

describe("Test Range component", () => {
  test("This range is render", () => {
    render(<Range editable />);
    const container = screen.getByTestId("ranger-container");
    expect(container).toBeTruthy();
  });

  test("This range is editable", () => {
    render(<Range editable />);
    const input = screen.getAllByTestId("input-element");
    expect(input).toBeTruthy();
  });

  test("This range is not editable", () => {
    render(<Range editable={false} />);
    const spanText = screen.getAllByTestId("span-text-element");
    expect(spanText).toBeTruthy();
  });
});
