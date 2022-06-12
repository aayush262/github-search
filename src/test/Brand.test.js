import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Brand from "./../Components/Brand";

describe("Brant Test", () => {
  it("renders brand text", () => {
    render(<Brand />, { wrapper: BrowserRouter });
    const displayElement = screen.getByText("Github Search", {
      exact: true,
    });
    const logo = screen.getByRole("img");
    expect(displayElement).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
  });
});
