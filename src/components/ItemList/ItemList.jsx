import React from "react";
import Cards from "../card/Cards";
const ItemList = ({productList}) => {

    return(
        <div className="container d-flex justify-content-around flex-wrap mb-4">
            {productList.map((product) => <Cards key={product.id} product={product} />)}
        </div>
    )
}

export default ItemList;