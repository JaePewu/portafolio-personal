import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import SeccionPersonal from "./SeccionPersonal";
import { perfil } from "../../data/perfil";

describe("Componente SeccionPersonal", () => {
  it("muestra correctamente la presentación personal", () => {
    render(<SeccionPersonal perfil={perfil} />);

    const titulo = screen.getByRole("heading", { level: 1 });

    expect(titulo).toHaveTextContent(perfil.titulo);
    expect(titulo).toHaveTextContent(perfil.tituloDestacado);
    expect(screen.getByText(perfil.descripcion)).toBeInTheDocument();
  });
});
