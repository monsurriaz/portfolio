import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import ShowAbout from '../ShowAbout/ShowAbout';

const About = () => {
    return (
        <div className="container-fluid bg-all">
            <Navbar />
            <ShowAbout />
        </div>
    );
};

export default About;