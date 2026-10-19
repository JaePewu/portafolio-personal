import { Card, Tag, Typography } from "antd";
import { DesktopOutlined } from "@ant-design/icons";
import BotonEnlace from "../atoms/BotonEnlace";

const { Title, Paragraph } = Typography;

function TarjetaProyecto({
  titulo,
  descripcion,
  tecnologias,
  imagen,
  sitio,
  repositorio,
}) {
  return (
    <Card
      className="tarjeta-proyecto"
      cover={
        imagen ? (
          <img
            src={imagen}
            alt={`Captura de ${titulo}`}
            className="imagen-proyecto"
          />
        ) : (
          <div className="portada-proyecto">
            <DesktopOutlined />
            <span>Desarrollo web</span>
          </div>
        )
      }
    >
      <Title level={3} className="titulo-proyecto">
        {titulo}
      </Title>

      <Paragraph className="descripcion-proyecto">{descripcion}</Paragraph>

      <div className="etiquetas-proyecto">
        {tecnologias.map((tecnologia) => (
          <Tag key={tecnologia} className="etiqueta-tecnologia">
            {tecnologia}
          </Tag>
        ))}
      </div>

      <div className="enlaces-proyecto">
        {sitio && <BotonEnlace texto="Ver proyecto" enlace={sitio} />}

        {repositorio && (
          <BotonEnlace texto="Ver repositorio" enlace={repositorio} />
        )}
      </div>
    </Card>
  );
}

export default TarjetaProyecto;
