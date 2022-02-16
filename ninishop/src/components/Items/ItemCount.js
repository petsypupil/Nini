import React from 'react'
import {useState, useContext} from 'react'
import { CartContext } from '../Context/cartContext';

const ItemCount = ( data ) => {

    const { agregarAlCarrito, quitarDelCarrito } =  useContext(CartContext);

    // let data = getItem(idItem);

    // function onAdd() {
    //     agregarAlCarrito(idItem)
    // }

    return (
        <div>
            <button onClick={() => agregarAlCarrito(data.id)}> - </button>
            {data.cant}
            <button onClick={() => quitarDelCarrito(data.id)}> + </button>
        </div>
    )
    
}
export default ItemCount
