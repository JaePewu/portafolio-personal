import { Typography } from "antd";

const { Title, Text } = Typography;

function ItemExperiencia({ empresa, cargo, fechaInicio, fechaTermino }) {
  return (
    <article className="item-experiencia">
      <Title level={4}>{cargo}</Title>

      <Text strong>{empresa}</Text>

      <Text>
        {fechaInicio} - {fechaTermino}
      </Text>
    </article>
  );
}

export default ItemExperiencia;
