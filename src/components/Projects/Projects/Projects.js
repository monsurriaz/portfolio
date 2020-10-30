import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import ShowProject from '../ShowProject/ShowProject';

const Projects = () => {
    return (
        <div className="container-fluid bg-all">
            <Navbar></Navbar>
            <ShowProject />
        </div>
    );
};

export default Projects;