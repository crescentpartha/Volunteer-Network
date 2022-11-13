import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Admin = () => {
    return (
        <div>
            <div style={{ display: 'grid', gridTemplateColumns: '250px auto' }}>
                <div className='bg-light position-sticky border-end' style={{ height: '100vh', width: '100%', overflow: 'auto' }}>
                    <nav className='home-hover d-flex flex-column flex-wrap text-start'>
                        <h5 className='py-2 px-3 m-0 fw-semibold text-secondary'>Admin</h5>
                        <Link className='py-1 px-3 d-block text-decoration-none' to='volunteerRegisterList'>Volunteer Register List</Link>
                        <Link className='py-1 px-3 d-block text-decoration-none' to='addEvent'>Add Event</Link>
                    </nav>
                </div>
                <Outlet />
            </div>
        </div>
    );
};

export default Admin;