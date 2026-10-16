import { Typography } from "antd";

const { Title, Text } = Typography;

function ItemEstudio({ institucion, estudio, fecha }) {
  return (
    <article className="item-estudio">
      <Title level={4}>{estudio}</Title>

      <Text strong>{institucion}</Text>

      <Text>{fecha}</Text>
    </article>
  );
}

export default ItemEstudio;
