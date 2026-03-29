import "./Search.css"
import React, { useState } from "react";

const Search = ({onSearch}) =>{
    const [buscarTermino, setBuscarTermino]=useState("")
    const handleBuscarChange=(e)=>{
        const termino=e.target.value;
        setBuscarTermino(termino)
        onSearch(termino)
    }
    return (
        <section className="search">
            <input type="search"
            placeholder="buscar"
            className="search-bar"
            value={buscarTermino}
            onChange={handleBuscarChange}
            />
        </section>
    )
}

export default Search