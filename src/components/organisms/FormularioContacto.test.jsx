import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import FormularioContacto from "./FormularioContacto";

describe("Componente FormularioContacto", () => {
  // Comprueba que los campos sean obligatorios
  it("valida que los campos sean obligatorios", () => {
    render(<FormularioContacto />);

    const nombre = screen.getByRole("textbox", {
      name: "Nombre",
    });

    const correo = screen.getByRole("textbox", {
      name: "Correo electrónico",
    });

    const mensaje = screen.getByRole("textbox", {
      name: "Mensaje",
    });

    expect(nombre).toBeRequired();
    expect(correo).toBeRequired();
    expect(mensaje).toBeRequired();

    expect(mensaje).toHaveAttribute("minlength", "10");
  });

  // Comprueba el formato del correo
  it("detecta un correo electrónico inválido", () => {
    render(<FormularioContacto />);

    const correo = screen.getByRole("textbox", {
      name: "Correo electrónico",
    });

    fireEvent.change(correo, {
      target: { value: "ana@" },
    });

    expect(correo).toBeInvalid();
  });

  // Comprueba el envío válido y la confirmación
  it("muestra una confirmación al completar el formulario", async () => {
    render(<FormularioContacto />);

    const nombre = screen.getByRole("textbox", {
      name: "Nombre",
    });

    const correo = screen.getByRole("textbox", {
      name: "Correo electrónico",
    });

    const mensaje = screen.getByRole("textbox", {
      name: "Mensaje",
    });

    fireEvent.change(nombre, {
      target: { value: "Ana" },
    });

    fireEvent.change(correo, {
      target: { value: "ana@gmail.com" },
    });

    fireEvent.change(mensaje, {
      target: { value: "Hola, quisiera conocer tus proyectos." },
    });

    //fireEvent simula interacciones del usuario
    fireEvent.click(screen.getByRole("button", { name: /Enviar/i }));

    const confirmacion = await screen.findByRole("status");

    expect(confirmacion).toHaveTextContent("¡Gracias, Ana!");
  });
});
