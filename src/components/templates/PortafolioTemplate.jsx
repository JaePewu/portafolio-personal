import Navbar from "../organisms/Navbar";
import SeccionPersonal from "../organisms/SeccionPersonal";
import SeccionSobreMi from "../organisms/SeccionSobreMi";
import SeccionExperiencia from "../organisms/SeccionExperiencia";
import SeccionEstudios from "../organisms/SeccionEstudios";
import SeccionProyectos from "../organisms/SeccionProyectos";

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
      </main>
    </>
  );
}

export default PortafolioTemplate;
