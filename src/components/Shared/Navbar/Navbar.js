import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <Link className="navbar-brand" to="/"><span className="text-secondary">Monsur Riaz</span></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item mr-3">
                        <Link className="nav-link text-secondary" to="/">Home <span class="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item mr-3">
                        <Link className="nav-link text-secondary" to="/project">Project</Link>
                    </li>
                    <li className="nav-item mr-3">
                        <Link className="nav-link text-secondary" to="/blog">Blog</Link>
                    </li>
                    <li className="nav-item mr-3">
                        <Link className="nav-link text-secondary" to="/about">About me</Link>
                    </li>
                    <li className="nav-item mr-3">
                        <Link className="nav-link text-secondary" to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;