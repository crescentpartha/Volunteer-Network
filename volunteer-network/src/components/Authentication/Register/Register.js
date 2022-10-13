import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    return (
        <div>
            <div style={{ width: '500px' }} className='mt-5 mb-5 mx-auto p-4 border rounded shadow-md'>
                <h2>Create an account</h2>
                <Form className='w-100 mx-auto'>
                    <Form.Control className='my-4 fw-semibold border-top-0 border-start-0 border-end-0 rounded-0 px-0' type="name" placeholder="Name" required />
                    <Form.Control className='my-4 fw-semibold border-top-0 border-start-0 border-end-0 rounded-0 px-0' type="email" placeholder="Email" required />
                    <Form.Control className='my-4 fw-semibold border-top-0 border-start-0 border-end-0 rounded-0 px-0' type="password" placeholder="Password" required />
                    <Form.Control className='my-4 fw-semibold border-top-0 border-start-0 border-end-0 rounded-0 px-0' type="confirm-password" placeholder="Confirm Password" required />
                    <Button className='rounded-0 w-100 fw-semibold my-2' variant="primary" type="submit">
                        Register
                    </Button>
                    <p className='mt-2 fw-semibold'>Already have an account? <Link className='text-primary fw-normal' to='/login'>Login</Link></p>
                    <div>
                        <SocialLogin></SocialLogin>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Register;