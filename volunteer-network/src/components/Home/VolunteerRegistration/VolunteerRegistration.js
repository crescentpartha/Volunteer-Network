import React from 'react';
import { Button, Form } from 'react-bootstrap';

const VolunteerRegistration = () => {

    const handleRegistration = event => {
        event.preventDefault();
    }

    return (
        <div>
            <div style={{ width: '500px' }} className='mt-5 mb-5 mx-auto p-4 border rounded shadow-md'>
                <h2 className='text-start'>Register as a Volunteer</h2>
                <Form onSubmit={handleRegistration} className='w-100 mx-auto'>
                    <Form.Control className='my-4 fw-semibold border-top-0 border-start-0 border-end-0 rounded-0 px-0' type="name" placeholder="Full Name" required />
                    <Form.Control className='my-4 fw-semibold border-top-0 border-start-0 border-end-0 rounded-0 px-0' type="email" placeholder="Username or Email" required />
                    <Form.Control className='my-4 fw-semibold border-top-0 border-start-0 border-end-0 rounded-0 px-0' type="date" placeholder="Date" required />
                    <Form.Control className='my-4 fw-semibold border-top-0 border-start-0 border-end-0 rounded-0 px-0' type="text" placeholder="Description" required />
                    <Form.Control className='my-4 fw-semibold border-top-0 border-start-0 border-end-0 rounded-0 px-0' type="text" placeholder="Event Name" required />
                    <Button className='rounded-0 w-100 fw-semibold my-2' variant="primary" type="submit">
                        Registration
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default VolunteerRegistration;