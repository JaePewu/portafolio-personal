import { useState } from "react";
import { Row, Col, Segmented } from "antd";

import TituloSeccion from "../atoms/TituloSeccion";
import TarjetaProyecto from "../molecules/TarjetaProyecto";

function SeccionProyectos({ proyectos }) {
  const [filtro, setFiltro] = useState("todos");

  // Filtra los proyectos según la opción seleccionada
  const proyectosFiltrados =
    filtro === "repositorio"
      ? proyectos.filter((proyecto) => proyecto.repositorio)
      : proyectos;

  return (
    <section id="proyectos" className="seccion-proyectos">
      <TituloSeccion texto="Proyectos" />

      <div style={{ marginBottom: 24 }}>
        <Segmented
          options={[
            { label: "Todos", value: "todos" },
            { label: "Con repositorio", value: "repositorio" },
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
