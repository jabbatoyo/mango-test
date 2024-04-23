import RangeComponent from "@/app/ui/components/RangeComponent";
import { render, screen } from "@testing-library/react";

describe("Test Range component", () => {
  test("This range is render", () => {
    render(<RangeComponent type="normal" />);
    const container = screen.getByTestId("ranger-container");
    expect(container).toBeTruthy();
  });

  test("This range is editable", () => {
    render(<RangeComponent type="normal" />);
    const input = screen.getAllByTestId("input-element");
    expect(input).toBeTruthy();
  });

  test("This range is not editable", () => {
    render(<RangeComponent type="fixed" />);
    const spanText = screen.getAllByTestId("span-text-element");
    expect(spanText).toBeTruthy();
  });
});
