import React from 'react';
import useDisplayEvents from '../../../hooks/useDisplayEvents';

const Home = () => {
    const [events] = useDisplayEvents();
    return (
        <div>
            <h2 className='text-warning'>Home: {events.length}</h2>
        </div>
    );
};

export default Home;