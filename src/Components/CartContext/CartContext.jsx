import React, {createContext} from "react";

const CartContext = createContext();

const CartProvider = () =>{
    const [carrito, setCarrito]=useState([]);
    return (
        <div>CartContext</div>
    )
}

export default CartContext