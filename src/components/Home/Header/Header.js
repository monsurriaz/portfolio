import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import './Header.css';
import riaz from '../../../images/mrriaz.png';
import Typist from 'react-typist';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <section className="home container-fluid">
            <div className="sticky-top">
            <Navbar></Navbar>
            </div>
                <div className="row align-otems-center container mx-auto">
                    <div className="col-md-6 names">
                        <h1 className="text-white">Hi I'am Riaz</h1>
                        <Typist className='typist' cursor={{'hideWhenDone': true, 'hideWhenDoneDelay': 0}}>
                            <span className="typist">Engineer | Web Deveolpe</span>
                            <Typist.Backspace count={6} delay={1000} />
                            <span className="typist">veloper | Programmer</span>
                        </Typist>
                        <button className="bg-transparent border-0 mt-3 pl-0"><Link className="btn px-4" to="/contact">Contact</Link></button>
                        <button className="bg-transparent border-0 mt-3"><a className="btn px-3" href="https://drive.google.com/u/6/uc?id=1Q7qjwPt6ec9gTh6pTdVnyJjcmp4F1ZuZ&export=download" target="blank">Download Resume</a></button>
                    </div>
                    <div className="col-md-6">
                        <img className="header-img" src={riaz} alt=""/>
                    </div>
                </div>
        </section>
    );
};

export default Header;