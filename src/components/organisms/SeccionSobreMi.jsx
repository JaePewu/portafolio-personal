import { Row, Col, Typography } from "antd";
import TituloSeccion from "../atoms/TituloSeccion";
import ImagenPerfil from "../atoms/ImagenPerfil";

import fotoPerfil from "../../assets/images/perfil.jpg";

const { Paragraph } = Typography;

function SeccionSobreMi({ perfil }) {
  return (
    <section id="sobre-mi" className="seccion-sobre-mi">
      <Row gutter={[32, 32]} align="middle">
        <Col xs={24} md={10}>
          <div className="bloque-imagen-sobre-mi">
            <ImagenPerfil
              imagen={fotoPerfil}
              alt={`Fotografía de ${perfil.nombre}`}
            />
          </div>
        </Col>

        <Col xs={24} md={14}>
          <div className="contenido-sobre-mi">
            <TituloSeccion texto="Sobre mí" />

            <Paragraph className="descripcion-sobre-mi">
              {perfil.descripcion}
            </Paragraph>
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default SeccionSobreMi;
