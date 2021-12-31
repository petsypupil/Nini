
import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';


function App() {
    const gibberish = 'jdfksjbkjsbgakbgsjfvjfvx, v'
    const stock = 30
    const initial = 1

  return (
    <Router>

      <Navbar />
      <ItemListContainer gibberish= {gibberish}/>
      <ItemCount stock={stock} initial={initial}/>

    </Router>
  );
}

export default App;