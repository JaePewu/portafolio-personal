import { Menu } from "antd";

const items = [
  {
    key: "inicio",
    label: <a href="#inicio">Inicio</a>,
  },
  {
    key: "sobre-mi",
    label: <a href="#sobre-mi">Sobre mí</a>,
  },
  {
    key: "experiencia",
    label: <a href="#experiencia">Experiencia</a>,
  },
  {
    key: "estudios",
    label: <a href="#estudios">Estudios</a>,
  },
  {
    key: "proyectos",
    label: <a href="#proyectos">Proyectos</a>,
  },
];

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#inicio" className="navbar-nombre">
        Jael Yapur CH
      </a>

      <Menu mode="horizontal" items={items} className="navbar-menu" />
    </nav>
  );
}

export default Navbar;
