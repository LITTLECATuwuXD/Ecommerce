import "./ProductList.css"

const ProductList = () => 
{
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
                </div>
            </aside>
            <main className="collections">
                <div className="options">
                    <h2>TODAS LAS COLLECIONES</h2>
                    <div className="sort-options">
                        <label>
                            Ordenar por:
                            <select>
                                <option>Relevante</option>
                                <option>De menor a mayor</option>
                                <option>De mayor a menor</option>
                            </select>
                        </label>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default ProductList