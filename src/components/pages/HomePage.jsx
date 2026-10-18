import PortafolioTemplate from "../templates/PortafolioTemplate";

import { perfil } from "../../data/perfil";
import { experiencias } from "../../data/experiencias";
import { estudios } from "../../data/estudios";
import { proyectos } from "../../data/proyectos";

function HomePage() {
  return (
    <PortafolioTemplate
      perfil={perfil}
      experiencias={experiencias}
      estudios={estudios}
      proyectos={proyectos}
    />
  );
}

export default HomePage;
