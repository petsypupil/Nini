import { children, createContext } from 'react'
import { useState } from 'react'

export const CartContext = createContext([])

export const CartContextProvider = ({children}) => {
    const [cartList, setCartlist] = useState ([])
    
    function agregarAlCarrito(items) {
        setCartlist(items)
    }
    
    
    return (
       <CartContext.Provider value ={{
           cartList,
           agregarAlCarrito
       }}>
           {children}
       </CartContext.Provider>    
       )
}

