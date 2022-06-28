import React from "react";
import './itemListContainer.scss';

const ItemListContainer = (props) => {


    const { greeting } = props;

    return(
        <>
            <h1 className="saludo">{greeting}</h1>
        </>
    )

}

export default ItemListContainer;