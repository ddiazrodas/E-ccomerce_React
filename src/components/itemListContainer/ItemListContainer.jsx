import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import './itemListContainer.scss';
// import json from '../../mocks/fakeApi.json'
import { getData } from "../../mocks/fakeApi";
import { CircularProgress } from "@mui/material";
import { useParams } from 'react-router-dom';


const ItemListContainer = (props) => {

    const { greeting } = props;

    const [productList, setProductList] = useState([]); //indico que es un array
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();

    const getProducts = async () => {

        try {
            let response = await getData(categoryId)
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
    },[categoryId])

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