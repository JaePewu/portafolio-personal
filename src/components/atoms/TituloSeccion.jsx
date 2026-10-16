import { Typography } from "antd";

const { Title } = Typography;

function TituloSeccion({ texto }) {
  return (
    <Title level={2} className="titulo-seccion">
      {texto}
    </Title>
  );
}

export default TituloSeccion;
