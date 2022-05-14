import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Navigate, NavLink } from 'react-router-dom';
import Login from '../Auth/Login';
import Signup from '../Auth/Signup';
import './Navbar.css'

const Navbar = () => {

    const state = useSelector((state)=>state.addItem);
    console.log(state);
   

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
                <div className="container">
                    <Link  className="navbar-brand fw-bold fs-3" to="/home">Smartly</Link >
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/products" >Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about" >About</Link>
                            </li> 
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact" >Contact</Link>
                            </li>
                        </ul>
                        <div className="buttons d-flex">
                            <Login></Login>
                            <Signup></Signup>
                            <NavLink to="/cart" className="headerIcon ms-2">
                                <i className="fa fa-shopping-cart me-1"></i> 
                            </NavLink>
                            <p className="cartNumber">{state.length}</p>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
