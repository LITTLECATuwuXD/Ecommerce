import React, { useState } from "react"; // Esta es la línea clave
import ProductList from "../ProductList/ProductList";
import Search from "../Search/Search";

const Home = ({ buscarTermino }) => {
  // Aquí es donde falla la línea 4 si no importaste useState arriba
  const [buscarTerminoLocal, setBuscarTerminoLocal] = useState(""); 

  const handleBuscarLocal = (termino) => {
    setBuscarTerminoLocal(termino);
  };

  return (
    <div className="home">
      <Search onSearch={handleBuscarLocal} />
      {/* Usamos el término local o el que viene por props según tu lógica */}
      <ProductList buscarTermino={buscarTerminoLocal || buscarTermino} />
    </div>
  );
};

export default Home;