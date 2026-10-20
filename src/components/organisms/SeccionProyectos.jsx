import { useState } from "react";
import { Row, Col, Segmented } from "antd";

import TituloSeccion from "../atoms/TituloSeccion";
import TarjetaProyecto from "../molecules/TarjetaProyecto";

function SeccionProyectos({ proyectos }) {
  // Guarda la categoría seleccionada por el usuario.
  // Inicialmente se muestran todos los proyectos.
  const [filtro, setFiltro] = useState("todos");

  // Filtra los proyectos según la categoría seleccionada.
  // El operador ternario (? :) funciona como un if / else:
  // ? Si es "todos", muestra todos los proyectos.
  // : Si no es "todos", muestra solo los de la categoría elegida.
  const proyectosFiltrados =
    filtro === "todos"
      ? proyectos
      : proyectos.filter((proyecto) => proyecto.categoria === filtro);

  return (
    <section id="proyectos" className="seccion-proyectos">
      <TituloSeccion texto="Proyectos" />

      <div style={{ marginBottom: 24 }}>
        <Segmented
          className="filtro-proyectos"
          options={[
            { label: "Todos", value: "todos" },
            { label: "Front-End", value: "Front-End" },
            { label: "Full Stack", value: "Full Stack" },
            { label: "Backend", value: "Backend" },
          ]}
          value={filtro}
          onChange={setFiltro}
          aria-label="Filtrar proyectos"
        />
      </div>

      <Row gutter={[24, 24]}>
        {proyectosFiltrados.map((proyecto) => (
          <Col
            xs={24}
            lg={12}
            xl={proyectosFiltrados.length === 1 ? 12 : 8}
            key={proyecto.id}
            className="columna-tarjeta"
          >
            <TarjetaProyecto
              titulo={proyecto.titulo}
              descripcion={proyecto.descripcion}
              tecnologias={proyecto.tecnologias}
              imagen={proyecto.imagen}
              sitio={proyecto.sitio}
              repositorio={proyecto.repositorio}
            />
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default SeccionProyectos;
