import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import Footer from "./Footer";

describe("Componente Footer", () => {
  // Comprueba que se muestre el año actual
  it("muestra el año actual automáticamente", () => {
    render(<Footer />);

    const anioActual = new Date().getFullYear();

    const copyright = screen.getByText(/Desarrollado por Jae/i);

    expect(copyright).toHaveTextContent(`${anioActual}`);
  });

  // Comprueba los enlaces externos
  it("muestra los enlaces de contacto", () => {
    render(<Footer />);

    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      "https://github.com/JaePewu",
    );

    expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/jael-yapur-ch/",
    );

    expect(
      screen.getByRole("link", { name: "Enviar correo electrónico" }),
    ).toHaveAttribute("href", "mailto:jael.yapur.ch@gmail.com");
  });

  it("permite navegar a contacto", () => {
    render(<Footer />);

    expect(screen.getByRole("link", { name: "Contactar" })).toHaveAttribute(
      "href",
      "#contacto",
    );
  });
});
