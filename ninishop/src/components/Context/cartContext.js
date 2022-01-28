import { children, createContext } from "react";
import { useState } from "react";

export const CartContext = createContext([]);

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartlist] = useState([]);

  function agregarAlCarrito(idItem) {
    const itemIndex = getItemIndex(idItem);
    if (itemIndex >= 0) {
      cartList[itemIndex].cant += 1;
      setCartlist(cartList);
    } else {
      setCartlist([...cartList, { id: idItem, cant: 1 }]);
    }
  }

  function quitarDelCarrito(idItem){
    const itemIndex = getItemIndex(idItem);
      if(cartList[itemIndex].cant <= 1){
        setCartlist(...cartList.splice(itemIndex,1));
      } else {
        cartList[itemIndex].cant -= 1;
        setCartlist(cartList);
      }
      
  }

  const getItemIndex = (idItem) => {
    return cartList.findIndex((cartItem) => cartItem.id === idItem);
  };

  const getItem = (idItem) => {
    return cartList.find((cartItem) => cartItem.id === idItem);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        agregarAlCarrito,
        quitarDelCarrito,
        getItemIndex,
        getItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
