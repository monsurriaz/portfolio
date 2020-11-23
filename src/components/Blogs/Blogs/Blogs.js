import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import ShowBlogs from '../ShowBlogs/ShowBlogs';

const Blogs = () => {
    return (
        <div className="container-fluid bg-all">
            <Navbar></Navbar>
            <ShowBlogs />
        </div>
    );
};

export default Blogs;