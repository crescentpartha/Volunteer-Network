import { useEffect, useState } from 'react';

const useDisplayEvents = () => {
    const [events, setEvents] = useState([]);

    useEffect( () => {
        const url = `https://volunteer--network--server.herokuapp.com/event`;
        fetch(url)
        .then(res => res.json())
        .then(data => setEvents(data));
    }, [events]);

    return [events, setEvents];
}

export default useDisplayEvents;