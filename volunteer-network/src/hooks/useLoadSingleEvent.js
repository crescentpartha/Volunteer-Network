import { useEffect, useState } from "react"

const useLoadSingleEvent = (id) => {
    const [event, setEvent] = useState({});

    useEffect( () => {
        const url = `https://volunteer-network-server-crescentpartha.vercel.app/event/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setEvent(data));
    }, [id]);
    
    return [event, setEvent];
}

export default useLoadSingleEvent;