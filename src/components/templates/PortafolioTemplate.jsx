import { FloatButton } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
import Navbar from "../organisms/Navbar";
import SeccionPersonal from "../organisms/SeccionPersonal";
import SeccionSobreMi from "../organisms/SeccionSobreMi";
import SeccionExperiencia from "../organisms/SeccionExperiencia";
import SeccionEstudios from "../organisms/SeccionEstudios";
import SeccionProyectos from "../organisms/SeccionProyectos";
import SeccionContacto from "../organisms/SeccionContacto";
import Footer from "../organisms/Footer";

function PortafolioTemplate({ perfil, experiencias, estudios, proyectos }) {
  return (
    <>
      <header className="portada">
        <Navbar />
        <SeccionPersonal perfil={perfil} />
      </header>

      <main className="app">
        <SeccionSobreMi perfil={perfil} />

        <SeccionExperiencia experiencias={experiencias} />

        <SeccionEstudios estudios={estudios} />

        <SeccionProyectos proyectos={proyectos} />

        <SeccionContacto />
      </main>

      <Footer />

      <FloatButton.BackTop
        icon={<ArrowUpOutlined />}
        tooltip="Volver al inicio"
        visibilityHeight={300}
        className="boton-volver-arriba"
        style={{ right: 24, bottom: 24 }}
        styles={{
          root: {
            backgroundColor: "var(--color-terracota)",
            borderColor: "var(--color-terracota)",
          },
          icon: {
            color: "var(--color-crema)",
          },
        }}
      />
    </>
  );
}

export default PortafolioTemplate;
