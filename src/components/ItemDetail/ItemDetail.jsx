import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './itemDetails.scss';
import { ItemCount } from "../itemCount/ItemCount";
import '../itemCount/itemCount.scss';

const ItemDetail = ({ productDetail }) => {

    console.log(productDetail);

    // console.log(firstItem)

    const { id, title, description, pictureURL, price, specs } = productDetail

    // console.log(id, title, description, pictureURL, price, specs);

    return (
        <>
            <div className="container mt-5">
                <Card key={id} className="card-detail">
                    <CardMedia sx={{ maxWidth: 450 }}
                        component="img"
                        image={pictureURL}
                        alt="Game Zero" />
                    <div display="block">
                        <CardContent>
                            <Typography gutterBottom variant="h2" component="div">
                                {title} ${price}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" component="div">
                                Descripción: <p>{description}</p>
                            </Typography>
                            <Typography variant="body2" color="text.secondary" component="div">
                                Especificaciones Técnicas: <p>{specs}</p>
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <ItemCount stock={10} initial={1} className="item-detail" />
                        </CardActions>
                    </div>
                </Card>
            </div>
        </>
    )
}
export default ItemDetail