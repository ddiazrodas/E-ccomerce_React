import React, { useState } from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import './itemCount.scss';

const ItemCount = (props) => {

    const { stock, initial } = props;
    const [amount, setAmount] = useState(1);

    const count = (value) => {

        let result = amount + value; // debemos guardar en una variable lo acumulado en amount
        //sino amount=stock, muere la app

        if (result <= stock) {
            setAmount(amount + value);
        }
        if (result < initial){
            setAmount(amount);
        }
    }

    return (
        <>
            <Button onClick={() => count(-1)}><RemoveIcon /></Button>
            <span className='itemCounts'> Cantidad: {amount} - Stock: {stock}</span>
            <Button onClick={() => count(+1)}><AddIcon /></Button>
        </>
    )

};

export default ItemCount;