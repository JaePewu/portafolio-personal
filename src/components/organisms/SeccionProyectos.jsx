import { Row, Col } from "antd";

import TituloSeccion from "../atoms/TituloSeccion";
import TarjetaProyecto from "../molecules/TarjetaProyecto";

function SeccionProyectos({ proyectos }) {
  return (
    <section id="proyectos" className="seccion-proyectos">
      <TituloSeccion texto="Proyectos" />

      <Row gutter={[24, 24]}>
        {proyectos.map((proyecto) => (
          <Col
            xs={24}
            lg={12}
            xl={8}
            key={proyecto.id}
            className="columna-tarjeta"
          >
            <TarjetaProyecto
              titulo={proyecto.titulo}
              descripcion={proyecto.descripcion}
              tecnologias={proyecto.tecnologias}
              repositorio={proyecto.repositorio}
            />
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default SeccionProyectos;
