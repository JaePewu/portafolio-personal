import { Row, Col, Typography, Timeline, Card, List } from "antd";

import {
  BankOutlined,
  CodeOutlined,
  LaptopOutlined,
  ScissorOutlined,
  BookOutlined,
} from "@ant-design/icons";

import TituloSeccion from "../atoms/TituloSeccion";
import ItemEstudio from "../molecules/ItemEstudio";
import ItemCertificacion from "../molecules/ItemCertificacion";

import { certificaciones } from "../../data/certificaciones";

const { Text, Title } = Typography;

// Íconos según cada estudio
const iconosEstudio = {
  1: <BankOutlined />,
  2: <CodeOutlined />,
  3: <LaptopOutlined />,
  4: <ScissorOutlined />,
};

function SeccionEstudios({ estudios }) {
  const itemsEstudios = estudios.map((estudio) => ({
    key: estudio.id,
    color: "var(--color-terracota)",

    content: (
      <ItemEstudio
        institucion={estudio.institucion}
        estudio={estudio.estudio}
        fecha={estudio.fecha}
        icono={iconosEstudio[estudio.id] || <BookOutlined />}
      />
    ),
  }));

  return (
    <section id="estudios" className="seccion-estudios">
      <Text className="etiqueta-formacion">MI FORMACIÓN</Text>

      <TituloSeccion texto="Educación y certificaciones" />

      <Row gutter={[32, 32]}>
        {/* Educación */}
        <Col xs={24} lg={13}>
          <Title level={4} className="subtitulo-formacion">
            Educación
          </Title>

          <Timeline className="timeline-estudios" items={itemsEstudios} />
        </Col>

        {/* Cursos y certificaciones */}
        <Col xs={24} lg={11}>
          <Card className="panel-certificaciones">
            <Title level={4} className="subtitulo-formacion">
              Cursos y certificaciones
            </Title>

            <List
              className="lista-certificaciones"
              dataSource={certificaciones}
              rowKey="id"
              renderItem={(certificacion) => (
                <ItemCertificacion
                  nombre={certificacion.nombre}
                  institucion={certificacion.institucion}
                  fecha={certificacion.fecha}
                  icono={certificacion.icono}
                />
              )}
            />
          </Card>
        </Col>
      </Row>
    </section>
  );
}

export default SeccionEstudios;
