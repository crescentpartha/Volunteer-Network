import React from 'react';

const Footer = () => {
    return (
        <div className='bg-light'>
            <p className='mb-0 p-4 fw-semibold'>Copyright &copy;{new Date().getFullYear()} <span className='text-warning'>Volunteer-Network</span> All rights reserved.</p>
        </div>
    );
};

export default Footer;