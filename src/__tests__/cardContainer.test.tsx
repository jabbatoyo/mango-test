import CardContainer from "@/app/ui/components/CardContainer";
import { render, screen, waitFor } from "@testing-library/react";

describe("Test cardContainer component", () => {
  beforeEach(() => {
    render(<CardContainer />);
  });

  test("Render component card container", async () => {
    await waitFor(() => {
      expect(screen.getByTestId("card-container")).toBeTruthy();
    });
  });

  test("Render component card container render all element 3 card", async () => {
    await waitFor(() => {
      expect(screen.getAllByTestId("card-content")).toHaveLength(3);
    });
  });
});
