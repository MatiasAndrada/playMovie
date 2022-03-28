import React from "react";
import Item from "./Item";

const ItemList = ({ productList }) => {
    return (
        <div className="row">
            {
                productList.map((product) => 
                <Item key={product.id} category={product.category} tipo={product.tipo} precio={product.precio} img={product.img}/>)
            }
        </div>
    )
}

export default ItemList;