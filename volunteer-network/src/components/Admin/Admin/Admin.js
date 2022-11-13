import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink from '../../Shared/CustomLink/CustomLink';

const Admin = () => {
    return (
        <div>
            <div style={{ display: 'grid', gridTemplateColumns: '250px auto' }}>
                <div className='bg-light position-sticky border-end' style={{ height: '100vh', width: '100%', overflow: 'auto' }}>
                    <nav className='home-hover d-flex flex-column flex-wrap text-start'>
                        <h5 style={{backgroundColor: '#04AA6D'}} className='py-2 px-3 m-0 fw-semibold text-light text-center'>Admin</h5>
                        <CustomLink className='py-1 pt-3 px-3 d-block fw-semibold' to='volunteerRegisterList'>Volunteer Register List</CustomLink>
                        <CustomLink className='py-1 px-3 d-block fw-semibold' to='addEvent'>Add Event</CustomLink>
                    </nav>
                </div>
                <Outlet />
            </div>
        </div>
    );
};

export default Admin;