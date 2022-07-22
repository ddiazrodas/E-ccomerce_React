import { Link, NavLink } from 'react-router-dom';
import React from 'react';
import logo from '../../assets/imgs/logo.png';
import CartWidget from './CartWidget';
import './navbar.scss';

const Navbar = () => {

    const categories = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/category/auriculares', name: 'Auriculares' },
        { id: 3, path: '/category/microfonos', name: 'Micrófonos' }]

    return (
        <>
            <header className='header'>
                <nav class="navbar navbar-expand-lg">
                    <div class="container-fluid">
                        <Link to={`/`}><img src={logo} href="#" className="tamanioLogo" alt="" /></Link>
                        <button class="navbar-toggler bg-light btn-hamburger" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse text-end" id="navbarSupportedContent">
                            {/* <div className="titulo">
                                <h1>Bienvenido a tienda Sennheiser</h1>
                            </div> */}
                            <ul class="nav__list navbar-nav ms-auto mb-2 mb-lg-0">
                                {categories.map((category) => (
                                    <li class="nav-item pe-5"><NavLink classNameclass="nav__link nav-link" to={category.path} key={category.id} >
                                        {category.name}
                                    </NavLink>
                                    </li>
                                ))}
                                <Link to={"/Cart"}><CartWidget /></Link>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
};

export default Navbar;