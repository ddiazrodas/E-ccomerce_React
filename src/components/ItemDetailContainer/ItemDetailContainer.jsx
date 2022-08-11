import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { CircularProgress } from "@mui/material";
import { useParams } from 'react-router-dom';
import { db } from "../../firebase/firebase";
import { doc, getDoc, collection } from "firebase/firestore";

const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState([])
    const [loading, setLoading] = useState(true);

    const { id } = useParams()

    useEffect(() => {

        const productsCollection = collection(db, 'productos');//taigo el collecion de productos
        const refDoc = doc(productsCollection, id) //traigo el product id de useParams
        getDoc(refDoc).then(result => {
            setProductDetail({
                id: result.id,
                ...result.data(),
            })
        })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))

    }, [id])

    return (
        <>
            {loading ? <CircularProgress color="secondary" className="d-flex m-auto" /> : <ItemDetail productDetail={productDetail} />}
        </>
    )
}
export default ItemDetailContainer;