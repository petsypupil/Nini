import React from "react";

function ItemDetail({ donita }) {
  return (
    <div className="container">
      <div className="item">

        <h3 className="Titulo">{donita.nombre}</h3>
        <p className="info"> Precio:$${donita.precio}</p>
        <p className="info"> descripcion:{donita.descripcion}</p>
        <p className="info"> stock: {donita.stock}</p>
      </div>
    </div>
  );
}

export default ItemDetail;
