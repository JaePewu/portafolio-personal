import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import SeccionEstudios from "./SeccionEstudios";

// Datos ficticios para las pruebas
const estudiosPrueba = [
  {
    id: 1,
    institucion: "Instituto de prueba",
    estudio: "Analista Programador",
    fecha: "2025 - 2027",
  },
];

describe("Componente SeccionEstudios", () => {
  it("muestra correctamente un estudio", () => {
    render(<SeccionEstudios estudios={estudiosPrueba} />);

    expect(
      screen.getByRole("heading", { name: "Estudios" }),
    ).toBeInTheDocument();

    expect(screen.getByText("Analista Programador")).toBeInTheDocument();

    expect(screen.getByText("Instituto de prueba")).toBeInTheDocument();

    expect(screen.getByText("2025 - 2027")).toBeInTheDocument();
  });

  it("no muestra tarjetas si no hay estudios", () => {
    render(<SeccionEstudios estudios={[]} />);

    expect(
      screen.getByRole("heading", { name: "Estudios" }),
    ).toBeInTheDocument();

    expect(screen.queryByRole("heading", { level: 4 })).not.toBeInTheDocument();
  });
});
