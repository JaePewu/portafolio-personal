import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import SeccionExperiencia from "./SeccionExperiencia";

// Datos ficticios para las pruebas
const experienciasPrueba = [
  {
    id: 1,
    cargo: "Desarrolladora Front-End",
    empresa: "Empresa de prueba",
    fechaInicio: "2025",
    fechaTermino: "2026",
    descripcion: "Desarrollo de interfaces web.",
  },
];

describe("Componente SeccionExperiencia", () => {
  it("muestra correctamente una experiencia", () => {
    render(<SeccionExperiencia experiencias={experienciasPrueba} />);

    expect(
      screen.getByRole("heading", { name: "Experiencia" }),
    ).toBeInTheDocument();

    expect(screen.getByText("Desarrolladora Front-End")).toBeInTheDocument();

    expect(screen.getByText("Empresa de prueba")).toBeInTheDocument();

    expect(screen.getByText("2025 - 2026")).toBeInTheDocument();

    expect(
      screen.getByText("Desarrollo de interfaces web."),
    ).toBeInTheDocument();
  });

  it("no muestra tarjetas si no hay experiencias", () => {
    render(<SeccionExperiencia experiencias={[]} />);

    expect(
      screen.getByRole("heading", { name: "Experiencia" }),
    ).toBeInTheDocument();

    expect(screen.queryByRole("heading", { level: 4 })).not.toBeInTheDocument();
  });
});
