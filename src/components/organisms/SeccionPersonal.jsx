import { Row, Col, Typography, Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

import BotonEnlace from "../atoms/BotonEnlace";

const { Text, Title, Paragraph } = Typography;

function SeccionPersonal({ perfil }) {
  return (
    <section id="inicio" className="seccion-personal">
      <Row gutter={[40, 32]} align="middle">
        <Col xs={24} lg={16}>
          <div className="contenido-personal">
            <Text className="etiqueta-personal">{perfil.especialidad}</Text>

            <Title level={1} className="titulo-principal">
              {perfil.titulo}
              <br />
              <span className="titulo-destacado">{perfil.tituloDestacado}</span>
            </Title>

            <Paragraph className="descripcion-personal">
              {perfil.descripcion}
            </Paragraph>

            <div className="acciones-personales">
              <BotonEnlace texto="Ver proyectos" enlace="#proyectos" />

              <Button
                type="default"
                shape="round"
                icon={<DownloadOutlined />}
                href="/CV_Jael_Yapur.pdf"
                download="CV_Jael_Yapur.pdf"
                className="boton-descargar-cv"
              >
                Descargar CV
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default SeccionPersonal;
