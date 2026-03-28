import {useState, useEffect} from "react"
import "./ProductList.css"

const ProductList = () => 
{
    const [productos, setProductos]=useState([]);
    const [error, setError]=useState(null);
    const [orden, setOrden]=useState("Relevante");
    useEffect(()=>{
            const fetchProductos = async () =>{
            try{
                const response =await fetch("/src/data/Products.json");
                if(!response.ok){
                    throw new Error("Error al cargar los productos");
                }
                const data = await response.json();
                setProductos(data);
            }catch(err){
                setError(err.message)
            }
            }
        fetchProductos();
        }
    ,[]);
    const handleOrdenChange = (e) =>{
        setOrden(e.target.value)
    }
    const productosOrdenados = [...productos].sort((a,b)=>{
        if(orden === "Precio: Menor a mayor"){
            return a.precio - b.precio
        }
        if(orden === "Precio: Mayor a menor"){
            return b.precio - a.precio
        }
        return 0;
    });
        
    return(
        <section className="main-content">
            <aside className="filters">
                <h2>Filtro</h2>
                <div className="filters-category">
                    <div className="filter-category">
                        <h3>Categorías</h3>
                        <label>
                            <input type="checkbox"/>
                            <span>Categoría 1</span>
                        </label>
                        <label>
                            <input type="checkbox"/>
                            <span>Categoría 2</span>
                        </label>
                        <label>
                            <input type="checkbox"/>
                            <span>Categoría 3</span>
                        </label>
                    </div>
                    <div className="filter-category">
                        <h3>Categorías2</h3>
                        <label>
                            <input type="checkbox"/>
                            <span>Categoría 4</span>
                        </label>
                        <label>
                            <input type="checkbox"/>
                            <span>Categoría 5</span>
                        </label>
                        <label>
                            <input type="checkbox"/>
                            <span>Categoría 6</span>
                        </label>
                    </div>
                </div>
            </aside>
            <main className="collections">
                <div className="options">
                    <h2>TODAS LAS COLLECIONES</h2>
                    <div className="sort-options">
                        <label>
                            Ordenar por:
                            <select onChange={handleOrdenChange} value={orden}>
                                <option>Relevante</option>
                                <option>De menor a mayor</option>
                                <option>De mayor a menor</option>
                            </select>
                        </label>
                    </div>
                </div>
                <div className="products">
                    {
                        error?(
                            <p className="error-message">{error}</p>
                        ):(
                            productosOrdenados.map((producto)=>(
                                <div className="product-card" key={producto.id}>
                                    <img src={producto.image}
                                     alt={producto.image}
                                      className="product-image"
                                      />
                                    <h3>{producto.nombre}</h3>
                                    <p>{producto.precio}</p>
                                </div>
                            ))
                        )
                    }
                </div>
            </main>
        </section>
    )
}

export default ProductList