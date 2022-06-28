import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import auricular from '../../assets/imgs/auricular.png';
import ItemCount from '../itemCount/ItemCount';
import './cards.scss';


function Cards () {


    return (

        <Card className='card' sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="400"
                    image={auricular}
                    alt="auricular"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        GSP 300
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        El auricular GSP 300 es aquel que usarán las personas del mundo gaming que quieran
                        llevar su juego a un nivel superior. Su almohadillas ultra cómodas y atenuadoras del
                        sonido exterior, su audio inigualable y su micrófono sumamente silencioso, harán que los
                        sentidos se concentren únicamente en la partida.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className='itemCount'>
                <ItemCount stock={ 10 } initial={ 1 }/>
            </CardActions>
        </Card>
    );
}

export default Cards;