import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const EventDetail = ({ event }) => {
    const { _id: id, title, bannerImg } = event;
    const navigate = useNavigate();
    const handleNavigateToEventDetail = id => {
        navigate(`/home/${id}`);
    }
    return (
        <Col>
            <Card className='position-relative border-0 shadow-sm'>
                <Card.Img variant="top" src={bannerImg} alt={title} />
                <Card.Body className='bg-primary rounded-bottom position-absolute bottom-0 w-100'>
                    <Card.Title
                        className='text-light btn btn-link text-decoration-none'
                        onClick={() => handleNavigateToEventDetail(id)}
                    >{title}</Card.Title>
                    {/* <Button
                        onClick={() => handleNavigateToEventDetail(id)}
                        className='text-light text-decoration-none btn btn-link'
                    >{title}</Button> */}
                </Card.Body>
            </Card>
        </Col>
    );
};

export default EventDetail;