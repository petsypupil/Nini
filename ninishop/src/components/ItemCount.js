import React from 'react'
import {useState, useContext} from 'react'
import { CartContext } from './Context/cartContext';

const stock = 30;
const initial = 1;

function ItemCount( idDonita ) {

    const { cartList, agregarAlCarrito, quitarDelCarrito, getItem } =  useContext(CartContext);

    const cartData = getItem(idDonita);

    return (
        <div>
            <button onClick={() => quitarDelCarrito(idDonita)}> menos </button>
            {cartData.cant}
            <button onClick={() => agregarAlCarrito(idDonita)}> mas </button>
        </div>
    )
    
}
export default ItemCount
