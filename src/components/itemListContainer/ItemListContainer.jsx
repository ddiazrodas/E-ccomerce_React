import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import './itemListContainer.scss';
// import json from '../../mocks/fakeApi.json'
import { CircularProgress } from "@mui/material";
import { useParams } from 'react-router-dom';
import { db } from "../../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";


const ItemListContainer = (props) => {

    const { greeting } = props;

    console.log(db);

    const [productList, setProductList] = useState([]); //indico que es un array
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();

    // const getProducts = async () => {
    //     try {
    //         let response = await getData(categoryId)
    //         setProductList(response)
    //     }
    //     catch(error){
    //         console.log(error)
    //     }
    //     finally{
    //         setLoading(false)
    //     }
    // }

    useEffect(() => {
        const q = categoryId
            ? query(collection(db, 'productos'), where("category", "==", categoryId))
            : collection(db, 'productos');

        // const productsCollection = collection(db, 'productos'); //db que forestore es, collection productos
        // const q = query(productsCollection, where('category', '==', categoryId));
        //hace un filtro el query, y solo me trae la category que sea igual a auriculares
        // getDocs(categoryId ? q : productsCollection) //se comporta como una promise
            //getDocs(productsCollection) //me traeria todos los products, sin filtro
            //entonces si categoryId de useParams existe, que me muestre la category == del firestore
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

        // getProducts()

    }, [categoryId])

    return (
        <>
            <h1 className="saludo">{greeting}</h1>
            <div>
                {loading ? <CircularProgress color="secondary" className="d-flex m-auto" /> : <ItemList productList={productList} />}
            </div>
        </>
    )
}

export default ItemListContainer;