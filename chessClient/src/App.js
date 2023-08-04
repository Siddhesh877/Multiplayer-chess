import React from 'react';
import './App.css';
import Login from './login';
import Home from './Home.js';
import { Route,Routes } from 'react-router-dom';
import Navbar from './Navbar';


function App() {
  return ( 
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/login" element={<Login/>}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
