
import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';


function App() {
    const gibberish = 'jdfksjbkjsbgakbgsjfvjfvx, v'


  return (
    <Router>

      <Navbar />
      <ItemListContainer gibberish= {gibberish}/>

    </Router>
  );
}

export default App;