import React, { useContext } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { IconButton } from '@mui/material';
import { cartContext } from '../Context/CartContext';

const CartWidget = () => {

    const { qtyProducts } = useContext(cartContext);

    return (
        <>
        <IconButton color="primary" size="large" aria-label="add to shopping cart">
            <AddShoppingCartIcon fontSize="large"/>
            <small className='fs-5'>{qtyProducts}</small>
        </IconButton>
        
        </>
    )
}

export default CartWidget;