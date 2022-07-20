import React, { useContext } from "react";
import { cartContext } from "../Context/CartContext";
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import './cart.scss';
import { Link } from "react-router-dom";


const Cart = () => {

    const { products, delProduct, clear, calculateTotal } = useContext(cartContext);

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
                <h3 className="d-flex justify-content-end">Total: $ {calculateTotal()}</h3>
                <button onClick={() => clear()}>Vaciar carrito</button>
            </div>
            }
        </>
    )
}

export default Cart;