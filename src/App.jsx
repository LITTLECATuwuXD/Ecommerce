import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Components/Home/Home"
import Navbar from "./Components/Navbar/Navbar"
import DetailsProduct from "./Components/DetailsProduct/DetailsProduct"
import {CartProvider} from "./Components/CartContext/CartContext"
import Cart from "./Components/Cart/Cart"

function App() {
  const [buscarTermino, setBuscarTermino]=useState();
  const handleBuscar=(termino)=>{
    setBuscarTermino(termino.toLoweCase())
  }
  return (
    <>
    <CartProvider>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home buscarTermino={buscarTermino}/>}/>
        <Route path="/producto/:id" element={<DetailsProduct/>}/>
        <Route path="/carrito" element={<Cart/>}/>
        <Route path="/search" element={<Search onSearch={handleBuscar}/>}/>
      </Routes>
    </Router>
    </CartProvider>
    </>
  )
}

export default App