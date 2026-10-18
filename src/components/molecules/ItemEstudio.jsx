import { Typography } from "antd";
import { CalendarOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

function ItemEstudio({ institucion, estudio, fecha }) {
  return (
    <article className="item-estudio">
      <div className="cabecera-estudio">
        <div>
          <Title level={4} className="titulo-estudio">
            {estudio}
          </Title>

          <Text className="institucion-estudio">{institucion}</Text>
        </div>

        <div className="fecha-estudio">
          <CalendarOutlined />

          <span>{fecha}</span>
        </div>
      </div>
    </article>
  );
}

export default ItemEstudio;
