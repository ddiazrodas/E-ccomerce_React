import React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { IconButton } from '@mui/material';

const CartWidget = () => {

    return (
        <IconButton color="primary" size="large" aria-label="add to shopping cart">
            <AddShoppingCartIcon fontSize="large"/>
        </IconButton>
    )
}

export default CartWidget;