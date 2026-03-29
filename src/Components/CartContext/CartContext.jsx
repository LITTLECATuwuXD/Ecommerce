import React, { createContext, useContext, useState } from "react";
const CartContext = createContext();

export const CartProvider = ({children}) =>{
    const [carrito, setCarrito]=useState([]);

    const agregarAlCarrito =(producto)=>{
        setCarrito((carritoAnterior)=>{
            const yaExisteElproducto=carritoAnterior.findIndex(
                (articulo)=>articulo.id===producto.id
            );
            if(yaExisteElproducto>=0){
                const carritoActualizado = [...carritoAnterior];
                carritoActualizado[yaExisteElproducto].cantidad+=1;
                return carritoActualizado;
            }
            else{
                return [...carritoAnterior,{...producto,cantidad:1}]
            }
        })
    }
    return (
        <CartContext.Provider value={{carrito, agregarAlCarrito}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);