import { Typography } from "antd";
import { CalendarOutlined } from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;

function ItemExperiencia({
  cargo,
  empresa,
  fechaInicio,
  fechaTermino,
  descripcion,
}) {
  return (
    <article className="item-experiencia">
      <div className="cabecera-experiencia">
        <div>
          <Title level={4} className="cargo-experiencia">
            {cargo}
          </Title>

          <Text className="empresa-experiencia">{empresa}</Text>
        </div>

        <div className="fecha-experiencia">
          <CalendarOutlined />

          <span>
            {fechaInicio} - {fechaTermino}
          </span>
        </div>
      </div>

      <Paragraph className="descripcion-experiencia">{descripcion}</Paragraph>
    </article>
  );
}

export default ItemExperiencia;
