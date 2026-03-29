import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Components/Home/Home"
import Navbar from "./Components/Navbar/Navbar"
import {CartProvider} from "./Components/CartContext/CartContext"
function App() {

  return (
    <>
    <CartProvider>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </Router>
    </CartProvider>
    </>
  )
}

export default App