import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/Items/ItemListContainer";
import ItemDetailContainer from "./components/Items/ItemDetailContainer";
import "./components/Items/styles.css";

function App() {
  const gibberish = "jdfksjbkjsbgakbgsjfvjfvx, v";
  const stock = 30;
  const initial = 1;

  return (
    <Router>
      <Navbar />
      {/* <ItemListContainer gibberish={gibberish} />
      <ItemCount stock={stock} initial={initial} />
      <ItemDetailContainer /> */}
      <Routes>
        <Route path="/" element={ <ItemListContainer gibberish={gibberish} />} />
        <Route path="/category/:id" element={ <ItemListContainer gibberish={gibberish} />} />
        <Route path="/item/:id" element={ <ItemDetailContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
