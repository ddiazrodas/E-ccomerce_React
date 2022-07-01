import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import './itemListContainer.scss';
// import json from '../../mocks/fakeApi.json'
import { getData } from "../../mocks/fakeApi";
import { CircularProgress } from "@mui/material";


const ItemListContainer = (props) => {

    const { greeting } = props;

    const [productList, setProductList] = useState([]); //indico que es un array
    const [loading, setLoading] = useState(true);

    const getProducts = async () => {

        try {
            let response = await getData
            setProductList(response)
        }
        catch(error){
            console.log(error)
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        getProducts()
    },[])

    return(
        <>
            <h1 className="saludo">{greeting}</h1>
            <div>
                {loading ? <CircularProgress color="secondary" className="d-flex m-auto" /> : <ItemList productList={productList}/>}
            </div>
        </>
    )
}

export default ItemListContainer;