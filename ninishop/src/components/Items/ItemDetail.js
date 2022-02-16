import { CartContext } from "../Context/cartContext";
import { useContext } from "react";
import ItemCount from "./ItemCount";

function ItemDetail({ donita }) {
  const {
    cartList,
    agregarAlCarrito,
    getItemIndex,
    quitarDelCarrito,
    getItem,
  } = useContext(CartContext);

  function onAdd() {
    agregarAlCarrito(donita.id);
  }

  const itemIndex = getItemIndex(donita.id);
  const data = cartList[itemIndex];
  return (
    <div className="container">
      <div className="item">
        <h3 className="Titulo">{donita.nombre}</h3>
        <p className="info"> Precio:$${donita.precio}</p>
        <p className="info"> descripcion:{donita.descripcion}</p>
        <p className="info"> stock: {donita.stock}</p>
        {itemIndex >= 0 ? (
          <div>
            <button onClick={() => quitarDelCarrito(donita.id)}> - </button>
            {data.cant}
            <button onClick={() => agregarAlCarrito(donita.id)}> + </button>
          </div>
        ) : (
          <button onClick={onAdd}> Agregar al carrito </button>
        )}
      </div>
    </div>
  );
}

export default ItemDetail;
