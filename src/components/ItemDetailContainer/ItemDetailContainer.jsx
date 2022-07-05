import React, { useEffect, useState } from "react";
import { getData } from "../../mocks/fakeApi";
import ItemDetail from "../ItemDetail/ItemDetail";
import { CircularProgress } from "@mui/material";

const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState([])
    const [loading, setLoading] = useState(true);

    const getProductDetail = async () => {

        try {
            let response = await getData
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
    },[])

    return(
        <>
            {loading ? <CircularProgress color="secondary" className="d-flex m-auto" /> : <ItemDetail productDetail={productDetail} />}
        </>
    )
}
export default ItemDetailContainer;