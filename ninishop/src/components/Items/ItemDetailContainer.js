import { donitas } from "./Item";
import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [data, setData] = useState([]);
  let pathParams = useParams();
  const traerProducto = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(donitas);
    }, 2000);
  });

  useEffect(() => {
    traerProducto.then((respuesta) => {
      setData(respuesta);
    });
  }, []);

  const [dona, setdona] = useState({});

  useEffect(() => {
    traerProducto.then((Response) =>
      setdona(Response.find((donitas) => donitas.id === pathParams.id))
    );
  }, []);
  console.log(dona);
  return (
    <div>
      <ItemDetail  />
    </div>
  );
};

export default ItemDetailContainer;
