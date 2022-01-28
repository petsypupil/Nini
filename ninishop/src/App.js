import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/Items/ItemListContainer";
import ItemDetailContainer from "./components/Items/ItemDetailContainer";
import "./components/Items/styles.css";
import { CartContextProvider } from "./components/Context/cartContext";

function App() {
  const gibberish = "jdfksjbkjsbgakbgsjfvjfvx, v";
  

  return (
    <CartContextProvider>
      <Router>
        <Navbar />
        {/* <ItemListContainer gibberish={gibberish} />
      <ItemCount stock={stock} initial={initial} />
      <ItemDetailContainer /> */}
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer gibberish={gibberish} />}
          />
          <Route
            path="/category/:id"
            element={<ItemListContainer gibberish={gibberish} />}
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </Router>
    </CartContextProvider>
  );
}

export default App;
