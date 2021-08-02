import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {
    return (
        <div className="jumbotron d-flex flex-column align-item-center justify-content-center">
            <h2> Book Search</h2>
            <p>Find and Save your Favorite Books</p>

            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href='/'>MERN Google Books</a>
                    <div className="empty" id="navbarNav">
                        <ul className="navbar-nav">
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