import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

function BotonEnlace({ texto, enlace }) {
  return (
    <Button type="primary" href={enlace} className="boton-enlace">
      {texto}
      <ArrowRightOutlined />
    </Button>
  );
}

export default BotonEnlace;
