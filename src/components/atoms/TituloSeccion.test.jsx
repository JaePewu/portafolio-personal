import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import TituloSeccion from "./TituloSeccion";

describe("Componente TituloSeccion", () => {
  it("muestra el titulo recibido correctamente", () => {
    render(<TituloSeccion texto="Proyectos" />);

    const titulo = screen.getByRole("heading", {
      level: 2,
      name: "Proyectos",
    });

    expect(titulo).toBeInTheDocument();
  });
});
