import Home from "@/app/page";
import Filtros from "@/components/Filtros";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Page", () => {
  it("renders a heading", () => {
    render(<Filtros calback={(va) => {}} />);

    const heading = screen.getByRole("button");

    expect(heading).toBeInTheDocument();
  });
});
