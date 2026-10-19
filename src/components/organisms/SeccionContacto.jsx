import { Row, Col } from "antd";
import {
  MailOutlined,
  EnvironmentOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from "@ant-design/icons";

import TituloSeccion from "../atoms/TituloSeccion";
import FormularioContacto from "./FormularioContacto";

function SeccionContacto() {
  return (
    <section id="contacto" className="seccion-contacto">
      <div className="contenedor-contacto">
        <TituloSeccion texto="Contacto" />

        <p className="descripcion-contacto">
          ¿Tienes una consulta o propuesta? Puedes contactarme por correo
          electrónico o mediante mis redes profesionales. También puedes probar
          el formulario de contacto.
        </p>

        <Row gutter={[40, 32]} align="top">
          <Col xs={24} lg={11}>
            <div className="informacion-contacto">
              <a
                href="mailto:jael.yapur.ch@gmail.com"
                className="dato-contacto"
              >
                <MailOutlined />
                <span>jael.yapur.ch@gmail.com</span>
              </a>

              <div className="dato-contacto">
                <EnvironmentOutlined />
                <span>Maipú, Santiago, Chile</span>
              </div>

              <div className="redes-contacto">
                <a
                  href="https://www.linkedin.com/in/jael-yapur-ch/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <LinkedinOutlined />
                </a>

                <a
                  href="https://github.com/JaePewu"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <GithubOutlined />
                </a>
              </div>
            </div>
          </Col>

          <Col xs={24} lg={13}>
            <div className="tarjeta-contacto">
              <FormularioContacto />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default SeccionContacto;
