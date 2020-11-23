import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <Link className="navbar-brand" to="/"><span className="brand-logo">Monsur Riaz</span></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item mr-3">
                        <Link className="nav-link" to="/"><span className="nav-manual">Home</span> <span class="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item mr-3">
                        <Link className="nav-link" to="/project"><span className="nav-manual">Project</span></Link>
                    </li>
                    <li className="nav-item mr-3">
                        <Link className="nav-link" to="/blog"><span className="nav-manual">Blog</span></Link>
                    </li>
                    <li className="nav-item mr-3">
                        <Link className="nav-link" to="/about"><span className="nav-manual">About me</span></Link>
                    </li>
                    <li className="nav-item mr-3">
                        <Link className="nav-link" to="/contact"><span className="nav-manual">Contact</span></Link>
                    </li>
                    <li className="nav-item mr-3">
                        <button className="bg-transparent border-0"><a className="btn" href="https://drive.google.com/file/d/1Q7qjwPt6ec9gTh6pTdVnyJjcmp4F1ZuZ/view?usp=sharing" target="blank">Resume</a></button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;