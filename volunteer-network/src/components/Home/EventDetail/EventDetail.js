import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const EventDetail = ({ event }) => {
    const { title, bannerImg } = event;
    return (
        <Col>
            <Card className='position-relative border-0 shadow-sm'>
                <Card.Img variant="top" src={bannerImg} alt={title} />
                <Card.Body className='bg-primary rounded-bottom position-absolute bottom-0 w-100'>
                    {/* <Card.Title className='text-light'>{title}</Card.Title> */}
                    <Link className='text-light text-decoration-none' to='/volunteerRegistration'>{title}</Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default EventDetail;