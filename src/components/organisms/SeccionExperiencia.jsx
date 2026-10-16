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
              empresa={experiencia.empresa}
              cargo={experiencia.cargo}
              fechaInicio={experiencia.fechaInicio}
              fechaTermino={experiencia.fechaTermino}
            />
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default SeccionExperiencia;
