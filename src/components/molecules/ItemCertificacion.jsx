import { List, Typography } from "antd";
import {
  CloudOutlined,
  SafetyCertificateOutlined,
  BranchesOutlined,
  CodeOutlined,
  BookOutlined,
} from "@ant-design/icons";

const { Text } = Typography;

const iconos = {
  azure: CloudOutlined,
  scrum: SafetyCertificateOutlined,
  git: BranchesOutlined,
  javascript: CodeOutlined,
};

function ItemCertificacion({ nombre, institucion, fecha, icono }) {
  const Icono = iconos[icono] || BookOutlined;

  return (
    <List.Item className="item-certificacion">
      <span className="icono-certificacion" aria-hidden="true">
        <Icono />
      </span>

      <div className="contenido-certificacion">
        <Text className="nombre-certificacion">{nombre}</Text>

        <Text className="detalle-certificacion">
          {institucion} · {fecha}
        </Text>
      </div>
    </List.Item>
  );
}

export default ItemCertificacion;
