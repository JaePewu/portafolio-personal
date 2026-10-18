import { Row, Col } from "antd";

import TituloSeccion from "../atoms/TituloSeccion";
import ItemEstudio from "../molecules/ItemEstudio";

function SeccionEstudios({ estudios }) {
  return (
    <section id="estudios" className="seccion-estudios">
      <TituloSeccion texto="Estudios" />

      <Row gutter={[24, 24]}>
        {estudios.map((estudio) => (
          <Col
            xs={24}
            lg={12}
            xl={8}
            key={estudio.id}
            className="columna-tarjeta"
          >
            <ItemEstudio
              institucion={estudio.institucion}
              estudio={estudio.estudio}
              fecha={estudio.fecha}
            />
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default SeccionEstudios;
