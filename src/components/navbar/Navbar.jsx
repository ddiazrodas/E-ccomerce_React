import { Link } from 'react-router-dom';
import React from 'react';
import logo from '../../assets/imgs/logo.png';
import CartWidget from './CartWidget';
import './navbar.scss';

const Navbar = () => {

    const categories = [
        {id: 1, path:'/', name: 'Home'},
        {id: 2, path:'/category/auriculares', name: 'Auriculares'},
        {id: 3, path:'/category/microfonos', name: 'Micrófonos'}]

    return (
        <>
            <nav className="colorNav">
                <Link to={`/`}><img src={logo} href="#" className="tamanioLogo" alt="" /></Link>
                
                <div className="listaNav">
                    <div className="titulo">
                        <h1>Bienvenido a tienda Sennheiser</h1>
                    </div>
                    <ul>
                        {categories.map((category) => (
                            <Link to={category.path} key={category.id}>
                                {category.name}
                            </Link>
                        ))}
                        <li><CartWidget /></li>
                    </ul>
                </div>
            </nav>
        </>
    )
};

export default Navbar;