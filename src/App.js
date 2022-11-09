import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom"
import React from 'react'

import Navbar from './components/Navbar';
import Home from './components/Home';

import Cesarshift from './components/cesar/Cesarshift';
import Polyb from './components/polyb/Polyb';
import Substitution from './components/substitution/Substitution';

function App() {

  return (
    <div className='App'>
      
      <Navbar />
      <div className='body'>
      <Routes>
        <Route path='/' element={<Home />} />
         
        <Route  path='/cesarshift' element={<Cesarshift />} />
        <Route  path='/polybius' element={<Polyb />} />
        <Route  path='/substitution' element={<Substitution />} />
      </Routes>
      </div>
    
   </div>
  );
}

export default App;
