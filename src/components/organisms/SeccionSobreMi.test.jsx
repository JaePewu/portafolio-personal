import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import SeccionSobreMi from "./SeccionSobreMi";
import { perfil } from "../../data/perfil";

describe("Componente SeccionSobreMi", () => {
  it("muestra la información y fotografía del perfil", () => {
    render(<SeccionSobreMi perfil={perfil} />);

    expect(
      screen.getByRole("heading", { name: "Sobre mí" }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("img", {
        name: `Fotografía de ${perfil.nombre}`,
      }),
    ).toBeInTheDocument();

    expect(screen.getByText(perfil.sobreMi)).toBeInTheDocument();
  });
});
