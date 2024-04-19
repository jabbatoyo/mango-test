import Card from "@/app/ui/components/Card";
import { render, screen } from "@testing-library/react";

describe("Card test component", () => {
  const data = {
    name: "Camisa 100% lino cuello mao",
    price: "35.00",
    img: "https://st.mngbcn.com/rcs/pics/static/T6/fotos/S20/67077907_08.jpg?ts=1708693426238&imwidth=499&imdensity=2",
  };
  beforeEach(() => {
    render(<Card {...data} />);
  });

  test("Render component card", () => {
    const card = screen.getAllByTestId("card-content");
    expect(card).toBeTruthy();
  });

  test("Card contain correct product name Camisa 100% lino cuello mao", () => {
    const text = screen.getByText("Camisa 100% lino cuello mao");
    expect(text).toBe;
  });
});
