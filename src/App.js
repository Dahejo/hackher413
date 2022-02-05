import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from "./pages/Home.js";
import Map from "./pages/Map.js";
import Moma from "./pages/Moma.js";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/map' element={<Map />} />
        <Route path='/moma' element={<Moma />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
