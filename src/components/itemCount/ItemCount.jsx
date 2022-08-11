import React from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import useCount from './hooks/useCount';
import SendIcon from '@mui/icons-material/Send';
import './itemCount.scss';

export const ItemCount = (props) => {

    const { stock, initial, onAdd } = props;

    const { count, amount } = useCount(stock, initial);

    const handleClickAddToCart = () => {
        onAdd(amount);
    }

    return (
        <>
            <div className='itemCount'>

                <div className='mb-4'>
                    <Button onClick={() => count(-1)}><RemoveIcon /></Button>
                    <span className='itemCounts'> Cantidad: {amount} </span>
                    <span className='itemCounts'> Stock: {stock} </span>
                    <Button onClick={() => count(+1)}><AddIcon /></Button>
                </div>
                <div>
                    <Button onClick={() => handleClickAddToCart()} variant='contained' color='primary' endIcon={<SendIcon />}>Agregar al Carrito</Button>
                </div>

            </div>
        </>
    )
};
