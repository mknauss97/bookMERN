import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {
    return (
        <div className="jumbotron">
            <div className="d-flex justify-content-center ft-light">
                <h1> Book Search</h1>
                </div>
                <h3 className="d-flex justify-content-center">Find and Save your Favorite Books</h3>
           
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid d-flex justify-content-center">
                    <div className="empty" id="navbarNav">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="link" to="/">Search</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="link" to="/saved">Saved</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;