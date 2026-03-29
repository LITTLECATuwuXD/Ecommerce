import React, {createContext} from "react";

const CartContext = createContext();

const CartProvider = () =>{
    const [carrito, setCarrito]=useState([]);

    const agregarAlcarrito =(producto)=>{
        setCarrito((carritoAnterior)=>{
            const yaExisteElproducto=carritoAnterior.findIndex(
                (articulo)=>articulo.id===producto.id
            );
            if(yaExisteElproducto>=0){
                const carritoActualizado = [...carritoAnterior];
                carritoActualizado[yaExisteElproducto].cantidad+1;
                return carritoActualizado;
            }
            else{
                return [...carritoAnterior,{...producto,cantidad:1}]
            }
        })
    }
    return (
        <div>CartContext</div>
    )
}

export default CartContext