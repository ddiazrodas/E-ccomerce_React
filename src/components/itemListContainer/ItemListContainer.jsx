import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import './itemListContainer.scss';
import { CircularProgress } from "@mui/material";
import { useParams } from 'react-router-dom';
import { db } from "../../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";


const ItemListContainer = (props) => {

    const { greeting } = props;

    const [productList, setProductList] = useState([]); //indico que es un array
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();

    useEffect(() => {
        const q = categoryId
            ? query(collection(db, 'productos'), where("category", "==", categoryId))
            : collection(db, 'productos');
            
            getDocs(q)
            .then(result => {
                const list = result.docs.map(doc => {
                    return {
                        id: doc.id, //obtenemos el id, y con el spread se agrega
                        ...doc.data(),//con el .data ingreso al array de objts de mis productos
                    }
                })
                setProductList(list);
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))

    }, [categoryId])

    return (
        <>
            <h1 className="saludo my-4 py-4">{greeting}</h1>
            <div>
                {loading ? <CircularProgress color="secondary" className="d-flex m-auto" /> : <ItemList productList={productList} />}
            </div>
        </>
    )
}

export default ItemListContainer;