import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Components/Home/Home"
import Navbar from "./Components/Navbar/Navbar"
import {CartProvider} from "./Components/CartContext/CartContext"
import DetailsProduct from "./Components/DetailsProduct/DetailsProduct"
function App() {

  return (
    <>
    <CartProvider>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/producto/:id" element={<DetailsProduct/>}></Route>
      </Routes>
    </Router>
    </CartProvider>
    </>
  )
}

export default App