import { useState } from "react";
import { Form, Input, Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

function FormularioContacto() {
  const [datosValidados, setDatosValidados] = useState(null);

  // Guarda los datos cuando el formulario es válido
  const enviarFormulario = (valores) => {
    setDatosValidados(valores);
  };

  return (
    <>
      <Form
        layout="vertical"
        className="formulario-contacto"
        onFinish={enviarFormulario}
        onValuesChange={() => setDatosValidados(null)}
      >
        <Form.Item name="nombre">
          <Input placeholder="Nombre" aria-label="Nombre" required />
        </Form.Item>

        <Form.Item name="correo">
          <Input
            type="email"
            placeholder="Correo electrónico"
            aria-label="Correo electrónico"
            required
          />
        </Form.Item>

        <Form.Item name="mensaje">
          <Input.TextArea
            rows={4}
            placeholder="Mensaje"
            aria-label="Mensaje"
            required
            minLength={10}
          />
        </Form.Item>

        <Form.Item className="contenedor-boton-contacto">
          <Button type="primary" htmlType="submit" className="boton-contacto">
            Enviar
            <ArrowRightOutlined />
          </Button>
        </Form.Item>
      </Form>

      {datosValidados && (
        <p className="mensaje-contacto" role="status">
          ¡Gracias, {datosValidados.nombre}! Tus datos se validaron
          correctamente. Este formulario todavía no envía correos.
        </p>
      )}
    </>
  );
}

export default FormularioContacto;
