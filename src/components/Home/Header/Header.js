import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import './Header.css';
import Particles from 'react-particles-js';
import riaz from '../../../images/riaz.jpg';
import Typist from 'react-typist';


const Header = () => {
    return (
        <section className="home container-fluid">
            <div className="sticky-top">
            <Navbar></Navbar>
            </div>
            <Particles
                params={{
                    "particles": {
                        "number": {
                            "value": 160,
                            "density": {
                                "enable": false
                            }
                        },
                        "size": {
                            "value": 3,
                            "random": true,
                            "anim": {
                                "speed": 4,
                                "size_min": 0.3
                            }
                        },
                        "line_linked": {
                            "enable": false
                        },
                        "move": {
                            "random": true,
                            "speed": 1,
                            "direction": "top",
                            "out_mode": "out"
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "bubble"
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        },
                        "modes": {
                            "bubble": {
                                "distance": 250,
                                "duration": 2,
                                "size": 0,
                                "opacity": 0
                            },
                            "repulse": {
                                "distance": 400,
                                "duration": 4
                            }
                        }
                    }
                }} />
                <div className="row align-otems-center">
                    <div className="col-md-6">
                        <h1>Hi I'am Riaz</h1>
                        <Typist className='typist' cursor={{'hideWhenDone': true, 'hideWhenDoneDelay': 0}}>
                            <span>Engineer | Web Deveolpe</span>
                            <Typist.Backspace count={6} delay={1000} />
                            <span>veloper | Programmer</span>
                        </Typist>
                    </div>
                    <div className="col-md-6">
                        <img className="header-img" src={riaz} alt=""/>
                    </div>
                </div>
        </section>
    );
};

export default Header;