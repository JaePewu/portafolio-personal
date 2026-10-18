import { Form, Input, Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

function FormularioContacto() {
  return (
    <Form layout="vertical" className="formulario-contacto">
      <Form.Item name="nombre">
        <Input placeholder="Nombre" aria-label="Nombre" />
      </Form.Item>

      <Form.Item name="correo">
        <Input
          type="email"
          placeholder="Correo electrónico"
          aria-label="Correo electrónico"
        />
      </Form.Item>

      <Form.Item name="mensaje">
        <Input.TextArea rows={4} placeholder="Mensaje" aria-label="Mensaje" />
      </Form.Item>

      <Form.Item className="contenedor-boton-contacto">
        <Button type="primary" htmlType="submit" className="boton-contacto">
          Enviar
          <ArrowRightOutlined />
        </Button>
      </Form.Item>
    </Form>
  );
}

export default FormularioContacto;
