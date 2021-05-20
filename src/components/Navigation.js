import React from 'react'
import {Link} from 'react-router-dom'

const Navigation = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg  navbar-dark">
                <div className="container">
                    <Link className="navbar-brand-link" to="/">moma</Link>
                    <button 
                    className="navbar-toggler " 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarTogglerDemo02" 
                    aria-controls="navbarTogglerDemo02" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">WELCOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/menu">MENU</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/reservations">RESERVATIONS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">CONTACT</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blog">BLOG</Link>
                        </li>
                    </ul>
                </div>
                </div>
            </nav> 
        </div>
    )
}

export default Navigation
