import React from 'react';
import { Card, Col } from 'react-bootstrap';

const EventDetail = ({ event }) => {
    const { title, bannerImg } = event;
    return (
        <Col>
            <Card className='position-relative border-0 shadow-sm'>
                <Card.Img variant="top" src={bannerImg} alt={title} />
                <Card.Body className='bg-primary rounded-bottom position-absolute bottom-0 w-100'>
                    <Card.Title className='text-light'>{title}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default EventDetail;