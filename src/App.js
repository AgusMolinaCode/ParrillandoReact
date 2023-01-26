import React, { useState } from "react";
import DetalleConsejo from './components/DetalleConsejo';
import Navbar from "./components/Navbar";
import Recetas from "./components/Recetas";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Main from "./components/Main";
import Detalle from "./components/Detalle";
import Footer from "./components/Footer";


function App() {
  const [isLoading, setIsLoading] = useState(false);
  setTimeout(() => {
    setIsLoading(true);
  }, 4000);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/recetas" element={<Recetas />} />
        <Route path='/detalle/:Id' element={<Detalle/>} />
        <Route path='/consejo/:Id' element={<DetalleConsejo/>} />

      </Routes>
      <Footer isLoading={isLoading}/>
</BrowserRouter>
  );
}

export default App;

