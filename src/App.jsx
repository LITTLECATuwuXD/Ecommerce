import { useState } from "react"; // 1. IMPORTACIÓN CORREGIDA
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import DetailsProduct from "./Components/DetailsProduct/DetailsProduct";
import { CartProvider } from "./Components/CartContext/CartContext";
import Cart from "./Components/Cart/Cart";
import Search from "./Components/Search/Search";

function App() {
  const [buscarTermino, setBuscarTermino] = useState(""); // Inicializado con string vacío

  const handleBuscar = (termino) => {
    // 2. CORREGIDO: toLowerCase() con la 'r'
    setBuscarTermino(termino.toLowerCase()); 
  }

  return (
    <>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home buscarTermino={buscarTermino} />} />
            <Route path="/producto/:id" element={<DetailsProduct />} />
            <Route path="/carrito" element={<Cart />} />
            {/* Si Search ya está dentro de Home, esta ruta quizás sea opcional */}
            <Route path="/search" element={<Search onSearch={handleBuscar} />} />
          </Routes>
        </Router>
      </CartProvider>
    </>
  );
}

export default App;