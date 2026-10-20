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
      screen.getByRole("heading", {
        name: "Educación y certificaciones",
      }),
    ).toBeInTheDocument();

    expect(screen.getByText("Analista Programador")).toBeInTheDocument();
    expect(screen.getByText("Instituto de prueba")).toBeInTheDocument();
    expect(screen.getByText("2025 - 2027")).toBeInTheDocument();
  });

  it("no muestra estudios si la lista está vacía", () => {
    render(<SeccionEstudios estudios={[]} />);

    expect(
      screen.getByRole("heading", {
        name: "Educación y certificaciones",
      }),
    ).toBeInTheDocument();

    expect(screen.queryByText("Analista Programador")).not.toBeInTheDocument();
  });

  it("muestra los cursos y certificaciones", () => {
    render(<SeccionEstudios estudios={estudiosPrueba} />);

    expect(
      screen.getByText("Microsoft Certified: Azure Fundamentals (AZ-900)"),
    ).toBeInTheDocument();

    expect(
      screen.getByText("Scrum Foundation Professional Certification (SFPC)"),
    ).toBeInTheDocument();

    expect(screen.getByText("Curso Profesional de Git")).toBeInTheDocument();
    expect(screen.getByText("Introducción a JavaScript")).toBeInTheDocument();
  });
});
