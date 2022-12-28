import { useEffect, useState } from 'react';

const useDisplayActivities = () => {
    const [activities, setActivities] = useState([]);

    useEffect( () => {
        const url = `https://volunteer-network-server-crescentpartha.vercel.app/activity`;
        fetch(url)
        .then(res => res.json())
        .then(data => setActivities(data));
    }, [activities]);

    return [activities, setActivities];
}

export default useDisplayActivities;