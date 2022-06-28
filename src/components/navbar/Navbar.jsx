import React from "react";
import logo from '../../assets/imgs/logo.png';
import Cart from '../cartWidget/Cart';
import './navbar.scss';

const Navbar = () => {
    return (
        <>
            <nav className="colorNav">
                <img src={logo} href="#" className="tamanioLogo" alt="" />
                <div className="listaNav">
                    <div className="titulo">
                        <h1>Bienvenido a tienda Sennheiser</h1>
                    </div>
                    <ul>
                        <li><a href="#">Auriculares</a></li>
                        <li><a href="#">Microfonos</a></li>
                        <li><Cart /></li>
                    </ul>
                </div>
            </nav>
        </>
    )
};

export default Navbar;