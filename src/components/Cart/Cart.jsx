import React, { useContext, useState } from "react";
import { cartContext } from "../Context/CartContext";
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import './cart.scss';
import { Link } from "react-router-dom";
import { addDoc, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import Swal from 'sweetalert2';

const Cart = () => {

    const { products, delProduct, clear, totalCompra } = useContext(cartContext);

    const [infoCompra, setInfoCompra] = useState({})
    const [idVenta, setIdVenta] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const infoComprador = (info) => {
        console.log(info);
        setInfoCompra({ ...infoCompra, [info.target.name]: info.target.value })
    }

    const confirmarCompra = () => {
        const ventasCollection = collection(db, 'ventas')
        addDoc(ventasCollection, {
            infoCompra,
            items: { products },
            date: serverTimestamp(),
            total: { totalCompra }
        })
            .then((result) => {
                setIdVenta(result.id)
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `Su compra ha sido completada, ID: ${result.id} `,
                    showConfirmButton: false,
                    timer: 10000
                  })
                
                  for (let index = 0; index < products.length; index++) {

                    let updatedStock = products[index].stock - products[index].qty;

                    const updateCollection = doc(db, 'productos', products[index].id);
                    updateDoc(updateCollection, {stock: updatedStock})
                    
                  }


                clear()
            })
    }

    return (
        <>
            <div className="my-5">
                {products.length === 0 ?
                    <div className="container">
                        <h1>Su carrito está vacio</h1>
                        <Link to={"/"}> <button type="button" className="btn btn-info">Volver al Inicio</button> </Link>
                    </div>
                    :
                    <div className="container">
                        {products.map((product) => (
                            <div className="item-cart container" key={product.id}>
                                <div className="item-cart-img">
                                    <img style={{width: "40"}} src={product.pictureURL} alt="product" />
                                </div>
                                <div className="d-flex flex-column align-self-center">
                                    <h2 className="text-cart">Producto: {product.title}</h2>
                                    <h2 className="text-cart">Precio: $ {product.price}</h2>
                                    <h2 className="text-cart">Cantidad: {product.qty}</h2>
                                </div>
                                <div className="d-flex align-self-center">
                                    <button className="d-flex justify-content-end btn btn-danger"><DeleteForeverTwoToneIcon onClick={() => delProduct(product.id)} /></button>
                                </div>
                            </div>
                        ))}

                        <div>
                            <h3 className="d-flex justify-content-end total">Total: $ {totalCompra}</h3>

                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label className="form-label">Nombre</label>
                                    <input name="name" type="text" className="form-control" placeholder="Nombre" required onChange={(e) => infoComprador(e)} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input name="email" type="email" className="form-control" aria-describedby="emailHelp" placeholder="Correo electronico" required onChange={(e) => infoComprador(e)} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Telefono de Contacto</label>
                                    <input name="tel" type="tel" className="form-control" placeholder="Telefono" required onChange={(e) => infoComprador(e)} />
                                </div>
                                <button type="button" className="btn btn-outline-warning me-3" onClick={() => clear()}>Vaciar carrito</button>
                                <button type="submit" className="btn btn-outline-success" onClick={() => confirmarCompra()}>Confirmar Compra</button>
                            </form>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default Cart;