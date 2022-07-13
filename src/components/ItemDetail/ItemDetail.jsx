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

const ItemDetail = ({ productDetail }) => {

    const [buttonState, setButtonState] = useState(false)

    const handleClick = () => {

        try {
            setButtonState(true);

            setTimeout(() => {
                setButtonState(false)
            }, 4000)
        }
        catch (error) {
            console.log(error);
        }
    }

    console.log(productDetail);

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
                
                            {buttonState ? <Link to="/Cart"><Button>Finalizar Compra</Button></Link> : (<><ItemCount stock={stock} initial={1} />
                            <Button onClick={handleClick} variant='contained' color='primary' endIcon={<SendIcon />}>Agregar al Carrito</Button></>)}
                        </div>
                    </CardActions>
                </div>
            </Card>
        </>
    )
}
export default ItemDetail