import React from 'react'
import {useState, useContext} from 'react'
import { CartContext } from './Context/cartContext';

function ItemCount( idItem ) {

    const { agregarAlCarrito, quitarDelCarrito, getItem} =  useContext(CartContext);

    const cartData = getItem(idItem);

    return (
        <div>
            <button onClick={() => quitarDelCarrito(idItem)}> - </button>
            {cartData && cartData.cant}
            <button onClick={() => agregarAlCarrito(idItem)}> + </button>
        </div>
    )
    
}
export default ItemCount
