import { children, createContext } from 'react'

export const CartContext = createContext([])

export const CartContextProvider = ({children}) => {
    return (
       <CartContext.Provider>
           {children}
       </CartContext.Provider>    )
}

export default cartContext
