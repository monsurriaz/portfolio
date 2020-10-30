import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import ShowBlogs from '../ShowBlogs/ShowBlogs';

const Blogs = () => {
    return (
        <div className="container-fluid">
            <Navbar></Navbar>
            <ShowBlogs />
        </div>
    );
};

export default Blogs;