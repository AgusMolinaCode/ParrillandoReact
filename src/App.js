import React, { useState } from "react";
import DetalleConsejo from './components/DetalleConsejo';
import Navbar from "./components/Navbar";
import Recetas from "./components/Recetas";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Main from "./components/Main";
import Detalle from "./components/Detalle";




function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/recetas" element={<Recetas />} />
        <Route path='/detalle/:id' element={<Detalle/>} />
        <Route path='/consejo/:id' element={<DetalleConsejo/>} />

      </Routes>
      
</BrowserRouter>
  );
}

export default App;

