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
                            <span>Hombres</span>
                        </label>
                    </div>
                </div>
            </aside>
        </section>
    )
}

export default ProductList