
import {CartContext} from '../Context/cartContext'
import {useContext} from 'react'

function ItemDetail({ donita }) {

    const {cartList, agregarAlCarrito} =  useContext(CartContext)


    function onAdd() {
        agregarAlCarrito(donita)
    }

  return (
    <div className="container">
      <div className="item">

        <h3 className="Titulo">{donita.nombre}</h3>
        <p className="info"> Precio:$${donita.precio}</p>
        <p className="info"> descripcion:{donita.descripcion}</p>
        <p className="info"> stock: {donita.stock}</p>
        <button onClick={onAdd}> agregar al carrito </button>
      </div>
    </div>
  );
}

export default ItemDetail;
