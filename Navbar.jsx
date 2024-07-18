
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to="/" activeClassName="active">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" activeClassName="active">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" activeClassName="active">Contact</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/products" activeClassName="active">Products</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;