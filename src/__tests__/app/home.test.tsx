// Filtros.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Filtros from "@/components/Filtros";

// jest.mock("next/router", () => ({
//   useRouter: jest.fn(),
// }));

// jest.mock(
//   "next/link",
//   () =>
//     ({ children, href }: { children: React.ReactNode; href: string }) =>
//       <a href={href}>{children}</a>
// );

describe("Filtros Component", () => {
  it("debe renderizar correctamente", () => {
    render(<Filtros calback={jest.fn()} />);

    expect(screen.getByPlaceholderText("Buscar")).toBeInTheDocument();
    expect(screen.getByText("Crear")).toBeInTheDocument();
  });

  it("debe llamar a calback con el valor correcto al enviar el formulario", () => {
    const mockCalback = jest.fn();
    render(<Filtros calback={mockCalback} />);

    const inputElement = screen.getByPlaceholderText(
      "Buscar"
    ) as HTMLInputElement;
    const buttonElement = screen.getByRole("button", { name: "Buscar" });

    // Simula escribir en el input
    fireEvent.change(inputElement, { target: { value: "test value" } });
    expect(inputElement.value).toBe("test value");

    // Simula el envío del formulario
    fireEvent.click(buttonElement);

    expect(mockCalback).toHaveBeenCalledWith("test value");
  });

  it("debe renderizar el enlace a crear correctamente", () => {
    render(<Filtros calback={jest.fn()} />);

    const linkElement = screen.getByText("Crear");
    expect(linkElement).toHaveAttribute("href", "/crear");
  });
});
