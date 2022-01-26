import { children, createContext } from "react";
import { useState } from "react";

export const CartContext = createContext([]);

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartlist] = useState([]);

  function agregarAlCarrito(idItem) {
    const itemIndex = getItemIndex(idItem);
    console.log(itemIndex);
    if (itemIndex >= 0) {
      let newCartList = cartList;
      cartList[itemIndex].cant += 1;
      setCartlist(cartList);
    } else {
      setCartlist([...cartList, { id: idItem, cant: 0 }]);
    }
    console.log(cartList);
  }

  const getItemIndex = (idItem) => {
    return cartList.findIndex((cartItem) => cartItem.id === idItem);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        agregarAlCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
