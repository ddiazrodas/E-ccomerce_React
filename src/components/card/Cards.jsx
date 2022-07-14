import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';
import { CardActionArea, CardActions } from '@mui/material';
// import auricular from '../../assets/imgs/auricular.png';
import { ItemCount } from '../itemCount/ItemCount';
import './cards.scss';


function Cards({ product }) {

    const { id, pictureURL, title, description, price, stock } = product

    const [buttonState, setButtonState] = useState(false)

    const onAdd = (count) => {
        setButtonState(true);

        setTimeout(() => {
            setButtonState(false)
        }, 2000)
    }

    return (
        <Card className='card' sx={{ maxWidth: 345, height: 900 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="400"
                    image={pictureURL}
                    alt="auricular" />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        $ {price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className='btn-add-cart'>

                <div className='btn-add-cart2 position-absolute bottom-0'>
                    {buttonState ? <Link to="/Cart"><Button>Finalizar Compra</Button></Link> : <ItemCount stock={stock} initial={1} onAdd={onAdd} />}
                    {/* <Button className='mb-4' variant='contained' color='primary' endIcon={<SendIcon />}>Agregar al carrito</Button> */}
                    <Link className='ver-detalle' to={`/detail/${id}`}>Ver detalle</Link>
                </div>
            </CardActions>
        </Card>
    );
}
export default Cards;