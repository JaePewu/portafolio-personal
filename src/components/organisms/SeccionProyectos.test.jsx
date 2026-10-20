import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import SeccionProyectos from "./SeccionProyectos";

// Datos ficticios para realizar las pruebas
const proyectosPrueba = [
  {
    id: 1,
    titulo: "EGB Digital",
    categoria: "Full Stack",
    descripcion: "Sistema web de inspecciones de buses.",
    tecnologias: ["React", "PostgreSQL"],
    imagen: "",
    sitio: "",
    repositorio: "",
  },
];

describe("Componente SeccionProyectos", () => {
  // Comprueba que se muestre la información de un proyecto
  it("muestra la información de los proyectos", () => {
    render(<SeccionProyectos proyectos={proyectosPrueba} />);

    expect(
      screen.getByRole("heading", { name: "Proyectos" }),
    ).toBeInTheDocument();

    // getByText() busca un texto que debería existir
    expect(screen.getByText("EGB Digital")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("PostgreSQL")).toBeInTheDocument();
  });

  // Comprueba que no aparezcan enlaces cuando están vacíos
  it("no muestra enlaces cuando están vacíos", () => {
    render(<SeccionProyectos proyectos={proyectosPrueba} />);

    // queryByRole() permite comprobar que un elemento no existe
    expect(
      screen.queryByRole("link", { name: /Ver repositorio/i }),
    ).not.toBeInTheDocument();

    expect(
      screen.queryByRole("link", { name: /Ver proyecto/i }),
    ).not.toBeInTheDocument();
  });

  // Comprueba el filtro por categorías utilizando diferentes proyectos
  it("filtra proyectos por categoría y permite mostrar todos", () => {
    const proyectosFiltro = [
      proyectosPrueba[0],
      {
        id: 2,
        titulo: "Data Lovers",
        categoria: "Front-End",
        descripcion: "Proyecto de interfaz web.",
        tecnologias: ["JavaScript"],
        imagen: "",
        sitio: "",
        repositorio: "https://github.com/ejemplo",
      },
      {
        id: 3,
        titulo: "TechStore",
        categoria: "Backend",
        descripcion: "Proyecto de API REST.",
        tecnologias: ["Java"],
        imagen: "",
        sitio: "",
        repositorio: "https://github.com/ejemplo",
      },
    ];

    render(<SeccionProyectos proyectos={proyectosFiltro} />);

    // Inicialmente aparecen todos los proyectos
    expect(screen.getByText("EGB Digital")).toBeInTheDocument();
    expect(screen.getByText("Data Lovers")).toBeInTheDocument();
    expect(screen.getByText("TechStore")).toBeInTheDocument();

    // Selecciona Front-End y verifica qué proyecto se muestra
    fireEvent.click(screen.getByText("Front-End"));

    expect(screen.getByText("Data Lovers")).toBeInTheDocument();
    expect(screen.queryByText("EGB Digital")).not.toBeInTheDocument();
    expect(screen.queryByText("TechStore")).not.toBeInTheDocument();

    // Selecciona Full Stack
    fireEvent.click(screen.getByText("Full Stack"));

    expect(screen.getByText("EGB Digital")).toBeInTheDocument();
    expect(screen.queryByText("Data Lovers")).not.toBeInTheDocument();
    expect(screen.queryByText("TechStore")).not.toBeInTheDocument();

    // Selecciona Backend
    fireEvent.click(screen.getByText("Backend"));

    expect(screen.getByText("TechStore")).toBeInTheDocument();
    expect(screen.queryByText("EGB Digital")).not.toBeInTheDocument();
    expect(screen.queryByText("Data Lovers")).not.toBeInTheDocument();

    // Vuelve a mostrar todos los proyectos
    fireEvent.click(screen.getByText("Todos"));

    expect(screen.getByText("EGB Digital")).toBeInTheDocument();
    expect(screen.getByText("Data Lovers")).toBeInTheDocument();
    expect(screen.getByText("TechStore")).toBeInTheDocument();
  });

  // Comprueba que los enlaces estén disponibles cuando tienen una URL
  it("muestra los enlaces cuando están disponibles", () => {
    const proyectoConEnlaces = [
      {
        ...proyectosPrueba[0],
        sitio: "https://ejemplo.com",
        repositorio: "https://github.com/ejemplo",
      },
    ];

    render(<SeccionProyectos proyectos={proyectoConEnlaces} />);

    // toHaveAttribute() comprueba el valor de un atributo HTML
    expect(screen.getByRole("link", { name: /Ver proyecto/i })).toHaveAttribute(
      "href",
      "https://ejemplo.com",
    );

    expect(
      screen.getByRole("link", { name: /Ver repositorio/i }),
    ).toHaveAttribute("href", "https://github.com/ejemplo");
  });
});
