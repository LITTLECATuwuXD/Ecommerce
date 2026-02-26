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
        </section>
    )
}

export default ProductList