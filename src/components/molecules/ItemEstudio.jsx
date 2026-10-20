import { Typography } from "antd";
import { CalendarOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

function ItemEstudio({ institucion, estudio, fecha, icono }) {
  return (
    <article className="item-estudio">
      <span className="icono-tarjeta-estudio" aria-hidden="true">
        {icono}
      </span>

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
