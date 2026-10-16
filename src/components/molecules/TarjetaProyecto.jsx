import { Card, Typography } from "antd";
import BotonEnlace from "../atoms/BotonEnlace";

const { Title, Text } = Typography;

function TarjetaProyecto({ titulo, descripcion, tecnologias, repositorio }) {
  return (
    <Card className="tarjeta-proyecto">
      <Title level={3}>{titulo}</Title>

      <Text>{descripcion}</Text>

      <p className="tecnologias-proyecto">{tecnologias}</p>

      {repositorio && ( //si existe repositorio, muetra el boton
        <BotonEnlace texto="Ver repositorio" enlace={repositorio} />
      )}
    </Card>
  );
}

export default TarjetaProyecto;
