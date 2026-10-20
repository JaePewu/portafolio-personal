import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import SeccionContacto from "./SeccionContacto";

describe("Componente SeccionContacto", () => {
  // Comprueba que la sección y el formulario aparezcan
  it("muestra la sección y sus campos", () => {
    render(<SeccionContacto />);

    expect(screen.getByText("HABLEMOS")).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Contacto",
      }),
    ).toBeInTheDocument();

    expect(screen.getByRole("textbox", { name: "Nombre" })).toBeInTheDocument();

    expect(
      screen.getByRole("textbox", { name: "Correo electrónico" }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("textbox", { name: "Mensaje" }),
    ).toBeInTheDocument();

    expect(screen.getByRole("button", { name: /Enviar/i })).toBeInTheDocument();
  });

  // Comprueba los enlaces profesionales
  it("muestra los enlaces de contacto", () => {
    render(<SeccionContacto />);

    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      "https://github.com/JaePewu",
    );

    expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/jael-yapur-ch/",
    );
  });
});
