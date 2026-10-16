import "./App.css";

import TituloSeccion from "./components/atoms/TituloSeccion";
import BotonEnlace from "./components/atoms/BotonEnlace";
import ImagenPerfil from "./components/atoms/ImagenPerfil";

import ItemExperiencia from "./components/molecules/ItemExperiencia";
import ItemEstudio from "./components/molecules/ItemEstudio";

import fotoPerfil from "./assets/images/perfil.jpg";

function App() {
  return (
    <main className="app">
      <TituloSeccion texto="Jael Yapur CH" />

      <p>Diseño y Desarrollo Web</p>

      <ImagenPerfil imagen={fotoPerfil} alt="Fotografía de Jael Yapur CH" />

      <BotonEnlace texto="Ver proyectos" enlace="#proyectos" />

      <ItemExperiencia
        empresa="Elige Verde"
        cargo="Coordinación administrativa y atención al cliente"
        fechaInicio="Sep 2023"
        fechaTermino="Jun 2024"
      />

      <ItemEstudio
        institucion="Instituto DUOC UC"
        estudio="Analista Programador"
        fecha="2025 - 2027"
      />
    </main>
  );
}

export default App;
