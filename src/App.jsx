import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Components/Home/Home"
import Navbar from "./Components/Navbar/Navbar"
import DetailsProduct from "./Components/DetailsProduct/DetailsProduct"
import {CartProvider} from "./Components/CartContext/CartContext"
import Cart from "./Components/Cart/Cart"

function App() {

  return (
    <>
    <CartProvider>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/producto/:id" element={<DetailsProduct/>}/>
        <Route path="/carrito" element={<Cart/>}/>
      </Routes>
    </Router>
    </CartProvider>
    </>
  )
}

export default App