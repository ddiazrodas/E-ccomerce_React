import React from "react";
import { useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';
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

        // const producto = {...productDetail, qty: count}; forma clara
        addProduct({ ...productDetail, qty: amount }); //a la funcion addProduct que esta en context, le paso como parametro la copia del array+qty
        setButtonState(true);

        setTimeout(() => {
            setButtonState(false)
        }, 2000)
    }

    const { id, title, description, pictureURL, price, specs, stock } = productDetail;

    return (
        <>
            <Card key={id} className="card-detail container mt-5">
                <CardMedia sx={{ maxWidth: 450 }}
                    component="img"
                    image={pictureURL}
                    alt="Game Zero" />
                <div display="block">
                    <CardContent>
                        <Typography gutterBottom variant="h2" component="div">
                            {title}
                        </Typography>
                        <Typography gutterBottom variant="h2" component="div">
                            ${price}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component="div">
                            Descripción: <p>{description}</p>
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component="div">
                            Especificaciones Técnicas: <p>{specs}</p>
                        </Typography>
                    </CardContent>
                    <CardActions className="justify-content-center">

                        <div className="d-flex flex-column">
                            {buttonState ? <Link to="/Cart"><Button>Finalizar Compra</Button></Link>
                                : <ItemCount stock={stock} initial={1} onAdd={onAdd} />}
                        </div>
                    </CardActions>
                </div>
            </Card>
        </>
    )
}
export default ItemDetail