import { Link, NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import logo from '../../assets/imgs/logo.png';
import CartWidget from './CartWidget';
import './navbar.scss';

const Navbar = () => {

    const [header, setHeader] = useState(false);

    const changeBackGround = () => {
        if (window.scrollY >= 80) {
            setHeader(true)
        }
        else {
            setHeader(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeBackGround);
    
        return () => {
          window.removeEventListener('scroll', changeBackGround);
        };
      }, [window.scrollY]);

    const categories = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/category/auriculares', name: 'Auriculares' },
        { id: 3, path: '/category/microfonos', name: 'Micrófonos' }]

    return (
        <>
            <header className={header ? 'header active' : 'header'}>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <Link to={`/`}><img src={logo} href="#" className="tamanioLogo" alt="" /></Link>
                        <button className="navbar-toggler bg-light btn-hamburger" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse text-end" id="navbarSupportedContent">
                            <ul className="nav__list navbar-nav ms-auto mb-2 mb-lg-0">
                                {categories.map((category) => (
                                    <li key={category.id} className="nav-item pe-5"><NavLink style={{textDecoration: "none"}} to={category.path} key={category.id} >
                                        {category.name}
                                    </NavLink>
                                    </li>
                                ))}
                                <Link style={{marginRight: "2rem", textDecoration: "none"}} to={"/Cart"}><CartWidget /></Link>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
};

export default Navbar;