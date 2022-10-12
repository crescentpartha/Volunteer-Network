import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../../images/notFound.png';

const NotFound = () => {
    return (
        <div className='m-5'>
            <img className='img-fluid mx-auto d-block' src={notFound} alt="Not Found" />
            <Link to='/home' className='fw-semibold btn btn-outline-warning' type="Link">Back to Homepage</Link>
        </div>
    );
};

export default NotFound;