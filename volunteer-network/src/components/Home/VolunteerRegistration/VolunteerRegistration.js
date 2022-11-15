import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import useLoadSingleEvent from '../../../hooks/useLoadSingleEvent';

const VolunteerRegistration = () => {
    const { eventDetailId } = useParams();
    const [event] = useLoadSingleEvent(eventDetailId);
    const { title, description, bannerImg } = event;
    // console.log(event, title);
    
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [eventTitle, setEventTitle] = useState('');

    useEffect( () => {
        setEventDescription(description);
        setEventTitle(title);
    }, [description, title]);

    const handleRegistration = (e) => {
        e.preventDefault();
        const registration = { name, email, date, eventDescription, eventTitle, bannerImg };
        // console.log(registration);

        // POST a new volunteerActivity from client-side to database
        const url = `http://localhost:5000/activity`;
        fetch(url, {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(registration)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
        })
        navigate('/admin/volunteerRegisterList');
    }

    return (
        <div>
            <div style={{ width: '500px' }} className='mt-5 mb-5 mx-auto p-4 border rounded shadow-md'>
                <h2 className='text-start'>Register as a Volunteer</h2>
                <Form onSubmit={handleRegistration} className='w-100 mx-auto'>
                    <Form.Control
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="name"
                        placeholder="Full Name"
                        className='my-4 fw-semibold border-top-0 border-start-0 border-end-0 rounded-0 px-0'
                        required
                    />
                    <Form.Control
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Username or Email"
                        className='my-4 fw-semibold border-top-0 border-start-0 border-end-0 rounded-0 px-0'
                        required
                    />
                    <Form.Control
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        type="date"
                        placeholder="Date"
                        className='my-4 fw-semibold border-top-0 border-start-0 border-end-0 rounded-0 px-0'
                        required
                    />
                    <Form.Control
                        value={eventDescription}
                        onChange={(e) => setEventDescription(e.target.value)}
                        type="text"
                        placeholder="Description"
                        className='my-4 fw-semibold border-top-0 border-start-0 border-end-0 rounded-0 px-0'
                        required
                    />
                    <Form.Control
                        value={eventTitle}
                        onChange={(e) => setEventTitle(e.target.value)}
                        type="text"
                        placeholder="Event Name"
                        className='my-4 fw-semibold border-top-0 border-start-0 border-end-0 rounded-0 px-0'
                        required
                    />
                    <Button
                        type="submit"
                        variant="primary"
                        className='rounded-0 w-100 fw-semibold my-2'
                    >Registration</Button>
                </Form>
            </div>
        </div>
    );
};

export default VolunteerRegistration;