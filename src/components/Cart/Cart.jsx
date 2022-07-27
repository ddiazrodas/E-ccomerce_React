import React, { useContext, useState } from "react";
import { cartContext } from "../Context/CartContext";
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import './cart.scss';
import { Link } from "react-router-dom";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase/firebase";


const Cart = () => {

    const { products, delProduct, clear, totalCompra } = useContext(cartContext);

    const [infoCompra, setInfoCompra] = useState({})

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
    }

    return (
        <>
            {products.length === 0 ?
                <div>
                    <h1>Su carrito está vacio</h1>
                    <Link to={"/"}> <button>Volver al Inicio</button> </Link>
                </div>
                :
                <div>
                    {products.map((product) => (
                        <div className="item-cart" key={product.id}>
                            <div className="item-cart-img">
                                <img src={product.pictureURL} alt="product" />
                            </div>
                            <h2>Producto: {product.tittle}</h2>
                            <h2>Precio: $ {product.price}</h2>
                            <h2>Cantidad: {product.qty}</h2>
                            <button onClick={() => delProduct(product.id)}><DeleteForeverTwoToneIcon /></button>
                        </div>
                    ))}
                    <h3 className="d-flex justify-content-end">Total: $ {totalCompra}</h3>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <input name="name" type="text" placeholder="Nombre" onChange={(e) => infoComprador(e)} />
                            <input name="tel" type="tel" placeholder="Telefono" onChange={(e) => infoComprador(e)}/>
                            <input name="email" type="email" placeholder="Correo electronico"onChange={(e) => infoComprador(e)} />
                            <button onClick={() => clear()}>Vaciar carrito</button>
                            <button onClick={() => confirmarCompra()}>Confirmar Compra</button>
                        </form>
                    </div>

                </div>
            }
        </>
    )
}

export default Cart;