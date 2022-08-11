import React from "react";
import { useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './itemDetails.scss';
import { ItemCount } from "../itemCount/ItemCount";
import '../itemCount/itemCount.scss';
import { Link } from "react-router-dom";
import { cartContext } from "../Context/CartContext";
import { useContext } from "react";

const ItemDetail = ({ productDetail }) => {

    const [buttonState, setButtonState] = useState(false)
    const { addProduct } = useContext(cartContext)

    const onAdd = (amount) => {

        addProduct({ ...productDetail, qty: amount }); //a la funcion addProduct que esta en context, le paso como parametro la copia del array+qty
        setButtonState(true);

        setTimeout(() => {
            setButtonState(false)
        }, 2000)
    }

    const { id, title, description, pictureURL, price, specs, stock } = productDetail;

    return (
        <>

            <Card key={id} className="card-detail container">
                <CardMedia className="img-detail"
                    component="img"
                    alt="articulo seleccionado"
                    height="450"
                    image={pictureURL}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        ${price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Descripción: {description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component="div">
                        Especificaciones Técnicas: {specs}
                    </Typography>
                </CardContent>
                <CardActions className="add-to-cart">
                    {buttonState ? <Link to="/Cart"><Button>Finalizar Compra</Button></Link>
                        : <ItemCount stock={stock} initial={1} onAdd={onAdd} />}
                </CardActions>
            </Card>
        </>
    )
}
export default ItemDetail