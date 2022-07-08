import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
// import auricular from '../../assets/imgs/auricular.png';
import { ItemCount } from '../itemCount/ItemCount';
import './cards.scss';


function Cards ({product}) {


    const { id, pictureURL,  title, description, price} = product

    return (
        <Card className='card' sx={{ maxWidth: 345, height: 770 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="400"
                    image={pictureURL}
                    alt="auricular" /> 
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {title} -$ {price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <ItemCount stock={ 10 } initial={ 1 }/>
                <Link to={`/detail/${id}`}>Ver detalle</Link>
            </CardActions>
        </Card>
    );
}
export default Cards;