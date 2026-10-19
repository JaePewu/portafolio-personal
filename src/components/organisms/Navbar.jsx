import { useEffect, useState } from "react";
import { Button, Drawer, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { perfil } from "../../data/perfil";

const items = [
  { key: "inicio", label: <a href="#inicio">Inicio</a> },
  { key: "sobre-mi", label: <a href="#sobre-mi">Sobre mí</a> },
  { key: "experiencia", label: <a href="#experiencia">Experiencia</a> },
  { key: "estudios", label: <a href="#estudios">Estudios</a> },
  { key: "proyectos", label: <a href="#proyectos">Proyectos</a> },
  { key: "contacto", label: <a href="#contacto">Contacto</a> },
];

const titulos = {
  inicio: "Inicio",
  "sobre-mi": "Sobre mí",
  experiencia: "Experiencia",
  estudios: "Estudios",
  proyectos: "Proyectos",
  contacto: "Contacto",
};

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [seccionActual, setSeccionActual] = useState("inicio");

  useEffect(() => {
    // Actualiza la sección activa y el título
    const actualizarSeccion = () => {
      const seccion = window.location.hash.replace("#", "") || "inicio";
      const nombreSeccion = titulos[seccion] || "Inicio";

      setSeccionActual(titulos[seccion] ? seccion : "inicio");
      document.title = `${nombreSeccion} | Portafolio de ${perfil.nombre}`;
    };

    actualizarSeccion();

    window.addEventListener("hashchange", actualizarSeccion);

    return () => {
      window.removeEventListener("hashchange", actualizarSeccion);
    };
  }, []);

  return (
    <nav className="navbar">
      <a href="#inicio" className="navbar-nombre">
        Jael Yapur CH
      </a>

      {/* Menú para computador */}
      <Menu
        mode="horizontal"
        items={items}
        selectedKeys={[seccionActual]}
        className="navbar-menu"
      />

      {/* Botón para celular y tablet */}
      <Button
        type="text"
        icon={<MenuOutlined />}
        className="navbar-boton-movil"
        aria-label="Abrir menú de navegación"
        aria-expanded={menuAbierto}
        onClick={() => setMenuAbierto(true)}
      />

      {/* Menú desplegable */}
      <Drawer
        title="Menú"
        placement="right"
        width={280}
        open={menuAbierto}
        onClose={() => setMenuAbierto(false)}
        rootClassName="navbar-drawer"
      >
        <Menu
          mode="inline"
          items={items}
          selectedKeys={[seccionActual]}
          className="navbar-menu-movil"
          onClick={() => setMenuAbierto(false)}
        />
      </Drawer>
    </nav>
  );
}

export default Navbar;
