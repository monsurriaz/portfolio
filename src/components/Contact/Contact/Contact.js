import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import ContactDetail from '../ContactDetail/ContactDetail';

const Contact = () => {
    return (
        <div className="container-fluid bg-all">
            <Navbar />
            <ContactDetail />
        </div>
    );
};

export default Contact;