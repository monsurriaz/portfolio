import React from 'react';
import riaz from '../../../images/riaz.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ShowAbout.css';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ShowAbout = () => {
    return (
        <div className="row justify-content-center mt-5">
            <div className="col-12 col-md-5 d-flex flex-column align-items-center">
            <h3 className="mb-4">About</h3>
            <img className="about-img" src={riaz} alt=""/>
            <div className="social-link">
                <a target="blank" href="https://www.linkedin.com/in/monsurriaz/"><FontAwesomeIcon className="brand-link" icon={faLinkedin} /></a>
                <a target="blank" href="https://github.com/monsurriaz"><FontAwesomeIcon className="brand-link" icon={faGithub} /></a>
                <a target="blank" href="https://facebook.com/monsur.riaz"><FontAwesomeIcon className="brand-link" icon={faFacebook} /></a>
            </div>
            <h4 className="text-center text-dark">
                I am a MERN Stack developer with industry experience building websites and web applications.
            </h4>
            <div>
                <button className="bg-transparent border-0 mt-3"><a className="btn" href="https://drive.google.com/file/d/1Q7qjwPt6ec9gTh6pTdVnyJjcmp4F1ZuZ/view">Download Resume</a></button>
            </div>
            </div>
        </div>
    );
};

export default ShowAbout;