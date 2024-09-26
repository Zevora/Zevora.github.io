import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const NotFound = () => {
    return (
        <div className='container notfound-page'>
            <h1 className='page-title'>Page Not Found</h1>
            <p className='description'>The page you are looking for does not exist.</p>
            <Link to="/">Go to Home Page</Link>
        </div>
    );
};

export default NotFound;
