import React from "react";

import Products from "../data/Products.js";

export default props => {
    function getProductsListItem() {
        return Products.map(prod => {
            return <li key={prod.id}>
                {prod.id} - {prod.name} -{">"} R$ {prod.price}
                </li>
        })
    }
    return (
        <div>
            <h2>Repetição</h2>
            <ul>
                {getProductsListItem()}
            </ul>
        </div>
    )
}