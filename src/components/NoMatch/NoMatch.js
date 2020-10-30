import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';

const NoMatch = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h3>Page not found</h3>
            <p>404 error!</p>
        </div>
    );
};

export default NoMatch;