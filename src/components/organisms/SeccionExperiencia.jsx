import { Row, Col } from "antd";

import TituloSeccion from "../atoms/TituloSeccion";
import ItemExperiencia from "../molecules/ItemExperiencia";

function SeccionExperiencia({ experiencias }) {
  return (
    <section id="experiencia" className="seccion-experiencia">
      <TituloSeccion texto="Experiencia" />

      <Row gutter={[24, 24]}>
        {experiencias.map((experiencia) => (
          <Col xs={24} md={12} lg={8} key={experiencia.id}>
            <ItemExperiencia
              cargo={experiencia.cargo}
              empresa={experiencia.empresa}
              fechaInicio={experiencia.fechaInicio}
              fechaTermino={experiencia.fechaTermino}
              descripcion={experiencia.descripcion}
            />
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default SeccionExperiencia;
