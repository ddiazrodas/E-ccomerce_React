import React from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import useCount from './hooks/useCount';
import './itemCount.scss';

export const ItemCount = (props) => {

    const { stock, initial } = props;

    const { count, amount } = useCount(stock, initial);

    return (
        <>
            <div className='itemCount'>
                <div>
                    <Button onClick={() => count(-1)}><RemoveIcon /></Button>
                    <span className='itemCounts'> Cantidad: {amount} - Stock: {stock}</span>
                    <Button onClick={() => count(+1)}><AddIcon /></Button>
                </div>
                <div>
                    <Button variant='contained' color='primary' endIcon={<SendIcon />}>Agregar al carrito</Button>
                </div>
            </div>
        </>
    )
};
