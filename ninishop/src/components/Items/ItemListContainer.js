import React, { useState, useEffect } from "react";
import { donitas } from "./Item";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer({ gibberish }) {
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

  return (
    <>
      <h3>{gibberish}</h3>
      <ItemList data={data.filter(dona => !pathParams.id || dona.categoria == pathParams.id)} />
    </>
  );
}

export default ItemListContainer;
