import {
  MailOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from "@ant-design/icons";

import { Avatar } from "antd";

const anioActual = new Date().getFullYear();

function Footer() {
  return (
    <footer className="footer-portafolio">
      <div className="footer-overlay">
        <div className="footer-superior">
          <div className="footer-marca">
            <div className="footer-marca-superior">
              <Avatar
                src="/avatar_jae.png"
                size={96}
                className="footer-avatar"
                alt="Avatar ilustrado de Jae"
              />

              <div className="footer-marca-texto">
                <h3 className="footer-nombre">Jael Yapur CH</h3>
                <p className="footer-etiqueta">PORTAFOLIO PERSONAL</p>
                <p className="footer-texto">
                  Diseño, creatividad y soluciones digitales con identidad
                  visual cálida y funcional.
                </p>
              </div>
            </div>
          </div>

          <div className="footer-cta">
            <p className="footer-cta-titulo">
              Hablemos de tu <span>próximo proyecto.</span>
            </p>

            <a href="#contacto" className="footer-boton-contacto">
              Contactar
            </a>
          </div>
        </div>

        <div className="footer-inferior">
          <div className="footer-contacto">
            <a
              href="mailto:jael.yapur.ch@gmail.com"
              className="footer-icono"
              aria-label="Enviar correo electrónico"
              title="Enviar correo"
            >
              <MailOutlined />
            </a>

            <a
              href="https://www.linkedin.com/in/jael-yapur-ch/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icono"
              aria-label="LinkedIn"
            >
              <LinkedinOutlined />
            </a>

            <a
              href="https://github.com/JaePewu"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icono"
              aria-label="GitHub"
            >
              <GithubOutlined />
            </a>
          </div>

          <p className="footer-copy">
            © {anioActual} - Desarrollado por Jae
            <span className="footer-flor" aria-hidden="true">
              ✿
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
