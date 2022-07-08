import React, { useEffect, useState } from "react";
import { getProduct } from "../../mocks/fakeApi";
import ItemDetail from "../ItemDetail/ItemDetail";
import { CircularProgress } from "@mui/material";
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState([])
    const [loading, setLoading] = useState(true);

    const {id} = useParams()


    const getProductDetail = async () => {

        try {
            let response = await getProduct(id)
            setProductDetail(response)
        }
        catch(error){
            console.error(error);
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        getProductDetail()
    },[id])

    return(
        <>
            {loading ? <CircularProgress color="secondary" className="d-flex m-auto" /> : <ItemDetail productDetail={productDetail} />}
        </>
    )
}
export default ItemDetailContainer;