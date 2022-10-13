import React from 'react';
import { Button, Form, InputGroup, Row } from 'react-bootstrap';
import useDisplayEvents from '../../../hooks/useDisplayEvents';
import EventDetail from '../EventDetail/EventDetail';

const Home = () => {
    const [events] = useDisplayEvents();
    return (
        <div>
            <div className='my-4'>
                <h1 className='text-uppercase fw-normal'>I grow by helping people in need</h1>
                <InputGroup className="m-3 w-50 mx-auto">
                    <Form.Control
                        placeholder="Search..."
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="primary" id="button-addon2">
                        Search
                    </Button>
                </InputGroup>
            </div>
            <h2 className='text-warning'>Total events: {events.length}</h2>
            <Row xs={1} md={2} lg={3} xl={4} className="g-4 mx-5 mb-5 mt-2">
                {
                    events.map(event => <EventDetail
                        key={event._id}
                        event={event}
                    ></EventDetail>)
                }
            </Row>
        </div>
    );
};

export default Home;