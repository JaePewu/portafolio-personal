import { Row, Col, Typography } from "antd";

import ImagenPerfil from "../atoms/ImagenPerfil";
import BotonEnlace from "../atoms/BotonEnlace";

import fotoPerfil from "../../assets/images/perfil.jpg";

const { Title, Text, Paragraph } = Typography;

function SeccionPersonal({ perfil }) {
  return (
    <section id="inicio" className="seccion-personal">
      <Row gutter={[40, 32]} align="middle">
        <Col xs={24} lg={14}>
          <div className="contenido-personal">
            <Text className="etiqueta-personal">{perfil.especialidad}</Text>

            <Title level={1} className="nombre-personal">
              {perfil.nombre}
            </Title>

            <Title level={2} className="titulo-principal">
              {perfil.titulo}
            </Title>

            <Paragraph className="descripcion-personal">
              {perfil.descripcion}
            </Paragraph>

            <BotonEnlace texto="Ver proyectos" enlace="#proyectos" />
          </div>
        </Col>

        <Col xs={24} lg={10}>
          <div className="contenedor-imagen-personal">
            <ImagenPerfil
              imagen={fotoPerfil}
              alt="Fotografía de Jael Yapur CH"
            />
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default SeccionPersonal;
