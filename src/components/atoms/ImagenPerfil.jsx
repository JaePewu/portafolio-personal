import { Avatar } from "antd";

function ImagenPerfil({ imagen, alt }) {
  return (
    <Avatar
      src={imagen}
      alt={alt}
      shape="circle"
      size={360}
      className="imagen-perfil-redonda"
    />
  );
}

export default ImagenPerfil;
