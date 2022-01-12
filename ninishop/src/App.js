
import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import ItemListContainer from './components/Items/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/Items/ItemDetailContainer';


function App() {
    const gibberish = 'jdfksjbkjsbgakbgsjfvjfvx, v'
    const stock = 30
    const initial = 1

  return (
    <Router>

      <Navbar />
      <ItemListContainer gibberish= {gibberish}/>
      <ItemCount stock={stock} initial={initial}/>
      <ItemDetailContainer />

    </Router>
  );
}

export default App;