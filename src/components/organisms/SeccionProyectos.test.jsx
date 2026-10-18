import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import SeccionProyectos from "./SeccionProyectos";

// Datos para realizar las pruebas
const proyectosPrueba = [
  {
    id: 1,
    titulo: "EGB Digital",
    descripcion: "Sistema web de inspecciones de buses.",
    tecnologias: ["React", "PostgreSQL"],
    imagen: "",
    sitio: "",
    repositorio: "",
  },
];

describe("Componente SeccionProyectos", () => {
  it("muestra la información de los proyectos", () => {
    render(<SeccionProyectos proyectos={proyectosPrueba} />);

    expect(
      screen.getByRole("heading", { name: "Proyectos" }),
    ).toBeInTheDocument();

    //screen.getByText()	Busca un texto que debería existir.
    expect(screen.getByText("EGB Digital")).toBeInTheDocument();

    expect(screen.getByText("React")).toBeInTheDocument();

    expect(screen.getByText("PostgreSQL")).toBeInTheDocument();
  });

  //it() Define una prueba individual
  it("no muestra enlaces cuando están vacíos", () => {
    render(<SeccionProyectos proyectos={proyectosPrueba} />);

    expect(
      screen.queryByRole("link", { name: /Ver repositorio/i }),
    ).not.toBeInTheDocument();

    expect(
      screen.queryByRole("link", { name: /Ver proyecto/i }),
    ).not.toBeInTheDocument();
  });

  it("muestra los enlaces cuando están disponibles", () => {
    const proyectoConEnlaces = [
      {
        ...proyectosPrueba[0],
        sitio: "https://ejemplo.com",
        repositorio: "https://github.com/ejemplo",
      },
    ];

    render(<SeccionProyectos proyectos={proyectoConEnlaces} />);

    //screen.queryByRole()	Busca un elemento sin provocar un error si no existe
    expect(screen.getByRole("link", { name: /Ver proyecto/i })).toHaveAttribute(
      "href",
      "https://ejemplo.com",
    );

    expect(
      screen.getByRole("link", { name: /Ver repositorio/i }),
    ).toHaveAttribute("href", "https://github.com/ejemplo");
  }); //toHaveAttribute()	Verifica que un atributo tenga el valor esperado
});
